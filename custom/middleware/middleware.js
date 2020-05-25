const Cars = require('../cars/carsModel')

const validId = (req, res, next) => {
	const { id } = req.params
	Cars.findById(id)
		.then((car) => {
			car.length > 0 ? req.account || next() : res.status(404).json({ message: 'That Car Does not Exist!' })
		})
		.catch((err) => {
			res.status(500).json({ message: 'Error in the Database' })
		})
}
const validBody = (req, res, next) => {
	const { VIN, Make, Model, Mileage } = req.body
	Object.entries(req.body).length === 0
		? res.status(404).json({ message: 'No Car Data' })
		: !VIN || !Make ||!Model ||!Mileage
		? res.status(400).json({ message: 'Missing required information. Please add all required fields!' })
		: next()
}

module.exports = {
	validId,
	validBody,
}
