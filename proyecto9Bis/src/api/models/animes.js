const mongoose = require('mongoose')

const animeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    img: { type: String, required: true },
    desc: { type: String, required: false }
  },
  {
    timestamps: true,
    collection: 'animes'
  }
)

const Anime = mongoose.model('animes', animeSchema, 'animes')
module.exports = Anime
