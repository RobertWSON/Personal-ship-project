
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Evo1', table => {
        table.increments('id').primary()
        table.string('classic_ship_name')
        table.string('img')
        table.string('img_title')
        table.string('original_ship_name')
        table.string('early_service_years')
        table.string('service_years')
        // May not need these 3, as they can be handled in Name Changes Part 1 Table
        // table.string('france_service_years')
        // table.string('pacific_princess_years')
        // table.string('pacific_years')
        table.string('loveboat_final_year')
        table.string('build_yard')
        table.string('original_operator')
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
        table.string('height_funnel_top') // Used to be called funnel_height
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
        table.integer('accessible_decks')
        table.string('bridge_height')
        table.string('bridge_water')
        //Shelter Deck from Titanic, need it here with nothing as a variable for some ships to make this work.
        table.string('shelter_deck') 
        table.string('bow_bridge')
        table.string('bow_height')

        // I have decided to get rid of Norway and Galileo as Seperated from the rest
        // Foreign key for France as Norway cruise ship    
        // norway_id: '2',
        // Foreign key for Galileo Galilei as a cruise ship
        // galileo_id: '2',

        // Foreign Key Link to these classic cruise ships for Part 1, for their details when they were a cruise ship
        table.integer('cruise_convert_id')
        table.foreign('cruise_convert_id').references('cruise_convert.id') 
        
        // Lengthened cruise ships does not apply for Part 1
        // Foreign Key Link for when these classic cruise ships were Lengthened to carry more cruise passengers
        // lengthened_id: '2',

        // Foreign Key Link for these classic cruise ships name changes for Part 1
        table.integer('name_change_pt1_id')
        table.foreign('name_change_pt1_id').references('name_changes_pt1.id')

        // For each ships horn on either Evolution Part 1 and Evolution Part 2 Pages
        table.string('ship_horn')

        // Early Div Section for early life of a classic ship (has section id)
        table.string('early_1st_para')
        table.string('early_video')
        table.string('early_2nd_para')    
        table.string('img_trials')
        table.string('img_trials_title')
        table.string('early_3rd_para')
        table.string('img_early')
        table.string('img_early_title')

        // Cruise Div Section for cruise life of a classic ship (has section id)
        table.string('cruise_1st_para')
        table.string('img_1stcruise')
        table.string('img_1stcruise_title')

        // This part only applies to Evolution Part 2, where some ships there have been lengthened. 
        // name_before_lengthened: '', lengthened_para: '', img_lengthened: '', img_lengthened_title: '', 
        // name_after_lengthening: '', afterlengthen_para: '', img_afterlengthened: '', img_afterlengthened_title: '',

        table.string('cruise_2nd_para')
        table.string('img_2ndcruise')
        table.string('img_2ndcruise_title')
        table.string('cruise_3rd_para')
        table.string('img_3rdcruise')
        table.string('img_3rdcruise_title')
        table.string('cruise_4th_para')
        table.string('img_4thcruise')
        table.string('img_4thcruise_title')
        table.string('cruise_5th_para')
        table.string('img_5thcruise')
        table.string('img_5thcruise_title')
        table.string('cruise_video')

        // This is the Memorable Moments Div (id = mem)
        table.string('mem_1st_para')
        table.string('mem_video')
        table.string('mem_2nd_para')

        // This is the Plans Div (id = plans)
        table.string('plans_para')
        table.string('ship_plans')
        table.string('ship_plans_cont')

        // This is the Final Div (id = final)
        table.string('final_1st_para')
        table.string('final_2nd_para')
        table.string('img_final'), 
        table.string('img_final_title')
       
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('Evo1')
};