exports.seed = function (knex) {
	const testData = [
		{
			VIN: '5a4f6d54sfda',
			Make: 'Ford',
			Model: 'F-150 Ranger',
			Mileage: 168546.23,
			Transmission: 'Automatic',
			Title: 'Clean',
		},
		{
			VIN: 'wreq465',
			Make: 'Chevrolet',
			Model: 'Cavalier',
			Mileage: 72568.99,
			Transmission: 'Automatic',
			Title: 'Clean',
		},
		{
			VIN: 't465erf',
			Make: 'GMC',
			Model: 'Grand Sierra',
			Mileage: 65432.22,
			Transmission: 'Standard',
			Title: 'Lean',
		},
	]

	// Deletes ALL existing entries
	return knex('cars')
		.truncate()
		.then(function () {
			// Inserts seed entries
			return knex('cars').insert(testData)
		})
}
