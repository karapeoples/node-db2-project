const express = require('express')
const router = express.Router()
const mw = require('../middleware/middleware')
const validId = mw.validId
const validBody = mw.validBody
const Cars = require('./carsModel')

router.get('/', (req, res) => {
	Cars.find()
		.then((car) => {
			res.status(200).json(car)
		})
		.catch((err) => {
			res.status(500).json({ message: 'Error in the Database' })
		})
})

router.get('/:id', validId, (req, res) => {
	const { id } = req.params
	Cars.findById(id).then((car) => {
		res.status(200).json(car)
	})
})

router.post('/', validBody, (req, res) => {
	Cars.insert(req.body)
		.then((car) => {
			res.status(201).json({ message: 'Success a New Car was created', car })
		})
		.catch((err) => {
			res.status(500).json({ message: 'Error in the Database' })
		})
})

router.put('/:id', validId, validBody, (req, res) => {
	const { id } = req.params
	const body = req.body
	Cars.update(id, body).then((car) => {
		res.status(200).json({ message: 'The car was updated with the following information', body })
	})
})

router.delete('/:id', validId, (req, res) => {
	const { id } = req.params
	Cars.findById(id).then((car) => {
		car
			? Cars.remove(id).then((deleted) => {
					deleted ? res.status(200).json({ success: `Account with ID ${id} has been removed`, info: car }) : null
			  })
			: null
	})
})
module.exports = router
