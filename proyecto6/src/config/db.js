const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('BBDD echando humo')
  } catch (error) {
    console.log('Error conectando con la bbdd')
  }
}

module.exports = { connectDB }
