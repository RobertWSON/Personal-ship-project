
exports.up = function(knex, Promise) {
    return knex.schema.createTable('name_changes_pt1', table =>    {
        table.increments('id').primary()
        table.string('second_ship_name')
        // I thought maybe I could also includes years for each ship name change
        table.string('second_name_years')
        table.string('third_ship_name')
        table.string('third_name_years')
        // fourth_ship_name changed to last_ship_name
        table.string('last_ship_name')
        table.string('last_name_years')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('name_changes_pt1')
};