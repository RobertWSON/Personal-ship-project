
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Evo2', table => {
        table.increments('id').primary()
        // Ship Name used for web address, titles and Evolution Part 2 Ship Image (Official Name)
        table.string('classic_ship_name')
        // This can be original ship data, like for example Fairstar started off as Oxfordshire (a troop ship)
        // It can also be a for a ship that has had the same name throughout it's career eg Queen Elizabeth 2
        table.string('original_ship_name')
        table.string('img')
        table.string('img_title')
        table.string('early_service_years')
        table.string('build_yard')
        table.string('original_operator')
        table.string('registry_port')
        table.string('cost')
        table.integer('imo')
        //original_passengers_max:
        table.string('passenger_capacity_full')
        table.integer('crew_capacity')
        table.integer('gross_tonnage')
        table.string('length')
        table.string('beam') 
        table.string('draft')
        table.string('height')
        table.string('funnel_height')
        table.string('speed')
        table.string('deadweight')
        table.string('lightship')
        table.string('loaded_displacement')
        table.string('power')
        table.string('power_rpm')
        table.string('fuel_capacity')
        table.string('fuel_consumption')
        table.string('fresh_water')
        table.string('propellors')
        table.string('propellor_size')
        table.string('rudder')    
        table.string('rudder_size')
        // decks is total number of decks
        table.integer('decks')    
        // Accessible decks is the same as passenger decks
        table.string('accessible_decks')
        table.string('bridge_height')
        table.string('bridge_water') 
        // Shelter deck is upper deck exposed to weather, but sheltering the deck below it. 
        table.string('shelter_deck')
        table.string('bow_bridge')
        table.string('bow_height')

        // Data for when it was a cruise ship

        // Foreign Key Link for when these classic ships were operating as cruise ships for Part 2
        // These are details when they were a cruise ship. Some operated as passenger ships before 
        // cruise ships and others operated as a cruise ship throughout there whole time at sea
        table.integer('classic_cruising_id')
        table.foreign('classic_cruising_id').references('classic_cruising.id')

        // Ship Specifications after lengthening
        // Data for when the cruise ship was lengthened
        // Ship Names after lengthening

         // Foreign Key Link for when these classic cruise ships were lengthened for Part 2
         table.integer('classic_lengthened_id')
         table.foreign('classic_lengthened_id').references('classic_lengthened.id')

        // Name changes for Part 2, I think should be put in a different table
        // Foreign Key Link for these classic cruise ships name changes for Part 1
        table.integer('name_change_pt2_id')
        table.foreign('name_change_pt2_id').references('name_changes_pt2.id')

        // Ship Page Contents like images, ship plans, paragraphs
        // Ship Horns for Evolution Part 2 page
        table.string('ship_horn')
        // paragraphs and Images for Early Life and start of "As a Cruise Ship"
        table.string('early_1st_para')
        table.string('early_video')
        table.string('early_2nd_para')
        table.string('img_trials')
        table.string('img_trials_title')
        table.string('early_3rd_para')
        table.string('img_early')
        table.string('img_early_title')
        table.string('cruise_1st_para')
        table.string('img_1stcruise')
        table.string('img_1stcruise_title')
        
        // Paragraph and Photo of lengthened cruise ship
        // We may probably want an image of it cruising after just being lengthened or a photo of it during lengthening process.
        table.string('name_before_lengthening'),
        table.string('lengthened_para'),
        table.string('img_lengthened')
        table.string('img_lengthened_title')

        // Maybe have a paragraph with a photo talking about the lengthening of the cruise ship
        table.string('afterlengthen_para')
        table.string('img_afterlengthen')
        table.string('img_afterlengthen_title')
        // maybe this img_1stcruise can show it cruising after it's been lengthened.
        // No I think this comes before talking about ship lengthening
        // table.string('img_1stcruise')
        // table.string('img_1stcruise_title')

        // Now we try having paragrah and image for each of the times the cruise ship changed cruise operators
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
        table.string('cruise_6th_para')
        table.string('img_6thcruise')
        table.string('img_6thcruise_title')
        table.string('cruise_7th_para')
        table.string('img_7thcruise')
        table.string('img_7thcruise_title')
        table.string('cruise_8th_para')
        table.string('img_8thcruise')
        table.string('img_8thcruise_title')
        table.string('cruise_9th_para')
        table.string('img_9thcruise')
        table.string('img_9thcruise_title')
        table.string('cruise_10th_para')
        table.string('img_10thcruise')
        table.string('img_10thcruise_title')
        table.string('cruise_video')
        // End of Cruise Ship section with paragraphs and images

        // table.string('cruise_video')
        table.string('mem_1st_para')
        table.string('mem_video')
        table.string('mem_2nd_para')
        table.string('plans_para')
        table.string('ship_plans')
        table.string('ship_plans_cont')
        table.string('final_1st_para')
        table.string('final_2nd_para')
        table.string('img_final')
        table.string('img_final_title')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('Evo2')
};
