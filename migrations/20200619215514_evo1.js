
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Evo1', table => {
        table.increments('id').primary()
        table.string('ship_name')
        table.string('img')
        table.string('img_title')
        table.string('service_years')
        table.string('build_yard')
        table.string('operator')
        table.string('registry_port')
        table.string('cost')
        table.integer('imo')
        table.string('passenger_capacity_full')
        table.integer('crew_capacity')
        table.integer('gross_tonnage')
        table.string('length')
        table.string('beam')
        table.string('draft')
        table.string('height')
        table.string('speed')
        table.string('deadweight')
        table.string('lightship')
        table.string('loaded_displacement')
        table.string('power')
        table.string('power_rpm')
        table.string('fuel_type')
        table.string('fuel_capacity')
        table.string('fuel_consumption')
        table.string('fresh_water')
        table.string('propellors')
        table.string('propellor_size')
        table.string('rudder')
        table.string('rudder_size')
        table.integer('decks')
        table.string('accessible_decks')
        table.string('bridge_height')
        table.string('bridge_water')
        table.string('shelter_deck')
        table.string('bow_bridge')
        table.string('bow_height')

        //France liner details. In 1980 she changed her name to Norway and has a few new details because of this.
        table.string('france_service_years')
        table.string('cruise_ship_name')
        table.string('norway_years')
        table.string('norway_operator')
        table.string('conversion_cost')
        table.string('norway_passengers')
        table.integer('norway_crew')
        table.string('norway_gt')
        table.string('norway_fuel_capacity')
        table.string('norway_fuel_consume')
        table.string('norway_fresh_water')
        table.string('norway_speed')
        table.string('norway_passenger_decks')
        table.string('norway_last_name')
        table.integer('norway_final_year')
        table.integer('norway_final_gt')

        //Galileo Galilei details. She changed her name several times and has a few new details because of this.
        table.string('early_service_years')
        table.string('funnel_height')
        table.string('galileo_name')
        table.string('galileo_years')
        table.string('galileo_gt')
        table.integer('galileo_passenger_capacity')
        //Galielo Galilei as Meridian
        table.string('meridian_name')
        table.string('meridian_years')
        table.string('meridian_gt')
        table.integer('meridian_passenger_capacity')
        //Galielo Galilei as Sun Vista
        table.string('gg_last_name')
        table.string('sunvista_years')
        table.string('sunvista_gt')
        table.integer('sunvista_passenger_capacity')

        //Pacific Princess Love boat
        table.string('original_name')
        table.string('early_years')
        table.string('pacific_princess_years')
        table.string('pacific_years')
        table.integer('loveboat_final_year')
        table.string('ship_horn')
        // table.string("first_para")
        // table.string("second_para")
        table.string('early_1st_para')
        table.string('early_2nd_para')
        table.string('cruise_1st_para')
        table.string('cruise_2nd_para')
        table.string('mem_1st_para')
        table.string('mem_2nd_para')
        table.string('plans_para')
        table.string('final_1st_para')
        table.string('final_2nd_para')

        table.string('ship_plans')
        table.string('ship_plans_cont')
        table.string('img_trials')
        table.string('img_trials_title')
        table.string('img_early')
        table.string('img_early_title')
        table.string('img_1stcruise')
        table.string('img_1stcruise_title')
        table.string('early_video')
        table.string('cruise_video')
        table.string('mem_video')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('Evo1')
};
