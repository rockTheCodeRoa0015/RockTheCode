const { isAuth, isAdmin } = require('../../middleware/auth')
const {
  getCategories,
  getCategorieById,
  postCategorie,
  updateCategorie,
  deleteCategorie
} = require('../controllers/categorie')

const categoriesRoutes = require('express').Router()

categoriesRoutes.get('/:id', getCategorieById)
categoriesRoutes.get('/', getCategories)
categoriesRoutes.post('/', [isAdmin], postCategorie)
categoriesRoutes.put('/:id', [isAuth], updateCategorie)
categoriesRoutes.delete('/:id', [isAdmin], deleteCategorie)

module.exports = categoriesRoutes
