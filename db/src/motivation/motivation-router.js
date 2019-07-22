const express = require('express')
const { NumerologyService, MotivationService } = require('./motivation-service')
const { requireAuth } = require('../middleware/jwt-auth')

const motivationRouter = express.Router()

motivationRouter
  .route('/')
  .get((req, res, next) => {
    MotivationService.getAllMotivation(req.app.get('db'))
      .then(motivation => {
        res.json(MotivationService.serializeMotivation(motivation))
      })
      .catch(next)
  })

motivationRouter
  .route('/:motivation_id')
  .all(requireAuth)
  .all(checkMotivationExists)
  .get((req, res) => {
    res.json(MotivationService.serializeMotivation(res.motivation))
  })

/* async/await syntax for promises */
async function checkMotivationExists(req, res, next) {
  try {
    const motivation = await MotivationService.getById(
      req.app.get('db'),
      req.params.motivation_id
    )

    if (!motivation)
      return res.status(404).json({
        error: `Motivation number doesn't exist`
      })

    res.motivation = motivation
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = motivationRouter
