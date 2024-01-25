const { generateSign } = require('../../utils/jwt')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const usersSchema = new mongoose.Schema(
  {
    email: { type: String, trim: true, required: true, unique: true },
    nombreUsuario: { type: String, trim: true, required: true, unique: true },
    password: { type: String, trim: true, required: true },
    anoNacimiento: { type: Number, trim: true, required: true },
    rol: { type: String, trim: true, required: true },
    imagenPerfil: { type: String, trim: true, required: true }
  },
  {
    timestamps: true,
    collection: 'users'
  }
)

usersSchema.pre('save', function () {
  this.password = bcrypt.hashSync(this.password, 10)
})

const User = mongoose.model('users', usersSchema, 'users')
module.exports = User
