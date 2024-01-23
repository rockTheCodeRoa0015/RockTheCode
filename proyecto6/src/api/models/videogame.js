const mongoose = require('mongoose')

const videogameSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    console: { type: String, requierd: true },
    price: { type: Number, required: true },
    genre: { type: String, required: true },
    pegi: { type: String, required: true }
  },
  {
    timestamps: true,
    collection: 'videogames'
  }
)

const Videogame = mongoose.model('videogames', videogameSchema, 'videogames')
module.exports = Videogame
