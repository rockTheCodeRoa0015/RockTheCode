const Videogame = require('../models/videogames')
const { deleteFile } = require('../../utils/deleteFile')

const getVideogames = async (req, res, next) => {
  try {
    const videogame = await Videogame.find()
    return res.status(200).json(videogame)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const getVideogameById = async (req, res, next) => {
  try {
    const { id } = req.params
    const videogame = await Videogame.findById(id)
    return res.status(200).json(videogame)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const postVideogame = async (req, res, next) => {
  try {
    const newVideogame = new Videogame(req.body)
    newVideogame.img = req.file.path
    const videogameSaved = await newVideogame.save()
    return res
      .status(201)
      .json({ mensaje: 'Videojuego creado', videogameSaved })
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const updateVideogame = async (req, res, next) => {
  try {
    const { id } = req.params
    const newVideogame = new Videogame(req.body)
    newVideogame._id = id
    if (req.file) {
      newVideogame.img = req.file.path
      const videogamePreUpdate = await Videogame.findById(id)
      deleteFile(videogamePreUpdate.img)
    }
    const up = await Videogame.findByIdAndUpdate(id, newVideogame, {
      new: true
    })
    return res.status(200).json({ mensaje: 'Videojuego modificado', up })
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const deleteVideogame = async (req, res, next) => {
  try {
    const { id } = req.params
    const videogameDeleted = await Videogame.findByIdAndDelete(id)
    deleteFile(videogameDeleted.img)
    return res
      .status(200)
      .json({ mensaje: 'Videojuego eliminado', videogameDeleted })
  } catch (error) {
    return res.status(400).json('Error')
  }
}

module.exports = {
  getVideogames,
  getVideogameById,
  postVideogame,
  updateVideogame,
  deleteVideogame
}
