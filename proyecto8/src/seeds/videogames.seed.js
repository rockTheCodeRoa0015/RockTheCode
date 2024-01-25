require('dotenv').config()
const mongoose = require('mongoose')
const { connectDB } = require('../config/db')

const VideoGame = require('../api/models/videogames')
const videogames = [
  {
    title: 'Batman Arkham Trilogy',
    img: '',
    price: 49.99,
    genre: 'Acción',
    pegi: '18'
  },
  {
    title: 'Hogwarts Legacy',
    img: '',
    price: 49.99,
    genre: 'aventuras',
    pegi: '12'
  },
  {
    title: 'Xenoblade Chronicles 3',
    img: '',
    price: 49.99,
    genre: 'JRPG',
    pegi: '12'
  },
  {
    title: 'Pokémon Escarlata',
    img: '',
    price: 49.99,
    genre: 'JRPG',
    pegi: '7'
  },
  {
    title: 'Tekken 8 Ultimate Edition',
    img: '',
    price: 109.99,
    genre: 'Lucha',
    pegi: '16'
  },
  {
    title: 'Final Fantasy Vii Rebirth',
    img: '',
    price: 79.99,
    genre: 'JRPG',
    pegi: '16'
  }
]

const videogamesDocuments = videogames.map(
  (videogame) => new VideoGame(videogame)
)

connectDB()
  .then(async () => {
    const allVideogames = await VideoGame.find()
    if (allVideogames.length) {
      await VideoGame.collection.drop()
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    await VideoGame.insertMany(videogamesDocuments)
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect())
