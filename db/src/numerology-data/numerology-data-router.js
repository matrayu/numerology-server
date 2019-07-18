const express = require('express')
const NumerologyDataService = require('./numerology-data-service')
//const { requireAuth } = require('../middleware/jwt-auth')

const numerologyDataRouter = express.Router()

numerologyDataRouter
  .route('/')
  .get((req, res, next) => {
    NumerologyDataService.getAllNumerologyData(req.app.get('db'))
      .then(numerologyData => {
        res.json(NumerologyDataService.serializeAllData(numerologyData))
      })
      .catch(next)
  })

module.exports = numerologyDataRouter
