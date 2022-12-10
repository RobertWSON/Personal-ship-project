
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('classic_cruising').del()
    .then(function () {
      // Inserts seed entries
      return knex('classic_cruising').insert([

        // Evolution Part 1 is from id: 1 to id: 6

        {id: 1, 
                // Titanic was a passenger ship and was not a cruise ship
                // Cruise Ships were not around in 1912, only passenger ships were 
                cruise_ship_name: '', cruise_years: '', cruise_operator: '', cruise_reg_port: '',
                conversion_cost: '', cruise_passengers_max: '', cruise_crew_max: '', cruise_gt: '',
                // Added cruise_height, that was not here in Evolution Part 1 before 
                cruise_height: '', 
                cruise_funnel_hgt: '', cruise_speed: '', cruise_deadweight: '', cruise_lightship: '', 
                cruise_displacement: '', cruise_power: '', cruise_power_rpm: '', cruise_fuel_capacity: '',
                cruise_fuel_consumption: '', cruise_fresh_water: '', cruise_decks: '', cruise_passenger_decks: '',
                // Added these below to use for Evolution Part 1
                cruise_bridge_height: '', cruise_bridge_water: '', cruise_bow_bridge: '', cruise_bow_height: ''  
        },
        {id: 2, cruise_ship_name: 'Oriana', 
                cruise_years: '', cruise_operator: '', cruise_reg_port: '',
                conversion_cost: '', cruise_passengers_max: '', cruise_crew_max: '', cruise_gt: '',
                // Added cruise_height, that was not here in Evolution Part 1 before 
                cruise_height: '',
                cruise_funnel_hgt: '', cruise_speed: '', cruise_deadweight: '', cruise_lightship: '', 
                cruise_displacement: '', cruise_power: '', cruise_power_rpm: '', cruise_fuel_capacity: '',
                cruise_fuel_consumption: '', cruise_fresh_water: '', cruise_decks: '', cruise_passenger_decks: '',
                // Added these below to use for Evolution Part 1
                cruise_bridge_height: '', cruise_bridge_water: '', cruise_bow_bridge: '', cruise_bow_height: ''
        },
        {id: 3, cruise_ship_name: 'Canberra', 
                cruise_years: '', cruise_operator: '', cruise_reg_port: '',
                conversion_cost: '', cruise_passengers_max: '', cruise_crew_max: '', cruise_gt: '',
                // Added cruise_height, that was not here in Evolution Part 1 before 
                cruise_height: '',
                cruise_funnel_hgt: '', cruise_speed: '', cruise_deadweight: '', cruise_lightship: '', 
                cruise_displacement: '', cruise_power: '', cruise_power_rpm: '', cruise_fuel_capacity: '',
                cruise_fuel_consumption: '', cruise_fresh_water: '', cruise_decks: '', cruise_passenger_decks: '',
                // Added these below to use for Evolution Part 1
                cruise_bridge_height: '', cruise_bridge_water: '', cruise_bow_bridge: '', cruise_bow_height: ''
        },
        {id: 4, cruise_ship_name: 'Norway',
                cruise_years: '', cruise_operator: '', cruise_reg_port: '',
                conversion_cost: '', cruise_passengers_max: '', cruise_crew_max: '', cruise_gt: '',
                // Added cruise_height, that was not here in Evolution Part 1 before 
                cruise_height: '',
                cruise_funnel_hgt: '', cruise_speed: '', cruise_deadweight: '', cruise_lightship: '', 
                cruise_displacement: '', cruise_power: '', cruise_power_rpm: '', cruise_fuel_capacity: '',
                cruise_fuel_consumption: '', cruise_fresh_water: '', cruise_decks: '', cruise_passenger_decks: '',
                // Added these below to use for Evolution Part 1
                cruise_bridge_height: '', cruise_bridge_water: '', cruise_bow_bridge: '', cruise_bow_height: ''
        },
        {id: 5, cruise_ship_name: 'Galileo Galilei',
                cruise_years: '', cruise_operator: '', cruise_reg_port: '',
                conversion_cost: '', cruise_passengers_max: '', cruise_crew_max: '', cruise_gt: '',
                // Added cruise_height, that was not here in Evolution Part 1 before 
                cruise_height: '', 
                cruise_funnel_hgt: '', cruise_speed: '', cruise_deadweight: '', cruise_lightship: '', 
                cruise_displacement: '', cruise_power: '', cruise_power_rpm: '', cruise_fuel_capacity: '',
                cruise_fuel_consumption: '', cruise_fresh_water: '', cruise_decks: '', cruise_passenger_decks: '',
                // Added these below to use for Evolution Part 1
                cruise_bridge_height: '', cruise_bridge_water: '', cruise_bow_bridge: '', cruise_bow_height: ''
        },
        {id: 6, cruise_ship_name: 'Pacific Princess',
                cruise_years: '1971 to 2013', cruise_operator: '', cruise_reg_port: '',
                conversion_cost: '', cruise_passengers_max: '', cruise_crew_max: '', cruise_gt: '',
                // Added cruise_height, that was not here in Evolution Part 1 before 
                cruise_height: '',
                cruise_funnel_hgt: '', cruise_speed: '', cruise_deadweight: '', cruise_lightship: '', 
                cruise_displacement: '', cruise_power: '', cruise_power_rpm: '', cruise_fuel_capacity: '',
                cruise_fuel_consumption: '', cruise_fresh_water: '', cruise_decks: '', cruise_passenger_decks: '',
                // Added these below to use for Evolution Part 1
                cruise_bridge_height: '', cruise_bridge_water: '', cruise_bow_bridge: '', cruise_bow_height: ''
        },

        // Evolution Part 2 is from id: 7 to id: 12

        { id: 7,
          // Ship Specifications when it was a Cruise Ship 
          cruise_ship_name: 'Fairstar',
          cruise_years: '1964 to 1997', 
          cruise_operator: '1964 to 1988: Sitmar | 1988 to 1991: P & 0 Sitmar | 1991 to 1997: P & O (Australia)', 
          cruise_reg_port: 'Monrovia, Liberia', 
          conversion_cost: 'Initial Cost: 2.3 Million British Pounds, | Final Cost: 4.5 Million British Pounds', 
          cruise_passengers_max: '1964 to 1973: 1,868 First Class | 1973 to 1990: 1,280 | 1990 to 1997: 1,390', 
          cruise_crew_max: '460', cruise_gt: '1964 to 1990:  21,619 | 1990 to 1994: 21,620 | 1994 to 1997: 23,180', 
          // Maybe have show more text here, to allow user to see more if they want to

          // Assuming even Keel,
          // Fairstar Height estimated from photo in Fairstar Funship Cruise Brochure ( (18/90 * 185.76) + 8.41)
          cruise_height: '45.562 m (149 feet 5.78 inches) Keel to top of Mast',
          // Assuming even Keel, 
          // Funnel Height estimated from photo in Fairstar Funship Cruise Brochure ( (15.5/90 * 185.76) + 8.41)
          cruise_funnel_hgt: '40.402 metres (132 feet 6.63 inches) Keel to top of Funnel', 
          cruise_speed: '1964 to 1990: 17 knots (31.48 km/h) | 1990 to 1992: 18 knots (33.34 km/h) | 1992 to 1997: 16.5 knots (30.56 km/h)', 
          cruise_deadweight: '1964 to 1990: 7710 Tonnes | 1990 to 1992: 6,106 Tonnes | 1992 to 1997: 8,800 Tonnes',
          cruise_lightship: '14,450 Tonnes (Changed because of Conversion)', 
          cruise_displacement: '1964 to 1990: 22,160 Tonnes | 1990 to 1992: 20,556 Tonnes | 1992 to 1997: 23,250 Tonnes', 
          cruise_power: '46000 Horsepower Imperial (13,423 kW)', cruise_power_rpm: '', 
          cruise_fuel_capacity: '2,844 tons (2,889.64 metric tons)',
          cruise_fuel_consumption: '', cruise_fresh_water: '1,695 tons (1,722.2 metric tons or 1,722.2 m^3)', 
          cruise_propellors: '', cruise_propellor_size: '', cruise_rudder: '', cruise_rudder_size: '', 
          cruise_decks: '', cruise_passenger_decks: '10', 
          // Assuming even Keel,
          // Bridge Height estimated from photo in Fairstar Funship Cruise Brochure ((10/90) * 185.76) + 8.41
          cruise_bridge_height: '29.05 m (95 feet 3.7 inches)', 
          // Bridge Height above water, estimated from photo in Fairstar Funship Cruise Brochure (10/90 * 185.76)
          cruise_bridge_water: '20.64 m (67 feet 8.6 inches)', 
          // May not need cruise_shelter_deck , as it is only really used when Titanic was around
          // cruise_shelter_deck: '',
          // Bow to Bridge Length estimated from photo in Fairstar Funship Cruise Brochure ( (90 - 63)/90 * 185.76) 
          cruise_bow_bridge: '55.728 m (182 feet 10 inches)', 
          // Assuming even Keel, 
          // Bow to Keel Height estimated from photo in Fairstar Funship Cruise Brochure (7.5/90 * 185.76) + 8.41
          cruise_bow_height: '23.89 m (78 feet 4.55 inches)' 
        },
        { id: 8, 

          cruise_ship_name: 'Sea Princess',
          cruise_years: '1975 to 2010', cruise_operator: '', cruise_reg_port: '', conversion_cost: '', 
          cruise_passengers_max: '', cruise_crew_max: '', cruise_gt: '', cruise_height: '', cruise_funnel_hgt: '', 
          cruise_speed: '', cruise_deadweight: '', cruise_lightship: '', cruise_displacement: '', cruise_power: '', 
          cruise_power_rpm: '', cruise_fuel_capacity: '', cruise_fuel_consumption: '', cruise_fresh_water: '', 
          cruise_propellors: '', cruise_propellor_size: '', cruise_rudder: '', cruise_rudder_size: '', 
          cruise_decks: '', cruise_passenger_decks: '', cruise_bridge_height: '', cruise_bridge_water: '', 
          // May not need cruise_shelter_deck , as it is only really used when Titanic was around
          // cruise_shelter_deck: '', 
          cruise_bow_bridge: '', cruise_bow_height: ''
        },
        { id: 9,
          // Cruise Ship Ship Specifications (Doesn't apply here because Queen Elizabeth 2 was not converted to a Cruise Ship) 
          cruise_ship_name: '',
          cruise_years: '', cruise_operator: '', cruise_reg_port: '', conversion_cost: '', cruise_passengers_max: '', 
          cruise_crew_max: '', cruise_gt: '', cruise_height: '', cruise_funnel_hgt: '', cruise_speed: '', 
          cruise_deadweight: '', cruise_lightship: '', cruise_displacement: '', cruise_power: '', cruise_power_rpm: '', cruise_fuel_capacity: '',
          cruise_fuel_consumption: '', cruise_fresh_water: '', cruise_propellors: '', cruise_propellor_size: '', 
          cruise_rudder: '', cruise_rudder_size: '', cruise_decks: '', cruise_passenger_decks: '', 
          cruise_bridge_height: '', cruise_bridge_water: '', 
          // May not need cruise_shelter_deck , as it is only really used when Titanic was around
          // cruise_shelter_deck: '', 
          cruise_bow_bridge: '', cruise_bow_height: ''
        },
        { id: 10,
          // Cruise Ship Ship Specifications: Needed for Song of Norway as we show Lengthened cost 
          cruise_ship_name: 'Song of Norway',
          cruise_years: '1970 to 2013', cruise_operator: '', cruise_reg_port: '', conversion_cost: '$US 12 Million: Ship Lengthening', 
          cruise_passengers_max: '', cruise_crew_max: '', cruise_gt: '', cruise_height: '', cruise_funnel_hgt: '', 
          cruise_speed: '', cruise_deadweight: '', cruise_lightship: '', cruise_displacement: '', cruise_power: '', 
          cruise_power_rpm: '', cruise_fuel_capacity: '', cruise_fuel_consumption: '', cruise_fresh_water: '', cruise_propellors: '', 
          cruise_propellor_size: '', cruise_rudder: '', cruise_rudder_size: '', cruise_decks: '', 
          cruise_passenger_decks: '', cruise_bridge_height: '', cruise_bridge_water: '', 
          // May not need cruise_shelter_deck , as it is only really used when Titanic was around
          // cruise_shelter_deck: '', 
          cruise_bow_bridge: '', cruise_bow_height: ''
        },
        { id: 11,
           // Cruise Ship Ship Specifications: Needed for Royal Viking Sky, as we show Lengthened cost 
          cruise_ship_name: 'Royal Viking Sky',
          cruise_years: '', cruise_operator: '', cruise_reg_port: '', conversion_cost: '$US  Million: Ship Lengthening', 
          cruise_passengers_max: '', cruise_crew_max: '', cruise_gt: '', cruise_height: '', cruise_funnel_hgt: '', 
          cruise_speed: '', cruise_deadweight: '', cruise_lightship: '', cruise_displacement: '', cruise_power: '', 
          cruise_power_rpm: '', cruise_fuel_capacity: '', cruise_fuel_consumption: '', cruise_fresh_water: '', 
          cruise_propellors: '', cruise_propellor_size: '', cruise_rudder: '', cruise_rudder_size: '', cruise_decks: '', 
          cruise_passenger_decks: '', cruise_bridge_height: '', cruise_bridge_water: '', 
          // May not need cruise_shelter_deck , as it is only really used when Titanic was around
          // cruise_shelter_deck: '', 
          cruise_bow_bridge: '', cruise_bow_height: ''
        },
        { id: 12, 
          // Cruise Ship Specifications (Doesn't apply because Sovereign of the Seas was not converted to a Cruise Ship)
          cruise_ship_name: '',
          cruise_years: '', cruise_operator: '', cruise_reg_port: '', conversion_cost: '', cruise_passengers_max: '', 
          cruise_crew_max: '', cruise_gt: '', cruise_height: '', cruise_funnel_hgt: '', cruise_speed: '', 
          cruise_deadweight: '', cruise_lightship: '', cruise_displacement: '', cruise_power: '', cruise_power_rpm: '', 
          cruise_fuel_capacity: '', cruise_fuel_consumption: '', cruise_fresh_water: '', cruise_propellors: '', 
          cruise_propellor_size: '', cruise_rudder: '', cruise_rudder_size: '', cruise_decks: '', 
          cruise_passenger_decks: '', cruise_bridge_height: '', cruise_bridge_water: '', 
          // May not need cruise_shelter_deck , as it is only really used when Titanic was around
          // cruise_shelter_deck: '', 
          cruise_bow_bridge: '', cruise_bow_height: ''
        },
      ]);
    });
};