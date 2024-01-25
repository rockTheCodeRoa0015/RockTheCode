const { isAuth, isAdmin } = require('../../middleware/auth')
const upload = require('../../middleware/file')
const {
  getConsolas,
  getConsolaById,
  postConsola,
  updateConsola,
  deleteConsola
} = require('../controllers/consolas')

const consolasRouter = require('express').Router()

consolasRouter.get('/:id', [isAuth], getConsolaById)
consolasRouter.get('/', [isAuth], getConsolas)
consolasRouter.post('/', [isAdmin], upload.single('img'), postConsola)
consolasRouter.put('/:id', [isAdmin], upload.single('img'), updateConsola)
consolasRouter.delete('/:id', [isAdmin], deleteConsola)

module.exports = consolasRouter
