const Anime = require('../models/animes')
const animes = require('../../../animes.json')

const insertManyAnimes = async (req, res, next) => {
  try {
    //console.log(animes)
    await Anime.insertMany(animes.result)
    return res.status(201).json('Todos los animes subidos a la BBDD')
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}

const getAllAnimes = async (req, res, next) => {
  try {
    const allAnimes = await Anime.find()
    return res.status(200).json(allAnimes)
  } catch (error) {
    return res.status(400).json(error)
  }
}

module.exports = {
  insertManyAnimes,
  getAllAnimes
}
