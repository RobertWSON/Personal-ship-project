
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Reviews', table =>  {
        table.increments('id').primary()

        // Below is all the properties I need for each 
        // Review (either initial or added) on a Review Page.
        table.string('Review_User_Name')
        table.string('Review_Ship_Name')

        // I may only need Review-img for AddReview part, because that comes up when user fills in Review Form
        table.string('Review_img')

        table.string('Review')
        table.integer('Star_Rating')
        table.string('Cruise_Name')
        table.string('Sail_Date')

        // May not need these 2 below, because Sail Date may cover this
        table.integer('Cruise_Year')
        table.string('Cruise_Month')

        table.string('Leaving_Port')
        table.string('Destination')
        table.string('Travel_Name')
        table.string('Review_Title')
        table.string('Number_of_Cruises')
        table.string('Travel_Party')

        // I am using api in this branch to get Reviews data, so I don't need ship_id for join
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('Reviews')
};