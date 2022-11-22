
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cruise_convert').del()
    .then(function () {
      // Inserts seed entries
      return knex('cruise_convert').insert([
        {id: 1, 
                // Titanic was a passenger ship and was not a cruise ship
                // Cruise Ships were not around in 1912, only passenger ships were 
                cruise_ship_name: '', cruise_years: '', cruise_operator: '', cruise_reg_port: '',
                conversion_cost: '', cruise_passengers_max: '', cruise_crew_max: '', cruise_gt: '',
                cruise_funnel_hgt: '', cruise_speed: '', cruise_deadweight: '', cruise_lightship: '', 
                cruise_displacement: '', cruise_power: '', cruise_power_rpm: '', cruise_fuel_capacity: '',
                cruise_fuel_consumption: '', cruise_fresh_water: '', cruise_decks: '', cruise_passenger_decks: ''
        },
        {id: 2, cruise_ship_name: 'Oriana', 
                cruise_years: '', cruise_operator: '', cruise_reg_port: '',
                conversion_cost: '', cruise_passengers_max: '', cruise_crew_max: '', cruise_gt: '',
                cruise_funnel_hgt: '', cruise_speed: '', cruise_deadweight: '', cruise_lightship: '', 
                cruise_displacement: '', cruise_power: '', cruise_power_rpm: '', cruise_fuel_capacity: '',
                cruise_fuel_consumption: '', cruise_fresh_water: '', cruise_decks: '', cruise_passenger_decks: ''
        },
        {id: 3, cruise_ship_name: 'Canberra', 
                cruise_years: '', cruise_operator: '', cruise_reg_port: '',
                conversion_cost: '', cruise_passengers_max: '', cruise_crew_max: '', cruise_gt: '',
                cruise_funnel_hgt: '', cruise_speed: '', cruise_deadweight: '', cruise_lightship: '', 
                cruise_displacement: '', cruise_power: '', cruise_power_rpm: '', cruise_fuel_capacity: '',
                cruise_fuel_consumption: '', cruise_fresh_water: '', cruise_decks: '', cruise_passenger_decks: ''
        },
        {id: 4, cruise_ship_name: 'Norway',
                cruise_years: '', cruise_operator: '', cruise_reg_port: '',
                conversion_cost: '', cruise_passengers_max: '', cruise_crew_max: '', cruise_gt: '',
                cruise_funnel_hgt: '', cruise_speed: '', cruise_deadweight: '', cruise_lightship: '', 
                cruise_displacement: '', cruise_power: '', cruise_power_rpm: '', cruise_fuel_capacity: '',
                cruise_fuel_consumption: '', cruise_fresh_water: '', cruise_decks: '', cruise_passenger_decks: ''
        },
        {id: 5, cruise_ship_name: 'Galileo Galilei',
                cruise_years: '', cruise_operator: '', cruise_reg_port: '',
                conversion_cost: '', cruise_passengers_max: '', cruise_crew_max: '', cruise_gt: '',
                cruise_funnel_hgt: '', cruise_speed: '', cruise_deadweight: '', cruise_lightship: '', 
                cruise_displacement: '', cruise_power: '', cruise_power_rpm: '', cruise_fuel_capacity: '',
                cruise_fuel_consumption: '', cruise_fresh_water: '', cruise_decks: '', cruise_passenger_decks: ''
        },
        {id: 6, cruise_ship_name: 'Pacific Princess',
                cruise_years: '1971 to 2013', cruise_operator: '', cruise_reg_port: '',
                conversion_cost: '', cruise_passengers_max: '', cruise_crew_max: '', cruise_gt: '',
                cruise_funnel_hgt: '', cruise_speed: '', cruise_deadweight: '', cruise_lightship: '', 
                cruise_displacement: '', cruise_power: '', cruise_power_rpm: '', cruise_fuel_capacity: '',
                cruise_fuel_consumption: '', cruise_fresh_water: '', cruise_decks: '', cruise_passenger_decks: ''
        }
      ]);
    });
};
