
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Reviews', table =>  {
        table.increments('id').primary()

        // Below is all the properties I need for each 
        //Review (either initial or added) on a Review Page.
        table.string('Review_User_Name')
        table.string('Review')
        table.integer('Star_Rating')
        table.string('Cruise_Name')
        table.string('Cruise_Duration')
        table.string('Sail_Date')
        table.string('Leaving_Port')
        table.string('Destination')
        table.string('Disembark_Date')
        table.string('Travel_Name')
        table.string('Review_Title')
        table.string('Number_of_Cruises')
        table.string('Travel_Party')

        // At first I thought maybe it was good to have review_id join in ships table to reviews table.
        // This is because a ship for reviewing is picked up by id through Review Component 
        // and those props including review_id are passed into Ship Component. 
        // table.integer('review_id')
        
        // With initial review, there is only one review per ship. 
        // However, there can be many reviews for 1 ship and this only comes into play when adding reviews.
        // However, because of this, I think ship_id in reviews table should be the join, not review_id in ships table.
        table.integer('ship_id')

    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('Reviews')
};