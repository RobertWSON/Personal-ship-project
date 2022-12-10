
exports.up = function(knex, Promise) {
    return knex.schema.createTable('name_changes', table =>    {
        table.increments('id').primary()
        table.string('second_ship_name')
        // I thought maybe I could also includes years for each ship name change
        table.string('second_name_years')
        table.string('third_ship_name')
        table.string('third_name_years')
        // These ships are only used for Evolution Part 2
        table.string('fourth_ship_name')
        table.string('fourth_name_years')
        table.string('fifth_ship_name')
        table.string('fifth_name_years')
        table.string('sixth_ship_name')
        table.string('sixth_name_years')
        table.string('seventh_ship_name')
        table.string('seventh_name_years')
        table.string('eighth_ship_name')
        table.string('eighth_name_years')
        table.string('ninth_ship_name')
        table.string('ninth_name_years')
        // last_ship_name and last_name_years are needed for both Evolution Part 1 and 2 
        table.string('last_ship_name')
        table.string('last_name_years')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('name_changes')
};
