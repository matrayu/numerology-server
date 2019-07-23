const express = require('express')
const path = require('path')
const UserService = require('./users-service')
const { processUser } = require('./users-helpers')

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

                    const fullName = `${newUser.first_name} ${newUser.middle_name} ${newUser.last_name}`;
                    const userData = processUser(fullName, newUser.dob);

                    console.log(userDat)

                    UserService.insertUser(
                        req.app.get('db'),
                        newUser
                    )
                        .then(user => {
                            UserService.insertMotivation(user, userData

                            )
                        })
                        /* .then(res => {
                            const fullName = `${newUser.first_name} ${newUser.middle_name} ${newUser.last_name}`
                            const dob = newUser.dob
                            console.log(processUser(fullName, dob))

                        }) */
                        .then(user => {
                            res
                                .status(201)
                                .location(path.posix.join(req.originalUrl, `/${user.id}`))
                                .json(UserService.serializeUser(user))
                        })
                        
                })
        })
        .catch(next)
  })
  

module.exports = usersRouter