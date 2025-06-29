exports.seed = function(knex, Promise) {
    // Code below Deletes ALL existing entries for created Evo2 table 
    return knex('Evo2').del()
        .then(() => knex.batchInsert    (
            // table name
            'Evo2',
        [    
            {
                id: 1,
                // Changed to classic_ship_name from ship_name
                classic_ship_name: 'Fairstar',
                //one object per row with batchInsert
                
                // Originally when it was a Troop Ship and before it was a Cruise Ship
                original_ship_name: 'Oxfordshire',  
                img: '/images/Evolution/Fairstar/Fairstar01.jpg',
                img_title: "Fairstar cruising off Pacific Islands in early 90's",
                
                // Original Ship Specifications as a Troop Ship
                early_service_years: '1957 to 1963',
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
                funnel_height: '40.402 metres (132 feet 6.63 inches) Keel to top of Funnel',
                
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
                shelter_deck: '',
                bow_bridge: '',
                bow_height: '',

                // Use this join to Classic Cruising Table for Evolution Part 2 when the ship changed to a Cruise Ship
                classic_cruising_id: '1',

                // Use this join to Name Changes Part 2 Table for name changes that it had after it's first initial name.
                name_change_pt2_id: '1', 

                // Use this join to Classic Lengthened Part 2 Table for details when the cruise ship was lengthened
                classic_lengthened_id: '1', 

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
                id: 2,
                // Michangelo was more of a passenger liner than a cruise ship
                // , so now I have replaced it with Sea Princess Cruise ship that started off as 
                // Kungsholm in 1965.
                // You can see original Michelangelo ship details on classic-cruiseships branch
                // https://github.com/RobertWSON/Personal-ship-project/blob/classic-cruiseships/seeds/evo2.js#L223
                classic_ship_name: 'Sea Princess',
                original_ship_name: 'Kungsholm',
                img: '/images/Evolution/Sea Princess/PO-Sea-Princess-79.jpeg',
                early_service_years: '1966 to 1974',
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
                funnel_height: '',
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
                shelter_deck: '',
                bow_bridge: '',
                bow_height: '',

                // Use this join to Classic Cruising Table for Evolution Part 2 when the ship changed to a Cruise Ship
                classic_cruising_id: '2',

                // Use this join to Name Changes Part 2 Table for name changes that it had after it's first initial name.
                name_change_pt2_id: '2', 

                // Use this join to Classic Lengthened Part 2 Table for details when the cruise ship was lengthened
                classic_lengthened_id: '2',

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
                id: 3,
                classic_ship_name: 'Queen Elizabeth 2',
                // Queen Elizabeth 2 (1969 to present)
                // Original Ship Data (QE2 was more of a passenger ship early on and became a cruise ship as well later)
                original_ship_name: '',
                img: '/images/Evolution/Qe2/5148955_orig.jpg',
                img_title: "Queen Elizabeth 2 in original colours, cruising off Canary Isles",
                early_service_years: '1969 to 2008',
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
                funnel_height: '',

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
                shelter_deck: '',
                bow_bridge: '',
                bow_height: '',

                // Use this join to Classic Cruising Table for Evolution Part 2 when the ship changed to a Cruise Ship
                classic_cruising_id: '3',

                // Use this join to Name Changes Part 2 Table for name changes that it had after it's first initial name.
                name_change_pt2_id: '3', 

                // Use this join to Classic Lengthened Part 2 Table for details when the cruise ship was lengthened
                classic_lengthened_id: '3',

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
                id: 4,
                classic_ship_name: 'Song of Norway',

                // Originally Song of Norway was a Cruise Ship, but it was shorter in Length
                original_ship_name: 'Song of Norway (1970 to 1997)',
                img: '/images/image_manager__rex_thumbnail_images_song_of_norway_08.06.1994.jpg',
                img_title: "Song of Norway in Panama Canal 1994",

                // Original Ship Specifications as a smaller Cruise Ship
                early_service_years: '1970 to 1978',
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
                funnel_height: '',
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
                shelter_deck: '',
                bow_bridge: '',
                bow_height: '',

                // Use this join to Classic Cruising Table for Evolution Part 2 when the ship changed to a Cruise Ship
                classic_cruising_id: '4',

                // Use this join to Name Changes Part 2 Table for name changes that it had after it's first initial name.
                name_change_pt2_id: '4', 

                // Use this join to Classic Lengthened Part 2 Table for details when the cruise ship was lengthened
                classic_lengthened_id: '4',

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
                id: 5,
                classic_ship_name: 'Royal Viking Sky',

                // Originally Royal Viking Sky was a Cruise Ship, but it was shorter in Length
                original_ship_name: 'Royal Viking Sky (1973 to 1991)',
                img: '/images/1757063.jpg',
                img_title: "Royal Viking Sky in Picton, New Zealand, March 1982",

                // Original Ship Specifications as a smaller Cruise Ship
                early_service_years: '1973 to 1982',
                build_yard: 'Wartsila Helsinki Shipyard, Helsinki, Finland',
                original_operator: 'Royal Viking Line (1973 to 1991)',
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
                funnel_height: '',
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
                shelter_deck: '',
                bow_bridge: '',
                bow_height: '',

                // Use this join to Classic Cruising Table for Evolution Part 2 when the ship changed to a Cruise Ship
                classic_cruising_id: '5',

                // Use this join to Name Changes Part 2 Table for name changes that it had after it's first initial name.
                name_change_pt2_id: '5', 

                // Use this join to Classic Lengthened Part 2 Table for details when the cruise ship was lengthened
                classic_lengthened_id: '5',

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
                id: 6,
                classic_ship_name: 'Sovereign of the Seas',

                // Original Ship Data (This ship has been a cruise ship throughout her whole career, but changed named later)
                original_ship_name: 'Sovereign of the Seas (1988 to 2008) | Sovereign (2008 to 2020)',
                img: '/images/Evolution/Sovereign of the Seas/bcd73a1fad780a9857507432eab05bc2.jpg',
                img_title: "Sovereign of the Seas off the coast of Miami, Florida",
                early_service_years: '1988 to 2008',
                build_yard: "Chantiers de l'Atlantique, Saint Nazaire, France",
                original_operator: ' Royal Caribbean International (1988 to 2008) | Pullmantur Cruises (2008 to 2020)',
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
                funnel_height: '',
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
                shelter_deck: '',
                bow_bridge: '',
                bow_height: '',

                // Use this join to Classic Cruising Table for Evolution Part 2 when the ship changed to a Cruise Ship
                classic_cruising_id: '6',

                // Use this join to Name Changes Part 2 Table for name changes that it had after it's first initial name.
                name_change_pt2_id: '6', 

                // Use this join to Classic Lengthened Part 2 Table for details when the cruise ship was lengthened
                classic_lengthened_id: '6',

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
                // id 7 for Allure of the Seas, I think I will get rid of 
                // as it is not classic enough and I cannot get enough info on it.
            // {
            //     id: 7,
            //     classic_ship_name: 'Allure of the Seas',

                // Original Ship Data (This ship has been a cruise ship throughout her whole career, but changed named later)
                // original_ship_name: 'Allure of the Seas (2010 to present)',
                // img: '/images/UFRPU.jpg',
                // img_title: "Allure of the Seas maiden voyage celebration, Miami, Florida",
                // early_service_years: '2010 to present',
                // build_yard: "STX Europe Rurku Shipyard, Finland",
                // original_operator: 'Royal Caribbean',
                // registry_port: 'Miami, Florida, USA',
                // cost: 'US $1.43 Billion',
                // imo: '9383948',
                // passenger_capacity_full: '6780',
                // crew_capacity: '2200',
                // gross_tonnage: '225282',
                // length: '362 m (1,187 feet)',
                // beam: '47 m (154 feet 2.4 inches)',
                // draft: '9.322 metres (30 feet 7 inches)',
                // height: '72 m (236 feet 2.64 inches)',
                // funnel_height: '',
                // This space is where I have show more text, for when user wants to see more
                
                // speed: 'Maximum: 22.6 knots (41.9 km/ hr or 26 mph)',
                // deadweight: '19,750 Tonnes',
                // lightship: '80,250 Tonnes',
                // loaded_displacement: '100,000 Tonnes',
                // power: '97,020 kW (130,105.8 Horsepower)',
                // power_rpm: '',
                // fuel_capacity: '',
                // fuel_consumption: '',
                // fresh_water: '',
                // propellors: '',
                // propellor_size: '',
                // rudder: '',
                // rudder_size: '',
                // decks: '',
                // accessible_decks: '',
                // bridge_height: '',
                // bridge_water: '', 
                // shelter_deck: '',
                // bow_bridge: '',
                // bow_height: '',

                // Cruise Ship Specifications (Doesn't apply because Allure  of the Seas was not converted to a Cruise Ship)
                // cruise_ship_name: '',
                // cruise_years: '',
                // cruise_operator: '',
                // cruise_reg_port: '',
                // conversion_cost: '',
                // cruise_passengers_max: '',
                // cruise_crew_max: '',
                // cruise_gt: '',
                // cruise_height: '',
                // cruise_funnel_hgt: '',
                // cruise_speed: '',
                // cruise_deadweight: '',
                // cruise_lightship: '',
                // cruise_displacement: '',
                // cruise_power: '',
                // cruise_power_rpm: '',
                // cruise_fuel_capacity: '',
                // cruise_fuel_consumption: '',
                // cruise_fresh_water: '',
                // cruise_propellors: '',
                // cruise_propellor_size: '',
                // cruise_rudder: '',
                // cruise_rudder_size: '',
                // cruise_decks: '',
                // cruise_passenger_decks: '',
                // cruise_bridge_height: '',
                // cruise_bridge_water: '',
                // cruise_shelter_deck: '',
                // cruise_bow_bridge: '',
                // cruise_bow_height: '',

                // Ship Specifications after Lengthening (Doesn't apply as Allure of the Seas was not lengthened)
                // name_after_lengthening: '',
                // first_name_change: '',
                // second_name_change: '',
                // third_name_change: '',
                // fourth_name_change: '',
                // fifth_name_change: '',
                // sixth_name_change: '',
                // seventh_name_change: '',
                // eighth_name_change: '',
                // ninth_name_change: '',
                // lengthened_service_yrs: '',
                // lengthened_operator: '',
                // lengthened_reg_port: '',
                // lengthened_cost: '',
                // lengthened_passengers: '',
                // lengthened_crew: '',
                // lengthened_gt: '',
                // lengthened_length: '',
                // lengthened_beam: '',
                // lengthened_draft: '',
                // lengthened_deadweight: '',
                // lengthened_lightship: '',
                // lengthened_displacement: '',
                // lengthened_funnel_hgt: '',
                // lengthened_speed: '',
                // lengthened_power: '',
                // lengthened_power_rpm: '',
                // lengthened_fuel_capacity: '', 
                // lengthened_fuel_consumption: '', 
                // lengthened_propellors: '',
                // lengthened_propellor_size: '',
                // lengthened_rudder: '',
                // lengthened_rudder_size:'',
                // lengthened_decks: '',
                // lengthened_passenger_decks: '',
                // lengthened_bridge_height: '',
                // lengthened_bridge_water: '',
                // lengthened_shelter_deck: '',
                // lengthened_bow_bridge: '',
                // lengthened_bow_height: '',

                // For Ship Horns on Evolution Part 2 page
                // ship_horn: '/videos/classics/Allure of the Seas/Allure of the Seas Departing Port Everglades with Horn Blasts.mp4',

                // Each Ship Page Contents, excluding it's Specifications
                // Early Life
                // early_1st_para: "Allure of the Seas was the second ship for the Oasis class ships (largest in the world) when she entered service in 2010. At the time she was just 50mm longer than her sister ship, Oasis of the Seas, but just a bit smaller in Gross Tonnage. Here steel hull alone weighed 54,000 Tonnes out of her 80,250 Tonnes lightship, so her displacement was as much as a large aircraft carrier. She did cruises from her home port Port Everglades. She was a ship that had very modern equipment and was equiped with telescoping funnels.",
                // early_video: '',
                // early_2nd_para: "",
                // img_trials: '',
                // img_trials_title: '',
                // early_3rd_para: "",
                // img_early: '',
                // img_early_title: '',

                // As a Cruise Ship
                // cruise_1st_para: "",
                // img_1stcruise: '',
                // img_1stcruise_title: '',
                // Cruise Ship Lengthening (Doesn't apply as Allure of the Seas was not lengthened)
                // name_before_lengthening: '',
                // lengthened_para: "",
                // img_lengthened: '',
                // img_lengthened_title: '',
                // After Cruise Ship Lengthening (Doesn't apply as Allure of the Seas was not lengthened)
                // afterlengthen_para: "",
                // img_afterlengthen: '',
                // img_afterlengthen_title: '',
                // Other Cruise Ship Contents like Changing Cruise Operators
                // cruise_2nd_para: "",
                // img_2ndcruise: '',
                // img_2ndcruise_title: '',
                // cruise_3rd_para: "",
                // img_3rdcruise: '',
                // img_3rdcruise_title: "",
                // cruise_4th_para: "",
                // img_4thcruise: '',
                // img_4thcruise_title: '',
                // cruise_5th_para: "",
                // img_5thcruise: '',
                // img_5thcruise_title: '',
                // cruise_6th_para: "",
                // img_6thcruise: '',
                // img_6thcruise_title: '',
                // cruise_7th_para: "",
                // img_7thcruise: '',
                // img_7thcruise_title: '',
                // cruise_8th_para: "",
                // img_8thcruise: '',
                // img_8thcruise_title: '',
                // cruise_9th_para: "",
                // img_9thcruise: '',
                // img_9thcruise_title: '',
                // cruise_10th_para: "",
                // img_10thcruise: '',
                // img_10thcruise_title: '',
                // cruise_video: '',

                // Memorable Moments
                // mem_1st_para: "",
                // mem_video: '',
                // mem_2nd_para: '',

                // Ship Plans
                // plans_para: "",
                // ship_plans: '',
                // ship_plans_cont: '',

                // Final Years
            //     final_1st_para: "",
            //     final_2nd_para: "",
            //     img_final: '',
            //     img_final_title: ''
            // }
        ],
        // chunkSize 
        2
    ) )    
}