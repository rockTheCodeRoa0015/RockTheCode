const mongoose = require('mongoose')

const categoriesSchema = new mongoose.Schema(
  {
    categorie: {
      type: String,
      required: true,
      enum: [
        'Aventuras',
        'Bélica',
        'Bizantina',
        'Caballeresca',
        'Libros de caballerías',
        'Ciencia ficción',
        'Cortesana',
        'Costumbrista',
        'Espías y suspense',
        'Fantástica',
        'Ficción criminal',
        'Gótica',
        'Histórica',
        'Misterio',
        'Morisca',
        'Negra',
        'Pastoril',
        'Picaresca',
        'Policíaca',
        'Rosa',
        'Sentimental',
        'Social',
        'Terror',
        'Westerns'
      ]
    },
    books: [{ type: mongoose.Types.ObjectId, required: false, ref: 'books' }]
  },
  {
    timestamps: true,
    collection: 'categories'
  }
)

const Categorie = mongoose.model('categories', categoriesSchema, 'categories')
module.exports = Categorie
