const express = require('express')
const path = require('path')
const UserService = require('./users-service')
const AuthService = require('../auth/auth-service')
const { processUser } = require('./users-helpers')

const usersRouter = express.Router()
const jsonBodyParser = express.json()

usersRouter
    .post('/', jsonBodyParser, (req, res, next) => {

        const { password, username, first_name, middle_name, last_name, dob } = req.body
        const db = req.app.get('db')

        for (const field of ['first_name', 'last_name', 'username', 'password', 'dob']) {
            if (!req.body[field])
                return res.status(400).json({
                    error: `Missing '${field}' in request body`
                })
        }
    
        const passwordError = UserService.validatePassword(password)

        if (passwordError) {
            return res.status(400).json({ error: passwordError })
        }

        UserService.hasUserWithUserName(db,username)
            .then(hasUserWithUserName => {
                if (hasUserWithUserName) {
                    return res.status(400).json({ error: `Username already taken`})
                }

                UserService.hashPassword(password)
                    .then(hashedPassword => {
                        const newUser = {
                            username,
                            password: hashedPassword,
                            first_name,
                            middle_name,
                            last_name,
                            dob,
                            date_created: 'now()',
                        }

                        const fullName = `${first_name} ${middle_name} ${last_name}`;
                        const userData = processUser(fullName, newUser.dob);

                        UserService.insertUser(db,newUser,userData)
                            .then(user => {
                                const sub = username
                                const payload = { user_id: user.id }
                                const token = AuthService.createJwt(sub, payload)

                                return UserService.getUserDataBasic(db,user.id)
                                    .then(userData => {
                                        res
                                            .send({
                                                authToken: token,
                                                userData: userData
                                            })
                                            .status(201)
                                })
                        })
                })
            })
            .catch(next)
    })
  

module.exports = usersRouter