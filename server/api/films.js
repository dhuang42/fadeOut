const router = require('express').Router()
const {Film} = require('../db/models')

// GET /api/films
router.get('/', async (req, res, next) => {
  try {
    const films = await Film.findAll()
    res.json(films)
  } catch (err) {
    next(err)
  }
})

// GET /api/films/:filmId
router.get('/:filmId', async (req, res, next) => {
  try {
    const film = await Film.findByPk(req.params.filmId)
    res.json(film)
  } catch (err) {
    next(err)
  }
})

module.exports = router
