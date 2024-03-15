const Sale = require('../models/sale')

const getSales = async (req, res, next) => {
  try {
    const sale = await Sale.find()
    return res.status(200).json(sale)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const getSalesById = async (req, res, next) => {
  try {
    const { id } = req.params
    const sale = await Sale.findById(id)
    return res.status(200).json(sale)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const getSalesByUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const sale = await Sale.find({ user: id })
    return res.status(200).json(sale)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const getNextSales = async (req, res, next) => {
  try {
    const sale = await Sale.findOne().sort({ id: -1 })
    const nextSales = { next: parseInt(sale.id) + 1 }
    return res.status(200).json(nextSales)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const postSale = async (req, res, next) => {
  try {
    const newSale = new Sale(req.body)
    const saleSaved = await newSale.save()
    return res.status(201).json({ mensaje: 'Venta realizada', saleSaved })
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const updateSale = async (req, res, next) => {
  try {
    const { id } = req.params
    const newSale = new Sale(req.body)
    newSale._id = id
    const up = await Sale.findByIdAndUpdate(id, newSale, {
      new: true
    })
    return res.status(200).json({ mensaje: 'Venta modificada', up })
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const deleteSale = async (req, res, next) => {
  try {
    const { id } = req.params
    const saleDeleted = await Sale.findByIdAndDelete(id)
    return res.status(200).json({ mensaje: 'Venta eliminada', saleDeleted })
  } catch (error) {
    return res.status(400).json('Error')
  }
}

module.exports = {
  getSales,
  getSalesById,
  getSalesByUser,
  getNextSales,
  postSale,
  updateSale,
  deleteSale
}
