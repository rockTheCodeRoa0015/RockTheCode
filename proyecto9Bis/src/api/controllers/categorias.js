const Categoria = require('../models/categorias')
const categorias = require('../../../animesCategorias.json')

const insertManyCategorias = async (req, res, next) => {
  try {
    //console.log(animes)
    await Categoria.insertMany(categorias.result)
    return res.status(201).json('Todos las categorias subidas a la BBDD')
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}

const getAllCategorias = async (req, res, next) => {
  try {
    const allCategorias = await Categoria.find()
    return res.status(200).json(allCategorias)
  } catch (error) {
    return res.status(400).json(error)
  }
}

module.exports = {
  insertManyCategorias,
  getAllCategorias
}
