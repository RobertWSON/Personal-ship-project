
exports.up = function(knex, Promise) {
    return knex.schema.createTable('name_changes_pt2', table => {
        table.increments('id').primary()
        table.string('second_ship_name')
        // I thought maybe I could also includes years for each ship name change
        table.string('second_name_years')
        table.string('third_ship_name')
        table.string('third_name_years')
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
        table.string('last_ship_name')
        table.string('last_name_years')
    }
    )
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('name_changes_pt2')
};
