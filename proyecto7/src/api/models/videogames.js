const mongoose = require('mongoose')

const videogameSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: true },
    genre: {
      type: String,
      required: true,
      enum: [
        'puzzles',
        'aventuras',
        'miedo',
        'coches',
        'desportes',
        'plataformas',
        'RPG',
        'JRPG',
        'Lucha',
        'Acción'
      ]
    },
    pegi: { type: String, required: true }
  },
  {
    timestamps: true,
    collection: 'videogames'
  }
)

const Videogame = mongoose.model('videogames', videogameSchema, 'videogames')
module.exports = Videogame
