require('dotenv').config()
const mongoose = require('mongoose')
const { connectDB } = require('../config/db')

const Categorie = require('../api/models/categorie')
const categories = [
  {
    categorie: 'Aventuras'
  },
  {
    categorie: 'Bélica'
  },
  {
    categorie: 'Bizantina'
  },
  {
    categorie: 'Caballeresca'
  },
  {
    categorie: 'Libros de caballerías'
  },
  {
    categorie: 'Ciencia ficción'
  },
  {
    categorie: 'Cortesana'
  },
  {
    categorie: 'Costumbrista'
  },
  {
    categorie: 'Espías y suspense'
  },
  {
    categorie: 'Fantástica'
  },
  {
    categorie: 'Ficción criminal'
  },
  {
    categorie: 'Gótica'
  },
  {
    categorie: 'Histórica'
  },
  {
    categorie: 'Misterio'
  },
  {
    categorie: 'Morisca'
  },
  {
    categorie: 'Negra'
  },
  {
    categorie: 'Pastoril'
  },
  {
    categorie: 'Picaresca'
  },
  {
    categorie: 'Policíaca'
  },
  {
    categorie: 'Rosa'
  },
  {
    categorie: 'Sentimental'
  },
  {
    categorie: 'Social'
  },
  {
    categorie: 'Terror'
  },
  {
    categorie: 'Westerns'
  }
]

const categoriesDocuments = categories.map((consola) => new Consola(consola))

connectDB()
  .then(async () => {
    const allCategoires = await Categorie.find()
    if (allCategoires.length) {
      await Categorie.collection.drop()
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    await Categorie.insertMany(categoriesDocuments)
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect())
