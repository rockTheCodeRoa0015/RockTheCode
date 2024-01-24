const { isAuth, isAdmin } = require('../../middleware/auth')
const {
  getVideogames,
  getVideogameById,
  postVideogame,
  updateVideogame,
  deleteVideogame
} = require('../controllers/videogames')

const videogamesRouter = require('express').Router()

videogamesRouter.get('/:id', [isAuth], getVideogameById)
videogamesRouter.get('/', [isAuth], getVideogames)
videogamesRouter.post('/', [isAdmin], postVideogame)
videogamesRouter.put('/:id', [isAdmin], updateVideogame)
videogamesRouter.delete('/:id', [isAdmin], deleteVideogame)

module.exports = videogamesRouter
