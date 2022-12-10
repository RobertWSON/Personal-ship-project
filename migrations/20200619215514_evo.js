
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Evo', table => {
        table.increments('id').primary()
        // Ship Name used for web address, titles and Ship Image (Official Name) for both Evolution Part 1 and 2
        table.string('classic_ship_name')
         // This can be original ship data, like for example Fairstar started off as Oxfordshire (a troop ship)
        // It can also be a for a ship that has had the same name throughout it's career eg Queen Elizabeth 2
        table.string('img')
        table.string('img_title')
        table.string('original_ship_name')
        // May only need early_service_years for initial specs
        table.string('early_service_years')
        // And not service_years for initial specs
        table.string('service_years')
        // May not need these 3 for Evolution Part 1, as they can be handled in Name Changes Table
        // table.string('france_service_years')
        // table.string('pacific_princess_years')
        // table.string('pacific_years')
        table.string('loveboat_final_year')
        table.string('build_yard')
        table.string('original_operator')
        // May not need operator for intial ship specs, as it can be shown in cruise ship specs 
        table.string('operator')
        table.string('registry_port')
        table.string('cost')
        table.integer('imo')
        // Maybe I could have original_passengers_max for initial ship specs
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
        // fuel_type was only originally used for Evolution Part 1. 
        // Titanic used coal and the rest used marine oil.
        table.string('fuel_type')
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
        table.integer('accessible_decks')
        table.string('bridge_height')
        table.string('bridge_water')
        // Shelter Deck from Titanic, need it here with nothing as a variable for some ships to make this work.
        // Shelter deck is upper deck exposed to weather, but sheltering the deck below it.
        table.string('shelter_deck') 
        table.string('bow_bridge')
        table.string('bow_height')

        // Data for when it was a cruise ship

        // Foreign Key Link to these classic ships for when they were operating as cruise ships for Part 1 and 2.
        // These are details when they were a cruise ship. Some operated as passenger ships before 
        // cruise ships and others operated as a cruise ship throughout there whole time at sea
        table.integer('classic_cruising_id')
        table.foreign('classic_cruising_id').references('classic_cruising.id') 
        
        // Ship Specifications after lengthening
        // Data for when the cruise ship was lengthened
        // Ship Names after lengthening

        // Foreign Key Link for when these classic cruise ships were lengthened to carry more cruise passengers
        // Cruise ships were only lengthened in Part 2, but none were lengthened in Part 1 
        table.integer('classic_lengthened_id')
        table.foreign('classic_lengthened_id').references('classic_lengthened.id')

        // Foreign Key Link for these classic cruise ships name changes for both Part 1 and Part 2
        // Note this does not include lengthend name changes, as this is handled in classic_lengthened table
        table.integer('name_change_id')
        table.foreign('name_change_id').references('name_changes.id')

        // Ship Page Contents like images, ship plans, paragraphs
        // For each ship horn for each ship on either Evolution Part 1 and Evolution Part 2 Pages
        table.string('ship_horn')

        // Early Div Section for early life of a classic ship (has section id)
        // This includes paragraphs and images
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

        // Paragraph and Photo of lengthened cruise ship

        // This part only applies to Evolution Part 2, where some ships there have been lengthened.
        table.string('name_before_lengthening') 
        table.string('lengthened_para')
        // image of cruise ship during lengthening process.
        table.string('img_lengthened') 
        table.string('img_lengthened_title') 

        // Maybe have a paragraph with a photo talking about the lengthening of the cruise ship
        table.string('afterlengthen_para')
        // image of it cruising just after being lengthened
        table.string('img_afterlengthen')
        table.string('img_afterlengthen_title')
    
        // Now we have paragrahs and images for each of the times the cruise ship changed cruise operators
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
        // Extra paragraphs and images needed for Evolution Part 2
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
        // I am not sure if putting a cruise video at the end of this section is the best.
        // Maybe having a cruise video at the beginning or in the middle of this section is the best place. 
        table.string('cruise_video')
        // End of Cruise Ship section with paragraphs and images


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
    return knex.schema.dropTable('Evo')
};