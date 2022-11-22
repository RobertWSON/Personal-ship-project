
exports.up = function(knex, Promise)  {
    return knex.schema.createTable('cruise_convert', table =>  {
        table.increments('id').primary()
        table.string('cruise_ship_name')        
        table.integer('cruise_years')
        table.string('cruise_operator')
        table.string('cruise_reg_port')
        table.string('conversion_cost')
        table.integer('cruise_passengers_max')
        table.string('cruise_crew_max')
        table.integer('cruise_gt')
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
        // May not need this for part 1
        // table.integer('cruise_propellors')
        // table.string('cruise_propellor_size')
        // table.string('cruise_rudder')
        // table.string('cruise_rudder_size')
        table.integer('cruise_decks')
        table.integer('cruise_passenger_decks')
        // May not need this for part 1
        // table.string('cruise_bridge_height')
        // table.string('cruise_bridge_water')
        // table.string('cruise_shelter_dec') 
        // table.string('cruise_bow_bridge') 
        // table.string('cruise_bow_height')
    })
};

exports.down = function(knex, Promise)  {
    return knex.schema.dropTable('cruise_convert')
};
