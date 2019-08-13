require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const userRouter = require('./users/users-router')
const authRouter = require('./auth/auth-router')
const numDataRouter = require('./numData/numData-router')

const app = express()

app.use(morgan((NODE_ENV === 'production') ? 'tiny' : 'common', {
    skip: () => NODE_ENV === 'test',
}))
app.use(cors())
app.use(helmet())


/* // Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static("../../client/build"));
  } */

app.use('/api/users', userRouter)
app.use('/api/auth', authRouter)
app.use('/api/numData', numDataRouter)

app.use(function errorHandler(error, req, res, next) {
    let response
    if (NODE_ENV === 'production') {
        response = { error: error.message, object: error }
    } else {
        response = { error: error.message, object: error }
    }
    res.status(500).json(response)
})

module.exports = app