const { generateSign } = require('../../utils/jwt')
const { deleteFile } = require('../../utils/deleteFile')
const User = require('../models/users')
const bcrypt = require('bcrypt')

const register = async (req, res, next) => {
  try {
    const newUser = new User(req.body)
    const usernameDuplicated = await User.findOne({
      nombreUsuario: req.body.nombreUsuario
    })

    const emailDuplicated = await User.findOne({
      email: req.body.email
    })

    if (usernameDuplicated || emailDuplicated) {
      return res.status(400).json('Ese nombre de usuario o email ya existe')
    }
    newUser.imagenPerfil = req.file.path
    const userSaved = await newUser.save()

    return res.status(201).json(userSaved)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const login = async (req, res, next) => {
  try {
    let user = ''
    if (req.body.nombreUsuario !== '' && req.body.nombreUsuario !== undefined) {
      user = await User.findOne({ nombreUsuario: req.body.nombreUsuario })
    } else if (req.body.email !== '' && req.body.email !== undefined) {
      user = await User.findOne({ email: req.body.email })
    }
    if (!user) {
      return res.status(400).json('El usuario o la contraseña son incorrectos')
    }
    if (bcrypt.compareSync(req.body.password, user.password)) {
      //! lo que pasa cuando te logueas con jsonwebtoken
      const token = generateSign(user._id)
      return res.status(200).json({ user, token })
    } else {
      return res.status(400).json('El usuario o la contraseña son incorrectos')
    }
  } catch (error) {
    return res.status(400).json(error)
  }
}

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find()
    return res.status(200).json(users)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    return res.status(200).json(user)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const updateUsers = async (req, res, next) => {
  try {
    const { id } = req.params
    const newUser = new User(req.body)
    newUser._id = id
    if (req.file) {
      newUser.imagenPerfil = req.file.path
      const userPreUpdate = await User.findById(id)
      deleteFile(userPreUpdate.imagenPerfil)
    }

    const updateUser = await User.findByIdAndUpdate(id, newUser, {
      new: true
    })
    return res
      .status(200)
      .json({ mensaje: 'Este usuario ha sido Modificado', updateUser })
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const userDeleted = await User.findByIdAndDelete(id)
    deleteFile(userDeleted.imagenPerfil)
    return res.status(200).json({
      mensaje: 'Este usuario ha sido eliminado',
      userDeleted
    })
  } catch (error) {
    return res.status(400).json(error)
  }
}

module.exports = {
  register,
  login,
  getUsers,
  getUserById,
  updateUsers,
  deleteUser
}
