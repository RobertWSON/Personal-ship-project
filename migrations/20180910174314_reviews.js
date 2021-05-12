
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Reviews', table =>  {
        table.increments('id').primary()

        // Below is all the properties I need for each 
        //Review (either initial or added) on a Review Page.
        table.string('Review_User_Name')
        table.string('Review')
        table.integer('Star_Rating')
        table.string('Cruise_Name')
        table.string('Sail_Date')
        
        //May or may not need the following 2 below
        table.string('Leaving_Port')
        table.string('Destination')

        table.string('Travel_Name')
        table.string('Review_Title')
        table.string('Number_of_Cruises')
        table.string('Travel_Party')

        // I was told by Phoenix, that it should be the other way around 
        // with ship_id as the foreign key in reviews table, instead of review_id in ships table.
        // There can be many reviews for 1 ship.
        table.integer('ship_id')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('Reviews')
};