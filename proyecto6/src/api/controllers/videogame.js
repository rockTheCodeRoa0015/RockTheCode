const Videogames = require('../models/videogame')

const getVideogames = async (req, res, next) => {
  try {
    const allVideogames = await Videogames.find()
    return res.status(200).json(allVideogames)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const getVideogameById = async (req, res, next) => {
  try {
    const { id } = req.params
    const movie = await Videogames.findById(id)
    return res.status(200).json(movie)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const postVideogame = async (req, res, next) => {
  try {
    const newVideogame = new Videogames(req.body)
    const videogameSaved = await newVideogame.save()
    return res.status(201).json(videogameSaved)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const updateVideogame = async (req, res, next) => {
  try {
    const { id } = req.params
    const newVideogame = new Videogames(req.body)
    newVideogame._id = id
    const up = await Videogames.findByIdAndUpdate(id, newVideogame, {
      new: true
    })
    return res.status(200).json(up)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const deleteVideogame = async (req, res, next) => {
  try {
    const { id } = req.params
    const videogameDeleted = await Videogames.findByIdAndDelete(id)
    return res.status(200).json(videogameDeleted)
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
