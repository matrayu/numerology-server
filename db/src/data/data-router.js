const express = require('express')
const DataService = require('./data-service')
//const { requireAuth } = require('../middleware/jwt-auth')

const dataRouter = express.Router()

dataRouter
  .route('/')
  .get((req, res, next) => {
    DataService.getAllData(req.app.get('db'))
      .then(data => {
        res.json(DataService.serializeAllData(data))
      })
      .catch(next)
  })

dataRouter
  .route('/:motivation_id')
  .all(requireAuth)
  .get((req, res) => {
    
  })

module.exports = dataRouter
