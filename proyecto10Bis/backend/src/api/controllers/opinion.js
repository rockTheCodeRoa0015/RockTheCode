const Opinion = require('../models/opinion')

const getOpinions = async (req, res, next) => {
  try {
    const opinion = await Opinion.find().populate('books').populate('users')
    return res.status(200).json(opinion)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const getOpinionById = async (req, res, next) => {
  try {
    const { id } = req.params
    const opinion = await Opinion.findById(id)
      .populate('books')
      .populate('users')
    return res.status(200).json(opinion)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const getOpinionByBook = async (req, res, next) => {
  try {
    const { id } = req.params
    const opinion = await Opinion.find({ books: id })
      .populate('books')
      .populate('users')
    return res.status(200).json(opinion)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const getOpinionByUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const opinion = await Opinion.find({ users: id })
      .populate('books')
      .populate('users')
    return res.status(200).json(opinion)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const postOpinion = async (req, res, next) => {
  try {
    const newOpinion = new Opinion(req.body)
    const opinionSaved = await newOpinion.save()
    return res.status(201).json({ mensaje: 'Opinion posteada', opinionSaved })
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const updateOpinion = async (req, res, next) => {
  try {
    const { id } = req.params
    const oldOpinion = await Opinion.findById(id)
    const newOpinion = new Opinion(req.body)
    newOpinion._id = id
    newOpinion.books = [...oldOpinion.books, ...newOpinion.books]
    newOpinion.users = [...oldOpinion.users, ...newOpinion.users]
    const up = await Opinion.findByIdAndUpdate(id, newOpinion, {
      new: true
    })
    return res.status(200).json({ mensaje: 'Opinion modificada', up })
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const deleteOpinion = async (req, res, next) => {
  try {
    const { id } = req.params
    const opinionDeleted = await Opinion.findByIdAndDelete(id)
    return res
      .status(200)
      .json({ mensaje: 'Opinion eliminada', opinionDeleted })
  } catch (error) {
    return res.status(400).json('Error')
  }
}

/*const updateRatingOpinion = async (req, res, next) => {
  try {
    const { id } = req.params
    const opinionPreUpdate = await Opinion.findById(id)
    const newOpinion = new Opinion(req.body)
    newOpinion._id = id
    newOpinion.books = [...opinionPreUpdate.books, ...newOpinion.books]
    newOpinion.users = [...opinionPreUpdate.users, ...newOpinion.users]
    const up = await Opinion.findByIdAndUpdate(id, newOpinion, { new: true })
    return res.status(200).json({ mensaje: 'Valoración Modificada', up })
  } catch (error) {
    return res.status(400).json(error)
  }
}*/

module.exports = {
  getOpinions,
  getOpinionById,
  getOpinionByBook,
  getOpinionByUser,
  postOpinion,
  updateOpinion,
  deleteOpinion /*,
  updateRatingOpinion*/
}
