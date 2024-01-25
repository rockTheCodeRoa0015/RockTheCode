const mongoose = require('mongoose')

const consolaSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    videogames: [
      { type: mongoose.Types.ObjectId, ref: 'videogames', required: false }
    ]
  },
  {
    timestamps: true,
    collection: 'consolas'
  }
)

const Consola = mongoose.model('consolas', consolaSchema, 'consolas')
module.exports = Consola
