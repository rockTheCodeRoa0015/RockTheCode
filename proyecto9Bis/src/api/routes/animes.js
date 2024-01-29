const { insertManyAnimes, getAllAnimes } = require('../controllers/animes')

const animeRouter = require('express').Router()

animeRouter.post('/insertaAnimes', insertManyAnimes)
animeRouter.get('/', getAllAnimes)

module.exports = animeRouter
