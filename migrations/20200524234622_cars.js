
exports.up = function(knex) {
  return knex.schema.createTable('cars', (tbl) => {
		tbl.increments()
    tbl.string('VIN', 50).notNullable().unique().index()
    tbl.string('Make', 25).notNullable()
    tbl.string('Model', 25).notNullable()
    tbl.float('Mileage').notNullable()
    tbl.string('Transmission', 10)
    tbl.string('Title', 50)
		})
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
