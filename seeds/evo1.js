exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Evo1').del()
    .then(function () {
      // Inserts seed entries
      return knex('Evo1').insert([
        {
          id: 1,
          classic_ship_name: 'Titanic',
          // ship_name: 'Titanic',
          img: '/images/titaniccover.jpg',
          img_title: "Titanic in Southampton",
          img_trials: '/images/Evolution/Titanic/sea-trials.jpg',
          img_trials_title: 'Titanic sea trials at Belfast, Northern Ireland April 2, 1912',
          img_early: '/images/Evolution/Titanic/titanic-sinking-photos.jpg',
          img_early_title: 'Titanic near dock at Belfast, Northern Ireland soon before starting its maiden voyage',
          img_1stcruise: '/images/Evolution/Titanic/titanic-dock.jpg',
          img_1stcruise_title: 'Titanic departing Southampton, England on April 10, 1912',
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
          height: '53.34 m (175 feet) | (Keel to top of funnels)',
          // Here is the extra variable from Galileo Galilei Cruise Ship. 
          funnel_height: '',

          //This space is where I have show more text, for when user wants to see more
          /*
          speed: {
            maximum: 23 knots (43 km/ hr, 26 mph),
            cruising: 21 knots (39 km/ hr, 24 mph)
          }

          const newResult = speed.split('|')
          newResult = ['Maximum 23 knots (43 km/ hr, 26 mph)', '21 knots (39 km/ hr, 24 mph)']
          */
          speed: 'Maximum 23 knots (43 km/ hr, 26 mph) | Cruising: 21 knots (39 km/ hr, 24 mph)',
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
          propellor_size: '2 outer ones: 23 feet 6 inches (7 m) diameter | Central one: 17 feet (5.2 m) diameter',
          rudder: 'Unbalanced Type (turning area aft of Rudder Stock)',
          rudder_size: '78 feet 8 inches (23.8 m) high | 15 feet 3 inches (4.5 m) widest length and 101.25 Tons (102.87 Tonnes)',
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
          ship_horn: '/videos/classics/Titanic/Titanic_horn.mp4',
          early_1st_para: "The Titanic is the start of where it all begin with travelling in large numbers. The ship was built in Belfast, Northern Ireland and one of the sister ships of the RMS Line, which stands for Royal Mail Steam Line. At the time it was one of the largest passenger ships. Unfortunately it did not end well for it though. On it's maiden voyage travelling from Southhampton to New York it sailed for 10 days and then unfortunately hit an iceberg and that was the start of the disaster.  Below Titanic is doing her sea trials which were delayed by a day due to bad weather and she attained a maximum speed of 23 knots (43 km/ hr or 26 mph). Her sea trials began at 6am on Tuesday, April 2nd 1912 lasting 12 hours, two days after her fitting out was finished and eight days before leaving Southampton on the one and only maiden voyage.",
          early_2nd_para: "After Titanics sea trials, she berthed near her dock in Belfast, as can be seen in the photo below.",
          cruise_1st_para: "However there is a twist to the above theory of why it sank.<br/> It is believed that in getting ready to sail, there was a fire that started at the bottom of the ship. The crew who are responsible usually for filling the boilers up with coal, had a new challenge and they were frantically trying to get rid of the fire. The fire caused a distinctive dark mark on the outside hull and it is believed that the bulkheads inside had been weakened by the fire. Titanic then set sail from Belfast to Southampton and the crew were still getting rid of the fire before her maiden voyage, which they did. The photo below shows her leaving Southampton on her maiden voyage and this photo gives you great memories of the segment from the movie when she left Southampton. You may have noticed that this is about an evolution of cruise ships and there were no cruise ships during when the Titanic was around in 1912, back then the were called passenger liners. I feel that it is an important ship in history because it has the beginnings of the idea that lots of passenger can travel on a ship a long distance",
          cruise_2nd_para: '',
          mem_1st_para: '',
          mem_2nd_para: '',
          plans_para: '',
          final_1st_para: 'As much as we would have liked it to, the Titanic did not unfortunately have a very good ending. It sank within 2 hour 40 minutes with 1500 people losing there lives and survivors. As can be seen in the video below the survivial rate was First Class Passengers 60%, Second Class Passengers 42%, Third Class Passengers 25% and less than 25% of the crew.',
          final_2nd_para:'The rivets to hold the hull plates together was made of steel that was not the strongest it should have been at the time. Also the bulkheads were not built tall enough to make them completely water tight. When the disaster happened, the water filled up in the bulkhead compartment (this is the room between bulkheads) and the water flowed over one bulkhead into another compartment. When several compartments were filled the weight of the water pushed the bow further down in the water. Eventually the front section by the bow broke because of the stress from the water, along with the front funnel falling off and the stern section sank afterwards. On a positive side a lot was learnt from the disaster in terms of building ships. Ships no longer have rivets to hold steel plates for the hull together, they are now welded and bolted together. The hull for the Titanic was a single hull, now you can have ships that have a double hull, so there are two plates and this provides more protection against collisions. A lot of ships get recorded as being scrapped at the end of their service, but Titanic like the minority is recorded as being a Total Loss. She really is a total loss because she is 3.8 km (2.37 miles or 12,500 feet) under water, with both sections being about 600m or a third of a mile apart. Even though the ship failed in terms of here crossing to get to New York City, she is still a great legendary ship that is is to be remembered well and set up good things to come in terms of cruise shipping.',

          // cruise_1st_para: "It is believed that in getting her ready to sail a fire had started near the boiler rooms and the crew hafd to frantically get rid of it. Titanic then set sail from Belfast to Southampton and the crew were still getting rid of the fire before her maiden voyage,which they did. The photo below shows her leaving Southampton on her maiden voyage and this photo gives you great memories of the segment from the movie when she left Southampton.",
          // first_para: "The Titanic is the start of where it all begin with travelling in large numbers. The ship was built in Belfast, Northern Ireland and one of the sister ships of the RMS Line, which stands for Royal Mail Steam Line. At the time it was one of the largest passenger ships. Unfortunately it did not end well for it though. On it's maiden voyage travelling from Southhampton to New York it sailed for 10 days and then unfortunately hit an iceberg and that was the start of the disaster.",
          // second_para: "However there is a twist to the above theory of why it sank.<br/> It is believed that at the beginning of its voyage, there was a fire that started at the bottom of the ship. The crew who are responsible usually for filling the boilers up with coal, had a new challenge and they were trying to get rid of the fire. The fire caused a distinctive dark mark on the outside hull and it is believed that the bulkheads inside had been weakened by the fire.",
          
          ship_plans: '/images/Evolution/Titanic/d1my6c8-6d48eae7-255d-4e4d-bc8a-ff9ba1b0c417.jpg',
          ship_plans_cont: '',
          early_video: '/videos/classics/Titanic/The Sea Trials of the R.M.S. Titanic.mp4', 
          cruise_video: '',
          mem_video: '/videos/classics/Titanic/Deconstructing Titanic History.mp4'
        
        },
        {
          id: 2, 
          classic_ship_name: 'Oriana',
          // ship_name: 'Oriana',
          img: '/images/oriana15.jpg',
          img_title: "Oriana in Panama Canal during 1960's",
          img_trials: '',
          img_trials_title: '',
          img_early: '/images/oriana15.jpg',
          img_early_title: '',
          img_1stcruise: '',
          img_1stcruise_title: '',
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
          passenger_capacity_full: '2184 | 688 First Class | 1496 Tourist Class',
          crew_capacity: '899',
          gross_tonnage: '41915',
          length: '245.1 m (804 feet)',
          beam: '29.61 m (97 feet)',
          draft: '9.75 m (32 feet)',
          height: '51.09 m (165 feet)',
          // Here is the extra variable from Galileo Galilei Cruise Ship. 
          funnel_height: '',

          //This space is where I have show more text, for when user wants to see more
          speed: ' Maximum 30.64 knots (56.74 km/ hr, 35.26 mph) | Cruising (Service): 27.5 knots (50.93 km/ hr, 31.65 mph)',
          deadweight: '12835 Tons (13041 Tonnes) as built',
          lightship: '26185 Tons(26605.22 Tonnes)',
          loaded_displacement: '39020 Tons(39646.2 Tonnes)',
          power: '80000 Maximum Horsepower Imperial (59656.067 kW) at trials | 65000 Horsepower Imperial (48470.549 kW) in service',
          power_rpm: '157.5 rpm (Trials) and 147 rpm (Service)',
          fuel_type: 'Marine Oil',
          fuel_capacity: '6852 tons (6961.96 Tonnes)',
          fuel_consumption: '',
          fresh_water: '',
          propellors: 'Twin Screw Two of them',
          propellor_size: '20 feet (6.096 m) diameter | and 29 Tons (29.465 Tonnes) each',
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
          ship_horn: '/videos/classics/Oriana/Oriana_last_cruise_departure_from_under_Sydney_Harbour_Bridge.mp4',
          //originally first_para:
          early_1st_para: "The Oriana is the start of where cruising began. </br> She was able to travel through Panama Canal and so it was able to travel to lots of different locations. Because of her deep draft, like a lot of the older cruise ships had, she had to tender in some ports like Pacific Islands. Tender are boats used on the side of a ship to take passenger to a port when the draft on a ship is to deep to go into a port. She was the fastest ship in the P & O (Peninsular and Oriental) fleet and achieved 30.64 knots during sea trials in November 1960.",
          //originally second_para:
          early_2nd_para: "Oriana's maiden voyage was in December 1960, from Southampton, UK to Sydney, Australia and arrived in Sydney on December 30th 1960. She also visited New Zealand and was a regular on that service for most of her career. In 1961 on June 9th at 5pm Oriana departed Auckland to go to Sydney and set a trans tasman record of 47 hours 30 minutes at 27 knots. Oriana can be seen in the photo below, oassing through Panama Canal for the very first time in June 31st 1961 on a return trip to Southampton from Sydney. At that time she was the largest liner to pass through Panama Canal since the German liner Bremen in 1938.",
          cruise_1st_para: "Oriana was faced with unprofitable around-the-world passenger routes, so in 1973 she was converted to operate as a one class cruise ship. Oriana operated with P & O Cruise Line and took a maximum of 1750 passengers and 780 crew.",
          cruise_2nd_para: 'From 1981 until March 1986, Oriana was based at Sydney, Australia. She operated within Pacific Ocean and South East Asian ports.',
          mem_1st_para: '',
          mem_2nd_para: '',
          plans_para: '',
          final_1st_para: "When Oriana retired from being a cruise ship in March 1986 because she was a surplus to P & O's requirements, she was sold to become a floating hotel and tourist attraction. She operated as this firstly in Japan and then in China.",
          final_2nd_para:'In 2004 Oriana was damaged due to a severe storm in Dalian, China. Repairs were too costly, so sadly the end was in sight and she was towed to  “Wayou Breakers” ship breakers yard at Zhangiagang China. Our beloved SS Oriana the ship that was once “The Queen of The Sea” was sadly broken up, aged 45 years since her maiden voyage.',

          ship_plans: '/images/Evolution/Oriana/SS-Oriana-1960-Plans-1.jpg',
          ship_plans_cont: '/images/Evolution/Oriana/SS-Oriana-1960-Plans-2.jpg',
          early_video: '/videos/classics/Oriana/The Building of ss Oriana.mp4',
          cruise_video: '',
          mem_video: ''

        },
        {
          id: 3,
          classic_ship_name: 'Canberra',
          // ship_name: 'Canberra',
          img: '/images/ss-canberra.jpg',
          img_title: "Canberra at sea during the good times",
          img_trials: '',
          img_trials_title: '',
          img_early: '',
          img_early_title: '',
          img_1stcruise: '',
          img_1stcruise_title: '',
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
          passenger_capacity_full: '1961–73: 548 First class, 1,690 Tourist class | 1973–97: 1,737 one class as a cruise ship',
          crew_capacity: '1961-73: 900 | 1973-97: 795',
          gross_tonnage: '1961: 45270 | 1962: 45,733 | 1968: 44,807 | 1994: 49,073',
          length: '249.51 m (818 feet 6 inches)',
          beam: '31.09 m (102 feet)',
          draft: '10.0 m (32 feet 9.7 inches)',
          height: '55.9 m (183 feet 6 inches) | (Keel to top of mast)',
          // Here are the is the extra variable from Galileo Galilei Cruise Ship. 
          funnel_height: '',

          //This space is wh ere I have show more text, for when user wants to see more
          speed: 'Trials: 29.27 knots (54.2 km/h) | Service Speeds 1961–73: 27.5 knots (50.9 km/h) | 1973–97: 23.50 knots (43.5 km/h)',
          deadweight: '1961 - 1968: 9910 | 1968 - 1982: 9754 | 1982 - 1997: 8775',
          lightship: '32605 Tons (33128.24 Tonnes) (excluding permanent ballast)', 
          loaded_displacement: '1961 - 1968: 42515 Tons (43197.24 Tonnes) | 1968 - 1982: 42359 Tons (43038.782 Tonnes) | 1982 - 1997: 41380 Tons (42044.071 Tonnes)',
          power: '85000 Horsepower Imperial (as built) | 1973 Onwards: 56000 Horsepower Imperial',
          power_rpm: '',
          fuel_type:'Marine Oil',
          fuel_capacity: '5150 Tonnes',
          fuel_consumption: '250 to 300 Tonnes per day',
          fresh_water: '2224 Tonnes | or 2224000 Litres',
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
          ship_horn: '/videos/classics/Canberra/Canberra_Leaving_Southampton.mp4',
          //originally first_para:
          early_1st_para: "The Canberra along with the Oriana are the first ships to start off the famous P & O cruise line. The P & O Line started off as P & O Orient Line, but soon was changed to just P & O. At first Canberra was just a passenger ship used to carry passenger from one country to another. It wasn't until 1973, that she began year round cruising between UK and Australia. In 1982 it took on a different operation and was used by the British government to carry troops to the Falkland Islands. After this Canberra was used as a cruise ship again in Australia and the Pacific Islands until she retired in 1997.",
          //originally second_para:
          early_2nd_para: '',
          cruise_1st_para: "",
          cruise_2nd_para: '',
          mem_1st_para: '',
          mem_2nd_para: '',
          plans_para: '',
          final_1st_para: '',
          final_2nd_para:'',
          
          ship_plans: '/images/Evolution/Canberra/plan-ga-all.jpg',
          ship_plans_cont: '',
          early_video: '',
          cruise_video: '/videos/classics/Canberra/Holiday on P&O Canberra 1988.mp4',
          mem_video: '/videos/classics/Canberra/SS Canberra - First Lady of the P&O.mp4'

        },
        {
          id: 4,
          classic_ship_name: 'France',
          // ship_name: 'France',
          img: '/images/Evolution/France/france_1961_1.jpg',
          img_title: "France in Home port for the first time in 1961",
          img_trials: '',
          img_trials_title: '',
          img_early: '/images/Evolution/France/QuayofForgotten_800x567.jpg',
          img_early_title: "SS France laid up at at the 'Pier of the Forgotton in 1974.'",
          img_1stcruise: '/images/Evolution/France/GermanyDrydock_755x600.jpg',
          img_1stcruise_title: 'Converted to SS Norway in Bremerhaven, Germany drydock in 1979',

          //Service Years for other ships, no data her though because France has it's own.
          service_years: '',    
          //France info 
          france_service_years: '1961 to 1974 | (laid up 1974 to 1979)',
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
          cost:'US $80 Million or 30 Million British Pounds | (with 7 Million Pounds from French Government)',
          imo: '5119143',
          passenger_capacity_full: '2033 Maximum | 1st Class: 407 to 590 | 2nd Class: 1271 to 1637', 
          crew_capacity:'1167',
          gross_tonnage: '66347.72',
          length: '315.51 m (1035 feet)',
          beam: '33.7 m (110 feet 7 inches)',
          draft: '10.49 m (34 feet 5 inches)',
          height: '67.66 m (222 feet)', 
          // Here is the extra variable from Galileo Galilei Cruise Ship. 
          funnel_height: '', 

          //This space is where I have show more text, for when user wants to see more
          speed: 'Trails Maximum: 35 Knots (64.82 km/h) | Service Speed: 30 Knots (55.56 km/h)',
          deadweight: '13760 Tons (13980.822 Tonnes)',
          lightship: '43847 Tons (44543.549 Tonnes)',
          loaded_displacement: '57607 Tons (58524.37 Tonnes)',
          power: '160000 Horsepower Imperial (119312 kW)',
          power_rpm: '',
          fuel_type: 'Marine Oil',
          fuel_capacity: '8000 Tons (8128.385 Tonnes) or maybe 9000 Tons',
          fuel_consumption: '800 Tons per day (812.838 Tonnes) | or 750 Tonnes per day',
          fresh_water: ' Tonnes | or  Litres',
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
          norway_gt: '1980-1990: 70202.19 | 1990-1994: 74200 | 1994-2003: 76049', 
          norway_fuel_capacity: '4424 Tonnes',
          norway_fuel_consume: '250 Tons per day (254.012 Tonnes) | or 250 Tonnes per day',
          norway_fresh_water: '2555 Tons (2596 Tonnes) | or 2596000 Litres',
          norway_speed: 'Service: 17.8 Knots (32.97 km/h) | Maximum: 25 Knots (46.3 km/h)',
          norway_passenger_decks: '1980: 13 decks | 1990: 15 decks',
        
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
          ship_horn: '/videos/classics/France/SS_Norway_horns.mp4',
          early_1st_para: "The SS France was a steam ship, hence the intials SS, that originally operated for the French Line. <br/>As can be seen in the photo above she originally had a black and white hull (this is the main structure of the ship). <br/> <br/>The <strong>above</strong> photo was taken when she was entering her home port of Le Havre, France for the very first time on 23rd of November 1961. <br>Her hull colour had changed to <strong>green</strong> during the mid to late 1960's and this rare photo below, shows her departing from Southhampton with her green hull.",
          //originally first_para:
          //Newly added early_2nd_para
          early_2nd_para: "As the new decade wore on, the FRANCE was struggling like never before - largely due to passenger traffic taking to the skies. It was reported in 1973-74 that less than 2% of the travelers seeking passage over the Atlantic were aboard an actual ocean liner. With the price of oil jumping to $95 a ton, a fuel saving measure called for a reduction in speed to a maximium of 24-25 knots. This reduced speed imposed extending the crossing for an extra day as 5-day crossing became six, as 30 knot crossings became a thing of the past. In 1974 SS France career as a classic liner unfortunately came to an end and she was laid up in Le Haver at what is called the Pier of the Forgotten. She was laid up for 5 years from 1974 to 1979. The end seemed in sight, but fortunately though in 1977 a Saudi Arabian man purchased her for $24 million",
          cruise_1st_para: "In 1979 SS France was sold to Knut Kloster, the owner of Norwegian Caribbean Line for $18 million to be converted into the largest cruise ship at that time. In August 1979 she was moved to Lloyd shipyards in Bremerhaven, Germany as can be seen in the below photo and would undergo renovations costing $80 million to be converted to a cruise ship.",
          // originally second_para:
          cruise_2nd_para: 'SS France was now renamed SS Norway and on 14th April 1980 was finished and christened with the bottle of champagne, ready to start cruising. For her maiden voyage she left her drydock from Bremerhaven, Germany and sailed to Oslo, Norway. This is where her pre inaugural cruises started with only a few passengers, stopping in Southampton, England  and finishing in New York City. A 6 day cruise from New York to Bermuda was planned, but cancelled at the last minute because some problems had to be fixed. SS Norway did her official first cruise from Miami, Florida, USA on 1st June 1980. It was a 7 day cruise with stops in Little San Salvador and St Thomas, US Virgin Islands and then on to final destination Norway herself. She did this cruise itinerary for 2 years from 1980 to 1982. Between 1982 to 1985 she also did a similar type of cruise, but Nassau Bahamas was added as an extra port. In 1985 St Maarten, Netherland Antilles was added. In 1987 SS Norway had a new 7 day cruise itinerary from Miami with stops at             ',
          mem_1st_para: '',
          mem_2nd_para: '',
          plans_para: '',
          final_1st_para: '',
          final_2nd_para:'',

          ship_plans: '/images/Evolution/France/Norway2002-1.gif',
          ship_plans_cont: '/images/Evolution/France/Norway2002-2.gif',
          early_video: '/videos/classics/France/SS France At New York (1962).mp4',
          cruise_video: '',
          mem_video: ''

        },
        {
          id: 5,
          classic_ship_name: 'Galileo Galilei',
          // ship_name: 'Galileo Galilei',
          img: '/images/Evolution/Galileo Galilei/Galileo03.jpg',
          img_title: "Original Galileo Galilei at sea",
          img_trials: '',
          img_trials_title: '',
          img_early: '',
          img_early_title: '',
          img_1stcruise: '',
          img_1stcruise_title: '',

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
          operator: '1963-1979: Lloyd Triestino | 1979-1983: Italia Crociere | 1983-1990: Chandris Cruises | 1990-1997: Fantasy Cruises | 1997-1999: Sun Cruises',
          registry_port: '1963-1983:  Genoa, Italy | 1983-1990: Panama City, Panama | 1990-1999: Nassau, Bahamas',
          cost:'',
          imo: '5411254',
          passenger_capacity_full: '1750 | (156 first class, 1,594 tourist class)', 
          crew_capacity:'Possibly same as sister ship 443',
          gross_tonnage: '27888',
          length: '213.65 m (700 feet 11 inches)',
          beam: '28.71 m (94 feet 2 inches)',
          draft: '8.60 m (28 feet 3 inches)',
          height: '54.05 m (177 feet 4 inches) | (Keel to top of mast)',
          funnel_height: '45.11 m (148 feet) | to top of solid structure',

          //This space is where I have show more text, for when user wants to see more
          speed: 'Trials: 27.4 Knots (50.74 kn/h) | Service: 25 Knots (46.30 km/h) or 25.5 knots (47.23 km/h)',
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
          ship_horn: '/videos/classics/Galileo Galilei/MERIDIAN.mp4',
          early_1st_para: "The Galileo Galilei is an Italian built ship, exclusively meant for cruising all the way through it's career.",
          //originally first_para:
          //Newly added early_2nd_para
          early_2nd_para: ' Galileo Galilei struck a reef off the coast of West Africa on 13th January 1975 and had to be repaired in Genoa, Italy her home port at the time. She coninued to operate on the Italy to Australia service until April 1977 when she was was taken out of service and laid up for 6 months.',
          cruise_1st_para: "Galileo Galilei arrived at the Cantieri Navali Riuniti ship yard in Palermo, Sicily, Italy to be converted into a one class cruise ship on October 21, 1977. The lengthy reconstruction lasted until March 1979 and on 24th March 1979 she started service as an official cruise ship with Italia Crociere Line for Mediterranean cruising. The start of her cruise ship career was shorted lived and she was again laid up in Genoa, Italy on 29th September 1979. After her layup which lasted a few months, she did on and off services in the Mediterranean. On 22nd October 1983, she was sold to Chandris Lines, renamed Galileo and rebuilt with additional cabins on her forward deck. in 1984 with a new passenger capacity of 1,262 she did cruises to the Caribbean from New York with Chandris owned Fantasy Cruises fleet. She continued with this cruise line doing these cruises until October 1989.  ",
          // originally second_para:
          cruise_2nd_para: "In October 1989 Galileo was sent to Lloyd Werft, Bremerhaven, Germany for a $45 million rebuild was lasted through to February 1990. Most of her interiors were rebuiilt, with her charming 1960's retro linoleum, Formica and wooden Italian interiors being replaced with stunning and vibrant fittings and externally her rear superstructure was enlarged. She was sold to Celebrity Cruises on 22nd February 1990 with a new passenger capacity of 1,428. On 1st March 1990 she was now a new very sylish SS Meridian for Celebrity Cruises, cruising on a Caribbean and Boston/ New York - Bermuda service.",
          mem_1st_para: '',
          mem_2nd_para: '',
          plans_para: '',
          final_1st_para: 'In 1999 she operated as SS Sun vista and on May 20th, she suffered an engine room fire. ',
          final_2nd_para:'Sun Vista end happened on  pm when she sank. Luckily though there was no loss of lives ',

          ship_plans: '/images/Evolution/Galileo Galilei/Galileo Galilei Ship Plans (pg 1).png',
          ship_plans_cont: '/images/Evolution/Galileo Galilei/Galileo Galilei Ship Plans (pg 2).png',
          early_video: '',
          cruise_video: '',
          mem_video: ''
          
        },
        {
          id: 6,
          classic_ship_name: 'Pacific Princess',
          // ship_name: 'Pacific Princess',
          img: '/images/003410.jpg',
          img_title: "Love Boat Pacific Princess at sea",
          img_trials: '',
          img_trials_title: '',
          img_early: '',
          img_early_title: '',
          img_1stcruise: '',
          img_1stcruise_title: '',

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
          operator: '1971-1975: Flagship Cruises | 1975-2002: Princess Cruises, </br> 2002-2008: Pullmantur | 2008-2013: Quail Cruises',
          registry_port: '1971-1975: Oslo, Norway | 1975-2002: London, UK, </br>, 2002-2012: Nassau, Bahamas | 2012-2013: Lome, Togo',
          cost: 'US $25 Million',
          imo: '7018563',
          passenger_capacity_full: '1971-1975: 767 | 1975-2002: 626 | 2002-2013: 750',
          crew_capacity: '',
          gross_tonnage: '1971-1978: 19903 | 1978-1994: 20636 | 1994-2013: 20186',
          length: '168.74 m (553 feet 7.3 inches)',
          beam: '24.59 m (80 feet 8 inches)',
          draft: '7.70 m (25 feet 3 inches)',
          height: '46.53 m (151 feet 10 inches) | (Keel to top of mast)',
          // Here is the extra variable from Galileo Galilei Cruise Ship. 
          funnel_height: '',

          //This space is where I have show more text, for when user wants to see more
          speed: 'Maximum 19 knots (35.2 km/ hr, 21.86 mph) | Cruising: 18 knots (33.34 km/ hr, 20.71 mph)',
          deadweight: 'As Built: 3390 Tons (3444.4 Tonnes) | May 1994 Onwards: 2936 Tonnes',
          lightship: '12880 Tons (13086.70 Tonnes) or 13595 Tonnes',
          loaded_displacement: '16270 Tons (16531.10 Tonnes)',
          power: '18000 Horsepower Imperial (13240 kW)',
          power_rpm: '',
          fuel_type: 'Marine Oil',
          fuel_capacity: '1977 Tons (2008.727 Tonnes)',
          fuel_consumption: '100 Tonnes per day',
          fresh_water: '1113 Tons (1130.862 Tonnes) | or 1130862 Litres',
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
          // early_1st_para: "The Pacific Princess is one of the longest serving cruise ships from 1970's, having latest 43 years. <br/>She was originally built as Sea Venture and changed her name to Pacific Princess in 1975, in time before the TV show Love Boat, that aired in 1977.",
          // changing early_1st_para to this below
          early_1st_para: "The Pacific Princess originally was built as Sea Venture in 1971 at the  shipyard in Emden, Germany for a cost of US$25 Million. During her early part of her career she operated under Flagship Cruises, which was a Norwegian cruise company from June 1971 to October 1974 and her registered port was Oslo, Norway. The cruises that she did back then was usually a week long cruise from New York City to Bermuda. Sea venture had an awesome moment in April 1974, when she had to perform a rescue operation. Queen Elizabeth 2 ship owned by Cunard, had lost all of her power about 250 miles off Bermuda coast. Sea Venture received QE2's Mayday call and left Hamilton, where she was docked during a cruise, to help out. She picked up all 1,650 passengers from the QE2 using her lifeboats, carried them back to Hamilton and the QE2 was towed to Bermuda for repairs. All ships including cruise ships have a prefix before the start of their name and this is to classify what type of ship it is and in the case of the Sea Venture it is ms Sea Venture. The ms part stands for motor ship and this is a ship that is propelled by an internal combustion engine. She had this ms prefix sthroughout her entire time of her service.",
          // originally first_para:
          //Newly added early_2nd_para
          early_2nd_para: '',
          cruise_1st_para: "The Pacific Princess is unique because it operated as a cruise ship throughout her entire career. As I have already mentioned she started off as Sea Venture and then changed to Pacific Princess in 1975 operating under Princess Cruises. This was in time before the TV Show Love boat, which started in 1977. The Love Boat TV Show ran from 1977 to 1986 and the idea was that if you went on a cruise you could meet the love of your life. During her lifespan from 1971 to 2013, she was called Pacific Princess from 1975 to 2002 and was with Princess Cruises during that entire time having her port of registry in London, UK. You don't get many cruise ships that have stayed the same name and with the same cruise line for a length of time, so that is another factor that makes this her a legendary ship.",
          // originally second_para:
          cruise_2nd_para: 'In 2002 she as sold to a Brazil based company called Viagens CVC, was renamed Pacific and operated with Pullmantur Cruises. Pacific did cruises from to   with Pullmunter from 2002 to 2008.',
          mem_1st_para: '',
          mem_2nd_para: '',
          plans_para: '',
          final_1st_para: 'In 2013 she ended her career as a cruise ship and was finally name Acif before she was scrapped.',
          final_2nd_para:'When Acif was being towed to Aliaga, Turkey for scrapping, she took on water and was a lean. However she did make it to Aliaga and sadly this great ship that has a lot of great memories got scrapped. ',

          ship_plans: '/images/Evolution/Pacific Princess/MS-Pacific-Princess-Deck-Plan.jpg',
          ship_plans_cont: '',
          early_video: '',
          cruise_video: '',
          mem_video: '/videos/classics/Pacific Princess/The Love Boat 1977 - 1986 Opening and Closing Theme.mp4'

        }
      ]);
    });
};
