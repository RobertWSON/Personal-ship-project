
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Ships', table =>  {
        table.increments('id').primary()
        table.string('ship_name')
        table.string('img')
        table.integer('Gross_Tonnage')
        table.integer('Passenger_Full_Capacity')
        table.integer('Double_Occupancy_Passenger_Capacity')
        table.decimal('Length')
        table.decimal('Beam')
        table.decimal('Draft')
        table.decimal('Height')
        table.integer('Loaded_Displacement')
        table.integer('Deadweight')
        table.string('Review')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('Ships')
};
