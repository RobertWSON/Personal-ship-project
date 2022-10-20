exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Evo1').del()
    .then(function () {
      // Inserts seed entries
      return knex('Evo1').insert([

        // These ships are for Evolution Part 1 page
        {
          id: 1,
          classic_ship_name: 'Titanic',
          // Introduction Photo of ship at top of page on Left hand side
          img: '/images/titaniccover.jpg',
          img_title: "Titanic in Southampton",
          // Used for Evolution Part 1 and 2 
          original_ship_name: '',
          // early_years: '', I think early years is not used in most recent cruise-ships repo
          early_service_years: '',
          service_years: '1912',
          france_service_years: '',
          pacific_princess_years: '',
          pacific_years: '', 
          loveboat_final_year: '',
          // Titanic info continued 
          build_yard: 'Harland and Wolff, Belfast, Northern Ireland, UK',
          original_operator: '',
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
          height: '', 
          // Used to be called funnel_height
          height_funnel_top: '53.34 m (175 feet) | (Keel to top of funnels)',

          //This space is where I have show more text, for when user wants to see more
          // speed: {
          //   maximum: 23 knots (43 km/ hr, 26 mph),
          //   cruising: 21 knots (39 km/ hr, 24 mph)
          // }
          // const newResult = speed.split('|')
          // newResult = ['Maximum 23 knots (43 km/ hr, 26 mph)', '21 knots (39 km/ hr, 24 mph)']
          speed: 'Maximum 23 knots (43 km/ hr, 26 mph) | Cruising: 21 knots (39 km/ hr, 24 mph)', 
          deadweight: '13550 Tons (13767 Tonnes)', 
          lightship: '38760 Tons(39380 Tonnes)', 
          loaded_displacement: '52310 Tons(53147 Tonnes)', 
          power: '46000 Horsepower Imperial (34302.235 kW)', 
          power_rpm: '',
          fuel_type: 'Coal',
          fuel_capacity: '6611 Tons with an extra 1201 Tons for emergencies', 
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

          // These two variables are only used for Evolution Part 2 Ships (Use later for 1 evo Table with Joins)
          // original_ship_name: '', original_operator: '',  

          // Here are the Joins to other Tables
          // For a join have Foreign key below for France as Norway cruise ship    
          // norway_id: '1',
          // These are variables for Norway Table that go through norway_id Foreign Key
          // cruise_ship_name: '', norway_years: '', norway_operator: '', conversion_cost: '', norway_passengers: '',
          // norway_crew: '', norway_gt: '', norway_fuel_capacity: '', norway_fuel_consume: '', norway_fresh_water: '',
          // norway_speed: '', norway_passenger_decks: '',
          //This space is where I have show more text, for when user wants to see more, does not apply here though.
          // norway_last_name: '', norway_final_year: '', norway_final_gt: '',

          // For a join have Foreign key below for Galileo Galilei as a cruise ship
          // galileo_id: '1',
          // These are variables for Galileo Table that go through galileo_id Foreign Key
          // galileo_name: '', galileo_years: '', galileo_gt: '', galileo_passenger_capacity: '',
          // meridian_name: '', meridian_years: '', meridian_gt: '', meridian_passenger_capacity: '',
          // gg_last_name: '', sunvista_years: '', sunvista_gt: '', sunvista_passenger_capacity: '',  

          // For a join have Foreign Key below to these classic ships, for their details when they were a cruise ship
          // classic_cruise_id: '1',
          // These are variables for Classic Cruise Table that go through classic_cruise_id Foreign Key
          // cruise_ship_name: '', conversion_cost: '', cruise_years: '', cruise_operator: '', cruise_reg_port: '', 
          // cruise_passengers_max: '', cruise_crew_max: '', cruise_gt: '', cruise_height: '', cruise_funnel_hgt:'',
          // cruise_speed: '', cruise_deadweight: '', cruise_lightship: '', cruise_displacement: '', cruise_power: '', 
          // cruise_power_rpm: '', cruise_fuel_capacity: '', cruise_fuel_consumption: '', cruise_fresh_water: '', 
          // cruise_propellors: '', cruise_propellor_size: '', cruise_rudder: '', cruise_rudder_size: '', cruise_decks: '', 
          // cruise_passenger_decks: '', cruise_bridge_height: '', cruise_bridge_water: '', cruise_shelter_dec: '', 
          // cruise_bow_bridge: '', cruise_bow_height,

          // For a join have Foreign Key below for when these classic cruise ships were Lengthened to carry more cruise passengers
          // Some of the ships in Evolution Part 2 , are the only ones that this lengthening applies to 
          // lengthened_id: '1',
          // These are variables for Classic Lengthened Table that go through lengthened_id Foreign Key
          // name_after_lengthened: '', lengthened_service_yrs: '', lengthened_operator: '', lengthened_reg_port: '', 
          // lengthened_cost: '', lengthened_passengers: '', lengthened_crew: '', lengthened_gt: '',  
          // lengthened_length: '', lengthened_beam: '', lengthened_draft: '', lengthened_deadweight: '', 
          // lengthened_lightship: '', lengthened_displacement: '', lengthened_funnel_hgt: '',lengthened_speed: '', 
          // lengthened_power: '',lengthened_power_rpm: '', lengthened_fuel_capacity: '', lengthened_fuel_consumption: '', 
          // lengthened_propellors: '', lengthened_propellor_size: '', lengthened_rudder: '', lengthened_rudder_size:'',
          // lengthened_decks: '', lengthened_passenger_decks: '', lengthened_bridge_height: '', lengthened_bridge_water: '',
          // lengthened_shelter_deck: '', lengthened_bow_bridge: '', lengthened_bow_height,

          // Foreign Key for when a classic cruise ship had a name change during it's time as a Cruise Ship
          // name_changes_id: '1',
          // These are variables for Name Changes Table that go through name_changes_id Foreign Key
          // first_name_change: '', second_name_change: '', third_name_change: '', fourth_name_change: '',
          // fifth_name_change: '', sixth_name_change: '', seventh_name_change: '', eighth_name_change: '', 
          // ninth_name_change,

          // For each ships horn on either Evolution Part 1 and Evolution Part 2 Pages
          ship_horn: '/videos/classics/Titanic/Titanic_horn.mp4',

          // Early Div Section for early life of a classic ship (has section id)
          early_1st_para: "The Titanic is the start of where it all begin with travelling in large numbers. The ship was built in Belfast, Northern Ireland, was one of the sister ships of the RMS Line, which stands for Royal Mail Steam Line and at the time it was one of the largest passenger ships. Unfortunately it did not end well for it though, as on it's maiden voyage travelling from Southhampton to New York it sailed for 10 days, hit an iceberg and that was the start of the disaster.  Below Titanic is doing her sea trials which were delayed by a day due to bad weather and she attained a maximum speed of 23 knots (43 km/ hr or 26 mph). Her sea trials began at 6am on Tuesday, April 2nd 1912 lasting 12 hours, two days after her fitting out was finished and eight days before leaving Southampton on the one and only maiden voyage.", 
          early_video: '/videos/classics/Titanic/The Sea Trials of the R.M.S. Titanic.mp4', 
          early_2nd_para: 'After Titanics sea trials, she berthed near her dock in Belfast, as can be seen in the photo below.', 
          img_trials: '/images/Evolution/Titanic/sea-trials.jpg', 
          img_trials_title: 'Titanic sea trials at Belfast, Northern Ireland April 2, 1912', 
          early_3rd_para: 'Titanic was one of three sister ships, tho others being Olympic and Britannic. They were known as Olympic-class ocean liners, sailed for the White Star Line and the aim at the time was for them to be the largest and most luxurious ships for the transatlantic passenger service. Here is a photo below of Titanic being prepared for the start of her service in Belfast shipyard. Titanic was the second ship to be built starting service 1 year after Olympic.', 
          img_early: '/images/Evolution/Titanic/titanic-sinking-photos.jpg', 
          img_early_title: 'Titanic near dock at Belfast, Northern Ireland soon before starting its maiden voyage',

          // Cruise Div Section for cruise life of a classic ship (has section id)
          cruise_1st_para: 'However there is a twist to the above theory of why it sank.<br/> It is believed that in getting ready to sail, there was a fire that started at the bottom of the ship. The crew who are responsible usually for filling the boilers up with coal, had a new challenge and they were frantically trying to get rid of the fire. The fire caused a distinctive dark mark on the outside hull and it is believed that the bulkheads inside had been weakened by the fire. Titanic then set sail from Belfast to Southampton and the crew were still getting rid of the fire before her maiden voyage, which they did. The photo below shows her leaving Southampton on her maiden voyage and this photo gives you great memories of the segment from the movie when she left Southampton. You may have noticed that this is about an evolution of cruise ships and there were no cruise ships during when the Titanic was around in 1912, back then the were called passenger liners. I feel that it is an important ship in history because it has the beginnings of the idea that lots of passenger can travel on a ship a long distance.', 
          img_1stcruise: '/images/Evolution/Titanic/titanic-dock.jpg', 
          img_1stcruise_title: 'Titanic departing Southampton, England on April 10, 1912',

          // This part only applies to Evolution Part 2, where some ships there have been lengthened. 
          // name_before_lengthened: '', lengthened_para: '', img_lengthened: '', img_lengthened_title: '', 
          // name_after_lengthening: '', afterlengthen_para: '', img_afterlengthened: '', img_afterlengthened_title: '',

          cruise_2nd_para: '',
          img_2ndcruise: 'This photo is taken from titanicfacts.net/titanic-ship/ found from titanic ship google search. Maybe show a photo here of Titanic leaving Southampton on maiden voyage with passengers on deck.', 
          img_2ndcruise_title: '',
          cruise_3rd_para: '', 
          img_3rdcruise: '', 
          img_3rdcruise_title: '', 
          cruise_4th_para: '', 
          img_4thcruise: '', 
          img_4thcruise_title: '',
          cruise_5th_para: '', 
          img_5thcruise: '', 
          img_5thcruise_title: '', 
          cruise_video: '',

          // This is the Memorable Moments Div (id = mem) 
          mem_1st_para: '', 
          mem_video: '/videos/classics/Titanic/Deconstructing Titanic History.mp4', 
          mem_2nd_para: '',

          // This is the Plans Div (id = plans)  
          plans_para: 'Here is an overall plan of Titanic passenger ship, along with deck plans below this.', 
          ship_plans: '/images/Evolution/Titanic/d1my6c8-6d48eae7-255d-4e4d-bc8a-ff9ba1b0c417.jpg', 
          ship_plans_cont: '',

          // This is the Final Div (id = final)
          final_1st_para: 'As much as we would have liked it to, the Titanic did not unfortunately have a very good ending. It sank within 2 hour 40 minutes with 1500 people losing there lives. As can be seen in the video below the survivial rate was First Class Passengers 60%, Second Class Passengers 42%, Third Class Passengers 25% and less than 25% of the crew.', 
          final_2nd_para: 'The rivets to hold the hull plates together was made of steel that was not the strongest it should have been at the time. Also the bulkheads were not built tall enough to make them completely water tight. When the disaster happened, the water filled up in the bulkhead compartment (this is the room between bulkheads) and the water flowed over one bulkhead into another compartment. When several compartments were filled the weight of the water pushed the bow further down in the water. Eventually the front section by the bow broke because of the stress from the water, along with the front funnel falling off and the stern section sank afterwards. On a positive side a lot was learnt from the disaster in terms of building ships. Ships no longer have rivets to hold steel plates for the hull together, they are now welded and bolted together. The hull for the Titanic was a single hull, now you can have ships that have a double hull, so there are two plates and this provides more protection against collisions. A lot of ships get recorded as being scrapped at the end of their service, but Titanic like the minority is recorded as being a Total Loss. She really is a total loss because she is 3.8 km (2.37 miles or 12,500 feet) under water, with both sections being about 600m or a third of a mile apart. Even though the ship failed in terms of here crossing to get to New York City, she is still a great legendary ship that is is to be remembered well and set up good things to come in terms of cruise shipping.', 
          img_final: '/images/Evolution/Titanic/12_titanic.jpeg', 
          img_final_title: 'TItanic starting to lift up at the stern, before her final moments of sinking on 15th April 1912' 

        },
        {
          id: 2,  
          classic_ship_name: 'Oriana',
          // Introduction Photo of ship at top of page on Left hand side
          img: '/images/oriana15.jpg',
          img_title: "Oriana in Panama Canal during 1960's",
          // Used for Evolution Part 1 and 2 
          original_ship_name: '',
          // early_years: '', I think early years is not used in most recent cruise-ships repo
          early_service_years: '',
          service_years: '1959 to 2005',
          france_service_years: '',
          pacific_princess_years: '',
          pacific_years: '',
          loveboat_final_year: '',
          //Oriana info continued
          build_yard: 'Vickers-Armstrongs, Barrow-in-Furness, Cumbria, England',
          original_operator: '',
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
          // Used to be called funnel_height   
          height_funnel_top: '',

          //This space is where I have show more text, for when user wants to see more
          speed: 'Maximum 30.64 knots (56.74 km/ hr, 35.26 mph) | Cruising (Service): 27.5 knots (50.93 km/ hr, 31.65 mph)', 
          deadweight: 'As built: 12835 Tons (13041 Tonnes) | Mar 1982: 12750 Tons (12954.6 Tonnes) | Dec 1984: 12027 Tons (12220 Tonnes) | July 1985 onwards: 12220 Tons (12416.1 Tonnes)', 
          lightship: '26185 Tons (26605.22 Tonnes)', 
          loaded_displacement: '39020 Tons (39646.2 Tonnes)', 
          power: '80000 Maximum Horsepower Imperial (59656.067 kW) at trials | 65000 Horsepower Imperial (48470.549 kW) in service', 
          power_rpm: '157.5 rpm (Trials) and 147 rpm (Service)',
          fuel_type: 'Marine Oil',
          fuel_capacity: '6852 Tons (6961.96 Tonnes)', 
          fuel_consumption: '470 Tons (477.54 Tonnes) per day at 27 Knots speed',
          fresh_water: "Domestic: 2356 tons (2393.8 Tonnes) | Engineer's Feed Water: 593 tons (602.5 Tonnes)", 
          propellors: 'Twin Screw (2 of them)', 
          propellor_size: '20 feet (6.096 m) diameter | and 29 Tons (29.465 Tonnes) each', 
          rudder: '', 
          rudder_size: '', 
          decks: '', 
          accessible_decks: '11', 
          bridge_height: '36.935 m (121 feet 2 inches)', 
          bridge_water: '27.18 m (89 feet 2 inches)', 
          //Shelter Deck from Titanic, need it here with nothing as a variable to make this work.
          shelter_deck: '', 
          bow_bridge: '101.689 m (333 feet 7.5 inches)', 
          bow_height: '25.289 m (82 feet 11.6 inches)', 

          // Foreign key for France as Norway cruise ship    
          // norway_id: '2',
          // Foreign key for Galileo Galilei as a cruise ship
          // galileo_id: '2',
          // Foreign Key Link to these classic ships, for their details when they were a cruise ship
          // classic_cruise_id: '2', 
          // Foreign Key Link for when these classic cruise ships were Lengthened to carry more cruise passengers
          // lengthened_id: '2',
          // Foreign Key for when a classic cruise ship had a name change during it's time as a Cruise Ship
          // name_changes_id: '2',

          // For each ships horn on either Evolution Part 1 and Evolution Part 2 Pages
          ship_horn: '/videos/classics/Oriana/Oriana_last_cruise_departure_from_Sydney_Harbour_Bridge.mp4',    

          // Early Div Section for early life of a classic ship (has section id)
          early_1st_para: 'The Oriana is the start of where cruising began. </br> She was able to travel through Panama Canal and so it was able to travel to lots of different locations. Because of her deep draft, like a lot of the older cruise ships had, she had to tender in some ports like Pacific Islands. Tender are boats used on the side of a ship to take passenger to a port when the draft on a ship is to deep to go into a port. She was the fastest ship in the P & O (Peninsular and Oriental) fleet and achieved 30.64 knots during sea trials in November 1960.', 
          early_video: '/video/classics/Oriana/The Building of ss Oriana.mp4', 
          early_2nd_para: "Oriana's maiden voyage was in December 1960, from Southampton, UK to Sydney, Australia and arrived in Sydney on December 30th 1960. She also visited New Zealand and was a regular on that service for most of her career. In 1961 on June 9th at 5pm Oriana departed Auckland to go to Sydney and set a trans tasman record of 47 hours 30 minutes at 27 knots. Oriana can be seen in the photo below, passing through Panama Canal for the very first time in June 31st 1961 on a return trip to Southampton from Sydney. At that time she was the largest liner to pass through Panama Canal since the German liner Bremen in 1938.", 
          img_trials: '/images/Evolution/Oriana/oriana-seatrials-13-16-nov-60.jpeg', 
          img_trials_title: 'Oriana seen in Firth of Clyde during her second trials, where she attained a maximum speed of 30.64 knots (56.74 km/ hr) on 16th November 1960.', 
          early_3rd_para: "On 3rd December 1960, Oriana did her Maiden voyage from Southampton to Australia. She arrived in Melbourne on December 27 and Sydney on December 30th, 1960. She stayed in Sydney (at the then new Circular Quay International ship terminal) until 5th January, 1961. From there she discovered Auckland, New Zealand, Vancouver, Canada and US West Coast Ports and when she arrived in San Francisco, USA on 5th February, 1961, it was known as Oriana Day. From there she arrived back in Sydney again on 25th February, 1961 and back to her home port, Southampton on March 25th, 1961. On June 9th, 1961, Oriana set a record for the Trans Tasman sailing record of 47 hours and 30 minutes from Auckland, New Zealand to Sydney, Australia for an average speed of 27 knots. She was the largest ship to pass through Panama Canal for here first time on July 1961, since the German Liner Bremen in 1938. In 1962, Oriana was used to transport 156 Maltese immigrants from Valetta Harbour in Malta to Australia, but she collided with USS Kearsarge aircraft carrier on 3rd December 1962, with a 20 foot hole and small fire, but fortunately she was repaired in Los Angeles and survived the ordeal. On 17th September 1963, the Sydney Mayor, Henry Frederick Jensen presented the keys of the city to the captain of the Oriana at Cirular Quay. In 1964, Oriana set an even better Trans Tasman record of 45 hours and 24 minutes for an average of 27.76 knots from Auckland, New Zealand to Sydney, Australia. At the end of 1964 Oriana's time with Orient line cam to an end, her hull got repainted to white and in 1965 she got transferred to P & O Line.", 
          img_early: '/images/oriana15.jpg', 
          img_early_title: "Oriana travelling through Panama Canal for it's first time on July 31, 1961. ",

          // Cruise Div Section for cruise life of a classic ship (has section id)
          cruise_1st_para: 'Oriana was faced with unprofitable around-the-world passenger routes, so in 1973 she was converted to operate as a one class cruise ship. Oriana operated with P & O Cruise Line and took a maximum of 1750 passengers and 780 crew.', 
          img_1stcruise: '', 
          img_1stcruise_title: '', 

          // This part only applies to Evolution Part 2, where some ships there have been lengthened. 
          // name_before_lengthened: '', lengthened_para: '', img_lengthened: '', img_lengthened_title: '', 
          // name_after_lengthening: '', afterlengthen_para: '', img_afterlengthened: '', img_afterlengthened_title: '',

          cruise_2nd_para: 'From 1981 until March 1986, Oriana was based at Sydney, Australia. She operated within Pacific Ocean and South East Asian ports.',
          img_2ndcruise: '', 
          img_2ndcruise_title: '',
          cruise_3rd_para: '', 
          img_3rdcruise: '', 
          img_3rdcruise_title: '', 
          cruise_4th_para: '', 
          img_4thcruise: '', 
          img_4thcruise_title: '',
          cruise_5th_para: '', 
          img_5thcruise: '', 
          img_5thcruise_title: '',
          cruise_video: '',

          // This is the Memorable Moments Div (id = mem) 
          mem_1st_para: '', 
          mem_video: '', 
          mem_2nd_para: '',

          // This is the Plans Div (id = plans)  
          plans_para: 'Here is an overall plan of Oriana ship, along with deck plans below this.', 
          ship_plans: '/images/Evolution/Oriana/SS-Oriana-1960-Plans-1.jpg', 
          ship_plans_cont: '/images/Evolution/Oriana/SS-Oriana-1960-Plans-2.jpg',

          // This is the Final Div (id = final)
          final_1st_para: "When Oriana retired from being a cruise ship in March 1986 because she was a surplus to P & O's requirements, she was sold to become a floating hotel and tourist attraction. She operated as this firstly in Japan and then in China.", 
          final_2nd_para: 'In 2004 Oriana was damaged due to a severe storm in Dalian, China. Repairs were too costly, so sadly the end was in sight and she was towed to  “Wayou Breakers” ship breakers yard at Zhangiagang China. Our beloved SS Oriana the ship that was once “The Queen of The Sea” was sadly broken up, aged 45 years since her maiden voyage.', 
          img_final: '', 
          img_final_title: ''

        },
        {
          id: 3,
          classic_ship_name: 'Canberra',
          // Introduction Photo of ship at top of page on Left hand side 
          img: '/images/ss-canberra.jpg',
          img_title: "Canberra at sea during the good times",
          // Used for Evolution Part 1 and 2 
          original_ship_name: '',
          // early_years: '', I think early years is not used in most recent cruise-ships repo
          early_service_years: '',
          service_years: '1961 to 1997',
          france_service_years: '',
          pacific_princess_years: '',
          pacific_years: '', 
          loveboat_final_year: '',
          // Canberra info continued
          build_yard: 'Harland and Wolff, Belfast, Northern Ireland, UK', 
          original_operator: '',
          operator: '1961 to 1966: P & O Orient Lines | 1966 to 1971: P & O Lines | 1971 to 1986: P & O | 1986 to 1992: Canberra Cruises Ltd | 1992 to 1994: P & O Cruises Fleet | 1994 to 1997: P & O Cruises (UK)',
          registry_port: 'London, England, UK', 
          cost: '17 Million British Pounds', 
          imo: '5059953', 
          passenger_capacity_full: '1961 to 1973: 546 First Class and 1690 Tourist Class | 1973 to 1997: 1737 One class as a cruise ship', 
          crew_capacity: '1961 to 1973: 900 | 1973 to 1997: 795', 
          gross_tonnage: '1961: 45270 | 1962: 45733 | 1968: 44807 | 1994: 49073', 
          length: '249.48 m (818 feet 6 inches)', 
          beam: '31.25 m (102 feet 6.3 inches)',
          draft: '9.97 m (32 feet 8.5 inches)', 
          height: '55.9 m (183 feet 6 inches) | (Keel to top of mast)', 
          // Used to be called funnel_height
          height_funnel_top: '', 

          //This space is where I have show more text, for when user wants to see more
          speed: 'Trials: 29.27 knots (54.2 km/h) | Service Speeds 1961 to 1973: 27.5 knots (50.9 km/h) | 1973 to 1997: 23.50 knots (43.5 km/h)', 
          deadweight: '1961 to 1968: 9910 | 1968 to 1982: 9754 | 1982 to 1997: 8775', 
          lightship: '32605 Tons (33128.24 Tonnes) (excluding permanent ballast)', 
          loaded_displacement: '1961 to 1968: 42515 Tons (43197.24 Tonnes) | 1968 to 1982: 42359 Tons (43038.782 Tonnes) | 1982 to 1997: 41380 Tons (42044.071 Tonnes)', 
          power: 'As Built: 85000 Horsepower Imperial | 1973 onwards: 56000 Horsepower Imperial', 
          power_rpm: '',
          fuel_type: 'Marine Oil',
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
          bridge_water: '41.7 m (136 feet inches)',
          //Shelter Deck from Titanic, need it here with nothing as a variable to make this work. 
          shelter_deck: '', 
          bow_bridge: '82.22 m (269 feet 9 inches)', 
          bow_height: '27.66 m (90 feet 9 inches)',

          // Foreign key for France as Norway cruise ship    
          // norway_id: '3',
          // Foreign key for Galileo Galilei as a cruise ship
          // galileo_id: '3',
          // Foreign Key Link to these classic ships, for their details when they were a cruise ship
          // classic_cruise_id: '3', 
          // Foreign Key Link for when these classic cruise ships were Lengthened to carry more cruise passengers
          // lengthened_id: '3',
          // Foreign Key for when a classic cruise ship had a name change during it's time as a Cruise Ship
          // name_changes_id: '3',

          // For each ships horn on either Evolution Part 1 and Evolution Part 2 Pages
          ship_horn: '/videos/classics/Canberra/Canberra_Leaving_Southampton.mp4',

          // Early Div Section for early life of a classic ship (has section id)
          early_1st_para: "The Canberra along with the Oriana are the first ships to start off the famous P & O cruise line. The P & O Line started off as P & O Orient Line, but soon was changed to just P & O. At first Canberra was just a passenger ship used to carry passengers from one country to another. It wasn't until 1973, that she began year round cruising between UK and Australia. In 1982 it took on a different operation and was used by the British government to carry troops to the Falkland Islands. After this Canberra was used as a cruise ship again in Australia and the Pacific Islands until she retired in 1997.", 
          early_video: '/videos/classics/Canberra/Canberra Makes First Trip & Dewarutji (1961).mp4', 
          early_2nd_para: '', 
          img_trials: '', 
          img_trials_title: '', 
          early_3rd_para: '', 
          img_early: '', 
          img_early_title: '',

          // Cruise Div Section for cruise life of a classic ship (has section id)
          cruise_1st_para: '', 
          img_1stcruise: "/images/Evolution/Canberra/Canberra - Aerial Photo in mid 1970's.jpg", 
          img_1stcruise_title: "Canberra - Aerial Photo in mid 1970's",

          // This part only applies to Evolution Part 2, where some ships there have been lengthened. 
          // name_before_lengthened: '', lengthened_para: '', img_lengthened: '', img_lengthened_title: '', 
          // name_after_lengthening: '', afterlengthen_para: '', img_afterlengthened: '', img_afterlengthened_title: '',

          cruise_2nd_para: '',
          img_2ndcruise: '', 
          img_2ndcruise_title: '',
          cruise_3rd_para: '', 
          img_3rdcruise: '', 
          img_3rdcruise_title: '', 
          cruise_4th_para: '', 
          img_4thcruise: '', 
          img_4thcruise_title: '',
          cruise_5th_para: '', 
          img_5thcruise: '', 
          img_5thcruise_title: '',
          cruise_video: '/videos/classics/Canberra/Holiday on P&O Canberra 1988.mp4',

          // This is the Memorable Moments Div (id = mem)
          mem_1st_para: "Being known as one of the well known cruise ships of the past, she played other roles other than cruising that were similar to that of the QE2 ship. Canberra served as a troop ship in Falklands in 1982, just like QE2 and survived the journey. Also in the first part of Canberra's career she did long distance travel like a passenger liner rather than a cruise ship.", 
          mem_video: '/videos/classics/Canberra/SS Canberra - First Lady of the P&O.mp4', 
          mem_2nd_para: 'The Canberra will be remembered mostly for her time as a P & O ship and has been very helpful for establishing P & O as the well known cruise line that it is today.',
          
          // This is the Plans Div (id = plans)  
          plans_para: 'Here is the Plans of Canberra during her cruising days with P & O.', 
          ship_plans: '/images/Evolution/Canberra/plan-ga-all.jpg', 
          ship_plans_cont: '',

          // This is the Final Div (id = final)
          final_1st_para: "Sadly age caught up with SS Canberra and her high running costs meant that she had much higher fuel costs than modern cruise ship back in the 90's.", 
          final_2nd_para: 'SS Canberra was taken out of service with P & O in September 1997 and sold to ship breakers for scrap at Gadani Ship breaking yard in Pakistan. The scrapping process did not go as smoothly as they would have liked because her deep draft meant that she could not be beached as far as most ships. The scrapping process took nearly a year instead of the normal 3 months because of her solid construction. She will be remembered for her efforts in the Falkslands war in 1982 and one of the most iconic ships for putting P & O cruise line on the map.', 
          img_final: '', 
          img_final_title: ''

        },
        {
          id: 4,
          classic_ship_name: 'France',
          // Introduction Photo of ship at top of page on Left hand side  
          img: '/images/Evolution/France/france_1961_1.jpg',
          img_title: 'France in Home port for the first time in 1961',
          // Used for Evolution Part 1 and 2 
          original_ship_name: '',
          // early_years: '', I think early years is not used in most recent cruise-ships repo
          early_service_years: '',
          service_years: '',
          france_service_years: '1961 to 1974 | (laid up 1974 to 1979)',
          pacific_princess_years: '',
          pacific_years: '',
          loveboat_final_year: '',    
          // France info continued
          build_yard: 'Chantiers de l Atlantique, Saint-Nazaire, France', 
          original_operator: '',
          operator: 'French Line (Compagnie Generale Transatlantique',
          registry_port: 'Le Havre, France', 
          cost: 'US $80 Million or 30 Million British Pounds | (with 7 Million Pounds from French Government)', 
          imo: '5119143', 
          passenger_capacity_full: '2033 Maximum | 1st Class: 407 to 590 | 2nd Class: 1271 to 1637', 
          crew_capacity: '1167', 
          gross_tonnage: '66347.72', 
          length: '315.51 m (1035 feet 1.65 inches)', 
          beam: '33.7 m (110 feet 7 inches)',
          draft: '10.49 m (34 feet 5 inches)', 
          height: '67.66 m (222 feet)', 
          // Used to be called funnel_height
          height_funnel_top: '',

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
          fresh_water: '', 
          propellors: '4', 
          propellor_size: 'diameter', 
          rudder: '', 
          rudder_size: '', 
          decks: '', 
          accessible_decks: '12', 
          bridge_height: '', 
          bridge_water: '', 
          //Shelter Deck from Titanic, need it here with nothing as a variable to make this work. 
          shelter_deck: '', 
          bow_bridge: '75 m (246 feet)', 
          bow_height: '',

          // Foreign key for France as Norway cruise ship    
          // norway_id: '4',
          // Foreign key for Galileo Galilei as a cruise ship
          // galileo_id: '4',
          // Foreign Key Link to these classic ships, for their details when they were a cruise ship
          // classic_cruise_id: '4', 
          // Foreign Key Link for when these classic cruise ships were Lengthened to carry more cruise passengers
          // lengthened_id: '4',
          // Foreign Key for when a classic cruise ship had a name change during it's time as a Cruise Ship
          // name_changes_id: '4',

          // For each ships horn on either Evolution Part 1 and Evolution Part 2 Pages
          ship_horn: '/videos/classics/France/SS_Norway_horns.mp4',

          // Early Div Section for early life of a classic ship (has section id)
          early_1st_para: "The SS France was a steam ship, hence the intials SS (these ships used steam to power the fuel engines), that originally operated for the French Line. <br/>As can be seen in the photo above she originally had a black and white hull (this is the main structure of the ship). <br/> <br/>The <strong>above</strong> photo was taken when she was entering her home port of Le Havre, France for the very first time on 23rd of November 1961. France initially departed for a cruise in Canary Islands islands on 19th January 1962. Her maiden Transatlantic voyage from Le Havre to New York commenced on 3rd February 1962 and I have a video below showing this special occasion when the tugboats were in New York to greet her for the first time. On 14th December 1962 another memorable trip was made, as on board there was a very valuable Mona Lisa painting that was to be used on an American tour and a lot of French film stars.   ", 
          early_video: '/videos/classics/France/SS France At New York  (1962).mp4', 
          early_2nd_para: "During her time as SS France she was designed to make 46 Trans-Atlantic crossing per year as well as a series of winter cruises.<br>Her hull colour had changed to <strong>green</strong> during the mid to late 1960's and this rare photo below, shows her departing from Southhampton with her green hull.", 
          img_trials: "/images/Evolution/France/France leaving Southampton late 1960's.jpg", 
          img_trials_title: "SS France leaving Southampton in late 1960's", 
          early_3rd_para: "As the new decade wore on, the FRANCE was struggling like never before - largely due to passenger traffic taking to the skies. It was reported in 1973-74 that less than 2% of the travelers seeking passage over the Atlantic were aboard an actual ocean liner. With the price of oil jumping to $95 a ton, a fuel saving measure called for a reduction in speed to a maximium of 24-25 knots. This reduced speed imposed extending the crossing for an extra day as 5-day crossing became six, as 30 knot crossings became a thing of the past. On January 9th 1974 SS France left New York on a world voyage to Australia. As she was too long and wide for the Panama Canal she had to sail around South America and visited Papeete, Tahiti and Auckland and Wellington in New Zealand on the way through to Australia. She couldn't stop in Hobart, Tasmania as the harbour was not deep enough, but she arrived in Sydney on 6th February to a great welcome. Her trip back to New York was around South Africa. In 1974 though, SS France's career as a classic liner unfortunately came to an end when she arrived back in Le Havre and was laid up in what is called the Pier of the Forgotten. She was laid up for 5 years from 1974 to 1979. The end seemed in sight, but fortunately though in 1977 a Saudi Arabian man purchased her for $24 million", 
          img_early: '/images/Evolution/France/QuayofForgotten_800x567.jpg', 
          img_early_title: "SS France laid up at at the 'Pier of the Forgotton' in Le Havre in 1974.",

          // Cruise Div Section for cruise life of a classic ship (has section id)
          cruise_1st_para: "In 1979 SS France was sold to Knut Kloster, the owner of Norwegian Caribbean Line for $18 million to be converted into the largest cruise ship at that time. In August 1979 she was moved to Lloyd shipyards in Bremerhaven, Germany as can be seen in the below photo and would undergo renovations costing $80 million to be converted to a cruise ship.", 
          img_1stcruise: '/images/Evolution/France/GermanyDrydock_755x600.jpg', 
          img_1stcruise_title: 'Converted to SS Norway in Bremerhaven, Germany drydock in 1979', 

          // This part only applies to Evolution Part 2, where some ships there have been lengthened. 
          // name_before_lengthened: '', lengthened_para: '', img_lengthened: '', img_lengthened_title: '', 
          // name_after_lengthening: '', afterlengthen_para: '', img_afterlengthened: '', img_afterlengthened_title: '',

          cruise_2nd_para: 'SS France was now renamed SS Norway and on 14th April 1980 was finished and christened with the bottle of champagne, ready to start cruising. For her maiden voyage she left her drydock from Bremerhaven, Germany and sailed to Oslo, Norway. This is where her pre inaugural cruises started with only a few passengers, stopping in Southampton, England  and finishing in New York City. A 6 day cruise from New York to Bermuda was planned, but cancelled at the last minute because some problems had to be fixed. SS Norway did her official first cruise from Miami, Florida, USA on 1st June 1980. It was a 7 day cruise with stops in Little San Salvador and St Thomas, US Virgin Islands and then on to final destination Norway herself. She did this cruise itinerary for 2 years from 1980 to 1982. Between 1982 to 1985 she also did a similar type of cruise, but Nassau Bahamas was added as an extra port. In 1985 St Maarten, Netherland Antilles was added. In 1987 SS Norway had a new 7 day cruise itinerary from Miami with stops at ',
          img_2ndcruise: '/images/Evolution/France/64950_10151196370771167_222387638_n.jpeg', 
          img_2ndcruise_title: 'Photo of the then new SS Norway from a cruise brochure in 1980.',
          cruise_3rd_para: '', 
          img_3rdcruise: '', 
          img_3rdcruise_title: '', 
          cruise_4th_para: '', 
          img_4thcruise: '', 
          img_4thcruise_title: '',
          cruise_5th_para: '', 
          img_5thcruise: '', 
          img_5thcruise_title: '',
          cruise_video: '/videos/classics/France/Floating Paradise Lost  Cruising Aboard The S.S. NORWAY.mp4',    

          // This is the Memorable Moments Div (id = mem) 
          mem_1st_para: "This ship has not had many name changes, so it can either be remembered as a fast classic liner called France or an elegant cruise ship called Norway. Here is a video showing what cruising was like on her in the 90's. Note, because of her deep draft, she was not able to dock at all ports and sometimes tender boats had to take the passenger to shore.", 
          mem_video: '/videos/classics/France/NCL (Norwegian Cruise Line) SS Norway 90s Promo Video.mp4', 
          mem_2nd_para: '',

          // This is the Plans Div (id = plans)  
          plans_para: 'Here is the Ship Plans of France when she was with French Line', 
          ship_plans: '/images/Evolution/France/Norway2002-1.gif', 
          ship_plans_cont: '/images/Evolution/France/Norway2002-2.gif',

          // This is the Final Div (id = final)
          final_1st_para: 'The final years of Norway involved a very long decomissioning process of several different owners and a few challenges and controversy along the way. On 23 March 2004 the Chief Executive of Norwegian Cruise Lines Colin Veitch said the Norway will never sail again and the ships ownership was transferred to the parent Malaysian company Star Cruises. The controversy was over the large amount of asbestos (around 900 tonnes) in the ship, mostly in machine and bulkhead areas and she was at first not allowd to leave Bremerhaven, Germany where she was moored. Norway ship crew were eventually allowed to leave Bremerhaven, Germany under tow on 23 May 2005, because they convinced the German Authorities that they were going to Malaysia for ship repairs and further operation in Australia. Norway arrived in Port Klang, Malaysia on 10 August 2005. <br/> In December 2005 Norway was sold to an American naval demolition dealer for scrap value and after the sale to a scrapyard, the ship was towed to India for demolition. However there were protests from Greenpeace because of environment concerns mostly about the asbestos over the ship breakup. This problem along with fraudulent declaration charges to obtain leaving permission from Bremerhaven, meant that the sale contract was cancelled, purchase price refunded and Norway stayed in Port Klang, Malaysia.', 
          final_2nd_para: 'In 2006 Norway was sold to Bridgend Shipping Limited of Monrovia, Liberia and finally renamed SS Blue Lady in preparation for scrapping.   Write a bit more here -----------   There was an initial problem leaving Malaysia. She stopped in United Arab Emirates for repairs and take on new crew and supplies and then sail to India. An environment activist Gopal Krishna filed an application to Indian Government about problem with the ships asbestos levels.  India law states that Ships must be decontaminated of hazardous substances such as PSBs and asbestos before scrapping. There was an issue that SS Blue Lady owners had not notified India when they were in Malaysia and Germany.         After all the lengthy process the scrapping begun a year later in Alang, India       On 12th July 2008 the tip of SS Blue Lady bow was returned as a catalogue auction piece removed from the ship before scrapping, to her country of origin France in Paris ', 
          img_final: '/images/Evolution/France/A05-oct.jpeg', 
          img_final_title: 'Norway cruise ship in 2006, now renamed Blue lady and beached in Alang at low tide ready for scrapping.'

        },
        {
          id: 5,
          classic_ship_name: 'Galileo Galilei',
          // Introduction Photo of ship at top of page on Left hand side  
          img: '/images/Evolution/Galileo Galilei/Galileo03.jpg',
          img_title: 'Original Galileo Galilei at sea',
          // Used for Evolution Part 1 and 2
          original_ship_name: '',
          // Used for Evolution Part 1 and 2 
          original_ship_name: '',
          // early_years: '', I think early years is not used in most recent cruise-ships repo
          early_service_years: '1963 to 1984',
          service_years: '1963 to 1999',
          france_service_years: '',
          pacific_princess_years: '',
          pacific_years: '',
          loveboat_final_year: '',
          // Galileo Galilei info continued
          build_yard: 'Cantieri Riuniti dell Adriatico, Monfalcone, Italy',
          original_operator: '',
          operator: '1963-1979: Lloyd Triestino | 1979-1983: Italia Crociere | 1983-1990: Chandris Cruises | 1990-1997: Fantasy Cruises | 1997-1999: Sun Cruises',
          registry_port: '1963-1983:  Genoa, Italy | 1983-1990: Panama City, Panama | 1990-1999: Nassau, Bahamas', 
          cost: '', 
          imo: '5411254', 
          passenger_capacity_full: '1750 | (156 first class, 1,594 tourist class)', 
          crew_capacity: 'Possibly same as sister ship 443', 
          gross_tonnage: '27888', 
          length: '213.65 m (700 feet 11 inches)', 
          beam: '28.71 m (94 feet 2 inches)',
          draft: '8.60 m (28 feet 3 inches)', 
          height: '54.05 m (177 feet 4 inches) | (Keel to top of mast)', 
          // Used to be called funnel_height
          height_funnel_top: '45.11 m (148 feet) | Keel to top of funnel solid structure',
          
          //This space is where I have show more text, for when user wants to see more
          speed: 'Trials: 27.4 Knots (50.74 kn/h) | Service: 25 Knots (46.30 km/h) or 25.5 knots (47.23 km/h)', 
          deadweight: '9486 Tonnes', 
          lightship: 'Maybe 19045 Tonnes, sister ship Costa Riviera was 19028 Tonnes', 
          loaded_displacement: 'Maybe 28531 Tonnes', 
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
          //Shelter Deck from Titanic, need it here with nothing as a variable to make this work.
          shelter_deck: '', 
          bow_bridge: '63.839 m (209 feet 5.4 inches)', 
          bow_height: '23.833 m (78 feet 2.3 inches)', 
          
          // Foreign key for France as Norway cruise ship    
          // norway_id: '4',
          // Foreign key for Galileo Galilei as a cruise ship
          // galileo_id: '4',
          // Foreign Key Link to these classic ships, for their details when they were a cruise ship
          // classic_cruise_id: '4', 
          // Foreign Key Link for when these classic cruise ships were Lengthened to carry more cruise passengers
          // lengthened_id: '4',
          // Foreign Key for when a classic cruise ship had a name change during it's time as a Cruise Ship
          // name_changes_id: '4',

          // For each ships horn on either Evolution Part 1 and Evolution Part 2 Pages
          ship_horn: '/videos/classics/Galileo Galilei/MERIDIAN.mp4',

          // Early Div Section for early life of a classic ship (has section id)
          early_1st_para: "The Galileo Galilei is an Italian built ship that started her career as a passenger ship. Here is a video of her in her early beginnings.", 
          early_video: '', 
          early_2nd_para: 'Galileo Galilei in her early days was used as a passenger liner for long distance trips between Genoa,Italy and Sydney, Australia. Galileo Galilei left Genoa, Italy on  1963  for her maiden voyage to Sydney, Australia. Here she can be seen arriving in Sydney in summer of 1963.', 
          img_trials: '/images/Evolution/Galileo Galilei/galileo-galilei_Sydney1963.jpeg', 
          img_trials_title: 'Galileo Galilei arriving in Sydney on her maiden voyage in December 11th, 1963', 
          early_3rd_para: "On Galileo Galilei's trips to Australia, she also made a trip to New Zealand on the way, as can be seen below in the photo of her in Wellington in 1967. Galileo Galilei struck a reef off the coast of West Africa on 13th January 1975 and had to be repaired in Genoa, Italy her home port at the time. She continued to operate on the Italy to Australia service until April 1977 when she was was taken out of service and laid up for 6 months.", 
          img_early: '/images/Evolution/Galileo Galilei/galileo_galilei_Wgtn_Jan67.jpeg', 
          img_early_title: 'Galileo Galilei in Wellington by the Overseas Passenger Terminal back in January 1967',

          // Cruise Div Section for cruise life of a classic ship (has section id)
          cruise_1st_para: "In October 1977 Galileo Galilei was converted into a cruise ship. The conversion took place at Cantieri Navali Riuniti's, a Palermo, Italian shipyard. She was put back into service still as Galileo Galilei on 24th March 1979 , with the then new Italian Crociere Line (Italian Line Internationally known) and the passenger class system was gone. The cruises were in the Mediterranean and lasted up to a week at the most. Unfortunately after only a few trips, the Italian Line stopped cruise service and she was laid up in Genoa from September 1979.", 
          img_1stcruise: '', 
          img_1stcruise_title: '',

          // This part only applies to Evolution Part 2, where some ships there have been lengthened. 
          // name_before_lengthened: '', lengthened_para: '', img_lengthened: '', img_lengthened_title: '', 
          // name_after_lengthening: '', afterlengthen_para: '', img_afterlengthened: '', img_afterlengthened_title: '',

          cruise_2nd_para: 'Talk about this cruise ship when she was Galileo from 1984 to 1989',
          img_2ndcruise: '/images/evolution/Galileo Galilei/ChanGalileo01.jpeg', 
          img_2ndcruise_title: 'Cruising to the Caribbean as Galileo with Chandri Cruises in 1984',
          cruise_3rd_para: '', 
          img_3rdcruise: '', 
          img_3rdcruise_title: '', 
          cruise_4th_para: "In October 1989 Galileo was sent to Lloyd Werft, Bremerhaven, Germany for a $45 million rebuild that lasted through to February 1990. Most of her interiors were rebuiilt, with her charming 1960's retro linoleum, Formica and wooden Italian interiors being replaced with stunning and vibrant fittings and externally her rear superstructure was enlarged. She was sold to Celebrity Cruises on 22nd February 1990 with a new passenger capacity of 1,428. On 1st March 1990 she was now a new very sylish SS Meridian for Celebrity Cruises, cruising on a Caribbean and Boston/ New York - Bermuda service.", 
          img_4thcruise: '/images/evolution/Galileo Galilei/Meridian.jpeg', 
          img_4thcruise_title: "Sailing as Meridian for Celebrity Cruises in Caribbean in 90's",
          cruise_5th_para: 'in 1997 she had a new paint job, now operatings with Sun Cruises with her new name Sun Vista. Sun Vista operated cruises in the South East Asia area, cruises around Indonesia, Malaysia and Thailand. The cruises usually lasted around  days. Here is Sun Vista in port in . During her time as Sun Vista she can be remembered for being the set of an Indian movie called Mann in 1999.', 
          img_5thcruise: '/images/evolution/Galileo Galilei/sun-vista-72x.jpeg', 
          img_5thcruise_title: 'Sailing as Sun Vista for Sun Cruises in 1997 off the coast of Malaysia',
          cruise_video: "/videos/classics/Galileo Galilei/Celebrity Cruises Meridian 90's Bermuda Cruise.mp4",

          // This is the Memorable Moments Div (id = mem) 
          mem_1st_para: "Here is a video showing here time cruising with the different lines over the years.", 
          mem_video: '', 
          mem_2nd_para: '',
          
          // This is the Plans Div (id = plans)  
          plans_para: 'Here are Ship Plans below for Galileo Galilei when she was with Lloyd Triestino line in 1979.', 
          ship_plans: '/images/Evolution/Galileo Galilei/Galileo Galilei Ship Plans (pg 1).png', 
          ship_plans_cont: '/images/Evolution/Galileo Galilei/Galileo Galilei Ship Plans (pg 2).png',

          // This is the Final Div (id = final)
          final_1st_para: 'On May 20th 1999 when she operated as SS Sun vista, she suffered an engine room fire. The fire started off small, but gradually got a bit larger. The fire caused damage to structural parts of the ship (including the hull) and it began to take on water.', 
          final_2nd_para: 'Sun Vista end happened on 21st May 1999 at 5pm when she sank in the Mallacca Strait off the coast of Malaysia. Luckily though there was no loss of lives and everyone got saved from a passing container ship. This ship is now a dive wreck, but will always be remembered as a classic Italian Liner and cruise ship, that has served well during her time at sea.', 
          img_final: '/images/Evolution/Galileo Galilei/SunVistaFire.jpeg', 
          img_final_title: 'All passengers evacuated onto Life boats when smoke appeared from the Funnels during Sun vista final moments on 21st May 1999'

        },
        {
          id: 6,
          classic_ship_name: 'Pacific Princess',
          // Introduction Photo of ship at top of page on Left hand side  
          img: '/images/003410.jpg',
          img_title: 'Love Boat Pacific Princess at sea',
          // Used for Evolution Part 1
          original_ship_name: 'Sea Venture',
          // early_years: '', I think early years is not used in most recent cruise-ships repo
          early_service_years: '1971 to 1975',
          service_years: '1971 to 2013',
          france_service_years: '',
          pacific_princess_years: '1975 to 2002',
          pacific_years: '2002 to 2013',
          loveboat_final_year: '2013',
          // Pacific Princess info continued
          build_yard: 'Nordseewerke, emden, West Germany',
          original_operator: '',   
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
          // Used to be called funnel_height
          height_funnel_top: '',
     
          // This space is where I have show more text, for when user wants to see more        
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
          shelter_deck: '', 
          bow_bridge: '41.906 m (137 feet 5.8 inches)', 
          bow_height: '18.87 m (61 feet 11.1 inches)',

          // Foreign key for France as Norway cruise ship    
          // norway_id: '3',
          // Foreign key for Galileo Galilei as a cruise ship
          // galileo_id: '3',
          // Foreign Key Link to these classic ships, for their details when they were a cruise ship
          // classic_cruise_id: '3', 
          // Foreign Key Link for when these classic cruise ships were Lengthened to carry more cruise passengers
          // lengthened_id: '3',
          // Foreign Key for when a classic cruise ship had a name change during it's time as a Cruise Ship
          // name_changes_id: '3',

          // For each ships horn on either Evolution Part 1 and Evolution Part 2 Pages
          ship_horn: '/videos/classics/Pacific Princess/Bermuda-PacificPrincess(ex-Love Boat)ShipsWhistle.mp4',

          // Early Div Section for early life of a classic ship (has section id)
          early_1st_para: 'The Pacific Princess originally was built as Sea Venture in 1971 at the Nordseewerke (North Sea Works) shipyard in Emden, Germany for a cost of US$25 Million. During her early part of her career she operated under Flagship Cruises, which was a Norwegian cruise company from June 1971 to October 1974 and her registered port was Oslo, Norway. The cruises that she did back then was usually a week long cruise from New York City to Bermuda. Here she can be seen leaving Hamilton, Bermuda on a 1973 cruise.', 
          early_video: '/videos/classics/Pacific Princess/MS Sea Venture Departing Hamilton Harbor, Bermuda 1973 (The Love Boat!).mp4', 
          early_2nd_para: "Sea venture had an awesome moment in April 1974, when she had to perform a rescue operation. Queen Elizabeth 2 ship owned by Cunard, had lost all of her power about 250 miles off Bermuda coast. Sea Venture received QE2's Mayday call and left Hamilton, where she was docked during a cruise, to help out. She picked up all 1,650 passengers from the QE2 using her lifeboats, carried them back to Hamilton and the QE2 was towed to Bermuda for repairs. All ships including cruise ships have a prefix before the start of their name and this is to classify what type of ship it is and in the case of the Sea Venture it is ms Sea Venture. The ms part stands for motor ship and this is a ship that is propelled by an internal combustion engine. She had this ms prefix throughout her entire time of her service. This photo below shows Sea Venture carrying passengers to Bermuda when the QE2 broke down in April 1974.", 
          img_trials: '/images/Evolution/Pacific Princess/Pacific-Sea-Venture.jpeg', 
          img_trials_title: "Pacific Princess as Sea Venture on it's maiden voyage visting Hamilton, Bermuda in June 1971.", 
          early_3rd_para: 'Sea Venture with Flagship Cruises was certainly the early beginnings with this ship before she became really well known and famous. Doing cruises to Bermuda in the Caribbean was a good setup for things to come.', 
          img_early: '/images/Evolution/Pacific Princess/Sea-Venure-1-600-dpi.jpeg', 
          img_early_title: "As Sea Venture with Flagship Cruises postcard sailing in the Caribbean Sea to Bermuda during that QE2 rescue operation in April 1974.",
    
          // Cruise Div Section for cruise life of a classic ship (has section id)
          cruise_1st_para: "The Pacific Princess is unique because it operated as a cruise ship throughout her entire career. As I have already mentioned she started off as Sea Venture and then changed to Pacific Princess in 1975 operating under Princess Cruises. This was in time before the TV Show Love boat, which started in 1977. The Love Boat TV Show ran from 1977 to 1986 and the idea was that if you went on a cruise you could meet the love of your life. During her lifespan from 1971 to 2013, she was called Pacific Princess from 1975 to 2002 and was with Princess Cruises during that entire time having her port of registry in London, UK. You don't get many cruise ships that have stayed the same name and with the same cruise line for a length of time, so that is another factor that makes her a legendary ship. Here is photo of Pacific Princess with her yellow funnel during her early times with Princess cruises in Sydney, Australia during summer of 1975.", 
          img_1stcruise: '/images/Evolution/Pacific Princess/Pacific-Princess-PO-1.jpeg', 
          img_1stcruise_title: 'New Pacific Princess now with a yellow funnel and Princess Cruises, sailing under Sydney Harbour Bridge in 1975', 

          // This part only applies to Evolution Part 2, where some ships there have been lengthened. 
          // name_before_lengthened: '', lengthened_para: '', img_lengthened: '', img_lengthened_title: '', 
          // name_after_lengthening: '', afterlengthen_para: '', img_afterlengthened: '', img_afterlengthened_title: '',

          cruise_2nd_para: '',
          // Comment 2nd Cruise Image below for now, because I may want to use the The Love Boat image instead 
          // img_2ndcruise: '/images/Evolution/Pacific Princess/PacificPrincess03.jpeg', 
          // img_2ndcruise_title: 'Aerial view of Pacific Princess showing her good use of deck space and this postcard was when Princess fleet consisted of just Sun, Royal and her sister sister Island Princess ',
          img_2ndcruise: '/images/Evolution/Pacific Princess/1976-love-boat-filming-6-lg-e1492789992436-1-768x545.jpeg', 
          img_2ndcruise_title: 'Pacific Princess in 1976 during the filming for the Love Boat TV Show. Note her new Princess Cruises emblem on the funnel.',
          cruise_3rd_para: '', 
          img_3rdcruise: '/images/Evolution/Pacific Princess/Pacific-Pullmantur-lge.jpeg', 
          img_3rdcruise_title: 'Sailing as Pacific on 16th April 2004, with Pullmantur Cruise off the coast of Fort-de-France, the capital of the Caribbean island of Martinique.', 
          cruise_4th_para: 'In 2002 she as sold to a Brazil based company called Viagens CVC, was renamed Pacific and operated with Pullmantur Cruises. Pacific did cruises from to   with Pullmunter from 2002 to 2008.', 
          img_4thcruise: '/images/Evolution/Pacific Princess/Pacific-CVC.jpeg', 
          img_4thcruise_title: 'Sailing as Pacific jsut out of Barcelona, Spain on 2006, for Viagens CVC, a Brazilian based Cruise Line',
          cruise_5th_para: '', 
          img_5thcruise: '/images/Evolution/Pacific Princess/Pacific-Quail-1.jpeg', 
          img_5thcruise_title: 'Seen as Pacific in 2008, now operating with Quail Cruises, doing one week cruises in the Mediterranean.',
          cruise_video: '',

          // This is the Memorable Moments Div (id = mem) 
          mem_1st_para: "To relieve some pleasant memories of this classic cruise ship, watch this video below taken from the opening and closing segment of the Love Boat TV Show. Closing segment was in 1978 and opening looks to be in the early 1980's.", 
          mem_video: '/videos/classics/Pacific Princess/The Love Boat 1977 - 1986 Opening and Closing Theme.mp4', 
          mem_2nd_para: "In case you are wondering the Love Boat song was sung by Jack Jones in 1977. Jones's version was used in all seasons apart from the last, when it was replaced by Dionne Warwick's version.",

          // This is the Plans Div (id = plans)  
          plans_para: "Here is the Plans of Pacific Princess during her Princess days in the 1990's.", 
          ship_plans: '/images/Evolution/Pacific Princess/MS-Pacific-Princess-Deck-Plan.jpg', 
          ship_plans_cont: '',
          
          // This is the Final Div (id = final)
          final_1st_para: 'Towards the end of her career, there was quite a build up rust on the ship and this was noticeable on some parts of the dec. In 2013 because of the build of rust that effected the structure of the ship, it was decided that she will her career as a cruise ship and was finally name Acif, before she was scrapped.', 
          final_2nd_para: 'When Acif was being towed to Aliaga, Turkey for scrapping, she took on water and was a lean. However she did make it to Aliaga and sadly this great ship that has a lot of great memories got scrapped.', 
          img_final: '/images/Evolution/Pacific Princess/MS-Pacific-Breaker-arriving.jpeg', 
          img_final_title: 'The love boat docked for scrapping in Aliaga, Turkey ship scrapyard in 2013'

        }
      ]);
    });
};
