
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('Reviews').insert([
        {id: 1, Review_User_Name: 'Paul Austin', 
                Review: 'I was on this ship for her maiden cruise from Port Canaveral. Amazingly big ship, so it was difficult to get to know everyone on board, like it is on the smaller ships. The activities however were excellent as there was a lot to choose from, like rock climbing, indoor cricket, tennis and touch rugby. The shows had lots of variety, ranging from argentinian and salsa dancing and singing from opera to songs with a comical side to them. I would recommend this ship to all variety of ages, as the passengers range from families, group of friends or loved ones on a trip.', 
                Star_Rating: '4.0', 
                Cruise_Name: 'Spain to Italy by Sea', Cruise_Duration: '7 days (5 nights)', Sail_Date: '7th April 2018', Leaving_Port: 'Barcelona, Spain', Destination: 'Naples, Italy', Disembark_Date: '13th April 2018', Travel_Name: 'Austin', Review_Title: 'Barcelona to Naples by Sea', Number_of_Cruises: '10', Travel_Party: 'Large Group',
                ship_id: 'ships.id'
                },
        {id: 2, Review_User_Name: 'Joel Macalister', 
                Review: 'This ship has been sailing for Marella Cruises owned by UK company TUI. I sailed on it in 2018 and really enjoyed my Miami to Barbados and return cruise. The beautiful feeling of being on a cruise ship that has a good amount of cruising hsitory was felt with the onboard architecture and onboard display of past cruise history. Excellent rang of onboard activities like tennis and basketball facilities for people who enjoy a sporting challenge like myself. Barbados was a great highlight of the trip and the people there made you feel so welcome. However, Since covid it is now in retirement and is looking for a company to be sold to, so that it can continue cruising. When you click make a booking for this ship, the website tells you about what is happening with this ship.', 
                Star_Rating: '4.0', 
                Cruise_Name: 'Miami to Barbados return', Cruise_Duration: '15 nights', Sail_Date: '14th November 2018', Leaving_Port: 'Miami', Destination: 'Miami', Disembark_Date: '29th November 2018', Travel_Name: 'Macalister', Review_Title: 'Miami to Barbados through the Caribbean and Return', Number_of_Cruises: '4', Travel_Party: 'Family with young children',
                ship_id: 'ships.id'
                },
        {id: 3, Review_User_Name: '', Review:'', Star_Rating: '', Cruise_Name: '', Cruise_Duration: '', Sail_Date: '', Leaving_Port: '', Destination: '', Disembark_Date: '', Travel_Name: '', Review_Title: '', Number_of_Cruises: '', Travel_Party: '',
                ship_id: 'ships.id'
                },
        {id: 4, Review_User_Name: 'Robert Wilkinson', 
                Review: 'I did a recent cruise on Star Princess from Los Angeles to San Antonio, Chile. I found that the Staff were very friendly and looked after you well. When I was on the cruise and forgot to get some water when I was eating from the buffet, this was absolutely no problem, as staff would approach me straight away to ask if I wanted some water and a coffee. The only exception, which we were not happy about was the room attendant, who frequently did not update our room with things like toilet paper, soap and making beds, so we had to tell another room attendant to get it sorted. Great range of activities to do on board at sea with lots of shows, quizzes, learning spanish and basketball free throw competition to name a few. The Italian captain is one of the funniest captains I have every seen and had a great sense of humour every time he talked on the mic. The ports of call were very unique and different with mostly great tours. The only tours I found disappointing were the day time tour in Lima, as we did not get to see much of the coast and did mostly a market tour. Also the tour in La Serena was a bit disappointing as it was scheduled to go to a Museum, but that never happened and instead we took a view from a Library to look out to La Serena. So choose your tours wisely or just do your own thing. Overall a great cruise and good value for money.', 
                Star_Rating: '4.6', 
                Cruise_Name: 'Central and South America Cruise', Cruise_Duration: '16 nights', Sail_Date: '5th December 2018', Leaving_Port: 'Los Angeles, USA', Destination: 'San Antonio, Chile', Disembark_Date: '20th December 2018', Travel_Name: 'Wilkinson', Review_Title: 'LA to South America', Number_of_Cruises: '4', Travel_Party: 'Family',
                ship_id: 'ships.id'
                },
        {id: 5, Review_User_Name: '', Review:'', Star_Rating: '', Cruise_Name: '', Cruise_Duration: '', Sail_Date: '', Leaving_Port: '', Destination: '', Disembark_Date: '', Travel_Name: '', Review_Title: '', Number_of_Cruises: '', Travel_Party: '',
                ship_id: 'ships.id'
                },
        {id: 6, Review_User_Name: '', Review:'', Star_Rating: '', Cruise_Name: '', Cruise_Duration: '', Sail_Date: '', Leaving_Port: '', Destination: '', Disembark_Date: '', Travel_Name: '', Review_Title: '', Number_of_Cruises: '', Travel_Party: '',
                ship_id: 'ships.id'
                },
        {id: 7, Review_User_Name: '', Review:'', Star_Rating: '', Cruise_Name: '', Cruise_Duration: '', Sail_Date: '', Leaving_Port: '', Destination: '', Disembark_Date: '', Travel_Name: '', Review_Title: '', Number_of_Cruises: '', Travel_Party: '',
                ship_id: 'ships.id'
                },
        {id: 8, Review_User_Name: '', Review:'', Star_Rating: '', Cruise_Name: '', Cruise_Duration: '', Sail_Date: '', Leaving_Port: '', Destination: '', Disembark_Date: '', Travel_Name: '', Review_Title: '', Number_of_Cruises: '', Travel_Party: '',
                ship_id: 'ship.id'
                },
        {id: 9, Review_User_Name: 'Kelly Stone', 
                Review: 'Pretty much a brand new cruise, you will love this one.', 
                Star_Rating: '4.5', 
                Cruise_Name: 'Baltic Europe to Amsterdam', Cruise_Duration: '15 nights', Sail_Date: '15th May 2018', Leaving_Port: 'Tallinn, Estonia', Destination: 'Amsterdam, Netherlands', Disembark_Date: '30th May 2018', Travel_Name: 'Stone', Review_Title: 'Baltic waters of Europe to Amsterdam', Number_of_Cruises: '8', Travel_Party: 'Couple',
                ship_id: 'ships.id'
                },
        {id: 10,  Review_User_Name: '', Review:'', Star_Rating: '', Cruise_Name: '', Cruise_Duration: '', Sail_Date: '', Leaving_Port: '', Destination: '', Disembark_Date: '', Travel_Name: '', Review_Title: '', Number_of_Cruises: '', Travel_Party: '',
                ship_id: 'ships.id'
                },
        {id: 11,  Review_User_Name: 'Matilda Grace', 
                  Review: 'Enjoyed the range of activities on this ship. This classic liner from the 90s that used to be called Legend of The Seas, has a good range of activities for its size. It has a tennis court that was always available to use.', 
                  Star_Rating: '4.3', 
                  Cruise_Name: 'South Pacific Christmas from Fiji to New Zealand', Cruise_Duration: '13 days', Sail_Date: '23rd December 2015', Leaving_Port: 'Suva, Fiji', Destination: 'Wellington, New Zealand', Disembark_Date: '5th January 2015', Travel_Name: 'Grace and Joe', Review_Title: 'Pretty South Pacific Christmas Cruise', Number_of_Cruises: '2', Travel_Party: 'Friends',
                  ship_id: 'ships.id'         
                  },
        {id: 12,  Review_User_Name: '', Review:'', Star_Rating: '', Cruise_Name: '', Cruise_Duration: '', Sail_Date: '', Leaving_Port: '', Destination: '', Disembark_Date: '', Travel_Name: '', Review_Title: '', Number_of_Cruises: '', Travel_Party: '',
                  ship_id: 'ships.id'
                  },
        {id: 13,  Review_User_Name: '', Review:'', Star_Rating: '', Cruise_Name: '', Cruise_Duration: '', Sail_Date: '', Leaving_Port: '', Destination: '', Disembark_Date: '', Travel_Name: '', Review_Title: '', Number_of_Cruises: '', Travel_Party: '',
                  ship_id: 'ships.id'
                  },
        {id: 14,  Review_User_Name: '', Review:'', Star_Rating: '', Cruise_Name: '', Cruise_Duration: '', Sail_Date: '', Leaving_Port: '', Destination: '', Disembark_Date: '', Travel_Name: '', Review_Title: '', Number_of_Cruises: '', Travel_Party: '',
                  ship_id: 'ships.id'
                  },
        {id: 15,  Review_User_Name: '', Review:'', Star_Rating: '', Cruise_Name: '', Cruise_Duration: '', Sail_Date: '', Leaving_Port: '', Destination: '', Disembark_Date: '', Travel_Name: '', Review_Title: '', Number_of_Cruises: '', Travel_Party: '',
                  ship_id: 'ships.id'
                  },
        {id: 16,  Review_User_Name: '', Review:'', Star_Rating: '', Cruise_Name: '', Cruise_Duration: '', Sail_Date: '', Leaving_Port: '', Destination: '', Disembark_Date: '', Travel_Name: '', Review_Title: '', Number_of_Cruises: '', Travel_Party: '',
                  ship_id: 'ships.id'
                  },
        {id: 17,  Review_User_Name: '', Review:'', Star_Rating: '', Cruise_Name: '', Cruise_Duration: '', Sail_Date: '', Leaving_Port: '', Destination: '', Disembark_Date: '', Travel_Name: '', Review_Title: '', Number_of_Cruises: '', Travel_Party: '',
                  ship_id: 'ships.id'
                  },
        {id: 18,  Review_User_Name: '', Review:'', Star_Rating: '', Cruise_Name: '', Cruise_Duration: '', Sail_Date: '', Leaving_Port: '', Destination: '', Disembark_Date: '', Travel_Name: '', Review_Title: '', Number_of_Cruises: '', Travel_Party: '',
                  ship_id: 'ships.id'
                  },
        {id: 19,  Review_User_Name: 'Rachel Lakowski', 
                  Review:'Operates world cruises of a different kind. It is serves as a travelling home and campus for students wanting to learn about different places.', 
                  Star_Rating: '4.3', 
                  Cruise_Name: 'Exploring Cruise Ship Life from Asia to Europe', Cruise_Duration: '50 days', Sail_Date: '15th May 2017', Leaving_Port: 'Phuket, Thailand', Destination: 'Belfast, Northern Ireland', Disembark_Date: '3rd July 2017', Travel_Name: 'Lakowski', Review_Title: 'Educational view on Cruise Ship life from knowledge on the ports as a tour guide.', Number_of_Cruises: '3', Travel_Party: 'Large Group',
                  ship_id: 'ships.id'
                  },
        {id: 20,  Review_User_Name: 'Robert Wilkinson', 
                  Review: 'I have been on this ship on my Contiki tour, when it was cruising for Louis Cruise Lines. It visited some lovely destinations of Greece like Mykonos and highly recommended for younger travellers who want to have a good time.', 
                  Star_Rating: '4.1', Cruise_Name: 'Greek Islands', Cruise_Duration: '8 nights', Sail_Date: '25th September 2008', Leaving_Port: 'Athens, Greece', Destination: 'Athens, Greece', Disembark_Date: '3rd October 2008', Travel_Name: 'Robert Wilkinson', Review_Title: 'Enjoyed scenery of Greek Islands', Number_of_Cruises: '4', Travel_Party: 'Single',
                  ship_id: 'ships.id'
                  },
        {id: 21,  Review_User_Name: 'Louise Cairns', 
                  Review:'I have not been on this ship, but just like the one I have been on it used to operate under Louis Cruise Lines.', 
                  Star_Rating: '4.3', Cruise_Name: 'Mediterranean Italy and French Islands', Cruise_Duration: '30 nights', Sail_Date: '13 September 2018', Leaving_Port: 'Trieste, Italy', Destination: 'Nice, France', Disembark_Date: '12th October 2018', Travel_Name: 'Cairns', Review_Title: 'Breathtaking Italian and French Islands along with main ports', Number_of_Cruises: '7', Travel_Party: 'Couple',
                  ship_id: 'ships.id'
                  },
        {id: 22,  Review_User_Name: 'Angela McIntyre', 
                  Review:'This ship has kept the same name and cruise line ever since it has been in service up until this year (2019). It used to be called Superstar Virgo and operated for Star Cruises. It has a beautiful asian feeling to it, as it sails a lot of Asian ports, but also most importantly this means that you will be well looked after at sea in terms of the hospitality. Meals were of top quality and the staff were very approachable. Unfortunately at the moment if you go to book, you will notice that all cruises for the 2020-21 season have been cancelled. Their will be an opportunity to travel in the future though when the situation is better.', 
                  Star_Rating: '4.5', Cruise_Name: 'Vietnam to Thailand', Cruise_Duration: '15 nights', Sail_Date: '15 October 2019', Leaving_Port: 'Hanoi, Vietnam', Destination: 'Bangkok, Thailand', Disembark_Date: '30th October 2019', Travel_Name: 'McIntyre', Review_Title: '', Number_of_Cruises: '5', Travel_Party: 'Couple', 
                  ship_id: 'ships.id'
                  },
        {id: 23,  Review_User_Name: '', Review:'', Star_Rating: '', Cruise_Name: '', Cruise_Duration: '', Sail_Date: '', Leaving_Port: '', Destination: '', Disembark_Date: '', Travel_Name: '', Review_Title: '', Number_of_Cruises: '', Travel_Party: '',
                  ship_id: 'ships.id' 
                 },
        {id: 24, Review_User_Name: '', Review:'', Star_Rating: '', Cruise_Name: '', Cruise_Duration: '', Sail_Date: '', Leaving_Port: '', Destination: '', Disembark_Date: '', Travel_Name: '', Review_Title: '', Number_of_Cruises: '', Travel_Party: '',
                 ship_id: 'ships.id'
                 },
        {id: 25, Review_User_Name: 'Robert Wilkinson', 
                 Review:'I did a cruise on Norwegian Dawn in November 2019. The main great part of the cruise was that there was 9 ports calls on a 15 day cruise, so it was great to see that many beautiful places. The highlights were Curaco and Aruba in the Caribbean, the operation of Panama Canal and snorkelling in Honduras. The main negative part of the cruise was that smoking was allowed in one of the lounges inside the ship and also in the casino, so for non smokers, the smoke smell was there when you were close to these parts of the ship. Food wise, the meat was very tender during dinner meals, so we were happy with that, but sometimes there was not enough fruit.', 
                 Star_Rating: '4.4', Cruise_Name: 'Panama Canal from New York', Cruise_Duration: '15 nights', Sail_Date: '9th November 2019', Leaving_Port: 'New York City, New York, USA', Destination: 'Tampa, Floria, USA ', Disembark_Date: '24th November 2019', Travel_Name: 'Wilkinson', Review_Title: 'Beautiful relaxing Caribbean along with green Central America and interesting Panama Canal', Number_of_Cruises: '4', Travel_Party: 'Family',
                 ship_id: 'ships.id'
                 },
        {id: 26, Review_User_Name: '', Review:'', Star_Rating: '', Cruise_Name: '', Cruise_Duration: '', Sail_Date: '', Leaving_Port: '', Destination: '', Disembark_Date: '', Travel_Name: '', Review_Title: '', Number_of_Cruises: '', Travel_Party: '', 
                 ship_id: 'ships.id'
                 },
        {id: 27, Review_User_Name: '', Review:'', Star_Rating: '', Cruise_Name: '', Cruise_Duration: '', Sail_Date: '', Leaving_Port: '', Destination: '', Disembark_Date: '', Travel_Name: '', Review_Title: '', Number_of_Cruises: '', Travel_Party: '',
                 ship_id: 'ships.id'
                 },
        {id: 28, Review_User_Name: '', Review:'', Star_Rating: '', Cruise_Name: '', Cruise_Duration: '', Sail_Date: '', Leaving_Port: '', Destination: '', Disembark_Date: '', Travel_Name: '', Review_Title: '', Number_of_Cruises: '', Travel_Party: '',
                 ship_id: 'ships.id'
                 },
      ]);
    });
};
