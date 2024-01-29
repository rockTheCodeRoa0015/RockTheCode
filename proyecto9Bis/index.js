require('dotenv').config()

const animeRouter = require('./src/api/routes/animes')
const categoriaRouter = require('./src/api/routes/categorias')
const { connectDB } = require('./src/config/db')
const express = require('express')

const app = express()
connectDB()

app.use('/api/v1/animes', animeRouter)
app.use('/api/v1/categorias', categoriaRouter)

app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found')
})

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
