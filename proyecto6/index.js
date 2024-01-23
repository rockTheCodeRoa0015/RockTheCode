require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const videogamesRoutes = require('./src/api/routes/videogame')

const app = express()

connectDB()

app.use(express.json())

app.use('/api/v1/videogames', videogamesRoutes)

app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found')
})

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
