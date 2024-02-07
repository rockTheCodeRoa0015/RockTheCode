const Book = require('../models/book')
const { deleteFile } = require('../../utils/deleteFile')

const getBooks = async (req, res, next) => {
  try {
    const book = await Book.find().populate('categories')
    return res.status(200).json(book)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const getBookByIdAvgRate = async (req, res, next) => {
  try {
    const { id } = req.params
    const book = await Book.findById(id).populate('categories')
    let sum = 0
    for (const rating of book.rating) {
      sum += rating
    }
    sum = sum / book.rating.length
    book.rating = Math.round(sum * 10) / 10
    return res.status(200).json(book)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const getBookById = async (req, res, next) => {
  try {
    const { id } = req.params
    const book = await Book.findById(id).populate('categories')
    return res.status(200).json(book)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const getBookByTitle = async (req, res, next) => {
  try {
    const { title } = req.params
    const book = await Book.find({
      title: { $regex: '.*' + title + '.*' }
    }).populate('categories')
    return res.status(200).json(book)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const postBook = async (req, res, next) => {
  try {
    const newBook = new Book(req.body)
    newBook.cover = req.file.path
    const bookSaved = await newBook.save()
    return res.status(201).json({ mensaje: 'Libro creado', bookSaved })
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json('El Libro ya esta en la bdd')
    }
    return res.status(400).json('error')
  }
}

const updateBook = async (req, res, next) => {
  try {
    const { id } = req.params
    const bookPreUpdate = await Book.findById(id)
    const newBook = new Book(req.body)
    newBook._id = id
    newBook.categories = [...bookPreUpdate.categories, ...newBook.categories]
    newBook.rating = [...bookPreUpdate.rating, ...newBook.rating]
    if (req.file) {
      newBook.cover = req.file.path
      deleteFile(bookPreUpdate.cover)
    }
    const up = await Book.findByIdAndUpdate(id, newBook, {
      new: true
    })
    return res.status(200).json({ mensaje: 'Libro modificado', up })
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params
    const bookDeleted = await Book.findByIdAndDelete(id)
    deleteFile(bookDeleted.cover)
    return res.status(200).json({ mensaje: 'Libro eliminado', bookDeleted })
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const updateRatingBooks = async (req, res, next) => {
  try {
    const { id } = req.params
    const bookPreUpdate = await Book.findById(id)
    const newBook = new Book(req.body)
    newBook._id = id
    newBook.categories = [...bookPreUpdate.categories, ...newBook.categories]
    let indice = bookPreUpdate.rating.indexOf(req.body.rating)
    if (indice !== -1) {
      bookPreUpdate.rating.splice(indice, 1)
      newBook.rating = bookPreUpdate.rating
      const up = await Book.findByIdAndUpdate(id, newBook, { new: true })
      return res.status(200).json({ mensaje: 'Valoración Modificada', up })
    }
    return res.status(200).json({ mensaje: 'Indice no encontrado' })
  } catch (error) {
    return res.status(400).json(error)
  }
}

module.exports = {
  getBooks,
  getBookById,
  getBookByIdAvgRate,
  getBookByTitle,
  postBook,
  updateBook,
  updateRatingBooks,
  deleteBook
}
