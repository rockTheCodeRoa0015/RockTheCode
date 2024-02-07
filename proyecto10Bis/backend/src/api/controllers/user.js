const { generateSign } = require('../../utils/jwt')
const { deleteFile } = require('../../utils/deleteFile')
const User = require('../models/user')
const bcrypt = require('bcrypt')

const register = async (req, res, next) => {
  try {
    const newUser = new User(req.body)
    const usernameDuplicated = await User.findOne({
      userName: req.body.userName
    })

    const emailDuplicated = await User.findOne({
      email: req.body.email
    })

    if (usernameDuplicated || emailDuplicated) {
      return res.status(400).json('Ese nombre de usuario o email ya existe')
    }
    if (req.file) {
      newUser.avatar = req.file.path
    }
    //newUser.avatar = req.file.path
    //const userSaved = await newUser.save()
    await newUser.save()
    const response = {
      status: 201,
      desc: 'Usuario Registrado'
    }
    //return res.status(201).json(userSaved)
    return res.status(201).json(response)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const login = async (req, res, next) => {
  try {
    let user = ''
    if (req.body.userName !== '' && req.body.userName !== undefined) {
      user = await User.findOne({ userName: req.body.userName })
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
    const users = await User.find().populate('favouritesBooks')
    return res.status(200).json(users)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params
    const user = await User.findById(id).populate('favouritesBooks')
    return res.status(200).json(user)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const getUserByUsernameAndMail = async (req, res, next) => {
  try {
    const user = await User.find({
      userName: req.body.userName,
      email: req.body.email
    }).populate('favouritesBooks')
    const response = {
      user: user
    }
    user.length === 0 ? (response.status = 400) : (response.status = 200)

    return res.status(200).json(response)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const updateUsers = async (req, res, next) => {
  try {
    const { id } = req.params
    const userPreUpdate = await User.findById(id)
    const newUser = new User(req.body)
    newUser._id = id
    newUser.favouritesBooks = [
      ...userPreUpdate.favouritesBooks,
      ...newUser.favouritesBooks
    ]
    if (req.file) {
      newUser.avatar = req.file.path
      //const userPreUpdate = await User.findById(id)
      deleteFile(userPreUpdate.avatar)
    } else {
      newUser.avatar = userPreUpdate.avatar
    }
    if (!req.body.rol) {
      newUser.rol = userPreUpdate.rol
    }
    if (req.body.isBanned === undefined) {
      newUser.isBanned = userPreUpdate.isBanned
    }
    const updateUser = await User.findByIdAndUpdate(id, newUser, { new: true })
    return res
      .status(200)
      .json({ mensaje: 'Este usuario ha sido Modificado', updateUser })
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const updateUsersPass = async (req, res, next) => {
  try {
    const { id } = req.params
    const userPreUpdate = await User.findById(id)
    const newUser = new User(req.body)
    newUser._id = id
    newUser.favouritesBooks = [
      ...userPreUpdate.favouritesBooks,
      ...newUser.favouritesBooks
    ]
    if (req.file) {
      newUser.avatar = req.file.path
      //const userPreUpdate = await User.findById(id)
      deleteFile(userPreUpdate.avatar)
    } else {
      newUser.avatar = userPreUpdate.avatar
    }
    if (!req.body.rol) {
      newUser.rol = userPreUpdate.rol
    }
    if (!req.body.isBanned) {
      newUser.isBanned = userPreUpdate.isBanned
    }

    const updateUser = await User.findByIdAndUpdate(id, newUser, { new: true })
    return res.status(200).json({ status: 200, updateUser })
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const userDeleted = await User.findByIdAndDelete(id)
    deleteFile(userDeleted.avatar)
    return res.status(200).json({
      mensaje: 'Este usuario ha sido eliminado',
      userDeleted
    })
  } catch (error) {
    return res.status(400).json(error)
  }
}

const updateUsersFavouriteBook = async (req, res, next) => {
  try {
    const { id } = req.params
    const userPreUpdate = await User.findById(id)
    const newUser = new User(req.body)
    newUser._id = id
    if (req.file) {
      newUser.avatar = req.file.path
      //const userPreUpdate = await User.findById(id)
      deleteFile(userPreUpdate.avatar)
    } else {
      newUser.avatar = userPreUpdate.avatar
    }
    if (!req.body.rol) {
      newUser.rol = userPreUpdate.rol
    }
    if (!req.body.isBanned) {
      newUser.isBanned = userPreUpdate.isBanned
    }

    let indice = userPreUpdate.favouritesBooks.indexOf(req.body.favouritesBooks)
    if (indice !== -1) {
      userPreUpdate.favouritesBooks.splice(indice, 1)
      newUser.favouritesBooks = userPreUpdate.favouritesBooks
      const up = await User.findByIdAndUpdate(id, newUser, { new: true })
      return res.status(200).json({ mensaje: 'Valoración Modificada', up })
    }
    return res.status(200).json({ mensaje: 'Indice no encontrado' })
  } catch (error) {
    return res.status(400).json('Error')
  }
}

module.exports = {
  register,
  login,
  getUsers,
  getUserById,
  getUserByUsernameAndMail,
  updateUsers,
  updateUsersPass,
  deleteUser,
  updateUsersFavouriteBook
}
