const mongoose = require('mongoose')

const opinionsSchema = new mongoose.Schema(
  {
    opinion: { type: String, required: true },
    books: [{ type: mongoose.Types.ObjectId, required: true, ref: 'books' }],
    users: [{ type: mongoose.Types.ObjectId, required: true, ref: 'users' }],
    rating: { type: Number, require: true }
  },
  {
    timestamps: true,
    collection: 'opinions'
  }
)

const Opinion = mongoose.model('opinions', opinionsSchema, 'opinions')
module.exports = Opinion
