require('dotenv').config()
const mongoose = require('mongoose')
const { connectDB } = require('../config/db')

const Consola = require('../api/models/consolas')
const consolas = [
  {
    name: 'Play Station 5',
    img: 'https://img.pccomponentes.com/articles/1080/10801089/1818-sony-playstation-5-especificaciones.jpg'
  },
  {
    name: 'Nintendo Switch',
    img: 'https://img.pccomponentes.com/articles/43/432881/1945-nintendo-switch-oled-blanca.jpg'
  },
  {
    name: 'Xbox Series X',
    img: 'https://img.pccomponentes.com/articles/32/323078/1684-microsoft-xbox-series-x-1tb.jpg'
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
