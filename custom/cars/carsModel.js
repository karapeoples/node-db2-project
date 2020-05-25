const Cars = require('../../data/dbConfig')

const find = () => {
	return Cars('cars')
}

const findById = (id) => {
	return Cars('cars').where({ id })
}

const insert = (car) => {
	return Cars('cars')
		.insert(car)
		.then((ids) => {
			return findById(ids[0])
		})
}

const update = (id, changes) => {
	return Cars('cars').where({ id }).update(changes)
}

const remove = (id) => {
	return Cars('cars').where({ id }).del()
}

module.exports = {
	find,
	findById,
	insert,
	update,
	remove,
}