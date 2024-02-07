require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const usersRoutes = require('./src/api/routes/user')
const booksRoutes = require('./src/api/routes/book')
const categoriesRoutes = require('./src/api/routes/categorie')
const opinionsRoutes = require('./src/api/routes/opinion')
const cloudinary = require('cloudinary').v2
const cors = require('cors')

const app = express()

connectDB()

app.use(cors())

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

//! configurando mi servidor para que sea capaz de interpretar formatos json que le envío
app.use(express.json())

app.use('/api/v1/users', usersRoutes)
app.use('/api/v1/books', booksRoutes)
app.use('/api/v1/categories', categoriesRoutes)
app.use('/api/v1/opinions', opinionsRoutes)

app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found')
})

app.listen(3000, () => {
  console.log('El servidor está funcionando en: http://localhost:3000')
})
