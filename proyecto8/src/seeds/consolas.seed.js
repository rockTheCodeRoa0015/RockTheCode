require('dotenv').config()
const mongoose = require('mongoose')
const { connectDB } = require('../config/db')

const Consola = require('../api/models/consolas')
const consolas = [
  {
    name: 'Play Station 5',
    img: ''
  },
  {
    name: 'Nintendo Switch',
    img: ''
  },
  {
    name: 'Xbox Series X',
    img: ''
  }
]

const consolasDocuments = consolas.map((consola) => new Consola(consola))

connectDB()
  .then(async () => {
    const allConsolas = await Consola.find()
    if (allConsolas.length) {
      await Consola.collection.drop()
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    await Consola.insertMany(consolasDocuments)
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect())
