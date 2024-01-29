const {
  insertManyCategorias,
  getAllCategorias
} = require('../controllers/categorias')

const categoriaRouter = require('express').Router()

categoriaRouter.post('/insertaCategoria', insertManyCategorias)
categoriaRouter.get('/', getAllCategorias)

module.exports = categoriaRouter
