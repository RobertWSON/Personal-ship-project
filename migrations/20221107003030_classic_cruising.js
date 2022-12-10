
exports.up = function(knex, Promise) {
    return knex.schema.createTable('classic_cruising', table =>  {
    table.increments('id').primary()
    // This cruise ship name is commonly used to pickup the pages and Heading for the ship
    table.string('cruise_ship_name')        
    table.integer('cruise_years')
    table.string('cruise_operator')
    table.string('cruise_reg_port')
    table.string('conversion_cost')
    table.integer('cruise_passengers_max')
    table.string('cruise_crew_max')
    table.integer('cruise_gt')
    {/* These below are extras may not need all of them */}
    // May not need cruise_height, as a lot of the time it will be the same as when it was built
    table.string('cruise_height')
    table.string('cruise_funnel_hgt')
    table.string('cruise_speed')
    table.string('cruise_deadweight')
    table.string('cruise_lightship')
    table.integer('cruise_displacement')
    table.string('cruise_power') 
    table.string('cruise_power_rpm')
    table.string('cruise_fuel_capacity')
    table.integer('cruise_fuel_consumption')
    table.string('cruise_fresh_water')
    // May not need this for evolution part 1 and 2 
    table.integer('cruise_propellors')
    table.string('cruise_propellor_size')
    table.string('cruise_rudder')
    table.string('cruise_rudder_size')
    // Need cruise_decks & cruise_passenger_decks because the decks can be added when it becomes a cruise ship
    table.integer('cruise_decks')
    table.integer('cruise_passenger_decks')
    // May not need this for evolution part 1 and 2 
    table.string('cruise_bridge_height')
    table.string('cruise_bridge_water')
    // May not need cruise_shelter_deck as I think it was only used back in old Titanic days
    // table.string('cruise_shelter_deck') 
    table.string('cruise_bow_bridge') 
    table.string('cruise_bow_height')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('classic_cruising')
};
