exports.seed = function(knex, Promise) {
    // Code below Deletes ALL existing entries for created Evo2 table 
    return knex('Evo').del()
        .then(() => knex.batchInsert    (
            // table name
            'Evo',
        [   

        // These ships are for Evolution Part 1 page from id: 1 to id: 6
        {
            id: 1,
            classic_ship_name: 'Titanic',
            // Introduction Photo of ship at top of page on Left hand side
            img: '/images/titaniccover.jpg',
            img_title: "Titanic in Southampton",
            // Used for Evolution Part 1 and 2 
            original_ship_name: '',
            early_service_years: '',
            service_years: '1912',
            loveboat_final_year: '',
            // Titanic info continued 
            build_yard: 'Harland and Wolff, Belfast, Northern Ireland, UK',
            original_operator: 'White Star Line',
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
            // shelter_deck I think was only used in Titanic days 
            // , so this is only used for Titanic in Evolution Part 1
            shelter_deck: '51 feet (15.54 m) above waterline', 
            bow_bridge: '196 feet 3 inches (59.817 m)', 
            bow_height: '24.70 m (81 feet 0.34 inches) or 25.662 m (84 feet 2.3 inches)',  

            // Use this join to Classic Cruising Table for both Evolution Part 1 and Part 2 
            // when the ship changed to a Cruise Ship
            classic_cruising_id: '1',

            // Use this join to Classic Lengthened Table, but it is only useful for some Evolution Part 2 ships
            classic_lengthened_id: '1',

            // Use this join to Name Changes Table for when this classic cruise ship had name changes, 
            // , as that is handled in Classic Lengthened table.
            name_change_id: '1', 

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

            // This is used only for some lengthend ships in Evolution Part 2
            name_before_lengthening: '',
            lengthened_para: '',
            img_lengthened: '',
            img_lengthened_title: '',
            afterlengthen_para: '',
            img_afterlengthen: '',
            img_afterlengthen_title: '',

            // Now we have paragrahs and images for each of the times the cruise ship changed cruise operators
            cruise_2nd_para: '',
            img_2ndcruise: '', 
            img_2ndcruise_title: 'This photo is taken from titanicfacts.net/titanic-ship/ found from titanic ship google search. Maybe show a photo here of Titanic leaving Southampton on maiden voyage with passengers on deck.',
            cruise_3rd_para: '', 
            img_3rdcruise: '', 
            img_3rdcruise_title: '', 
            cruise_4th_para: '', 
            img_4thcruise: '', 
            img_4thcruise_title: '',
            cruise_5th_para: '', 
            img_5thcruise: '', 
            img_5thcruise_title: '',
            // Extra paragraphs and images needed for Evolution Part 2
            cruise_6th_para: '',
            img_6thcruise: '',
            img_6thcruise_title: '',
            cruise_7th_para: '',
            img_7thcruise: '',
            img_7thcruise_title: '',
            cruise_8th_para: '',
            img_8thcruise: '',
            img_8thcruise_title: '',
            cruise_9th_para: '',
            img_9thcruise: '',
            img_9thcruise_title: '',
            cruise_10th_para: '',
            img_10thcruise: '',
            img_10thcruise_title: '',
            // I am not sure if putting a cruise video at the end of this section is the best.
            // Maybe having a cruise video at the beginning or in the middle of this section is the best place.
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
                early_service_years: '',
                service_years: '1959 to 2005',
                loveboat_final_year: '',
                // Oriana info continued 
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
                // shelter_deck I think was only used in Titanic days
                // , so this is only used for Titanic in Evolution Part 1
                shelter_deck: '', 
                bow_bridge: '101.689 m (333 feet 7.5 inches)', 
                bow_height: '25.289 m (82 feet 11.6 inches)',


                // Use this join to Classic Cruising Table for both Evolution Part 1 and Part 2 
                // when the ship changed to a Cruise Ship
                classic_cruising_id: '2',

                // Use this join to Classic Lengthened Table, but it is only useful for some Evolution Part 2 ships
                classic_lengthened_id: '2',

                // Use this join to Name Changes Table for when this classic cruise ship had name changes, 
                // , as that is handled in Classic Lengthened table.
                name_change_id: '2', 

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

                // This is used only for some lengthend ships in Evolution Part 2
                name_before_lengthening: '',
                lengthened_para: '',
                img_lengthened: '',
                img_lengthened_title: '',
                afterlengthen_para: '',
                img_afterlengthen: '',
                img_afterlengthen_title: '',

                // Now we have paragrahs and images for each of the times the cruise ship changed cruise operators
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
                // Extra paragraphs and images needed for Evolution Part 2
                cruise_6th_para: '',
                img_6thcruise: '',
                img_6thcruise_title: '',
                cruise_7th_para: '',
                img_7thcruise: '',
                img_7thcruise_title: '',
                cruise_8th_para: '',
                img_8thcruise: '',
                img_8thcruise_title: '',
                cruise_9th_para: '',
                img_9thcruise: '',
                img_9thcruise_title: '',
                cruise_10th_para: '',
                img_10thcruise: '',
                img_10thcruise_title: '',
                // I am not sure if putting a cruise video at the end of this section is the best.
                // Maybe having a cruise video at the beginning or in the middle of this section is the best place.
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
                early_service_years: '',
                service_years: '1961 to 1997',
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
                // shelter_deck I think was only used in Titanic days
                // , so this is only used for Titanic in Evolution Part 1    
                shelter_deck: '',
                bow_bridge: '82.22 m (269 feet 9 inches)', 
                bow_height: '27.66 m (90 feet 9 inches)',

                // Use this join to Classic Cruising Table for both Evolution Part 1 and Part 2 
                // when the ship changed to a Cruise Ship
                classic_cruising_id: '1',

                // Use this join to Classic Lengthened Table, but it is only useful for some Evolution Part 2 ships
                classic_lengthened_id: '1',

                // Use this join to Name Changes Table for when this classic cruise ship had name changes, 
                // , as that is handled in Classic Lengthened table.
                name_change_id: '1', 

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

                // This is used only for some lengthend ships in Evolution Part 2
                name_before_lengthening: '',
                lengthened_para: '',
                img_lengthened: '',
                img_lengthened_title: '',
                afterlengthen_para: '',
                img_afterlengthen: '',
                img_afterlengthen_title: '',

                // Now we have paragrahs and images for each of the times the cruise ship changed cruise operators
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
                // Extra paragraphs and images needed for Evolution Part 2
                cruise_6th_para: '',
                img_6thcruise: '',
                img_6thcruise_title: '',
                cruise_7th_para: '',
                img_7thcruise: '',
                img_7thcruise_title: '',
                cruise_8th_para: '',
                img_8thcruise: '',
                img_8thcruise_title: '',
                cruise_9th_para: '',
                img_9thcruise: '',
                img_9thcruise_title: '',
                cruise_10th_para: '',
                img_10thcruise: '',
                img_10thcruise_title: '',
                // I am not sure if putting a cruise video at the end of this section is the best.
                // Maybe having a cruise video at the beginning or in the middle of this section is the best place.
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
                early_service_years: '1960 to 1974',
                service_years: '1960 to 2006',
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

                // This space is where I have show more text, for when user wants to see more
                
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
                // shelter_deck I think was only used in Titanic days
                // , so this is only used for Titanic in Evolution Part 1
                shelter_deck: '', 
                bow_bridge: '75 m (246 feet)', 
                bow_height: '',

                // Use this join to Classic Cruising Table for both Evolution Part 1 and Part 2 
                // when the ship changed to a Cruise Ship
                classic_cruising_id: '4',

                // Use this join to Classic Lengthened Table, but it is only useful for some Evolution Part 2 ships
                classic_lengthened_id: '4',

                // Use this join to Name Changes Table for when this classic cruise ship had name changes, 
                // , as that is handled in Classic Lengthened table.
                name_change_id: '4', 

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

                // This is used only for some lengthend ships in Evolution Part 2
                name_before_lengthening: '',
                lengthened_para: '',
                img_lengthened: '',
                img_lengthened_title: '',
                afterlengthen_para: '',
                img_afterlengthen: '',
                img_afterlengthen_title: '',

                // Now we have paragrahs and images for each of the times the cruise ship changed cruise operators
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
                // Extra paragraphs and images needed for Evolution Part 2
                cruise_6th_para: '',
                img_6thcruise: '',
                img_6thcruise_title: '',
                cruise_7th_para: '',
                img_7thcruise: '',
                img_7thcruise_title: '',
                cruise_8th_para: '',
                img_8thcruise: '',
                img_8thcruise_title: '',
                cruise_9th_para: '',
                img_9thcruise: '',
                img_9thcruise_title: '',
                cruise_10th_para: '',
                img_10thcruise: '',
                img_10thcruise_title: '',
                // I am not sure if putting a cruise video at the end of this section is the best.
                // Maybe having a cruise video at the beginning or in the middle of this section is the best place.
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
                early_service_years: '1963 to 1984',
                service_years: '1963 to 1999',
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
                
                speed: 'Trials: 27.4 Knots (50.74 km/h) Max | Service: 25 Knots (46.30 km/h) normal or 25.5 knots Max (47.23 km/h)',
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
                // shelter_deck I think was only used in Titanic days
                // , so this is only used for Titanic in Evolution Part 1
                shelter_deck: '', 
                bow_bridge: '63.839 m (209 feet 5.4 inches)', 
                bow_height: '23.833 m (78 feet 2.3 inches)',

                // Use this join to Classic Cruising Table for both Evolution Part 1 and Part 2 
                // when the ship changed to a Cruise Ship
                classic_cruising_id: '5',

                // Use this join to Classic Lengthened Table, but it is only useful for some Evolution Part 2 ships
                classic_lengthened_id: '5',

                // Use this join to Name Changes Table for when this classic cruise ship had name changes, 
                // , as that is handled in Classic Lengthened table.
                name_change_id: '5',

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

                // This is used only for some lengthend ships in Evolution Part 2
                name_before_lengthening: '',
                lengthened_para: '',
                img_lengthened: '',
                img_lengthened_title: '',
                afterlengthen_para: '',
                img_afterlengthen: '',
                img_afterlengthen_title: '',

                // Now we have paragrahs and images for each of the times the cruise ship changed cruise operators
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
                // Extra paragraphs and images needed for Evolution Part 2
                cruise_6th_para: '',
                img_6thcruise: '',
                img_6thcruise_title: '',
                cruise_7th_para: '',
                img_7thcruise: '',
                img_7thcruise_title: '',
                cruise_8th_para: '',
                img_8thcruise: '',
                img_8thcruise_title: '',
                cruise_9th_para: '',
                img_9thcruise: '',
                img_9thcruise_title: '',
                cruise_10th_para: '',
                img_10thcruise: '',
                img_10thcruise_title: '',
                // I am not sure if putting a cruise video at the end of this section is the best.
                // Maybe having a cruise video at the beginning or in the middle of this section is the best place.
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
                // Used for Evolution Part 1 when it started out as Sea Venture
                original_ship_name: 'Sea Venture',
                early_service_years: '1971 to 1975',
                service_years: '1971 to 2013',
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
                // shelter_deck I think was only used in Titanic days
                // , so this is only used for Titanic in Evolution Part 1
                shelter_deck: '', 
                bow_bridge: '41.906 m (137 feet 5.8 inches)', 
                bow_height: '18.87 m (61 feet 11.1 inches)',

                // Use this join to Classic Cruising Table for both Evolution Part 1 and Part 2 
                // when the ship changed to a Cruise Ship
                classic_cruising_id: '6',

                // Use this join to Classic Lengthened Table, but it is only useful for some Evolution Part 2 ships
                classic_lengthened_id: '6',

                // Use this join to Name Changes Table for when this classic cruise ship had name changes, 
                // , as that is handled in Classic Lengthened table.
                name_change_id: '6', 

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

                // This is used only for some lengthend ships in Evolution Part 2
                name_before_lengthening: '',
                lengthened_para: '',
                img_lengthened: '',
                img_lengthened_title: '',
                afterlengthen_para: '',
                img_afterlengthen: '',
                img_afterlengthen_title: '',

                // Now we have paragrahs and images for each of the times the cruise ship changed cruise operators
                cruise_2nd_para: "In 1976 Princess Cruises agreed to have 2 of their cruise ships used during the filming of the TV Series Love Boat. The pilot series started in 1976 and most of the filming was onboard Pacific Princess and sometimes there was some filming on the Island Princess as well. The term Love Boat was used with Princess Cruises for their marketing of finding love onboard a cruise ship and increasing popularity for cruising. The love Boat TV show officially started with it's first season in 1977, where the opening and closing themes were filmed in Port Los Angeles. A lot of the cruises during the show went from Los Angeles (it's home port at the time) down to Acapulco, Mexico and return. The show lasted for a while and finished it's final season in 1986.",
                img_2ndcruise: '/images/Evolution/Pacific Princess/1976-love-boat-filming-6-lg-e1492789992436-1-768x545.jpeg', 
                img_2ndcruise_title: 'Pacific Princess in 1976 during the filming for the Love Boat TV Show. Note her new Princess Cruises emblem on the funnel.',
                cruise_3rd_para: '', 
                img_3rdcruise: '/images/Evolution/Pacific Princess/Pacific-Pullmantur-lge.jpeg', 
                img_3rdcruise_title: 'Sailing as Pacific on 16th April 2004, with Pullmantur Cruise off the coast of Fort-de-France, the capital of the Caribbean island of Martinique.', 
                cruise_4th_para: 'In 2002 she as sold to a Brazil based company called Viagens CVC, was renamed Pacific and operated with Pullmantur Cruises. Pacific did cruises from to   with Pullmunter from 2002 to 2008.', 
                img_4thcruise: '/images/Evolution/Pacific Princess/Pacific-CVC.jpeg', 
                img_4thcruise_title: 'Sailing as Pacific just out of Barcelona, Spain on 2006, for Viagens CVC, a Brazilian based Cruise Line',
                cruise_5th_para: '', 
                img_5thcruise: '/images/Evolution/Pacific Princess/Pacific-Quail-1.jpeg', 
                img_5thcruise_title: 'Seen as Pacific in 2008, now operating with Quail Cruises, doing one week cruises in the Mediterranean.',
                // Extra paragraphs and images needed for Evolution Part 2
                cruise_6th_para: '',
                img_6thcruise: '',
                img_6thcruise_title: '',
                cruise_7th_para: '',
                img_7thcruise: '',
                img_7thcruise_title: '',
                cruise_8th_para: '',
                img_8thcruise: '',
                img_8thcruise_title: '',
                cruise_9th_para: '',
                img_9thcruise: '',
                img_9thcruise_title: '',
                cruise_10th_para: '',
                img_10thcruise: '',
                img_10thcruise_title: '',
                // I am not sure if putting a cruise video at the end of this section is the best.
                // Maybe having a cruise video at the beginning or in the middle of this section is the best place.
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
            },

            // These ships are for Evolution Part 1 page from id: 7 to id: 12
            {
                id: 7,
                // Changed to classic_ship_name from ship_name
                classic_ship_name: 'Fairstar',
                //one object per row with batchInsert
                
                // Originally when it was a Troop Ship and before it was a Cruise Ship
                original_ship_name: 'Oxfordshire',  
                img: '/images/Evolution/Fairstar/Fairstar01.jpg',
                img_title: "Fairstar cruising off Pacific Islands in early 90's",
                
                // Original Ship Specifications as a Troop Ship
                early_service_years: '1957 to 1963',
                service_years: '1957 to 1997',
                loveboat_final_year: '',
                build_yard: 'Govan, Glasgow, Scotland | (by Fairfield Shipbuilding and Engineering Company)',
                original_operator: 'Bibby Line',
                registry_port: 'Monrovia, Liberia',
                cost: '',  
                imo: '5267732',
                // maybe have original_passengers_max:
                passenger_capacity_full: '1500 (including 1000 troops)',
                crew_capacity: '409',
                gross_tonnage: '20586',
                length: '185.76 m (609 feet 5.4 inches)',
                beam: '23.86 m (78 feet 3.37 inches)',
                draft: '8.41 m (27 feet 7 inches)',
                // Height and funnel height are the same as when it was Fairstar cruise ship
                height: '45.562 m (149 feet 5.78 inches) Keel to top of Mast',
                height_funnel_top: '40.402 metres (132 feet 6.63 inches) Keel to top of Funnel',
                
                // This space is where I have show more text, for when user wants to see more
                speed: 'Trails: 20.93 Knots (38.76 km/h) | Service: 18 Knots (33.34 km/h)',       
                deadweight: '8,500 Tonnes',
                lightship: '14,250 Tonnes',
                loaded_displacement: '22,750 Tonnes',
                power: '',
                power_rpm: '',
                fuel_capacity: '',
                fuel_consumption: '',
                fresh_water: '',
                propellors: '',
                propellor_size: '', 
                rudder: '',
                rudder_size: '',
                decks: '10',
                accessible_decks: '',
                bridge_height: '',
                bridge_water: '', 
                // shelter_deck I think was only used in Titanic days
                // , so this is only used for Titanic in Evolution Part 1
                shelter_deck: '',
                bow_bridge: '',
                bow_height: '',

                // Use this join to Classic Cruising Table for both Evolution Part 1 and Part 2 
                // when the ship changed to a Cruise Ship
                classic_cruising_id: '7',

                // Use this join to Classic Lengthened Table, but it is only useful for some Evolution Part 2 ships
                classic_lengthened_id: '7',

                // Use this join to Name Changes Table for when this classic cruise ship had name changes, 
                // , as that is handled in Classic Lengthened table.
                name_change_id: '7', 

                // For Ship Horns on Evolution Part 2 page
                ship_horn: '',
            
                // Each Ship Page Contents, excluding it's Specifications
                // Early Life
                early_1st_para: "The Fairstar started it's life as Oxfordshire, a ship with a different purpose than a cruise ship. It was a a steam ship with initials HMT, which stands for Her Majesty Transport and it was used to carry troops as a troop ship. The ship was built by Fairfield Shipbuilding and Engineering Company in Govan Shipyard, Glasgow, Scotland. The keel of the ship (designed as Ship No 75) was laid down with 8,396 UK tons (8.531 Metric Tonnes) of steel for the hull of the ship. Oxfordshire was launched on 15th December 1955 by Lady Dorothea Head who was wife of Lord Head ( Minister for War ). It took over a year to fit out the whole ship and so her sea trials did not start until 29th January 1957. During her sea trials Oxfordshire attained a maximum speed of 20.79 knots and an average of 19.78 knot (36.63 kph), so she wasn't a fast classic ship, especially when you compare her to QE2. She can be seen in the photo below doing her sea trials off.",
                early_video: '',
                early_2nd_para: "Oxfordshire was owned by Bibbly Line on 14 February 1957, when she cruised with her steam turbine engines from the shipyard in Govan, Glasgow, Scotland to liverpool, England, UK to begin her role as a troop ship. Oxfordshire was able to carry 1000 troops, 500 passengers (who were usually families of the troops) and 409 crew.",
                img_trials: '',
                img_trials_title: '',
                early_3rd_para: "Oxfordshire's maiden voyage began on 28th February 1957, when she left Liverpool under command of Captain Norman Fitch and travelled to Hong Kong via Capetown, South Africa. During Oxfordshires time as a troop ship, she made an average of four trips per year between Great Britain and the Far East. She frequently called at the following ports of Ceylon (Now called Sri Lanka), Aden (Yemen) and Port Said and Suez in Egypt. By the early 60's transport through air by an aircraft become more popular and so trooping by sea was losing it's popularity. On 1962 Oxfordshire was taken out of service as a troop ship.",
                img_early: '/images/Evolution/Fairstar/oxfordshire-troops.jpg',
                img_early_title: 'Oxfordshire berthing, with troops ready to board',

                // As a Cruise Ship
                cruise_1st_para: "The Fairstar began in 1964, but it had a bit of delayed start due to a financial dispute. What happened was the company Wilton-Fijenoord doing the rebuild in Schiedam Shipyard (Rotterdam) wanted to get paid more for doing extra work. They were in dispute with the new owner Sitmar who purchased her in March 1964, but did not want to accept her because when they had this dispute and they said to the re-builder that all the work was in the original contract.",
                img_1stcruise: '/images/Evolution/Fairstar/Fairstar-Hans Kleijwegt-Rotterdam-lge.jpg',
                img_1stcruise_title: 'Beginning of the Fairstar, 1964 in Rotterdam during a financial dispute, which left her idle.',
                                
                // Cruise Ship Lengthening
                name_before_lengthening: '',
                lengthened_para: "",
                img_lengthened: '',
                img_lengthened_title: '',
                // After Cruise Ship Lengthening
                afterlengthen_para: "",
                img_afterlengthen: '',
                img_afterlengthen_title: '',
                // Other Cruise Ship Contents like Changing Cruise Operators
                cruise_2nd_para: "Fairstar set sail from Southampton on 19th May 1964 for her maiden voyage to Sydney. In her early years as Fairstar she sailed with the Sitmar cruise company, which stands for Societa Italiana Tranporti Marittimi or in English Italian Sociey of Maritime Transport. When it first started out it had a yellow funnel with a V on it and the V stood for Sitmars founding Shipping company Vlasof. It was used as a passenger liner for long distance travel from it's home port Southampton for immigrants. It visited places like . Here is a photo of Fairstar on her maiden voyage in 1964.",
                img_2ndcruise: '',
                img_2ndcruise_title: '',                
                cruise_3rd_para: "Fairstar started her cruises in July 1973. Initially she did cruises from Southampton to places like . In November 1974 Fairstar found a new home port, Sydney and this was to be her home port for the rest of her career where she set sail for cruises. Her passenger capacity had been reduced to 1,280 through a major refit as more lounge and dining rooms were fitted and so this reduced passenger capacity. During the 70's a lot of her cruises were to the South Pacific from Australia, but there were a few to Asia as well. Here is a photos of Fairstar during a 1970's cruise from Sydney.",
                img_3rdcruise: '/images/Evolution/Fairstar/1574479.jpg',
                img_3rdcruise_title: "Fairstar berthed in Circular Quay, Sydney during the mid 1970's",
                cruise_4th_para: "Here is photo onboard Fairstar on a 1987 cruise, showing how popular she was as a cruise ship.",
                img_4thcruise: '/images/Evolution/Fairstar/838167.jpg',
                img_4thcruise_title: 'Onboard Fairstar during a South Pacific Cruise from 20th February to 4th March, 1987',
                cruise_5th_para: "In 1988 Sitmar was sold to P & O Australia for $210 Million, so Fairstar now changed to a new cruise operator P & O Sitmar and it could now take 1,390 passengers. It had a new paint job on it's funnel and it was now dark blue with the V being replaced with a red and white swan, which I think is the best colour scheme it ever had because it matched the beautiful waters it sailed in. It now was doing cruises to places in the South Pacific like Fiji, Vanuatu, Champagne Bay and Noumea. Here is a photo of her in 1988 .",
                img_5thcruise: '/images/Evolution/Fairstar/1583100.jpg',
                img_5thcruise_title: 'Fairstar Anchored off Mystery Island, Vanuatu on 24th September, 1988',
                cruise_6th_para: "In April 1989 Fairstar had her second major refit as a cruise ship. With the refit her boat deck was extended making her Lido Deck and Pool area more spacious, lounges and passenger cabins upgraded and a new water plant for drinking water. I am fortunate enough to have travelled on her in December 1990 when I was young boy. I remember when I was on it, it had a excellent usage of deck space for a keep fit area, nightclub, buffet and blank shooting off the back deck. The only drawback we had as a family, was that my parents and sister got sick from the buffet food. This is one area that has improved in recent times with cruise ships, is that the buffets are much better controlled for food quality. Other than that it was an awesome cruise and brings back fond memories of snorkelling in Champagne Bay and exploring Noumea, Fiji and Vanuatu. During these times she was known as Fairstar the Funship to attract younger passengers and here is a photo of Fairstar in late 1989, just over a year before I was on it.",
                img_6thcruise: '/images/Evolution/Fairstar/Fairstar the Funship off Whitsunday Islands October 1989.jpg',
                img_6thcruise_title: 'Fairstar the Funship off Whitsunday Islands, October 1989',
                cruise_7th_para: "On 1st January 1991 P & O Australia was now the new cruise operator. It was to be owned by P & 0 Sitmar. In June 1991 the funnel was now white with black capping on top, but it still had the sitmar logo with the swan that was now blue and red. Here is a photo of Fairstar with her new colours in 1991.",
                img_7thcruise: '',
                img_7thcruise_title: '',
                cruise_8th_para: "On 1st July 1991 P & O Sitmar just became P & O and on 1st March 1992 Fairstar was operated by P & O Australia and for a while it was called P & O Funship. The times of Fairstar the Funship during the late 80's and some early 90's was a great concept, but P & O found that people were looking for something different during the 90's. Research had shown that people wanted cruises in unknown, unspoiled places that have a sense of discovery. This was shorter cruises with whale watching and fly cruising. So in December 1993 there was a final change to her funnel with the swan now replaced with with a white jumping dolphin on 2 blue overlapping discs. Some onboard improvements were also made foodwise, like the Brasserie Delfino for italian food and freshly baked pizza located forward on promenade deck. The cruises were generally between 11 and 13 days. Here is a photo of Fairstar in",
                img_8thcruise: '',
                img_8thcruise_title: '',
                cruise_9th_para: "",
                img_9thcruise: '',                
                img_9thcruise_title: '',
                cruise_10th_para: "",
                img_10thcruise: '',
                img_10thcruise_title: '',
                cruise_video: '',

                // Memorable Moments
                mem_1st_para: "To relieve some pleasant memories of this classic cruise ship, watch this video below, which was taken around the Fairstar Funship times. ",
                mem_video: '/videos/classics/Fairstar/P&O Fairstar.mp4',
                mem_2nd_para: '',

                // Ship Plans
                plans_para: "Here is an overall plan of Fairstar cruise ship along with deck plans below this.",
                ship_plans: '/images/Evolution/Fairstar/Fairstar-RG-Photopage-Ships-Layout.jpg',                
                ship_plans_cont: '/images/Evolution/Fairstar/Fairstar-Deck-Plan1994.jpg',

                // Final Years
                final_1st_para: "In Fairstar's final years from 1993 onwards, she had a white funnel with a blue cap on top and the dolphin was white with a blue background.",
                final_2nd_para: " During her time, Fairstar can be remembered as the most popular Cruise Ship that sailed out of Sydney. Since her first Australian based cruise in Sydney back in December 1974, she has taken almost one million passengers on cruises and travelled more than two million nautical miles, which is equal to 251 times around the world or four times to the moon and back. Also it can be noted that she had passed the Sydney Opera House over 1,100 times. In her final moments, the name Fairstar was removed, she was renamed RIPA very faintly on the top of her bow and she was now registered with a new port (Saint Vincent and Grenadines). On February 5th, 1997 she left Sydney for the last time and went to the ship breakers in Alang, India to be broken up. The reality was that even though she still looked like a nice looking ship, new SOLAS (which stands for Safety of Life at Sea) safety requirements came in to effect in 1997 and sadly Fairstar had several major problems like brickwork coming off her boliers and her engines were not holding up very well over the final years. Fairstar is a ship that has sadly passed, but will never be forgotten for her lovely cruises in the Pacific Islands.",
                img_final: '/images/Evolution/Fairstar/Fairstar-RG-RIPA-Feb-12-97.jpg',
                img_final_title: 'Fairstar as RIPA leaving Sydney for the last time.'
            },
            {
                id: 8,
                // Michangelo was more of a passenger liner than a cruise ship
                // , so now I have replaced it with Sea Princess Cruise ship that started off as 
                // Kungsholm in 1965.
                // You can see original Michelangelo ship details on classic-cruiseships branch
                // https://github.com/RobertWSON/Personal-ship-project/blob/classic-cruiseships/seeds/evo2.js#L223
                classic_ship_name: 'Sea Princess',
                original_ship_name: 'Kungsholm',
                img: '/images/Evolution/Sea Princess/PO-Sea-Princess-79.jpeg',
                early_service_years: '1966 to 1979',
                service_years: '1966 to 2013',
                loveboat_final_year: '',
                build_yard: 'Clydebank, Scotland | (by John Brown and Company)',
                original_operator: 'Swedish America Line',
                registry_port: 'Gothenburg, Sweden (1966 to 1975) | Monrovia, Liberia (1975 to 1978) | London, England, UK (1978 to 2002) | Nassau, Bahamas (2002 to 2010)', 
                cost: '',
                imo: '6512354',
                passenger_capacity_full: '1966 to 1974 (Transatlantic service): 108 First class, 605 tourist class | 1975 to 2007: 450 for cruising | 2008 onwards: 782',
                crew_capacity: '417',
                gross_tonnage: '1966 to 1974:  26,678 | 1975 to 1977: 18,174 | 1978 to 2007: 27,670 | 2008 to 2016: 28,891',
                length: '201.33 m (660 feet 6 inches)',
                beam: '26.57 m (87 feet 2 inches)',
                draft: '8.56 m (28 feet 1 inch)',
                height: '',
                height_funnel_top: '',
                // May call it this height_funnel_top as a new variable 

                // This space is where I have show more text, for when user wants to see more
                speed: 'Maximum 25 knots (46 km/ hr, 29 mph) | Cruising (Service): 20 knots (37 km/ hr, 23 mph)',
                deadweight: '5,572 Tonnes',
                lightship: '16,250 Tons (16,510.78 Tonnes) or 17923 Tonnes from https://robindesbois.org/wp-content/uploads/2016/02/shipbreaking42.pdf',
                loaded_displacement: '',
                power: '25,200 Imperial Horsepower (18,791.66 kW)',
                power_rpm: '',
                fuel_capacity: '',
                fuel_consumption: '',
                fresh_water: '',
                propellors: '',
                propellor_size: '',
                rudder: '',
                rudder_size: '',
                decks: '',
                accessible_decks: '',
                bridge_height: '',
                bridge_water: '',
                // shelter_deck I think was only used in Titanic days
                // , so this is only used for Titanic in Evolution Part 1s
                shelter_deck: '',
                bow_bridge: '',
                bow_height: '',

                // Use this join to Classic Cruising Table for Evolution Part 2 when the ship changed to a Cruise Ship
                classic_cruising_id: '8',

                // Use this join to Name Changes Part 2 Table for name changes that it had after it's first initial name.
                name_change_id: '8', 

                // Use this join to Classic Lengthened Part 2 Table for details when the cruise ship was lengthened
                classic_lengthened_id: '8',

                // For Ship Horns on Evolution Part 2 page
                ship_horn: '',

                // Each Ship Page Contents, excluding it's Specifications
                // Early Life
                early_1st_para: "",
                early_video: '',
                early_2nd_para: "",
                img_trials: '',
                img_trials_title: '',      
                early_3rd_para: "",
                img_early: '',
                img_early_title: '',

                // As a Cruise Ship
                cruise_1st_para: "",
                img_1stcruise: '/images/Evolution/Sea Princess/PO-Sea-Princess-79.jpeg',
                img_1stcruise_title: 'Kungsholm now sailing as new Sea Princess in 1979. The front (forward) funnel was removed and the back (aft) funnel was replaced with a new yellow funnel.',
                // Cruise Ship Lengthening (Does not apply for Michelangelo)
                name_before_lengthening: '',
                lengthened_para: "",
                img_lengthened: '',
                img_lengthened_title: '',
                // After Cruise Ship Lengthening (Does not apply for Michelangelo)
                afterlengthen_para: "",
                img_afterlengthen: '',
                img_afterlengthen_title: '',
                // Other Cruise Ship Contents like Changing Cruise Operators
                cruise_2nd_para: "",
                img_2ndcruise: '/images/Evolution/Sea Princess/PO-Sea-Princess-Stan-Evans-SYD.jpeg',
                img_2ndcruise_title: 'Sea Princess arriving in Sydney in 1985, for her final time sailing with P & O Cruise Line.',
                cruise_3rd_para: "",
                img_3rdcruise: '/images/Evolution/Sea Princess/b3ccfb28ea6069d3901df766201901ac.jpeg',
                img_3rdcruise_title: "Sea Princess now cruising with Princess Cruises off the coast of a beautiful Caribbean location in 1987.",
                cruise_4th_para: "",
                img_4thcruise: '/images/Evolution/Sea Princess/PO-Victoria-Union-Castle-1999.jpeg',
                img_4thcruise_title: 'Sailing as Victoria for Union Castle Line in 1999.',
                cruise_5th_para: "",
                img_5thcruise: '/images/Evolution/Sea Princess/Mona-Lisa-0.jpeg',
                img_5thcruise_title: 'Docked as Mona Lisa, for Leonardo Shipping in 2002, Notice her new white colour including her funnel, which now has a famous paiting of Mona lisa.',
                cruise_6th_para: "",
                img_6thcruise: '/images/Evolution/Sea Princess/PULL-Oceanic-II-Georges-Koutsoukis.jpeg',
                img_6thcruise_title: 'Docked as Oceanic II, for Royal Caribbean Cruise Line in 2007. Notice she still has her Mona Lisa funnel now in red to compliment her.',
                cruise_7th_para: "",
                img_7thcruise: '/images/Evolution/Sea Princess/PULL-Oceanic-II.jpeg',
                img_7thcruise_title: 'Sailing as Oceanic II, for Pullmantur Cruise Line during European Northern Hemipshere summer in 2007.',
                cruise_8th_para: "",
                img_8thcruise: '/images/Evolution/Sea Princess/PULL--Oceanic-!!-SYD-Nov-2007.jpeg',
                img_8thcruise_title: 'Operating as Oceanic II IN 2008, for a Scholar Ship international education program. Notice the blue funnel and The Scholar Ship logo.',
                cruise_9th_para: "",
                img_9thcruise: '/images/Evolution/Sea Princess/Mona-Lisa-2.jpeg',
                img_9thcruise_title: 'Sailing in 2009 around ,  as the Mona Lisa with the famous painting on her funnel',
                cruise_10th_para: "",
                img_10thcruise: '/images/Evolution/Sea Princess/Mona-Lisa-Veronica-ship.jpeg',
                img_10thcruise_title: 'As a luxury hotel ship now called Veronica at night in the port of Duqm, Oman in 2011',
                cruise_video: '',

                // Memorable Moments
                mem_1st_para: "",
                mem_video: '',
                mem_2nd_para: '',

                // Ship Plans
                plans_para: "Here is an overall plan of Sea Princess ship when she was with P & O, along with deck plans below this.",
                ship_plans: '/images/Evolution/Michelangelo/Michangelo_Side_View_Plan.jpeg',
                ship_plans_cont: '/images/Evolution/Michelangelo/Michelangelo_Full_Ship_Plans.jpg',

                // Final Years
                final_1st_para: "",
                final_2nd_para: "In October 2013 her time operating as a luxury hotel ship came to an end. Veronica was laid up for 2 years in Oman, sadly she wasn't looked after and in October 2015 she was sold to Indian ship breakers for scrapping in Alang at $20 US Million. Efforts were made to find a new investor to save the ship, but unfortunately as she anchored north east the breakers beaches on November 13th, 2015 the end was in sight.",
                img_final: '/images/Evolution/Sea Princess/Mona-Lisa-Veronica-ship-Nov-2015.jpeg',
                img_final_title: 'The sad sight of the rundown, neglected Sea Princess laid up in Duqm, Oman as Veronica in 2015 before scrapping.'
            },
            {
                id: 9,
                classic_ship_name: 'Queen Elizabeth 2',
                // Queen Elizabeth 2 (1969 to present)
                // Original Ship Data (QE2 was more of a passenger ship early on and became a cruise ship as well later)
                original_ship_name: '',
                img: '/images/Evolution/Qe2/5148955_orig.jpg',
                img_title: "Queen Elizabeth 2 in original colours, cruising off Canary Isles",
                early_service_years: '1969 to 1982',
                service_years: '1969 to 2008',
                loveboat_final_year: '',
                build_yard: 'John Brown and Company (Upper Clyde Shipbuilders), Clydebank, Scotland',
                original_operator: 'Cunard Line (1969 to 2008) | Nakheel 2008 to 2018 | PCFC Hotels (2018 to present)',
                registry_port: 'Southampton, UK (1969 to 2008) | Port Vila, Vanuatu (2008 to 2018) | Dubai, UAE (2018 to present)',
                cost: '29,091,000 British Pounds',
                imo: '6725418',
                passenger_capacity_full: '1892',
                crew_capacity: '1040',
                gross_tonnage: '1969 to 1994: 65683 | 1994 onwards: 70327',
                length: '293.52 m (963 feet)',
                beam: '32.07 m (105 feet 2.6 inches)',
                draft: '9.8 metres (32 feet 1.8 inch)',
                height: '62.1 m (203 feet 8.88 inches)',
                height_funnel_top: '',

                // This space is where I have show more text, for when user wants to see more
                speed: 'Maximum 34 knots (63 km/ hr, 39 mph) | Cruising (Service): 28.5 knots (52.8 km/ hr, 32.8 mph)',
                deadweight: '11,649 Tonnes',
                lightship: '35,089 Tonnes',
                loaded_displacement: '49,738 Tonnes',
                power: '88,000 kW (118,010 Horsepower)',
                power_rpm: '179rpm before 1987 refit',
                fuel_capacity: '4,381.4 tons',
                fuel_consumption: '18.05 tons per hour or 433 tons per day',
                fresh_water: '',
                propellors: '',
                propellor_size: '',
                rudder: '',
                rudder_size: '80 tons',
                decks: '12',
                accessible_decks: '',
                bridge_height: '',
                bridge_water: '', 
                // shelter_deck I think was only used in Titanic days
                // , so this is only used for Titanic in Evolution Part 1
                shelter_deck: '',
                bow_bridge: '',
                bow_height: '',

                // Use this join to Classic Cruising Table for Evolution Part 2 when the ship changed to a Cruise Ship
                classic_cruising_id: '9',

                // Use this join to Name Changes Part 2 Table for name changes that it had after it's first initial name.
                name_change_id: '9', 

                // Use this join to Classic Lengthened Part 2 Table for details when the cruise ship was lengthened
                classic_lengthened_id: '9',

                // For Ship Horns on Evolution Part 2 page
                ship_horn: '/videos/classics/QE2/QE2 Queen Elizabeth 2 Leaving Quebec City for Her last Time.mp4',

                // Each Ship Page Contents, excluding it's Specifications
                // Early Life
                early_1st_para: "Queen Elizabeth 2 is one of the famous well known ships here, as she was named after the most famous Queen of all time Queen Elizabeth 2 upon her launching on 20th September 1967 in Clydebank. The Queen had the privilege of naming her and hitting the champagne bottle on the side of the ship just before her launching into the Clyde River. Below is a video showing the Launching of QE2 with her Majesty Queen Elizabeth 2 present for the occasion on 20th September 1967.",
                early_video: '/videos/classics/QE2/Launching Of The Q4 (1967).mp4',
                early_2nd_para: "On 26th November 1968 QE2 started her trials in the Irish Sea. There was a problem with the water plant system feeding to the boilers during her initial trials because of a faulty oil valve allowing lubricant through to one of the main boilers, but she still easily achieved 29.5 knots (54.63 kph), so they had to do an extra trial and QE2 reached 34 knots (63 kph) without any problem. Below is a photo of QE2 in the Irish Sea on 26th November 1968 during her ship trials where she initially achieved 29.5 knots.",
                
                img_trials: '/images/Evolution/QE2/QE2_Trials.png',
                img_trials_title: 'QE2 Speed Trials, Nov 1968 off Isle of Arran in the Firth of Clyde, Scotland.',
                early_3rd_para: "At the time She was the fourth ship in the Cunard fleet, so she was also known as Q4 and she was more economical to run than the Cunard ships she was replacing. Queen Elizabeth 2 started her intial trip to Las Palmas from Southampton and back on 22nd April 1969, but her real maiden voyage was across the Atlantic on 2nd May 1969 from here home port Southampton to sail to New York City. She sailed under the UK flag, being registered in Southampton and was with Cunard Line. In her early days up until 1974 she was more of a liner than a cruise ship, that travelled across the Atlantic Ocean (hence the term transatlantic liner) and this can be reflected in her long bow that can handle the sea well cutting through it. As I mentioned before, QE2 was helped by Pacific Princess, as this ship had lost power in Bermuda in 1974. Here is a photo of QE2 during her early days in 1972 with her noticeable sloping deck, that gave her the most deck space of a cruise ship at that time. ",
                img_early: '/images/Evolution/QE2/QE21972w.jpeg',
                img_early_title: 'QE2 in 1972 showing off her beautifully stepped stern decking with her 1st class Sports Deck on top.',

                // As a Cruise Ship
                cruise_1st_para: "Queen Elizabeth 2 really started her proper cruising careeer in 1974, when she did ",
                img_1stcruise: '',
                img_1stcruise_title: '',
                // Cruise Ship Lengthening (Does not apply for QE2)
                name_before_lengthening: '',
                lengthened_para: "",
                img_lengthened: '',
                img_lengthened_title: '',
                // After Cruise Ship Lengthening (Does not apply for QE2)
                afterlengthen_para: "",
                img_afterlengthen: '',
                img_afterlengthen_title: '',
                // Other Cruise Ship Contents like Changing Cruise Operators
                cruise_2nd_para: "",
                img_2ndcruise: '',
                img_2ndcruise_title: '',
                cruise_3rd_para: "In 1982 Queen Elizabeth was converted as a troopship for the Falklands war. She left Southampton Harbour on 12th May 1982 with 3000 troops for her mission. She returned to Southampton on 11th June 1982, where she was greeted by the Queen Mother on board HMY Britannia Yacht with an exchange of horns.",
                img_3rdcruise: '/images/Evolution/QE2/114727_full.jpeg',
                img_3rdcruise_title: "QE2 Leaving Southampton for Falkland Islands as a Troop Ship on 12th May 1982.",
                cruise_4th_para: "After the Falklands war QE2 was converted back to a passenger ship for cruise service and the refurbishment took over 2 months in a Southampton shipyard. Her funnel was painted Cunard orange with black stripes and some alterations were made like an added Golden Door Spa at Sea. The most noticeable alteration from the outside was the hull painted in a light pebble grey colour. QE2 returned to service as a cruise ship on 7th August 1982. She operated world cruises to places like Canada, Spain and New Zealand. The new hull colour unfortunately was not very popular as it was very hard to maintain and in mid 1983 it was taken ouy of service to be repainted back to her original hull colour. Here is a lovely photo of her taken when she was in Wellington, New Zealand in early 1983.",
                img_4thcruise: '/images/Evolution/QE2/2911161.jpeg',
                img_4thcruise_title: 'QE2 with an unusual light pebble grey hull in Wellington, New Zealand on 16th February 1983.',
                cruise_5th_para: "",
                img_5thcruise: '',
                img_5thcruise_title: '',
                cruise_6th_para: "",
                img_6thcruise: '',
                img_6thcruise_title: '',
                cruise_7th_para: "",
                img_7thcruise: '',
                img_7thcruise_title: '',
                cruise_8th_para: "",
                img_8thcruise: '',
                img_8thcruise_title: '',
                cruise_9th_para: "",
                img_9thcruise: '',
                img_9thcruise_title: '',
                cruise_10th_para: "",
                img_10thcruise: '',
                img_10thcruise_title: '',
                cruise_video: '',

                // Memorable Moments
                mem_1st_para: "",
                mem_video: '',
                mem_2nd_para: '',

                // Ship Plans
                plans_para: "Here is an overall plan of Queen Elizabeth 2 cruise ship, along with deck plans below this.",
                ship_plans: '/images/Evolution/Qe2/QE2CutawayQ.jpg',
                ship_plans_cont: '',

                // Final Years
                final_1st_para: "The Queen Elizabeth 2 retired from her service as a cruise ship on 27th November 2008. During her lifetime as a liner and a cruise ship she had travelled more than 5.6 million miles, carried more than 2.5 million passengers and completed 806 transatlantic crossings. She was berthed at Port Rashid, Dubai and plans were in place to convert her into a floating hotel. The Queen Elizabeth 2 was taken out of service in 2018 as a cruise ship, but instead of being scrapped she is now used as a floating hotel. She has been operating as a floating hotel in Port Rashid, Dubai, United Arab Emirates since 18th April 2018. ",
                final_2nd_para: "",
                img_final: '',
                img_final_title: ''
            },
            {
                id: 10,
                classic_ship_name: 'Song of Norway',

                // Originally Song of Norway was a Cruise Ship, but it was shorter in Length
                original_ship_name: 'Song of Norway (1970 to 1997)',
                img: '/images/image_manager__rex_thumbnail_images_song_of_norway_08.06.1994.jpg',
                img_title: "Song of Norway in Panama Canal 1994",

                // Original Ship Specifications as a smaller Cruise Ship
                early_service_years: '1970 to 1978',
                service_years: '1970 to 2013',
                loveboat_final_year: '',
                build_yard: 'Wartsilla Helsinki Shipyard, Finland',
                original_operator: 'Royal Caribbean (1970 to 1997)',
                registry_port: 'Oslo, Norway (1970 to 1997)',
                cost: '$US 13.5 Million ',
                imo: '7005190',
                passenger_capacity_full: '724',
                crew_capacity: '',
                gross_tonnage: '18416',
                length: '168.32 m (552 feet 2.75 inches)',
                beam: '23.96 m (78 feet 7.3 inches)',
                draft: '6.7 m ()',
                height: '',
                height_funnel_top: '',
                // This space is where I have show more text, for when user wants to see more
                speed: 'Cruising: 20.5 knots (38 km/hr, 23.6 mph)',
                deadweight: '3202 Tonnes',
                lightship: '',
                loaded_displacement: '',
                power: '14,560 kW (19,525.25 Horsepower)',
                power_rpm: '450 rpm',
                fuel_capacity: '',
                fuel_consumption: '',
                fresh_water: '',
                propellors: '',
                propellor_size: '',
                rudder: '',
                rudder_size: '',
                decks: '',
                accessible_decks: '',
                bridge_height: '',
                bridge_water: '', 
                // shelter_deck I think was only used in Titanic days
                // , so this is only used for Titanic in Evolution Part 1
                shelter_deck: '',
                bow_bridge: '',
                bow_height: '',

                // Use this join to Classic Cruising Table for Evolution Part 2 when the ship changed to a Cruise Ship
                classic_cruising_id: '10',

                // Use this join to Name Changes Part 2 Table for name changes that it had after it's first initial name.
                name_change_id: '10', 

                // Use this join to Classic Lengthened Part 2 Table for details when the cruise ship was lengthened
                classic_lengthened_id: '10',

                // For Ship Horns on Evolution Part 2 page
                ship_horn: '/videos/classics/Song of Norway/Fleet of Royal Caribbean International (with ship horns).mp4',

                // Each Ship Page Contents, excluding it's Specifications
                // Early Life
                early_1st_para: "Song of Norway was the very first ship ever built for Royal Caribbean cruise line and the first to ever be lengthened. It was built in Helsinki, Finland at Wartsila Meyer Turku shipyard. On December 2, 1969, Song of Norway was launched at Wartsila Helsinki Shipyard, but it wasn't until 7th November, 1970 that she left for her first maiden voyage cruise from Miami and intially took 724 passengers. In her early years she operated cruises out of Miami that were usually between 7 to 14 day cruises. She was a sleek and modern cruise ship at the time and proved to be very popular as a lot of passengers had the option of enjoying a panoramic view of the sea and ports from the Viking Crown Lounge located high in the funnel that was accessible through a set of stairs on the back side of the funnel. Crown Lounges were more popular on some of these classic liners than new ones and I guess that is what makes them so special. Here is a photo of here in the early years during 1976.",
                early_video: '',
                early_2nd_para: "May not need to talk about lengthening here because maybe I should just let it be discussed later in the section As a Cruise Ship. In 1978, Song of Norway was lengthened by 85 feet (25.9 m) and this meant that it could initially carry 1052 passengers, later on in her career she increased to 1,192 passengers, which I will talk about later. Here is a photo of it during the lengthening inside the shipyard.   Maybe I could have the 1976 photo shown below here instead of the lengthening photo.",
                img_trials: '/images/Evolution/Song of Norway/1R-Song-of-Norway_rev-scaled.jpeg',
                img_trials_title: 'Song of Norway in her original form in 1976 (What a classic sleek beauty)',
                early_3rd_para: "This 1976 Song of Norway photo was just over a year before the planning went into lengthening her and I will go into this in more detail in the cruise ship section.",
                img_early: '/images/Evolution/Song of Norway/Song-of-Norway-Before-Lenghtening.jpg',
                img_early_title: "Song of Norway cruising in 1970's before it was lengthened. ",

                // As a Cruise Ship
                cruise_1st_para: "Song of Norway as mentioned before is the first ever cruise ship built for Royal Caribbean cruise line and her sister ships also with the same cruise line followed with Nordic Prince in 1971 and Sun Viking in 1972. In her early years Song of norway operated 7 to 14 day cruises out of Miami to the Caribbean islands for 7 years. Here is a photo below of the original Song of Norway in Oslo, Norway in 1970 on her very first sailing from Helsinki to Miami.",
                img_1stcruise: "/images/Evolution/Song of Norway/son_1970.jpeg",
                img_1stcruise_title: "Song of Norway in Oslo, Norway on 5th October 1970, showing her beautiful original curves.",
                // Cruise Ship Lengthening (Needed for Song of Norway as it was Lengthened)
                name_before_lengthening: 'Song of Norway',
                lengthened_para: "In the fall of 1977, as cruising was becoming popular with Royal Caribbean Cruise Line they looked for the easiest way to keep up with these demands. So in 1978 they lengthened this Song of Norway at the same Wartsila Meyer Turku shipyard in Helsinki, Finland it was built along with it's 2 other sister ships Nordic Prince and Sun Viking. The length increase of about 85 feet from 168.32 m (552 feet 2.75 inches) to 194.32 m (194.32 m (637 feet 6.4 inches). Here is a photo below showing her back half section separated from the front.",
                img_lengthened: '/images/Evolution/Song of Norway/b5ac2c1fe37dee95a51c61cd713f42dc.jpg',
                img_lengthened_title: 'Song of Norway stern section detached so that middle section for lengthening can be floated in place',
                // After Cruise Ship Lengthening (Needed for Song of Norway as it was Lengthened)
                afterlengthen_para: "After it was lengthened it still had the same Song of Norway name and cruised with Royal Caribbean International cruise Line for another 9 years from 1978 to 1997. Song of Norway is infact the cruise ship that serviced Royal Caribbean Line the longest, from 1970 to 1997 (27 years). Here is a postcard photo of Song of Norway after her lengthening.",
                img_afterlengthen: '/images/Evolution/Song of Norway/song of norway.jpg',
                img_afterlengthen_title: '',
                // Other Cruise Ship Contents like Changing Cruise Operators
                cruise_2nd_para: "In 1997 Song of Norway had a new name, was now called Sundream and could carry a maximum of 1257 passengers within 538 cabins. She had now left Royal Caribbean with her logo removed from the Sky Lounge around the funnel and was operating with Airtours Sun Cruises until 2004. Sundream operated in the Caribbean during winter from October to April with 7 to 14 night cruises and during these months she also did 16 night cruises near the Amazon and 7 night West Indies cruises. During the European summer from May to October she did 14 night round trips from Southampton to Western Europe and Africa and round trips from Harwich to Baltic States, Norwegian Fjords/ North Cape and Mediterranean from Southampton. Here is a photo of Sundream during her summer cruise while in Copenhagen, Denmark on July 1, 2003.",
                img_2ndcruise: '/images/Evolution/Song of Norway/3104600.jpg',
                img_2ndcruise_title: 'Sundream during her summer cruising in Copenhagen, Denmark on July 1, 2003.',
                cruise_3rd_para: "In 2004 Song of Norway now became Dream Princess and operated with the Israeli Caspi Cruises. She did cruises from Southampton to Europe . Here is a photo of Dream Princess with her initial white hull colour, leaving for a cruise in Southampton, England on October 6th, 2004.",
                img_3rdcruise: '/images/Evolution/Song of Norway/1225767.jpeg',
                img_3rdcruise_title: "Dream Princess with it's inital white hull colour, leaving for a European cruise from Southampton, England on October 6th, 2004",
                cruise_4th_para: "In 2005 Dream Princess had a change of it's hull colour to black and now operated with .",
                img_4thcruise: '/images/Evolution/Song of Norway/2825833.jpeg',
                img_4thcruise_title: 'Dream Princess with her new black hull maybe in Limassol, Cyprus in October 2005',
                cruise_5th_para: "",
                img_5thcruise: '',
                img_5thcruise_title: '',
                cruise_6th_para: "",
                img_6thcruise: '',
                img_6thcruise_title: '',
                cruise_7th_para: "",
                img_7thcruise: '',
                img_7thcruise_title: '',
                cruise_8th_para: "",
                img_8thcruise: '',
                img_8thcruise_title: '',
                cruise_9th_para: "",
                img_9thcruise: '',
                img_9thcruise_title: '',
                cruise_10th_para: "",
                img_10thcruise: '',
                img_10thcruise_title: '',
                cruise_video: '',

                // Memorable Moments
                mem_1st_para: "",
                mem_video: '',
                mem_2nd_para: '',

                // Ship Plans
                plans_para: "Here is an overall plan of Song of Norway when she was Clipper Pearl cruise ship along with deck plans below this.",
                ship_plans: '/images/Evolution/Song of Norway/clipper pearl ocean pearl.bmp',
                ship_plans_cont: '',

                // Final Years
                final_1st_para: "",
                final_2nd_para: "Sadly this fine cruise ship is no longer with us, but she will be remembered as valuable ship in terms of increasing Royal Caribbean International's popularity as a cruise line.",
                img_final: '',
                img_final_title: ''
            },
            {
                id: 11,
                classic_ship_name: 'Royal Viking Sky',

                // Originally Royal Viking Sky was a Cruise Ship, but it was shorter in Length
                original_ship_name: 'Royal Viking Sky (1973 to 1991)',
                img: '/images/1757063.jpg',
                img_title: "Royal Viking Sky in Picton, New Zealand, March 1982",

                // Original Ship Specifications as a smaller Cruise Ship
                early_service_years: '1973 to 1982',
                service_years: '',
                loveboat_final_year: '',
                build_yard: 'Wartsila Helsinki Shipyard, Helsinki, Finland',
                original_operator: 'Royal Viking Line (1973 to 1991)',
                operator: '',
                registry_port: 'Bergen, Norway (1973 to 1987)',
                cost: '$US 22.5 million',
                imo: '7218395',
                passenger_capacity_full: '536',
                crew_capacity: '324',
                gross_tonnage: '21891',
                length: '177.70 m',
                beam: '25.19 m',
                draft: '7.00 m',
                height: '',
                height_funnel_top: '',
                // This space is where I have show more text, for when user wants to see more
                speed: 'Maximum: 21.5 knots (39.8 km/ hr or 24.7 mph)',
                deadweight: '3595 Tonnes',
                lightship: '13860 Tonnes',
                loaded_displacement: '',
                power: '13,240 kW (17,755 Horsepower)',
                power_rpm: '',
                fuel_capacity: '',
                fuel_consumption: '',
                fresh_water: '',
                propellors: '',
                propellor_size: '',
                rudder: '',
                rudder_size: '',
                decks: '',
                accessible_decks: '',
                bridge_height: '',
                bridge_water: '',
                // shelter_deck I think was only used in Titanic days
                // , so this is only used for Titanic in Evolution Part 1 
                shelter_deck: '',
                bow_bridge: '',
                bow_height: '',

                // Use this join to Classic Cruising Table for Evolution Part 2 when the ship changed to a Cruise Ship
                classic_cruising_id: '11',

                // Use this join to Name Changes Part 2 Table for name changes that it had after it's first initial name.
                name_change_id: '11', 

                // Use this join to Classic Lengthened Part 2 Table for details when the cruise ship was lengthened
                classic_lengthened_id: '11',

                // For Ship Horns on Evolution Part 2 page
                ship_horn: '/videos/classics/Royal Viking Sky/Cruise Ship Boudicca, Amsterdam - Fred Olsen.mp4',

                // Each Ship Page Contents, excluding it's Specifications
                // Early Life
                early_1st_para: "Royal Viking Sky was a beautiful ship that has served as a cruise ship through all her time at sea. She was built at Wartsila Helsinki Shipyard in Helsinki, Finland and was completed in July 1973. Royal Viking Sky operated with Royal Viking Line, which was a well known Norwegian Cruise Company at the time and she was one of 3 sister ships (the others being Royal Viking Star and Royal Viking Sea). Royal Viking Sky was used for luxury cruises around the world, so this included places like North America, Europe and New Zealand. The video below shows Royal Viking during her early times in the 1970's.",
                early_video: '',
                early_2nd_para: "",
                img_trials: '/images/Evolution/Royal Viking Sky/RVSky-01-off.jpg',
                img_trials_title: "Royal Viking Sky original - in Panama Canal during the 1970's",
                early_3rd_para: "During the 1970's she could carry 536 passengers and crew from a 21891 Gross Tonnage vessel, so that was an excellent space for passengers. If you look on archived forums like everyone agrees that it was an excellent ship to cruise on. The photo below shows Royal Viking Sky I think in San Francisco Harbour during the 1970's.",
                img_early: '/images/Evolution/Royal Viking Sky/Royal Viking Sky Original - Maybe in San Francisco.jpg',
                img_early_title: 'Royal Viking Sky as built - cruising with Royal Viking Line probably in San Francisco',

                // As a Cruise Ship
                cruise_1st_para: "As mentioned Royal Viking Sky started off as a cruise ship from the very start in 1973. In the beginning years she cruised from Europe to North and Central America, through the Panama Canal. During her early years, quite a lot of her passengers were wealthy business men who travelled with their family and she had the same size with the same amount of passengers until 1982. Here is a Photo of Royal Viking Sky cruising off the coast of Norway in 1970's.",
                img_1stcruise: '/images/Evolution/Royal Viking Sky/RVS-04-Aune.jpg',
                img_1stcruise_title: "Royal Viking Sky off the coast of Norway  during late 1970's",
                // Cruise Ship Lengthening (Needed for Royal Viking Sky, as it was Lengthened)
                name_before_lengthening: 'Royal Viking Sky',
                lengthened_para: "In 1982 to keep the cruise line profitable and growing, under the leadership of CEO Torstein Hagen, Royal Viking Sky was lengthened in order to carry more passengers. Royal Viking Sky was lengthend by 27.77 m, from 177.70 m to 205.47 m and this increased the passenger capacity from 536 to 900. Interestingly though the crew capacity had pretty much stayed the same, so the opportunities to meet people improved. Here is a photo showing Royal Viking Sky during the lengthening process",
                img_lengthened: '/images/Evolution/Royal Viking Sky/1187994- Lengthening.jpg',
                img_lengthened_title: '',
                // After Cruise Ship Lengthening (Needed for Royal Viking Sky, as it was Lengthened)
                afterlengthen_para: "After it was lengthened it still had the same Royal Viking Sky name and cruised with Royal Viking Line for another 9 years from 1982 to 1991. The lengthening of Royal Viking Sky, however was not as proftable as they would have liked, so in 1984 they had to change to a new owner Kloster who would own the Royal Viking Line until 1991.",
                img_afterlengthen: '/images/Evolution/Royal Viking Sky/RVS_Bordeaux.jpg',
                img_afterlengthen_title: 'Royal Viking Sky in Bordeau, France, still with Royal Viking Line, but with new length of 205.47 m',
                // Other Cruise Ship Contents like Changing Cruise Operators
                cruise_2nd_para: "Out of all the classic ships here, Royal Viking Sky is the most allrounded ship because it has operated with a lot more cruise lines than the other ships. Royal Viking Line was the company she operated the longest with for 18 years from 1973 to 1991 when the cruise line ceased operation. From 1991 to 1992 she operated with Norwegian Cruise Line doing cruises in and changed her name to Sunward. Here is a photo of her as Sunward berthed at Miami in 1991.",
                img_2ndcruise: '/images/Evolution/Royal Viking Sky/2191100.jpg',
                img_2ndcruise_title: 'Royal Viking Sky as Sunward, berthed in Miami, Florida on 18th November, 1991',
                cruise_3rd_para: "In 1992 she was now Birka Queen, operating with Birka Cruises in the Baltic Sea, but only for Northern Hemisphere 1992 summer cruises. Here is a Birka Queen photo of her in old Russia, now latvia.",
                img_3rdcruise: '/images/Evolution/Royal Viking Sky/184703.jpg',
                img_3rdcruise_title: "Royal Viking Sky as Birka Queen leaving Riga, Russia (Now Latvia) in August 1992",
                cruise_4th_para: "In October 1992 she went back to Norwegian Cruise Line with the same colours as before and renamed Sunward. Again she did Caribeean cruises from Miami, but she had a short stay and her time with Norwegian Cruise line ended in June 1993. Here she is doing a cruise from Miami in 1993.",
                img_4thcruise: '/images/Evolution/Royal Viking Sky/Sunward_Miami_1993.png',
                img_4thcruise_title: 'As Sunward in Miami during 1993 once again.',
                cruise_5th_para: "In June 1993 she was now Golden Princess, operating now with Princess Cruises (One of the most popular cruises lines of all time). On 13th June 1993, she did here first cruise from San Francisco to Alaska. Golden Princess also did cruises in the South Pacific Islands and parts of Asia reaching up to Hong Kong. Towards the end of her time with Princess, this was unfortunately not the best time for her because on 7th July 1996 her engine totally failed ecause ti caught fire. She was towed to Victoria, Canada, where passenger left the ship. A number of days later Golden Princess arrived in San Francisco were her engine was to be rebuilt.",
                img_5thcruise: '/images/Evolution/Royal Viking Sky/golden_princess_1973_1.jpg',
                img_5thcruise_title: 'Royal Viking Sky as Golden Princess anchored off the coast of Moorea, Tahiti in 1995',
                cruise_6th_para: "With the engine being rebuilt, along with more cabins being created onboard, Golden Princess was sold to Star Cruises in January 1997 and renamed Superstar Capricorn.          In March 1998 until May of that year she was used just for Casino cruises departing from New York City, USA. However in May 1998 that schedule was now cancelled due to financial losses. ",
                img_6thcruise: '/images/Evolution/Royal Viking Sky/sr_starcapricorn .jpg',
                img_6thcruise_title: 'Royal Viking Sky as Superstar Capricorn in South China Sea in 1998',
                cruise_7th_para: "In 1998 she was sold from Star Cruises to Hyundai Merchant Marine and renamed Hyundai Keumgang. She was used to transport pilgrim traffic between South and North Korea, as sea is much safer because you don't have to go over the North Korean border, which is a political problem. These cruise tours lasted for 3 years between the main port Nampo in North Korea and Incheon port in South Korean.",
                img_7thcruise: '/images/Evolution/Royal Viking Sky/ship18_imgloader.jpeg',
                img_7thcruise_title: 'Hyundai Keumgang off the coast of Korea in 1998',
                cruise_8th_para: "In 2001, she was renamed back to Superstar Capricorn and sailed with her previous cruise operator Star Cruises. She did cruises between.",
                img_8thcruise: '',
                img_8thcruise_title: 'As Superstar Capricorn ',
                cruise_9th_para: "In 2004 she was sold to a Spanish cruise line called Iberojet and renamed Grand Latino. She did cruises from Spain mainland and often did cruises to Spanish Ballearic and Canary Islands.",
                img_9thcruise: '/images/Evolution/Royal Viking Sky/68619.jpg',
                img_9thcruise_title: 'Grand Latino leaving Civitavecchia, Italy on 26th May, 2005',
                cruise_10th_para: "In 2005 she as Grand Latino was sold to Fred Olsen Cruise Lines and renamed Boudicea, but this was soon changed to Boudicca. Fred Olsen was going to take delivery of her in October 2005, but before she sailed as Boudicca, she needed an extensive refir over the winter months. The refit involved new dedicated single cabins, now allowing her to take 810 passengers and her main engines were changed at Blohm + Voss shipyard in Hamburg, Germany. On 25th February 2006, she made her maiden voyage from Dover, England to Madeira and Canary Islands.",
                img_10thcruise: '/images/Evolution/Royal Viking Sky/2417868.jpg',
                img_10thcruise_title: 'Boudicca cruising by Svend Olden, Norway on 12th August 2010',
                cruise_video: '',

                // Memorable Moments
                mem_1st_para: "",
                mem_video: '',
                mem_2nd_para: '',

                // Ship Plans
                plans_para: "Here is an overall plan of Royal Viking Sky along with deck plans below this.",
                ship_plans: '/images/Evolution/Royal Viking Sky/file_Royal Viking Sky.png',
                ship_plans_cont: '',

                // Final Years
                final_1st_para: "The covid situation has had an effect on this Boudicca cruise ship. At the time when covid outbreak happened in 2020, she was cruising with Fred Olsen Line and in good condition for a ship of her age.",
                final_2nd_para: "Sadly this fine cruise ship has ended her life as an operating cruise ship, but has avoided the scrappers and found a new home in Turkey as an accomodation ship. This means that it is open to the public as a floating hotel.",
                img_final: '',
                img_final_title: ''

            },
            {
                id: 12,
                classic_ship_name: 'Sovereign of the Seas',

                // Original Ship Data (This ship has been a cruise ship throughout her whole career, but changed named later)
                original_ship_name: 'Sovereign of the Seas (1988 to 2008) | Sovereign (2008 to 2020)',
                img: '/images/Evolution/Sovereign of the Seas/bcd73a1fad780a9857507432eab05bc2.jpg',
                img_title: "Sovereign of the Seas off the coast of Miami, Florida",
                early_service_years: '1988 to 2008',
                service_years: '1988 to 2020',
                loveboat_final_year: '',
                build_yard: "Chantiers de l'Atlantique, Saint Nazaire, France",
                original_operator: ' Royal Caribbean International (1988 to 2008) | Pullmantur Cruises (2008 to 2020)',
                operator: '',
                registry_port: ' Oslo, Norway (1987 to 2005) | Nassau, Bahamas (2005 to 2008) | Valletta, Malta (2008 to 2020)',
                cost: '$US 183 Million',
                imo: '8512281',
                passenger_capacity_full: '2852',
                crew_capacity: '825',
                gross_tonnage: ' Originally: 73,192 | Later: 73,529',
                length: '268.32 m (880 feet 3.78 inches)',
                beam: '32.20 m (105 feet 8 inches)',
                draft: ' 7.82 m (25 feet 7 inches)',
                height: '50 something m ( feet  inches)',
                height_funnel_top: '',
                // This space is where I have show more text, for when user wants to see more
                speed: 'Maximum: 21.5 knots (39.8 km/ hr or 24.7 mph)',
                deadweight: 'Originally: 7,283 Tonnes | Later: 7,546.9 Tonnes',
                lightship: ' Tonnes',
                loaded_displacement: '',
                power: '21,844 kW (29,293.25 Imperial Brake Horsepower)',
                power_rpm: '',
                fuel_capacity: '',
                fuel_consumption: '',
                fresh_water: '',
                propellors: '',
                propellor_size: '',
                rudder: '',
                rudder_size: '',
                decks: '',
                accessible_decks: '11',
                bridge_height: '',
                bridge_water: '', 
                // shelter_deck I think was only used in Titanic days
                // , so this is only used for Titanic in Evolution Part 1
                shelter_deck: '',
                bow_bridge: '',
                bow_height: '',

                // Use this join to Classic Cruising Table for Evolution Part 2 when the ship changed to a Cruise Ship
                classic_cruising_id: '12',

                // Use this join to Name Changes Part 2 Table for name changes that it had after it's first initial name.
                name_change_id: '12', 

                // Use this join to Classic Lengthened Part 2 Table for details when the cruise ship was lengthened
                classic_lengthened_id: '12',

                // For Ship Horns on Evolution Part 2 page
                ship_horn: '',

                // Each Ship Page Contents, excluding it's Specifications
                // Early Life
                early_1st_para: "Sovereign of the Seas was a french ship that was built in Saint Nazaire, France between June 1986 to December 1987. At the time of leaving for her maiden voyage from Port Miami, Florida, USA on 16th January 1988, she was the largest cruise ship in terms of gross tonnage, but not the longest that was SS Norway. She was regarded as a mega cruise ship when she came into operation and the first of sovereign class cruise ships.",
                early_video: "/videos/classics/Sovereign of the Seas/Royal Caribbean's Sovereign of the Seas Inaugural Video.mp4",
                // '/videos/classics/Sovereign of the Seas/Royal Caribbean s Sovereign of the Seas Inaugural Video(480p).mp4',
                early_3rd_para: "",
                img_trials: '',
                img_trials_title: '',
                early_3rd_para: "Sovereign of the Seas is the cruise ship that has contributed to the success of Royal Caribbean cruise line. It introduced larger swimming pools and more activities to keep a passengers stay at sea a memorable one.",
                img_early: '/images/Evolution/Sovereign of the Seas/130937839.sg0oX1Yh.012bb.jpg',
                img_early_title: 'Royal Caribbeans, Sovereign of the Seas anchored off Labadee, Haiti in February 1990',

                // As a Cruise Ship
                cruise_1st_para: "",
                img_1stcruise: '/images/Evolution/Sovereign of the Seas/SovereignoftheSeas07.jpg',
                img_1stcruise_title: '',
                // Cruise Ship Lengthening (Doesn't apply as Sovereign of the Seas was not lengthened)
                name_before_lengthening: '',
                lengthened_para: "",
                img_lengthened: '',
                img_lengthened_title: '',
                // After Cruise Ship Lengthening (Doesn't apply as Sovereign of the Seas was not lengthened)
                afterlengthen_para: "",
                img_afterlengthen: '',
                img_afterlengthen_title: '',
                // Other Cruise Ship Contents like Changing Cruise Operators
                cruise_2nd_para: "",
                img_2ndcruise: '',
                img_2ndcruise_title: '',
                cruise_3rd_para: "Photo below shows onboard Sovereign in her early days with Pullmantur Cruises when she was still white and had a red funnel.",
                img_3rdcruise: '/images/Evolution/Sovereign of the Seas/Sovereign 17.jpg',
                img_3rdcruise_title: "",
                cruise_4th_para: "",
                img_4thcruise: '',
                img_4thcruise_title: '',
                cruise_5th_para: "",
                img_5thcruise: '',
                img_5thcruise_title: '',
                cruise_6th_para: "",
                img_6thcruise: '',
                img_6thcruise_title: '',
                cruise_7th_para: "",
                img_7thcruise: '',
                img_7thcruise_title: '',
                cruise_8th_para: "",
                img_8thcruise: '',
                img_8thcruise_title: '',
                cruise_9th_para: "",
                img_9thcruise: '',
                img_9thcruise_title: '',
                cruise_10th_para: "",
                img_10thcruise: '',
                img_10thcruise_title: '',
                cruise_video: '',

                // Memorable Moments
                mem_1st_para: "",
                mem_video: '/videos/classics/Sovereign of the Seas/The History Of Sovereign Of The Seas(480p).mp4',
                mem_2nd_para: '',

                // Ship Plans
                plans_para: "",
                ship_plans: '',
                ship_plans_cont: '',

                // Final Years
                final_1st_para: "in 2020 Due to the covid situation, Sovereign of the Seas unfortunately has had to stop her service as a cruise ship. She was put into cold lay up, which means that the ship is shut down as much as possible to cut costs. Pullmaantur Cruises filed for financial reorganisation and the interior of the ship was stripped down for everything of value. For MS Sovereign to have continued she would of needed to have her equipment upgraded, but the cost of doing this meant that it was not worth while and she sadly had to be sent to the scrapyard in Aliaga, Turkey and she was beached on 23rd July 2020. It's the end of an incredible ship that has really transformed the cruise industry, she will be sadly missed, but her memories will be with us forever.",
                final_2nd_para: "",
                img_final: '',
                img_final_title: ''
            },
        ],
        // chunkSize 
        2
    ) )    
}