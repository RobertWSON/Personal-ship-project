exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Evo1').del()
    .then(function () {
      // Inserts seed entries
      return knex('Evo1').insert([
        {
          id: 1,
          ship_name: 'Titanic',
          img: '/images/titaniccover.jpg',
          img_title: "Titanic in Southampton",
          service_years: '1912',

          // To make this work I have to have all the same variables for each id. 
          // Here is the extra variable from Norway Cruise Ship.
          france_service_years: '',
          // Here is the extra variable from Galileo Galilei Cruise Ship.
          early_service_years: '',
          //Here are extra variables from Pacific Princess (Love Boat) Cruise Ship.
          original_name: '',
          early_years: '',
          pacific_princess_years: '',
          pacific_years: '',
          loveboat_final_year: '',

          //Titanic info continued
          build_yard: 'Harland and Wolff, Belfast, Northern Ireland, UK',
          operator: 'White Star line',
          registry_port: 'Liverpool, England, UK',
          cost: '1.5 Million British Pounds',
          imo: '1131428',
          passenger_capacity_full: '2435',
          crew_capacity: '892',
          gross_tonnage: '46329',
          length: '269.1 m (882 feet 9 inches)',
          beam: '28.2 m (92 feet 6 inches)',
          draft: '10.54 m (34 feet 7 inches)',
          height: '53.34 m (175 feet) </br> (Keel to top of funnels)',
          // Here is the extra variable from Galileo Galilei Cruise Ship. 
          funnel_height: '',

          //This space is where I have show more text, for when user wants to see more
          speed: 'Maximum 23 knots (43 km/ hr, 26 mph) </br> Cruising: 21 knots (39 km/ hr, 24 mph)',
          deadweight: '13550 Tons (13767 Tonnes)',
          lightship: '38760 Tons(39380 Tonnes)',
          loaded_displacement: '52310 Tons(53147 Tonnes)',
          power: '46000 Horsepower Imperial (34302.235 kW)',
          power_rpm: '',
          fuel_type: 'coal',
          fuel_capacity: '6611 Tons with an extra 1201 Tons for emergencies or 8000 Tons of Coal',
          fuel_consumption: '825 Tons per day or 600 Tons',
          fresh_water: '14000 gallons (63645.26 litres) per day consumed',
          propellors: 'Two three-blade wing and one-three blade centre propellor',
          propellor_size: '2 outer ones: 23 feet 6 inches (7 m) diameter, Central one: 17 feet (5.2 m) diameter',
          rudder: 'Unbalanced Type (turning area aft of Rudder Stock)',
          rudder_size: '78 feet 8 inches (23.8 m) high </br> 15 feet 3 inches (4.5 m) widest length and 101.25 Tons (102.87 Tonnes)',
          decks: '10',
          accessible_decks: '8',
          bridge_height: '104 feet (31.2 m) Top of bridge to Keel',
          bridge_water: '60 feet 6 inches (18.44 m)', 
          shelter_deck: '51 feet (15.54 m) above waterline',
          bow_bridge: '196 feet 3 inches (59.817 m)',
          bow_height: '24.70 m (81 feet 0.34 inches) or 25.662 m (84 feet 2.3 inches)',

          // To make this work I have to have all the same variables for each id. 
          // Here are the extra variables from Norway Cruise Ship. 
          cruise_ship_name: '',
          norway_years: '',
          norway_operator: '',
          conversion_cost: '',
          norway_passengers: '',
          norway_crew: '',
          norway_gt: '', 
          norway_fuel_capacity: '',
          norway_fuel_consume: '',
          norway_fresh_water: '',
          norway_speed: '',
          norway_passenger_decks: '',
          //This space is where I have show more text, for when user wants to see more, does not apply here though.
          norway_last_name: '',          
          norway_final_year: '',
          norway_final_gt: '',

          // Name changes after Galileo Galilei
          galileo_name: '',
          galileo_years: '',
          galileo_gt: '',
          galileo_passenger_capacity: '',
          // As Meridian Cruise ship
          meridian_name: '',
          meridian_years: '',
          meridian_gt: '',
          meridian_passenger_capacity: '',
          // As Sun Vista Cruise Ship
          gg_last_name: '',
          sunvista_years: '',
          sunvista_gt: '',
          sunvista_passenger_capacity: '',
          ship_horn: '',
          first_para: "The Titanic is the start of where it all begin with travelling in large numbers. The ship was built in Belfast, Northern Ireland and one of the sister ships of the RMS Line, which stands for Royal Mail Steam Line. At the time it was one of the largest passenger ships. Unfortunately it did not end well for it though. On it's maiden voyage travelling from Southhampton to New York it sailed for 10 days and then unfortunately hit an iceberg and that was the start of the disaster.",
          second_para: "However there is a twist to the above theory of why it sank.<br/> It is believed that at the beginning of its voyage, there was a fire that started at the bottom of the ship. The crew who are responsible usually for filling the boilers up with coal, had a new challenge and they were trying to get rid of the fire. The fire caused a distinctive dark mark on the outside hull and it is believed that the bulkheads inside had been weakened by the fire."
          
        },
        {
          id: 2, 
          ship_name: 'Oriana',
          img: '/images/oriana15.jpg',
          img_title: "Oriana in Panama Canal during 1960's",
          service_years: '1959 to 2005',

          // To make this work I have to have all the same variables for each id. 
          // Here is the extra variable from Norway Cruise Ship.
          france_service_years: '',
          // Here is the extra variable from Galileo Galilei Cruise Ship.
          early_service_years: '',
          //Here are extra variables from Pacific Princess (Love Boat) Cruise Ship.
          original_name: '',
          early_years: '',
          pacific_princess_years: '',
          pacific_years: '',
          loveboat_final_year: '',

          //Oriana info continued
          build_yard: 'Vickers-Armstrongs, Barrow-in-Furness, Cumbria, England',
          operator: 'Orient Line and P & O',
          registry_port: 'London, England, UK',
          cost: '12.5 Million British Pounds',
          imo: '5264742',
          passenger_capacity_full: '2184 </br> 688 First Class, </br> 1496 Tourist Class',
          crew_capacity: '899',
          gross_tonnage: '41915',
          length: '245.1 m (804 feet)',
          beam: '29.61 m (97 feet)',
          draft: '9.75 m (32 feet)',
          height: '51.09 m (165 feet)',
          // Here is the extra variable from Galileo Galilei Cruise Ship. 
          funnel_height: '',

          //This space is where I have show more text, for when user wants to see more
          speed: ' Maximum 30.64 knots (56.74 km/ hr, 35.26 mph) </br> Cruising (Service): 27.5 knots (50.93 km/ hr, 31.65 mph)',
          deadweight: '12835 Tons (13041 Tonnes) as built',
          lightship: '26185 Tons(26605.22 Tonnes)',
          loaded_displacement: '39020 Tons(39646.2 Tonnes)',
          power: '80000 Maximum Horsepower Imperial (59656.067 kW) at trials </br> 65000 Horsepower Imperial (48470.549 kW) in service',
          power_rpm: '157.5 rpm (Trials) and 147 rpm (Service)',
          fuel_type: 'Marine Oil',
          fuel_capacity: '6852 tons (6961.96 Tonnes)',
          fuel_consumption: '',
          fresh_water: '',
          propellors: 'Twin Screw Two of them',
          propellor_size: '20 feet (6.096 m) diameter </br>and 29 Tons (29.465 Tonnes) each',
          rudder: '',
          rudder_size: '',
          decks: '',
          accessible_decks: '11',
          bridge_height: '36.935 m (121 feet 2 inch)',
          bridge_water: '27.18 m (89 feet 2 inches)',
          //Shelter Deck from Titanic, need it here with nothing as a variable to make thi work.
          shelter_deck: '',
          bow_bridge: '101.689 m (333 feet 7.5 inches)',
          bow_height: '25.289 m (82 feet 11.6 inches)',

          // To make this work I have to have all the same variables for each id. 
          // Here are the extra variables from Norway Cruise Ship. 
          cruise_ship_name: '',
          norway_years: '',
          norway_operator: '',
          conversion_cost: '',
          norway_passengers: '',
          norway_crew: '',
          norway_gt: '', 
          norway_fuel_capacity: '',
          norway_fuel_consume: '',
          norway_fresh_water: '',
          norway_speed: '',
          norway_passenger_decks: '',
          //This space is where I have show more text, for when user wants to see more, does not apply here though.
          norway_last_name: '',          
          norway_final_year: '',
          norway_final_gt: '',

          // Name changes after Galileo Galilei
          galileo_name: '',
          galileo_years: '',
          galileo_gt: '',
          galileo_passenger_capacity: '',
          // As Meridian Cruise ship
          meridian_name: '',
          meridian_years: '',
          meridian_gt: '',
          meridian_passenger_capacity: '',
          // As Sun Vista Cruise Ship
          gg_last_name: '',
          sunvista_years: '',
          sunvista_gt: '',
          sunvista_passenger_capacity: '',
          ship_horn: '',
          first_para: "The Oriana is the start of where cruising began. </br> She was able to travel through Panama Canal and so it was able to travel to lots of different locations. Because of her deep draft, like a lot of the older cruise ships had, she had to tender in some ports like Pacific Islands. Tender are boats used on the side of a ship to take passenger to a port when the draft on a ship is to deep to go into a port. She was the fastest ship in the P & O (Peninsular and Oriental) fleet and achieved 30.64 knots durinf sea trials in November 1960.",
          second_para: "Oriana's maiden voyage was in December 1960, from Southampton, UK to Sydney, Australia and arrived in Sydney on December 30th 1960. She also visited New Zealand and was a regular on that service for "

        },
        {
          id: 3,
          ship_name: 'Canberra',
          img: '/images/ss-canberra.jpg',
          img_title: "Canberra at sea during the good times",
          service_years: '1961 to 1997',

          // To make this work I have to have all the same variables for each id. 
          // Here is the extra variable from Norway Cruise Ship.
          france_service_years: '',
          // Here is the extra variable from Galileo Galilei Cruise Ship.
          early_service_years: '',
          //Here are extra variables from Pacific Princess (Love Boat) Cruise Ship.
          original_name: '',
          early_years: '',
          pacific_princess_years: '',
          pacific_years: '',
          loveboat_final_year: '',

          //Canberra info continued
          build_yard: 'Harland and Wolff, Belfast, Northern Ireland, UK',
          operator: 'P & O',  
          registry_port: 'London, England, UK',
          cost: '17 Million British Pounds',
          imo: '5059953',
          passenger_capacity_full: '1961–73: 548 First class, 1,690 Tourist class, </br> 1973–97: 1,737 one class as a cruise ship',
          crew_capacity: '1961-73: 900, </br> 1973-97: 795',
          gross_tonnage: '1961: 45270, </br> 1962: 45,733, </br> 1968: 44,807, </br> 1994: 49,073',
          length: '249.51 m (818 feet 6 inches)',
          beam: '31.09 m (102 feet)',
          draft: '10.0 m (32 feet 9.7 inches)',
          height: '55.9 m (183 feet 6 inches) </br> (Keel to top of mast)',
          // Here are the is the extra variable from Galileo Galilei Cruise Ship. 
          funnel_height: '',

          //This space is where I have show more text, for when user wants to see more
          speed: 'Trials: 29.27 knots (54.2 km/h) </br> Service Speeds 1961–73: 27.5 knots (50.9 km/h) </br> 1973–97: 23.50 knots (43.5 km/h)',
          deadweight: '1961 - 1968: 9910, </br> 1968 - 1982: 9754, </br> 1982 - 1997: 8775',
          lightship: '32605 Tons (33128.24 Tonnes) (excluding permanent ballast)', 
          loaded_displacement: '1961 - 1968: 42515 Tons (43197.24 Tonnes), </br> 1968 - 1982: 42359 Tons (43038.782 Tonnes), </br> 1982 - 1997: 41380 Tons (42044.071 Tonnes)',
          power: '85000 Horsepower Imperial (as built) </br>1973 Onwards: 56000 Horsepower Imperial',
          power_rpm: '',
          fuel_type:'Marine Oil',
          fuel_capacity: '5150 Tonnes',
          fuel_consumption: '250 to 300 Tonnes per day',
          fresh_water: '2224 Tonnes </br> or 2224000 Litres',
          propellors: '',
          propellor_size: ' diameter',
          rudder: '',
          rudder_size: '',
          decks: '',
          accessible_decks: '',
          bridge_height: '31.7 m (104 feet)',
          bridge_water: '41.7 m (136 feet 9.7 inches)',
          //Shelter Deck from Titanic, need it here with nothing as a variable to make thi work.
          shelter_deck: '',
          bow_bridge: '82.22 m (269 feet 9 inches)',
          bow_height: '27.66 m (90 feet 9 inches)',

          // To make this work I have to have all the same variables for each id. 
          // Here are the extra variables from Norway Cruise Ship. 
          cruise_ship_name: '',
          norway_years: '',
          norway_operator: '',
          conversion_cost: '',
          norway_passengers: '',
          norway_crew: '',
          norway_gt: '', 
          norway_fuel_capacity: '',
          norway_fuel_consume: '',
          norway_fresh_water: '',
          norway_speed: '',
          norway_passenger_decks: '',
          //This space is where I have show more text, for when user wants to see more, does not apply here though.
          norway_last_name: '',          
          norway_final_year: '',
          norway_final_gt: '',

          // Name changes after Galileo Galilei
          galileo_name: '',
          galileo_years: '',
          galileo_gt: '',
          galileo_passenger_capacity: '',
          // As Meridian Cruise ship
          meridian_name: '',
          meridian_years: '',
          meridian_gt: '',
          meridian_passenger_capacity: '',
          // As Sun Vista Cruise Ship
          gg_last_name: '',
          sunvista_years: '',
          sunvista_gt: '',
          sunvista_passenger_capacity: '',
          ship_horn: '',
          first_para: "The Canberra along with the Oriana are the first ships to start off the famous P & O cruise line. The P & O Line started off as P & O Orient Line, but soon was changed to just P & O. At first Canberra was just a passenger ship used to carry passenger from one country to another. It wasn't until 1973, that she began year round cruising between UK and Australia. In 1982 it took on a different operation and was used by the British government to carry troops to the Falkland Islands. After this Canberra was used as a cruise ship again in Australia and the Pacific Islands until she retired in 1997.",
          second_para: ""

        },
        {
          id: 4,
          ship_name: 'France',
          img: '/images/Evolution/France/france_1961_1.jpg',
          img_title: "France in Home port for the first time in 1961",

          //Service Years for other ships, no data her though because France has it's own.
          service_years: '',    
          //France info 
          france_service_years: '1961 to 1974 </br> (laid up 1974 to 1979)',
          // To make this work I have to have all the same variables for each id. 
          // Here is the extra variable from Galileo Galilei Cruise Ship.
          early_service_years: '',
          //Here are extra variables from Pacific Princess (Love Boat) Cruise Ship.
          original_name: '',
          early_years: '',
          pacific_princess_years: '',
          pacific_years: '',
          loveboat_final_year: '',

          //France info continued
          build_yard: 'Chantiers de l Atlantique, Saint-Nazaire, France', 
          operator: 'French Line (Compagnie Generale Transatlantique',
          registry_port: 'Le Havre, France',
          cost:'US $80 Million or 30 Million British Pounds </br> (with 7 Million Pounds from French Government)',
          imo: '5119143',
          passenger_capacity_full: '2033 Maximum, </br> 1st Class: 407 to 590, </br> 2nd Class: 1271 to 1637', 
          crew_capacity:'1167',
          gross_tonnage: '66347.72',
          length: '315.51 m (1035 feet)',
          beam: '33.7 m (110 feet 7 inches)',
          draft: '10.49 m (34 feet 5 inches)',
          height: '67.66 m (222 feet)', 
          // Here is the extra variable from Galileo Galilei Cruise Ship. 
          funnel_height: '', 

          //This space is where I have show more text, for when user wants to see more
          speed: 'Trails Maximum: 35 Knots (64.82 km/h), </br> Service Speed: 30 Knots (55.56 km/h)',
          deadweight: '13760 Tons (13980.822 Tonnes)',
          lightship: '43847 Tons (44543.549 Tonnes)',
          loaded_displacement: '57607 Tons (58524.37 Tonnes)',
          power: '160000 Horsepower Imperial (119312 kW)',
          power_rpm: '',
          fuel_type: 'Marine Oil',
          fuel_capacity: '8000 Tons (8128.385 Tonnes) or maybe 9000 Tons',
          fuel_consumption: '800 Tons per day (812.838 Tonnes) </br>or 750 Tonnes per day',
          fresh_water: ' Tonnes </br> or  Litres',
          propellors: '4',
          propellor_size: ' diameter',
          rudder: '',
          rudder_size: '',
          decks: '',
          accessible_decks: '12',
          bridge_height: '',
          bridge_water: '',
          //Shelter Deck from Titanic, need it here with nothing as a variable to make thi work.
          shelter_deck: '',
          bow_bridge: '75 m (246 feet)',
          bow_height: '',      
          
          //This space is where I have show more text, for when user wants to see more
          cruise_ship_name: 'Norway',
          norway_years: '1980 to 2003',
          norway_operator: 'Norwegian Cruise Line',
          conversion_cost: 'US $150 Million',
          norway_passengers: '',
          norway_crew: '',
          norway_gt: '1980-1990: 70202.19 </br> 1990-1994: 74200 </br> 1994-2003: 76049', 
          norway_fuel_capacity: '4424 Tonnes',
          norway_fuel_consume: '250 Tons per day (254.012 Tonnes) or </br>250 Tonnes per day',
          norway_fresh_water: '2555 Tons (2596 Tonnes)</br> or 2596000 Litres',
          norway_speed: 'Service: 17.8 Knots (32.97 km/h), </br> Maximum: 25 Knots (46.3 km/h)',
          norway_passenger_decks: '1980: 13 decks </br> 1990: 15 decks',
        
          //This space is where I have show more text, for when user wants to see more
          norway_last_name: 'Blue Lady',          
          // changed_name: 'Blue Lady',
          norway_final_year: '2004',
          norway_final_gt: '76049',

          // Name changes after Galileo Galilei
          galileo_name: '',
          galileo_years: '',
          galileo_gt: '',
          galileo_passenger_capacity: '',
          // As Meridian Cruise ship
          meridian_name: '',
          meridian_years: '',
          meridian_gt: '',
          meridian_passenger_capacity: '',
          // As Sun Vista Cruise Ship
          gg_last_name: '',
          sunvista_years: '',
          sunvista_gt: '',
          sunvista_passenger_capacity: '',
          ship_horn: '',
          first_para: "The SS France was a steam ship, hence the intials SS, that originally operated for the French Line. <br/>As can be seen in the photo above she originally had a black and white hull (this is the main structure of the ship). <br/> <br/>The <strong>above</strong> photo was taken when she was entering her home port of Le Havre, France for the very first time on 23rd of November 1961. <br>Her hull colour had changed to <strong>green</strong> during the mid to late 1960's and this rare photo below, shows her departing from Southhampton with her green hull.",
          second_para: ""

        },
        {
          id: 5,
          ship_name: 'Galileo Galilei',
          img: '/images/Evolution/Galileo Galilei/Galileo03.jpg',
          img_title: "Original Galileo Galilei at sea",

          //Service Years for other ships, no data her though because Galileo Galilei has it's own.
          service_years: '',
          // To make this work I have to have all the same variables for each id. 
          // Here is the extra variable from Norway Cruise Ship.
          france_service_years: '',
          //Galileo Galilei own info
          early_service_years: '1963 to 1984',
          //Here are extra variables from Pacific Princess (Love Boat) Cruise Ship.
          original_name: '',
          early_years: '',
          pacific_princess_years: '',
          pacific_years: '',
          loveboat_final_year: '',

          //Galileo Galilei continued
          build_yard: '	Cantieri Riuniti dell Adriatico, Monfalcone, Italy', 
          operator: '1963-1979: Lloyd Triestino </br> 1979-1983: Italia Crociere </br> 1983-1990: Chandris Cruises </br> 1990-1997: Fantasy Cruises </br> 1997-1999: Sun Cruises',
          registry_port: '1963-1983:  Genoa, Italy </br> 1983-1990: Panama City, Panama </br> 1990-1999: Nassau, Bahamas',
          cost:'',
          imo: '5411254',
          passenger_capacity_full: '1750 </br> (156 first class, 1,594 tourist class)', 
          crew_capacity:'Possibly same as sister ship 443',
          gross_tonnage: '27888',
          length: '213.65 m (700 feet 11 inches)',
          beam: '28.71 m (94 feet 2 inches)',
          draft: '8.60 m (28 feet 3 inches)',
          height: '54.05 m (177 feet 4 inches) </br> (Keel to top of mast)',
          funnel_height: '45.11 m (148 feet) </br>to top of solid structure',

          //This space is where I have show more text, for when user wants to see more
          speed: 'Trials: 27.4 Knots (50.74 kn/h)</br> Service: 25 Knots (46.30 km/h) or 25.5 knots (47.23 km/h)',
          deadweight: '9486 Tons',
          lightship: 'Maybe 19045, as sister ship Costa Riviera is 19028',
          loaded_displacement: '',
          power: '44000 Horsepower Imperial (32810.833 kW)',
          power_rpm: '',
          fuel_type: 'Marine Oil',
          fuel_capacity: '',
          fuel_consumption: '',
          fresh_water: '',
          propellors: '',
          propellor_size: '',
          rudder: '',
          rudder_size: '',
          decks: '',
          accessible_decks: '',
          bridge_height: '31.707 m (104 feet 0.3 inches)',
          bridge_water: '23.107 m (75 feet 9.7 inches)',
          //Shelter Deck from Titanic, need it here with nothing as a variable to make thi work.
          shelter_deck: '',
          bow_bridge: '63.839 m (209 feet 5.4 inches)',
          bow_height: '23.833 m (78 feet 2.3 inches)',

          // To make this work I have to have all the same variables for each id. 
          // Here are the extra variables from Norway Cruise Ship. 
          cruise_ship_name: '',
          norway_years: '',
          norway_operator: '',
          conversion_cost: '',
          norway_passengers: '',
          norway_crew: '',
          norway_gt: '', 
          norway_fuel_capacity: '',
          norway_fuel_consume: '',
          norway_fresh_water: '',
          norway_speed: '',
          norway_passenger_decks: '',
          //This space is where I have show more text, for when user wants to see more, does not apply here though.
          norway_last_name: '',          
          norway_final_year: '',
          norway_final_gt: '',

          //This space is where I have show more text, for when user wants to see more

          //Maybe Galileo years 1979 to 1983 with Italia Crociere and 1983 to 1990 with Chandris Fantasy Cruises
          galileo_name: 'Galileo',
          galileo_years: '1984 to 1990',
          galileo_gt: '27888 (same as built)',
          galileo_passenger_capacity: '1262',


          meridian_name: 'meridian',
          meridian_years: '1990 to 1997',
          meridian_gt: '30440',
          meridian_passenger_capacity: '1428',

          gg_last_name: 'Sun Vista',
          sunvista_years: '1997 to 1999',
          sunvista_gt: '30440',
          sunvista_passenger_capacity: '1428',
          ship_horn: '',
          first_para: "The Galileo Galilei is an Italian built ship, exclusively meant for cruising all the way through it's career.",
          second_para: ""

        },
        {
          id: 6,
          ship_name: 'Pacific Princess',
          img: '/images/003410.jpg',
          img_title: "Love Boat Pacific Princess at sea",

          //Service Years for other ships, no data her though because Pacific Princess has it's own.
          service_years: '',
          // To make this work I have to have all the same variables for each id. 
          // Here is the extra variable from Norway Cruise Ship.
          france_service_years: '',
          // Here is the extra variable from Galileo Galilei Cruise Ship.
          early_service_years: '',

          //Pacific Princess info
          original_name: 'Sea Venture',
          early_years: '1971 to 1975',
          pacific_princess_years: '1975 to 2002',
          pacific_years: '2002 to 2013',
          loveboat_final_year: '2013',
          build_yard: 'Nordseewerke, emden, West Germany',
          operator: '1971-1975: Flagship Cruises, </br> 1975-2002: Princess Cruises, </br> 2002-2008: Pullmantur, </br> 2008-2013: Quail Cruises',
          registry_port: '1971-1975: Oslo, Norway, </br> 1975-2002: London, UK, </br>, 2002-2012: Nassau, Bahamas, </br> 2012-2013: Lome, Togo',
          cost: 'US $25 Million',
          imo: '7018563',
          passenger_capacity_full: '1971-1975: 767, </br> 1975-2002: 626, </br> 2002-2013: 750',
          crew_capacity: '',
          gross_tonnage: '1971-1978: 19903, </br> 1978-1994: 20636, </br> 1994-2013: 20186',
          length: '168.74 m (553 feet 7.3 inches)',
          beam: '24.59 m (80 feet 8 inches)',
          draft: '7.70 m (25 feet 3 inches)',
          height: '46.53 m (151 feet 10 inches) </br> (Keel to top of mast)',
          // Here is the extra variable from Galileo Galilei Cruise Ship. 
          funnel_height: '',

          //This space is where I have show more text, for when user wants to see more
          speed: 'Maximum 19 knots (35.2 km/ hr, 21.86 mph) </br> Cruising: 18 knots (33.34 km/ hr, 20.71 mph)',
          deadweight: 'As Built: 3390 Tons (3444.4 Tonnes), </br> May 1994 Onwards: 2936 Tonnes',
          lightship: '12880 Tons (13086.70 Tonnes) or 13595 Tonnes',
          loaded_displacement: '16270 Tons (16531.10 Tonnes)',
          power: '18000 Horsepower Imperial (13240 kW)',
          power_rpm: '',
          fuel_type: 'Marine Oil',
          fuel_capacity: '1977 Tons (2008.727 Tonnes)',
          fuel_consumption: '100 Tonnes per day',
          fresh_water: '1113 Tons (1130.862 Tonnes)</br> or 1130862 Litres',
          propellors: 'Two controllable pitch propellors',
          propellor_size: '12 feet 11.4 inches (3.947 m) diameter each',
          rudder: '',
          rudder_size: '',
          decks: '',
          accessible_decks: '7',
          bridge_height: '80 feet 3 inches (24.463 m) Bottom of bridge to Keel',
          bridge_water: '55 feet (16.767 m)',
          //Shelter Deck from Titanic, need it here with nothing as a variable to make thi work.
          shelter_deck: '',
          bow_bridge: '41.906 m (137 feet 5.8 inches)',
          bow_height: '18.87 m (61 feet 11.1 inches)',
          
          // To make this work I have to have all the same variables for each id. 
          // Here are the extra variables from Norway Cruise Ship. 
          cruise_ship_name: '',
          norway_years: '',
          norway_operator: '',
          conversion_cost: '',
          norway_passengers: '',
          norway_crew: '',
          norway_gt: '', 
          norway_fuel_capacity: '',
          norway_fuel_consume: '',
          norway_fresh_water: '',
          norway_speed: '',
          norway_passenger_decks: '',
          //This space is where I have show more text, for when user wants to see more, does not apply here though.
          norway_last_name: '',          
          norway_final_year: '',
          norway_final_gt: '',

          // Name changes after Galileo Galilei
          galileo_name: '',
          galileo_years: '',
          galileo_gt: '',
          galileo_passenger_capacity: '',
          // As Meridian Cruise ship
          meridian_name: '',
          meridian_years: '',
          meridian_gt: '',
          meridian_passenger_capacity: '',
          // As Sun Vista Cruise Ship
          gg_last_name: '',
          sunvista_years: '',
          sunvista_gt: '',
          sunvista_passenger_capacity: '',
          ship_horn: '/videos/classics/Pacific Princess/Bermuda-PacificPrincess(ex-Love Boat)ShipsWhistle.mp4',
          first_para: "The Pacific Princess is one of the longest serving cruise ships from 1970's, having latest 43 years. <br/>She was originally built as Sea Venture and changed her name to Pacific Princess in 1975, in time before the TV show Love Boat, that aired in 1977.",
          second_para: ""
        }
      ]);
    });
};
