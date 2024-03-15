const { isAdmin } = require('../../middleware/auth')
const {
  getCategories,
  getCategorieById,
  getCategorieByPersonalId,
  postCategorie,
  updateCategorie,
  deleteCategorie
} = require('../controllers/categorie')

const categoriesRoutes = require('express').Router()

categoriesRoutes.get('/personalId/:id', getCategorieByPersonalId)
categoriesRoutes.get('/:id', getCategorieById)
categoriesRoutes.get('/', getCategories)
categoriesRoutes.post('/', [isAdmin], postCategorie)
categoriesRoutes.put('/:id', [isAdmin], updateCategorie)
categoriesRoutes.delete('/:id', [isAdmin], deleteCategorie)

module.exports = categoriesRoutes
