const express = require('express')
const path = require('path')
const UserService = require('./users-service')

const usersRouter = express.Router()
const jsonBodyParser = express.json()

usersRouter
  .post('/', jsonBodyParser, (req, res, next) => {

    const { password, username, first_name, middle_name, last_name, dob } = req.body

    for (const field of ['first_name', 'middle_name', 'last_name', 'username', 'password', 'dob'])
        if (!req.body[field])
            return res.status(400).json({
                error: `Missing '${field}' in request body`
            })
    
    const passwordError = UserService.validatePassword(password)

    if (passwordError)
        return res.status(400).json({ error: passwordError })

    UserService.hasUserWithUserName(
        req.app.get('db'),
        username
    )
        .then(hasUserWithUserName => {
            if (hasUserWithUserName) {
                console.log("HAS USER NAME")
                return res.status(400).json({ error: `Username already taken`})
            }

            return UserService.hashPassword(password)
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

                    UserService.processUser(newUser)
                        .then(user => {
                            newUser = {
                                ...newUser,
                                user
                            }
                        })
                        console.log(newUser, 'new user')

                            return UserService.insertUser(
                                req.app.get('db'),
                                newUser
                            )
                                .then(user => {
                                    res
                                        .status(201)
                                        .location(path.posix.join(req.originalUrl, `/${user.id}`))
                                        .json(UserService.serializeUser(user))
                                })
                                .then()
                })
        })
        .catch(next)
  })
  

module.exports = usersRouter