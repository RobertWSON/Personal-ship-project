exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('name_changes_pt1').del()
    .then(function () {
      // Inserts seed entries
      return knex('name_changes_pt1').insert([
        { id: 1, 
          second_ship_name: '', second_name_years: '', 
          third_ship_name: '', third_name_years: '', 
          last_ship_name: '', last_name_years: ''
        },
        { id: 2, 
          second_ship_name: '', second_name_years: '', 
          third_ship_name: '', third_name_years: '', 
          last_ship_name: '', last_name_years: ''
        },
        { id: 3, 
          second_ship_name: '', second_name_years: '', 
          third_ship_name: '', third_name_years: '', 
          last_ship_name: '', last_name_years: ''
        },
        { id: 4, 
          second_ship_name: 'Norway', second_name_years: '1980 to 2003', 
          third_ship_name: '', third_name_years: '', 
          last_ship_name: 'Blue Lady', last_name_years: '2004'
        },
        { id: 5, 
          second_ship_name: 'Galileo', second_name_years: '1984 to 1990', 
          third_ship_name: 'Meridian', third_name_years: '1990 to 1997', 
          last_ship_name: 'Sun Vista', last_name_years: '1997 to 1999'
        },
        { id: 6, 
          second_ship_name: 'Pacific Princess', second_name_years: '1975 to 2002', 
          third_ship_name: 'Pacific', third_name_years: '2002 to 2013', 
          last_ship_name: 'Acif', last_name_years: '2013'
        }
      ]);
    });
};