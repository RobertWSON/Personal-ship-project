  
    exports.up = function(knex, Promise) {
        return knex.schema.createTable('Ships', table =>  {
            table.increments('id').primary()
            table.string('cruise_line')
            table.string('ship_name')
            table.string('img')
            table.integer('Year')
            table.integer('Gross_Tonnage')
            table.integer('Passenger_Full_Capacity')
            table.integer('Double_Occupancy_Passenger_Capacity')
            table.decimal('Length')
            table.decimal('Beam')
            table.decimal('Draft')
            table.decimal('Height')
            table.integer('Loaded_Displacement')
            table.integer('Deadweight')
            table.string('Booking')

            // I was told by Phoenix, that it should be the other way around 
            // with ship_id as the foreign key in reviews table, instead of review_id in ships table.   
            // There can be many reviews for 1 ship.
            // table.integer('review_id')

        })
    };
    
    exports.down = function(knex, Promise) {
        return knex.schema.dropTable('Ships')
    };