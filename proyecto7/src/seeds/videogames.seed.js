require('dotenv').config()
const mongoose = require('mongoose')
const { connectDB } = require('../config/db')

const VideoGame = require('../api/models/videogames')
const videogames = [
  {
    title: 'Batman Arkham Trilogy',
    img: 'https://img.pccomponentes.com/articles/1074/10745957/1880-batman-arkham-trilogy-nintendo-switch-mejor-precio.jpg',
    price: 49.99,
    genre: 'Acción',
    pegi: '18'
  },
  {
    title: 'Hogwarts Legacy',
    img: 'https://img.pccomponentes.com/articles/1065/10651674/1130-hogwarts-legacy-standard-xbox-series-x.jpg',
    price: 49.99,
    genre: 'aventuras',
    pegi: '12'
  },
  {
    title: 'Xenoblade Chronicles 3',
    img: 'https://img.pccomponentes.com/articles/1006/10067915/1135-xenoblade-chronicles-3-nintendo-switch-review.jpg',
    price: 49.99,
    genre: 'JRPG',
    pegi: '12'
  },
  {
    title: 'Pokémon Escarlata',
    img: 'https://img.pccomponentes.com/articles/1040/10408786/1382-pokemon-escarlata-nintendo-switch.jpg',
    price: 49.99,
    genre: 'JRPG',
    pegi: '7'
  },
  {
    title: 'Tekken 8 Ultimate Edition',
    img: 'https://img.pccomponentes.com/articles/1076/10768722/1857-tekken-8-launch-edition-ps5.jpg',
    price: 109.99,
    genre: 'Lucha',
    pegi: '16'
  },
  {
    title: 'Final Fantasy Vii Rebirth',
    img: 'https://img.pccomponentes.com/articles/1078/10786233/1336-final-fantasy-vii-rebirth-ps5.jpg',
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
