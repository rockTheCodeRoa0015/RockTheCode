const { isAuth, isAdmin } = require('../../middleware/auth')
const upload = require('../../middleware/file')
const {
  getBooks,
  getBookById,
  getBookByIdAvgRate,
  getBookByTitle,
  postBook,
  updateBook,
  updateRatingBooks,
  deleteBook
} = require('../controllers/book')

const booksRoutes = require('express').Router()

booksRoutes.get('/getByTitle/:title', getBookByTitle)
booksRoutes.get('/getAvgRate/:id', getBookByIdAvgRate)
booksRoutes.get('/:id', getBookById)
booksRoutes.get('/', getBooks)
booksRoutes.post('/', [isAuth], upload.single('cover'), postBook)
booksRoutes.put('/:id', [isAuth], upload.single('cover'), updateBook)
booksRoutes.put('/delRating/:id', [isAuth], updateRatingBooks)
booksRoutes.delete('/:id', [isAdmin], deleteBook)

module.exports = booksRoutes
