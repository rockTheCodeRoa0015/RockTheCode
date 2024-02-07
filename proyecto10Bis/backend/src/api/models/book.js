const mongoose = require('mongoose')

const booksSchema = new mongoose.Schema(
  {
    title: { type: String, trim: true, required: true, unique: true },
    author: { type: String, trim: true, required: true },
    cover: { type: String, required: false },
    synopsis: { type: String, required: false },
    price: { type: Number, required: false },
    categories: [
      { type: mongoose.Types.ObjectId, required: false, ref: 'categories' }
    ],
    rating: [{ type: Number, require: false }]
  },
  {
    timestamps: true,
    collection: 'books'
  }
)

const Book = mongoose.model('books', booksSchema, 'books')
module.exports = Book
