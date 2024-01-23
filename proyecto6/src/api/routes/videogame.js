const {
  getVideogames,
  getVideogameById,
  postVideogame,
  updateVideogame,
  deleteVideogame
} = require('../controllers/videogame')

const videogamesRoutes = require('express').Router()

videogamesRoutes.get('/:id', getVideogameById)
videogamesRoutes.get('/', getVideogames)
videogamesRoutes.post('/', postVideogame)
videogamesRoutes.put('/:id', updateVideogame)
videogamesRoutes.delete('/:id', deleteVideogame)

module.exports = videogamesRoutes
