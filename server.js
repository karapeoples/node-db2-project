const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const carsRouter = require('./custom/cars/carsRouter')
const server = express()

server.use(helmet(), morgan('dev'), express.json())
server.use('/cars', carsRouter)

server.get('/', (req, res) => {
  res.status(200).json({Message: 'Welcome to Car Sales API'})
})
module.exports = server
