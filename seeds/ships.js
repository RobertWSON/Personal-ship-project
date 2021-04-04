
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  //return knex('table_name').del()
  return knex('Ships').del()  
    .then(function () {
      // Inserts seed entries
      //return knex('table_name').insert([
      return knex('Ships').insert([  
        {
          id: 1,
          cruise_line: "Royal Caribbean",    
          ship_name: 'Symphony of the Seas',
          img: "/images/Royal Caribbean/st-maarten-symphony-of-the-seas-950x530.jpg",
          Year: 2018,
          Gross_Tonnage: 228081,
          Passenger_Full_Capacity: 6680,
          Double_Occupancy_Passenger_Capacity: 5518,
          Length: 362.1,
          Beam: 47.448,
          Draft: 9.322,
          Height: 72.5,
          Loaded_Displacement: 120000,
          Deadweight: 18095,

          // Below is all the properties I need for each Review (either initial or added) on a Review Page.
          // Star_Rating: '4.0',
          // Review_User_Name: 'Robert Wilkinson',
          // 
          Review: 'Amazingly big ship, so it was difficult to get to know everyone on board, like it is on the smaller ships. The activities however were excellent as there was a lot to choose from, like rock climbing, indoor cricket, tennis and touch rugby. The shows had lots of variety, ranging from argentinian and salsa dancing and singing from opera to songs with a comical side to them. I would recommend this ship to all variety of ages, as the passengers range from families, group of friends or loved ones on a trip.',
          
          Booking: 'https://www.flightcentre.co.nz/cruises/cruise-lines/royal-caribbean-international/symphony-of-the-seas' 
        },
        {
          id: 2,
          cruise_line: "Marella Cruises",      
          ship_name: 'Marella Celebration',
          img: "/images/611-62cc245f1327.jpg",
          Year: 1984,
          Gross_Tonnage: 33933,
          Passenger_Full_Capacity: 1370,
          Double_Occupancy_Passenger_Capacity: 1235,
          Length: 214.66,
          Beam: 27.26,
          Draft: 7.50,
          Height: 46,
          Loaded_Displacement: 21000,
          Deadweight: 4243,

          // Below is all the properties I need for each Review (either initial or added) on a Review Page.
          // Star_Rating: '4.0',
          // Review_User_Name: 'Robert Wilkinson',
          // 
          Review: 'This ship has been sailing for Marella Cruises owned by UK company TUI. Since covid it is in retirement and is looking for a company to be sold to, so that it can continue cruising. When you click make a boking for this ship, the website tells you about what is happening with this ship.',
          Booking: 'https://cruisearabiaonline.com/2020/04/29/marella-celebration-to-be-sold-dubai-cruise-season-cancelled/'
        },
        {
          id: 3,
          cruise_line: "Cunard",    
          ship_name: 'Queen Mary 2',
          img: "/images/cunard_cruise_line_queen_mary_2QM.jpg",
          Year: 2003,
          Gross_Tonnage: 149215,
          Passenger_Full_Capacity: 2799,
          Double_Occupancy_Passenger_Capacity: "2640 or 2695",
          Length: 345.03,
          Beam: 41,
          Draft: 10,
          Height: 72.0,
          Loaded_Displacement: 79287,
          Deadweight: "19189",

          // Below is all the properties I need for each Review (either initial or added) on a Review Page.
          // Star_Rating: '',
          // Review_User_Name: '',
          // 
          Review: '',
          Booking: 'https://www.flightcentre.co.nz/cruises/cruise-lines/cunard/queen-mary-2'
        },
        {
          id: 4,
          cruise_line: "Princess",    
          ship_name: 'Star Princess',
          img: "/images/_i4509460.jpg",
          Year: 2002,
          Gross_Tonnage: 108977,
          Passenger_Full_Capacity: 3115,
          Double_Occupancy_Passenger_Capacity: 2596,
          Length: 289.62,
          Beam: 36,
          Draft: 8.45,
          Height: 61.26,
          Loaded_Displacement: 57000,
          Deadweight: 10852,

          // Below is all the properties I need for each Review (either initial or added) on a Review Page.
          // Star_Rating: '4.0','
          // Review_User_Name: 'Robert Wilkinson',
          // 
          Review: 'I did a recent cruise on Star Princess from Los Angeles to Santiago. I found that the Staff were very friendly and looked after you well. When I was on the cruise and forgot to get some water when I was eating from the buffet, this was absolutely no problem, as staff would approach me straight away to ask if I wanted some water and a coffee. The only exception, which we were not happy about was the room attendant, who frequently did not update our room with things like toilet paper, soap and making beds, so we had to tell another room attendant to get it sorted. Great range of activities to do on board at sea with lots of shows, quizzes, learning spanish and basketball free throw competition to name a few. The Italian captain is one of the funniest captains I have every seen and had a great sense of humour every time he talked on the mic. The ports of call were very unique and different with mostly great tours. The only tours I found disappointing were the day time tour in Lima, as we did not get to see much of the coast and did mostly a market tour. Also the tour in La Serena was a bit disappointing as it was scheduled to go to a Museum, but that never happened and instead we took a view from a Library to look out to La Serena. So choose your tours wisely or just do your own thing. Overall a great cruise and good value for money.',
          Booking: 'https://www.flightcentre.co.nz/cruises/cruise-lines/princess-cruises/star-princess' 
        },
        {
          id: 5,
          cruise_line: "Fred Olsen",     
          ship_name: "Boudicca",
          img: "/images/Boudicca_at_Funchal_2016_(bigger).jpg",
          Year: 1973,
          Gross_Tonnage: 28372,
          Passenger_Full_Capacity: 900,
          Double_Occupancy_Passenger_Capacity: 880,
          Length: 205.96,
          Beam: 25.22,
          Draft: 7.55,
          Height: 45,
          Loaded_Displacement: 21156,
          Deadweight: 5956,

          // Below is all the properties I need for each Review (either initial or added) on a Review Page.
          // Star_Rating: '4.0','
          // Review_User_Name: 'Robert Wilkinson',
          // 
          Review: '',
          Booking: 'https://www.fredolsencruises.com/our-ships/boudicca/cruises' 
        },
        {
          id: 6,
          cruise_line: "Fred Olsen",      
          ship_name: "Black Watch",
          img: '/images/image_manager__rex_carousel_images_black_watch_approaching_port_of_hamburg_05._may_2016_13.jpg',
          Year: 1972,
          Gross_Tonnage: 28613,
          Passenger_Full_Capacity: 868,
          Double_Occupancy_Passenger_Capacity: 804,
          Length: 205.47,
          Beam: 25.20,
          Draft: 7.55,
          Height: 45,
          Loaded_Displacement: 20704,
          Deadweight: 5656,

          // Below is all the properties I need for each Review (either initial or added) on a Review Page.
          // Star_Rating: '4.0','
          // Review_User_Name: 'Robert Wilkinson',
          // 
          Review: '',
          Booking: 'https://www.fredolsencruises.com/our-ships/black-watch/cruises'       
        },
        {
          id: 7,
          cruise_line: "Phoenix Reisen",   
          ship_name: "Amadea",
          img: '/images/555-large-15de21c670ae7c3f6f3f1f37029303c9.jpg',
          Year: 1990,
          Gross_Tonnage: 28856,
          Passenger_Full_Capacity: 700,
          Double_Occupancy_Passenger_Capacity: 624,
          Length: 192.82,
          Beam: 24.70,
          Draft: 6.20,
          Height: 46.25,
          Loaded_Displacement: 17200,
          Deadweight: 3938,

          // Below is all the properties I need for each Review (either initial or added) on a Review Page.
          // Star_Rating: '4.0','
          // Review_User_Name: 'Robert Wilkinson',
          // 
          Review: '',
          Booking: 'https://www.seascanner.com/cruises-amadea'    
        },
        {
          id: 8,
          cruise_line: "Princess",   
          ship_name: "Majestic Princess",
          img:'/images/20180915-web-news-majestic-princess-sails-into-sydney-harbour-on-maiden-call-banner.jpg',
          Year: 2017,
          Gross_Tonnage: 144000,
          Passenger_Full_Capacity: 4000,
          Double_Occupancy_Passenger_Capacity: 3400,
          Length: 330,
          Beam: 38.4,
          Draft: 8.4,
          Height: 68.3,
          Loaded_Displacement: 71000,
          Deadweight: 11000,

          // Below is all the properties I need for each Review (either initial or added) on a Review Page.
          // Star_Rating: '4.0','
          // Review_User_Name: 'Robert Wilkinson',
          // 
          Review: '',
          Booking: 'https://www.flightcentre.co.nz/cruises/cruise-lines/princess-cruises/majestic-princess' 
        },
        {
          id: 9,
          cruise_line: "Viking Ocean Cruises",   
          ship_name: "Viking Sun",
          img: '/images/78-b98894cfacc39.jpg',
          Year: 2017,
          Gross_Tonnage: 47842,
          Passenger_Full_Capacity: 930,
          Double_Occupancy_Passenger_Capacity: 930,
          Length: 227,
          Beam: 27,
          Draft: 7,
          Height: 47.35,
          Loaded_Displacement: 24320,
          Deadweight: 4797,

          // Below is all the properties I need for each Review (either initial or added) on a Review Page.
          // Star_Rating: '4.0','
          // Review_User_Name: 'Robert Wilkinson',
          // 
          Review: 'Pretty much a brand new cruise, you will love this one.',
          Booking: 'https://www.vikingcruises.com.au/oceans/ships/viking-sun.html' 
        },
        {
          id: 10,
          cruise_line: "Royal Caribbean",   
          ship_name: "Radiance of The Seas",
          img: "/images/radiance-of-the-seas-d31_4933-med.jpg",
          Year: 2001,
          Gross_Tonnage: 90090,
          Passenger_Full_Capacity: 6680,
          Double_Occupancy_Passenger_Capacity: 5518,
          Length: 293.2,
          Beam: 32.20,
          Draft: 8.626,
          Height: 63,
          Loaded_Displacement: 45989,
          Deadweight: 10759,

          // Below is all the properties I need for each Review (either initial or added) on a Review Page.
          // Star_Rating: '4.0','
          // Review_User_Name: 'Robert Wilkinson',
          // 
          Review: '', 
          Booking: 'https://www.flightcentre.co.nz/cruises/cruise-lines/royal-caribbean-international/radiance-of-the-seas'
        },
        {
          id: 11,
          cruise_line: "Marella Cruises",     
          ship_name: "Marella Discovery 2",
          img: '/images/image_manager__rex_carousel_images_marella_discovery_2_auslaufend_havanna_23.02.2018_07.jpg',
          Year: 1995,
          Gross_Tonnage: 69,
          Passenger_Full_Capacity: 2198,
          Double_Occupancy_Passenger_Capacity: 1832,
          Length: 264.26,
          Beam: 32,
          Draft: 8.068,
          Height: 58.068,
          Loaded_Displacement: 39026,
          Deadweight: 5200,

          // Below is all the properties I need for each Review (either initial or added) on a Review Page.
          // Star_Rating: '4.0','
          // Review_User_Name: 'Robert Wilkinson',
          // 
          Review: 'Enjoyed the range of activities on this ship. This classic liner from the 90s that used to be called Legend of The Seas, has a good range of activities for its size. It has a tennis court that was always available to use.',
          Booking: 'https://www.tui.co.uk/cruise/ships/marella-discovery-2/itineraries' 
        },
        {
          id: 12,
          cruise_line: "Ponant Cruises",      
          ship_name: "Le Laperouse",
          img: '/images/Ponant Cruises/50649869_401756037275665_4243685716581677093_n.jpg',
          Year: 2018,
          Gross_Tonnage: 9976,
          Passenger_Full_Capacity: 184,
          Double_Occupancy_Passenger_Capacity: 160,
          Length: 131.46,
          Beam: 18,
          Draft: 4.70,
          Height: 32,
          Loaded_Displacement: 5636,
          Deadweight: 1305,

          // Below is all the properties I need for each Review (either initial or added) on a Review Page.
          // Star_Rating: '4.0','
          // Review_User_Name: 'Robert Wilkinson',
          // 
          Review: '', 
          Booking: 'https://en.ponant.com/cruises/on-board/vessel-le-laperouse'
        },
        {
          id: 13,
          cruise_line: "Carnival",    
          ship_name: "Carnival Legend",
          img: '/images/Carnival/carnival-legend-live-from.jpg',
          Year: 2002,
          Gross_Tonnage: 85942,
          Passenger_Full_Capacity: 2680,
          Double_Occupancy_Passenger_Capacity: 2124,
          Length: 292.5,
          Beam: 32.2,
          Draft: 7.8,
          Height: 59,
          Loaded_Displacement: 43014,
          Deadweight: 7089,

          // Below is all the properties I need for each Review (either initial or added) on a Review Page.
          // Star_Rating: '4.0','
          // Review_User_Name: 'Robert Wilkinson',
          // 
          Review: '', 
          Booking: 'https://www.flightcentre.co.nz/cruises/cruise-lines/carnival-cruise-lines/carnival-legend'
        },
        {
          id: 14,
          cruise_line: "Carnival",     
          ship_name: "Carnival Vista",
          img: '/images/Carnival/carnival-blimp-02.gif',
          Year: 2016,
          Gross_Tonnage: 133500,
          Passenger_Full_Capacity: 4977,
          Double_Occupancy_Passenger_Capacity: 3934,
          Length: 321.56,
          Beam: 37.19,
          Draft: 8,
          Height: 66,
          Loaded_Displacement: 67000,
          Deadweight: 9000,

          // Below is all the properties I need for each Review (either initial or added) on a Review Page.
          // Star_Rating: '4.0','
          // Review_User_Name: 'Robert Wilkinson',
          // 
          Review: '', 
          Booking: 'https://cruiseweb.com/cruise-lines/carnival-cruise-line/ship-carnival-vista'
        },
        {
          id: 15,
          cruise_line: "Royal Caribbean",   
          ship_name: "Allure of The Seas",
          img: '/images/Royal Caribbean/Allure-Of-The-Seas-Family-Featured-2-800x450.jpg',
          Year: 2010,
          Gross_Tonnage: 225000,
          Passenger_Full_Capacity: 6680,
          Double_Occupancy_Passenger_Capacity: 5518,
          Length: 362.1,
          Beam: 47.448,
          Draft: 9.322,
          Height: 72.1,
          Loaded_Displacement: 120000,
          Deadweight: 18095,

          // Below is all the properties I need for each Review (either initial or added) on a Review Page.
          // Star_Rating: '4.0','
          // Review_User_Name: 'Robert Wilkinson',
          // 
          Review: '', 
          Booking: 'https://www.flightcentre.co.nz/cruises/cruise-lines/royal-caribbean-international/allure-of-the-seas'
        },
        {
          id: 16,
          cruise_line: "Royal Caribbean",   
          ship_name: "Anthem of The Seas",
          img: '/images/Royal Caribbean/p62cc88gq6311.jpg',
          Year: 2015,
          Gross_Tonnage: 168666,
          Passenger_Full_Capacity: 4905,
          Double_Occupancy_Passenger_Capacity: 4180,
          Length: 348,
          Beam: 41.40,
          Draft: 8.80,
          Height: 70,
          Loaded_Displacement: 76000,
          Deadweight: 12000,

          // Below is all the properties I need for each Review (either initial or added) on a Review Page.
          // Star_Rating: '4.0','
          // Review_User_Name: 'Robert Wilkinson',
          // 
          Review: '', 
          Booking: 'https://www.flightcentre.co.nz/cruises/cruise-lines/royal-caribbean-international/anthem-of-the-seas'
        },
        {
          id: 17,
          cruise_line: "Crystal Cruises",      
          ship_name: "Crystal Serenity",
          img: '/images/Crystal Cruises/crystal-serenity.jpg',
          Year: 2003,
          Gross_Tonnage: 69870,
          Passenger_Full_Capacity: 1200,
          Double_Occupancy_Passenger_Capacity: 1050,
          Length: 250,
          Beam: 32.20,
          Draft: 8,
          Height: 52.50,
          Loaded_Displacement: 36220,
          Deadweight: 6430,

          // Below is all the properties I need for each Review (either initial or added) on a Review Page.
          // Star_Rating: '4.0','
          // Review_User_Name: 'Robert Wilkinson',
          // 
          Review: '', 
          Booking: 'https://www.flightcentre.co.nz/cruises/cruise-lines/crystal-cruises/crystal-serenity'
        },
        {
          id: 18,
          cruise_line: "Crystal Cruises",   
          ship_name: "Crystal Symphony",
          img: '/images/Crystal Cruises/Crystal_Symphony_in_San_Francisco_299431.jpg',
          Year: 1995,
          Gross_Tonnage: 51044,
          Passenger_Full_Capacity: 1100,
          Double_Occupancy_Passenger_Capacity: 858,
          Length: 238,
          Beam: 30.18,
          Draft: 7.59,
          Height: 50,
          Loaded_Displacement: 34000,
          Deadweight: 4500,

          // Below is all the properties I need for each Review (either initial or added) on a Review Page.
          // Star_Rating: '4.0','
          // Review_User_Name: 'Robert Wilkinson',
          // 
          Review: '', 
          Booking: 'https://www.flightcentre.co.nz/cruises/cruise-lines/crystal-cruises/crystal-symphony'
        },
        {
          id: 19,
          cruise_line: "Semester at Sea",    
          ship_name: "World Odyssey",
          img: '/images/Semester at Sea/635906300054359048-001-worldodyssey.jpeg',
          Year: 1998,
          Gross_Tonnage: 22496,
          Passenger_Full_Capacity: 800,
          Double_Occupancy_Passenger_Capacity: 520,
          Length: 175.30,
          Beam: 23.0,
          Draft: 5.79,
          Height: 44,
          Loaded_Displacement: 17013,
          Deadweight: 3460,

          // Below is all the properties I need for each Review (either initial or added) on a Review Page.
          // Star_Rating: '4.0','
          // Review_User_Name: 'Robert Wilkinson',
          // 
          Review: 'Operates world cruises of a different kind. It is serves as a travelling home and campus for students wanting to learn about different places.',
          Booking: 'https://www.semesteratsea.org/life-at-sea/our-ship/' 
        },
        {
          id: 20,
          cruise_line: "Celestyal Cruises",    
          ship_name: "Celestyal Crystal",
          img: '/images/Celestyal Cruises/Celestyal-Crystal.jpg',
          Year: 1980,
          Gross_Tonnage: 25611,
          Passenger_Full_Capacity: 6680,
          Double_Occupancy_Passenger_Capacity: 5518,
          Length: 158.90,
          Beam: 25.20,
          Draft: 5.80,
          Height: 38,
          Loaded_Displacement: 13300,
          Deadweight: 1703,

          // Below is all the properties I need for each Review (either initial or added) on a Review Page.
          // Star_Rating: '4.0','
          // Review_User_Name: 'Robert Wilkinson',
          // 
          Review: 'I have been on this ship on my Contiki tour, when it was cruising for Louis Cruise Lines. It visited some lovely destinations of Greece like Mykonos and highly recommended for younger travellers who want to have a good time.',
          Booking: 'https://www.flightcentre.co.nz/cruises/cruise-lines/celestyal-cruises/celestyal-crystal' 
        },
        {
          id: 21,
          cruise_line: "Celestyal Cruises",    
          ship_name: "Celestyal Olympia",
          img: '/images/Celestyal Cruises/celestyal-olympia-01.jpg',
          Year: 1992,
          Gross_Tonnage: 37773,
          Passenger_Full_Capacity: 6680,
          Double_Occupancy_Passenger_Capacity: 5518,
          Length: 214.51,
          Beam: 28.41,
          Draft: 6.80,
          Height: 45,
          Loaded_Displacement: 21536,
          Deadweight: 5000,

          // Below is all the properties I need for each Review (either initial or added) on a Review Page.
          // Star_Rating: '4.0','
          // Review_User_Name: 'Robert Wilkinson',
          // 
          Review: 'I have not been on this ship, but just like the one I have been on it used to operate under Louis Cruise Lines.',
          Booking: 'https://www.flightcentre.co.nz/cruises/cruise-lines/celestyal-cruises/celestyal-olympia'
        },
        {
          id: 22,
          cruise_line: "Explorer Cruises",    
          ship_name: "Explorer Dream",
          img: '/images/Explorer Cruises/explorer-dream-620x330.jpg',
          Year: 1999,
          Gross_Tonnage: 75338,
          Passenger_Full_Capacity: 2800,
          Double_Occupancy_Passenger_Capacity: 1974,
          Length: 268.60,
          Beam: 32.30,
          Draft: 7.90,
          Height: 57.50,
          Loaded_Displacement: 42036,
          Deadweight: 8530,

          // Below is all the properties I need for each Review (either initial or added) on a Review Page.
          // Star_Rating: '4.0','
          // Review_User_Name: 'Robert Wilkinson',
          // 
          Review: 'This ship has kept the same name and cruise line ever since it has been in service up until this year (2019). It used to be called Superstar Virgo and operated for Star Cruises. It has a beautiful asian feeling to it, as it sails a lot of Asian ports, but also most importantly this means that you will be well looked after at sea in terms of the hospitality. Meals were of top quality and the staff were very approachable. Unfortunately at the moment if you go t book, you will notice that all cruises for the 2020-21 season have been cancelled. Their will be an opportunity to travel in the future though when the situation is better.',
          Booking: 'https://www.cruiseindustrynews.com/cruise-news/22670-dream-cruises-cancels-2020-2021-australia-program.html'
        },
        {
          id: 23,
          cruise_line: "Norwegian Cruises",    
          ship_name: "Norwegian Spirit",
          img: '/images/700x475_MainImage_Spirit2.jpg',
          Year: 1998,
          Gross_Tonnage: 75904,
          Passenger_Full_Capacity: 2414,
          Double_Occupancy_Passenger_Capacity: 2018,
          Length: 267.94,
          Beam: 32.31,
          Draft: 7.92,
          Height: 57.60,
          Loaded_Displacement: 42036,
          Deadweight: 8530,

          // Below is all the properties I need for each Review (either initial or added) on a Review Page.
          // Star_Rating: '4.0','
          // Review_User_Name: 'Robert Wilkinson',
          // 
          Review: '',
          Booking: 'https://www.flightcentre.co.nz/cruises/cruise-lines/norwegian-cruise-line/norwegian-spirit'
        },
        {
          id: 24,
          cruise_line: "Norwegian Cruises",    
          ship_name: "Norwegian Jewel",
          img: '/images/Norwegian Jewel (Wellington, NZ) IMG_8841.JPG',
          Year: 2005,
          Gross_Tonnage: 93502,
          Passenger_Full_Capacity: 2866,
          Double_Occupancy_Passenger_Capacity: 2388,
          Length: 294.13,
          Beam: 32.31,
          Draft: 8.23,
          Height: 60.5,
          Loaded_Displacement: 45612,
          Deadweight: 7500,

          // Below is all the properties I need for each Review (either initial or added) on a Review Page.
          // Star_Rating: '4.0','
          // Review_User_Name: 'Robert Wilkinson',
          // 
          Review: '',
          Booking: 'https://www.flightcentre.co.nz/cruises/cruise-lines/norwegian-cruise-line/norwegian-jewel'
        },
        {
          id: 25,
          cruise_line: "Norwegian Cruises",
          ship_name: "Norwegian Dawn",
          img: '/images/Norwegian Cruises/1280px-Norwegian_Dawn_Leaving_Boston_Harbor_(cropped).jpg',
          Year: 2002,
          Gross_Tonnage: 92250,
          Passenger_Full_Capacity: 2808,
          Double_Occupancy_Passenger_Capacity: 2340,
          Length: 294.00,
          Beam: 32.20,
          Draft: 8.50,
          Height: 59.50,
          Loaded_Displacement: 48200,
          Deadweight: 7500,

          // Below is all the properties I need for each Review (either initial or added) on a Review Page.
          // Star_Rating: '4.0','
          // Review_User_Name: 'Robert Wilkinson',
          // 
          Review: 'I did a cruise on Norwegian Dawn in November 2019. The main great part of the cruise was that there was 9 ports calls on a 15 day cruise, so it was great to see that many beautiful places. The highlights were Curaco and Aruba. The main negative part of the cruise was that smoking was allowed in one of the lounges inside the ship and also in the casino, so for non smokers, the smoke smell was there when you were close to these parts of the ship. Food wise, the meat was very tender during dinner meals, so we were happy with that, but sometimes there not enough fruit.',
          Booking: 'https://www.flightcentre.co.nz/cruises/cruise-lines/norwegian-cruise-line/norwegian-dawn'
        },
        {
          id: 26,
          cruise_line: "P & O Cruises",
          ship_name: "Pacific Aria",
          img: '/images/P & O Cruises/pacific-aria-po-australia-151464.jpg',
          Year: 1994,
          Gross_Tonnage: 55819,
          Passenger_Full_Capacity: 1500,
          Double_Occupancy_Passenger_Capacity: 1258,
          Length: 219.40,
          Beam: 30.80,
          Draft: 7.71,
          Height: 51.50,
          Loaded_Displacement: 24906,
          Deadweight: 5709,

          // Below is all the properties I need for each Review (either initial or added) on a Review Page.
          // Star_Rating: '4.0','
          // Review_User_Name: 'Robert Wilkinson',
          // 
          Review: '',
          Booking: 'https://www.flightcentre.co.nz/cruises/cruise-lines/po-australia/pacific-aria'
        },
        {
          id: 27,
          cruise_line: "P & O Cruises",
          ship_name: "Pacific Dawn",
          img: '/images/P & O Cruises/image_1000x500_21.webp',
          Year: 1991,
          Gross_Tonnage: 70285,
          Passenger_Full_Capacity: 2020,
          Double_Occupancy_Passenger_Capacity: 1546,
          Length: 245.06,
          Beam: 32.20,
          Draft: 8.218,
          Height: 56.00,
          Loaded_Displacement: 36275,
          Deadweight: 6715,

          // Below is all the properties I need for each Review (either initial or added) on a Review Page.
          // Star_Rating: '4.0','
          // Review_User_Name: 'Robert Wilkinson',
          // 
          Review: '',
          Booking: 'https://www.flightcentre.co.nz/cruises/cruise-lines/po-australia/pacific-dawn'
        },
        {
          id: 28,
          cruise_line: "P & O Cruises",
          ship_name: "Pacific Explorer",
          img: '/images/P & O Cruises/PACEXP.jpg',
          Year: 1997,
          Gross_Tonnage: 77441,
          Passenger_Full_Capacity: 2395,
          Double_Occupancy_Passenger_Capacity: 1998,
          Length: 261.00,
          Beam: 32.20,
          Draft: 8.20,
          Height: 59.70,
          Loaded_Displacement: 39997,
          Deadweight: 8293,

          // Below is all the properties I need for each Review (either initial or added) on a Review Page.
          // Star_Rating: '4.0','
          // Review_User_Name: 'Robert Wilkinson',
          // 
          Review: '',
          Booking: 'https://www.flightcentre.co.nz/cruises/cruise-lines/po-australia/pacific-encounter'
        }
      ]);
    });
  };