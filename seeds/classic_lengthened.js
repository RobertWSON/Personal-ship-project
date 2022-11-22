
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('classic_lengthened').del()
    .then(function () {
      // Inserts seed entries
      return knex('classic_lengthened').insert([
        {id: 1, 
                // Ship Specifications after Lengthening (Does not apply for Fairstar Ship)
                // Originally called name_after_lengthening: '',
                name_after_lengthened: '', 
                // I need these ship names to show in lengthened details section for when it was lengthened  
                second_lengthen_name: '', second_lengthen_name_yrs: '',
                third_lengthen_name: '', third_lengthen_name_yrs: '', 
                fourth_lengthen_name: '', fourth_lengthen_name_yrs: '',
                fifth_lengthen_name: '', fifth_lengthen_name_yrs: '',
                sixth_lengthen_name: '', sixth_lengthen_name_yrs: '',
                seventh_lengthen_name: '', seventh_lengthen_name_yrs: '',
                eighth_lengthen_name: '', eighth_lengthen_name_yrs: '',
                ninth_lengthen_name: '', ninth_lengthen_name_yrs: '',
                last_lengthen_name: '', last_lengthen_name_yrs: '',
                // Lengthend Ship Details continued
                lengthened_service_yrs: '', lengthened_operator: '', lengthened_reg_port: '', lengthened_cost: '',
                lengthened_passengers: '', lengthened_crew: '', lengthened_gt: '', lengthened_length: '',
                lengthened_beam: '', lengthened_draft: '', lengthened_deadweight: '', lengthened_lightship: '',
                lengthened_displacement: '', lengthened_funnel_hgt: '', lengthened_speed: '', lengthened_power: '',
                lengthened_power_rpm: '', lengthened_fuel_capacity: '', lengthened_fuel_consumption: '',
                lengthened_propellors: '', lengthened_propellor_size: '', lengthened_rudder: '', 
                lengthened_rudder_size: '', lengthened_decks: '', lengthened_passenger_decks: '', 
                lengthened_bridge_height: '', lengthened_bridge_water: '', lengthened_bow_bridge: '', 
                lengthened_bow_height: ''
        },
        {id: 2, 
                // Ship Specifications after Lengthening (Does not apply for Sea Princess Ship)
                name_after_lengthened: '',
                // I need these ship names to show in lengthened details section for when it was lengthened  
                second_lengthen_name: '', second_lengthen_name_yrs: '',
                third_lengthen_name: '', third_lengthen_name_yrs: '', 
                fourth_lengthen_name: '', fourth_lengthen_name_yrs: '',
                fifth_lengthen_name: '', fifth_lengthen_name_yrs: '',
                sixth_lengthen_name: '', sixth_lengthen_name_yrs: '',
                seventh_lengthen_name: '', seventh_lengthen_name_yrs: '',
                eighth_lengthen_name: '', eighth_lengthen_name_yrs: '',
                ninth_lengthen_name: '', ninth_lengthen_name_yrs: '',
                last_lengthen_name: '', last_lengthen_name_yrs: '',
                // Lengthend Ship Details continued
                lengthened_service_yrs: '', lengthened_operator: '', lengthened_reg_port: '', lengthened_cost: '',
                lengthened_passengers: '', lengthened_crew: '', lengthened_gt: '', lengthened_length: '',
                lengthened_beam: '', lengthened_draft: '', lengthened_deadweight: '', lengthened_lightship: '',
                lengthened_displacement: '', lengthened_funnel_hgt: '', lengthened_speed: '', lengthened_power: '',
                lengthened_power_rpm: '', lengthened_fuel_capacity: '', lengthened_fuel_consumption: '',
                lengthened_propellors: '', lengthened_propellor_size: '', 
                lengthened_rudder: '', lengthened_rudder_size: '',lengthened_decks: '', lengthened_passenger_decks: '', 
                lengthened_bridge_height: '', lengthened_bridge_water: '', lengthened_bow_bridge: '', 
                lengthened_bow_height: ''
        },
        {id: 3, 
                // Ship Specifications after Lengthening (Does not apply for Queen Elizabeth 2 Ship)
                name_after_lengthened: '',
                // I need these ship names to show in lengthened details section for when it was lengthened  
                second_lengthen_name: '', second_lengthen_name_yrs: '',
                third_lengthen_name: '', third_lengthen_name_yrs: '', 
                fourth_lengthen_name: '', fourth_lengthen_name_yrs: '',
                fifth_lengthen_name: '', fifth_lengthen_name_yrs: '',
                sixth_lengthen_name: '', sixth_lengthen_name_yrs: '',
                seventh_lengthen_name: '', seventh_lengthen_name_yrs: '',
                eighth_lengthen_name: '', eighth_lengthen_name_yrs: '',
                ninth_lengthen_name: '', ninth_lengthen_name_yrs: '',
                last_lengthen_name: '', last_lengthen_name_yrs: '',
                // Lengthend Ship Details continued
                lengthened_service_yrs: '', lengthened_operator: '', lengthened_reg_port: '', lengthened_cost: '',
                lengthened_passengers: '', lengthened_crew: '', lengthened_gt: '', lengthened_length: '',
                lengthened_beam: '', lengthened_draft: '', lengthened_deadweight: '', lengthened_lightship: '',
                lengthened_displacement: '', lengthened_funnel_hgt: '', lengthened_speed: '', lengthened_power: '',
                lengthened_power_rpm: '', lengthened_fuel_capacity: '', lengthened_fuel_consumption: '',
                lengthened_propellors: '', lengthened_propellor_size: '', 
                lengthened_rudder: '', lengthened_rudder_size: '', lengthened_decks: '', 
                lengthened_passenger_decks: '', lengthened_bridge_height: '', lengthened_bridge_water: '', 
                lengthened_bow_bridge: '', lengthened_bow_height: ''
        },
        {id: 4, 
                // Song of Norway was Lengthened as a Cruise Ship, so it needs Ship Specs on this 
                // It was first Royal Caribbean's first cruise ship and the first cruise ship ever to be 
                // lengthened. 
                name_after_lengthened: 'Song of Norway (1978 to 1997',
                // I need these ship names to show in lengthened details section for when it was lengthened  
                second_lengthen_name: 'Sundream', second_lengthen_name_yrs: '1997 to 2004',
                third_lengthen_name: 'Dream Princess', third_lengthen_name_yrs: '2004 to 2006', 
                fourth_lengthen_name: 'Dream', fourth_lengthen_name_yrs: '2006 to 2007',
                fifth_lengthen_name: 'Clipper Pearl', fifth_lengthen_name_yrs: '2007 to 2008',
                sixth_lengthen_name: 'Clipper Pacific', sixth_lengthen_name_yrs: '2008 to 2009',
                seventh_lengthen_name: 'Festival', seventh_lengthen_name_yrs: '2009 to 2010',
                eighth_lengthen_name: 'Ocean Pearl', eighth_lengthen_name_yrs: '2010 to 2011',
                ninth_lengthen_name: '', ninth_lengthen_name_yrs: '',
                last_lengthen_name: 'Formosa Queen', last_lengthen_name_yrs: '2012 to 2013',
                // Lengthend Ship Details continued
                lengthened_service_yrs: '1978 to 2013', lengthened_operator: '', lengthened_reg_port: '', 
                lengthened_cost: '', lengthened_passengers: '1196', lengthened_crew: '423', lengthened_gt: '22945', 
                lengthened_length: '194.32 m (637 feet 6.4 inches)', lengthened_beam: '24 m (78 feet 8.8 inches)', 
                lengthened_draft: 'Maybe now 7 m (22 feet 11.6 inches)', lengthened_deadweight: '4,525 Tonnes', 
                lengthened_lightship: '', lengthened_displacement: '', lengthened_funnel_hgt: '', 
                lengthened_speed: '', lengthened_power: 'Same as built', lengthened_power_rpm: 'Same as built', 
                lengthened_fuel_capacity: '', lengthened_fuel_consumption: '', lengthened_propellors: '', 
                lengthened_propellor_size: '', lengthened_rudder: '', lengthened_rudder_size: '', 
                lengthened_decks: '', lengthened_passenger_decks: '', lengthened_bridge_height: '', 
                lengthened_bridge_water: '', lengthened_bow_bridge: '', lengthened_bow_height: ''
        },
        {id: 5, 
                // Royal Viking Sky was lengthened in 1982, so it needs ship specs on this
                // At the time of lengthening it was with Royal Vikng Line (a Norwegian Cruise Line)
                name_after_lengthened: 'Royal Viking Sky (1982 to 1991)', 
                // I need these ship names to show in lengthened details section for when it was lengthened  
                second_lengthen_name: '', second_lengthen_name_yrs: '',
                third_lengthen_name: '', third_lengthen_name_yrs: '', 
                fourth_lengthen_name: '', fourth_lengthen_name_yrs: '',
                fifth_lengthen_name: '', fifth_lengthen_name_yrs: '',
                sixth_lengthen_name: '', sixth_lengthen_name_yrs: '',
                seventh_lengthen_name: '', seventh_lengthen_name_yrs: '',
                eighth_lengthen_name: '', eighth_lengthen_name_yrs: '',
                ninth_lengthen_name: '', ninth_lengthen_name_yrs: '',
                last_lengthen_name: '', last_lengthen_name_yrs: '',
                // Lengthend Ship Details continued
                lengthened_service_yrs: '1982 to 2021', lengthened_operator: '', lengthened_reg_port: '', 
                lengthened_cost: '', lengthened_passengers: '900', lengthened_crew: '320', lengthened_gt: '28372', 
                lengthened_length: '205.47 m (674 feet 1.37 inches)', lengthened_beam: '25.19 m (82 feet 7.73 inches)', 
                lengthened_draft: '7.55 m (24 feet 9.25 inches)', lengthened_deadweight: '5956 Tonnes', 
                lengthened_lightship: '15760 Tonnes',
                lengthened_displacement: '21716 Tonnes', lengthened_funnel_hgt: '', 
                lengthened_speed: '22 knots (41 km/ hr or 25 mph)',  
                lengthened_power: '14,000 kW (18,774.29 Horsepower)', lengthened_power_rpm: '', 
                lengthened_fuel_capacity: '', lengthened_fuel_consumption: '',
                lengthened_propellors: '', lengthened_propellor_size: '', lengthened_rudder: '', 
                lengthened_rudder_size: '', lengthened_decks: '', lengthened_passenger_decks: '', 
                lengthened_bridge_height: '', lengthened_bridge_water: '', lengthened_bow_bridge: '', 
                lengthened_bow_height: ''
        },
        {id: 6, 
                // Ship Specifications after Lengthening (Doesn't apply as Sovereign of the Seas was not lengthened)
                name_after_lengthened: '',
                // I need these ship names to show in lengthened details section for when it was lengthened  
                second_lengthen_name: '', second_lengthen_name_yrs: '',
                third_lengthen_name: '', third_lengthen_name_yrs: '', 
                fourth_lengthen_name: '', fourth_lengthen_name_yrs: '',
                fifth_lengthen_name: '', fifth_lengthen_name_yrs: '',
                sixth_lengthen_name: '', sixth_lengthen_name_yrs: '',
                seventh_lengthen_name: '', seventh_lengthen_name_yrs: '',
                eighth_lengthen_name: '', eighth_lengthen_name_yrs: '',
                ninth_lengthen_name: '', ninth_lengthen_name_yrs: '',
                last_lengthen_name: '', last_lengthen_name_yrs: '',
                // Lengthend Ship Details continued
                lengthened_service_yrs: '', lengthened_operator: '', lengthened_reg_port: '', lengthened_cost: '',
                lengthened_passengers: '', lengthened_crew: '', lengthened_gt: '', lengthened_length: '',
                lengthened_beam: '', lengthened_draft: '', lengthened_deadweight: '', lengthened_lightship: '',
                lengthened_displacement: '', lengthened_funnel_hgt: '', lengthened_speed: '', lengthened_power: '',
                lengthened_power_rpm: '', lengthened_fuel_capacity: '', lengthened_fuel_consumption: '',
                lengthened_propellors: '', lengthened_propellor_size: '', lengthened_rudder_size: '',
                lengthened_decks: '', lengthened_passenger_decks: '', lengthened_bridge_height: '', 
                lengthened_bridge_water: '', lengthened_bow_bridge: '', lengthened_bow_height: ''
        }
      ]);
    });
};
