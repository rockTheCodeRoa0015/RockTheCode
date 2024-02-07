const { generateSign } = require('../../utils/jwt')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const usersSchema = new mongoose.Schema(
  {
    email: { type: String, trim: true, required: true, unique: true },
    userName: { type: String, trim: true, required: true, unique: true },
    password: { type: String, trim: true, required: true },
    avatar: {
      type: String,
      trim: true,
      required: false,
      default:
        'https://res.cloudinary.com/de2ohcmjr/image/upload/v1706614514/proyecto10/User-avatar.svg_jck0b7.png'
    },
    rol: {
      type: String,
      required: false,
      default: 'user',
      enum: ['admin', 'user']
    },
    isBanned: { type: Boolean, required: false, default: false },
    favouritesBooks: [
      { type: mongoose.Types.ObjectId, required: false, ref: 'books' }
    ]
  },
  {
    timestamps: true,
    collection: 'users'
  }
)

usersSchema.pre('save', function () {
  this.password = bcrypt.hashSync(this.password, 10)
})

usersSchema.pre('findOneAndUpdate', function (next) {
  if (this._update.password !== undefined) {
    this._update.password = bcrypt.hashSync(this._update.password, 10)
    next()
  }
  next()
})

const User = mongoose.model('users', usersSchema, 'users')
module.exports = User
