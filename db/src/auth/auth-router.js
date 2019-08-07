const express = require('express')
const AuthService = require('./auth-service')
const UserService = require('../users/users-service')
const { requireAuth } = require('../middleware/jwt-auth')

const authRouter = express.Router()
const jsonBodyParser = express.json()

authRouter.post('/login', jsonBodyParser, (req, res, next) => {
    const { username, password } = req.body
    const loginUser = { username, password}
    const db = req.app.get('db')

    for (const [key, value] of Object.entries(loginUser))
        if (value == null)
            return res.status(400).json({
                error: `Missing '${key}' in request body`
            })
    AuthService.getUserWithUserName(db,loginUser.username)
        .then(dbUser => {
            if (!dbUser) {
                return res.status(400).json({
                    error: 'Incorrect username or password'
                })
            }
            return AuthService.comparePasswords(loginUser.password, dbUser.password)
                .then(compareMatch => {
                    if (!compareMatch) {
                        return res.status(400).json({
                            error: 'Incorrect username or password'
                        })
                    }
                    const sub = dbUser.username
                    const payload = { user_id: dbUser.id }
                    const token = AuthService.createJwt(sub, payload)
                    //***** */TJ - why do I need to return this instead of creating a variable
                    return UserService.getUserDataBasic(db,dbUser.id)
                        .then(userData => {
                            res
                                .send({
                                    authToken: token,
                                    userData: userData
                                })
                        })
                })
    })
    .catch(next)
})

authRouter.post('/refresh', requireAuth, (req, res) => {
    const sub = req.user.username
    const payload = { user_id: req.user.id }
    res.send({
        authToken: AuthService.createJwt(sub, payload)
    })
})

module.exports = authRouter