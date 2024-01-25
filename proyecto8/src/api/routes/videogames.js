const { isAuth, isAdmin } = require('../../middleware/auth')
const upload = require('../../middleware/file')
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
videogamesRouter.post('/', [isAdmin], upload.single('img'), postVideogame)
videogamesRouter.put('/:id', [isAdmin], upload.single('img'), updateVideogame)
videogamesRouter.delete('/:id', [isAdmin], deleteVideogame)

module.exports = videogamesRouter
