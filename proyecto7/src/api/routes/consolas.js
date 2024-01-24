const { isAuth, isAdmin } = require('../../middleware/auth')
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
consolasRouter.post('/', [isAdmin], postConsola)
consolasRouter.put('/:id', [isAdmin], updateConsola)
consolasRouter.delete('/:id', [isAdmin], deleteConsola)

module.exports = consolasRouter
