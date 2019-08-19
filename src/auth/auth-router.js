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
                    res.send({ authToken: token })
                    /* return UserService.getUserDataBasic(db,dbUser.id)
                        .then(userData => {
                            res
                                .send({
                                    authToken: token,
                                    userData: userData
                                })
                        }) */
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
    .catch(res => {
        console.error({ error: res.error })
    })
})

authRouter.get('/user', requireAuth, (req, res) => {
    const db = req.app.get('db')
    UserService.getUserDataBasic(db, req.user.id)
        .then(userData => {
            if (!userData) {
                return res.status(400).json({
                    error: 'Could not retrieve user'
                })
            }
            res.send({userData: userData})
        })
        .catch(err => {
            console.error({ error: err.error })
        })
})


module.exports = authRouter