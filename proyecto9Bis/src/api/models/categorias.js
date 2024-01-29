const mongoose = require('mongoose')

const categoriaSchema = new mongoose.Schema(
  {
    categoria: { type: String, required: true },
    animes: [{ type: mongoose.Types.ObjectId, ref: 'animes', required: false }]
  },
  {
    timestamps: true,
    collection: 'categorias'
  }
)

const Categoria = mongoose.model('categorias', categoriaSchema, 'categorias')
module.exports = Categoria
