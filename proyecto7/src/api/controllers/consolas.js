const Consola = require('../models/consolas')

const getConsolas = async (req, res, next) => {
  try {
    const consolas = await Consola.find().populate('videogames')
    return res.status(200).json(consolas)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const getConsolaById = async (req, res, next) => {
  try {
    const { id } = req.params
    const consolas = await Consola.findById(id).populate('videogames')
    return res.status(200).json(consolas)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const postConsola = async (req, res, next) => {
  try {
    const newConsola = new Consola(req.body)
    const consolaSaved = await newConsola.save()
    return res.status(201).json({ mensaje: 'Consola creada', consolaSaved })
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const updateConsola = async (req, res, next) => {
  try {
    const { id } = req.params
    const newConsola = new Consola(req.body)
    newConsola._id = id
    const up = await Consola.findByIdAndUpdate(id, newConsola, {
      new: true
    })
    return res.status(200).json({ mensaje: 'Consola modificada', up })
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const deleteConsola = async (req, res, next) => {
  try {
    const { id } = req.params
    const consolaDeleted = await Consola.findByIdAndDelete(id)
    return res
      .status(200)
      .json({ mensaje: 'Consola eliminada', consolaDeleted })
  } catch (error) {
    return res.status(400).json('Error')
  }
}

module.exports = {
  getConsolas,
  getConsolaById,
  postConsola,
  updateConsola,
  deleteConsola
}
