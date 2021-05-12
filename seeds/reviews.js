
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('Reviews').insert([
        {id: 1, Review_User_Name: 'Robert Wilkinson', 
                Review: 'Amazingly big ship, so it was difficult to get to know everyone on board, like it is on the smaller ships. The activities however were excellent as there was a lot to choose from, like rock climbing, indoor cricket, tennis and touch rugby. The shows had lots of variety, ranging from argentinian and salsa dancing and singing from opera to songs with a comical side to them. I would recommend this ship to all variety of ages, as the passengers range from families, group of friends or loved ones on a trip.', 
                Star_Rating: '4.0', 
                Cruise_Name: '', Sail_Date: '', Leaving_Port: '', Destination: '', Travel_Name: '', Review_Title, Number_of_Cruises: '', Travel_Party: ''
                , ship_id: 1 },
        {id: 2, Review_User_Name: 'Robert Wilkinson', 
                Review: 'This ship has been sailing for Marella Cruises owned by UK company TUI. Since covid it is in retirement and is looking for a company to be sold to, so that it can continue cruising. When you click make a booking for this ship, the website tells you about what is happening with this ship.', 
                Star_Rating: '4.0', 
                Cruise_Name: '', Sail_Date: '', Leaving_Port: '', Destination: '', Travel_Name: '', Review_Title, Number_of_Cruises: '', Travel_Party: ''
                , ship_id: 2 },
        {id: 3, Review_User_Name: '', Review:'', Star_Rating: '', Cruise_Name: '', Sail_Date: '', Leaving_Port: '', Destination: '', Travel_Name: '', Review_Title, Number_of_Cruises: '', Travel_Party: ''
                , ship_id: 3 },
        {id: 4, Review_User_Name: 'Robert Wilkinson', 
                Review: 'I did a recent cruise on Star Princess from Los Angeles to Santiago. I found that the Staff were very friendly and looked after you well. When I was on the cruise and forgot to get some water when I was eating from the buffet, this was absolutely no problem, as staff would approach me straight away to ask if I wanted some water and a coffee. The only exception, which we were not happy about was the room attendant, who frequently did not update our room with things like toilet paper, soap and making beds, so we had to tell another room attendant to get it sorted. Great range of activities to do on board at sea with lots of shows, quizzes, learning spanish and basketball free throw competition to name a few. The Italian captain is one of the funniest captains I have every seen and had a great sense of humour every time he talked on the mic. The ports of call were very unique and different with mostly great tours. The only tours I found disappointing were the day time tour in Lima, as we did not get to see much of the coast and did mostly a market tour. Also the tour in La Serena was a bit disappointing as it was scheduled to go to a Museum, but that never happened and instead we took a view from a Library to look out to La Serena. So choose your tours wisely or just do your own thing. Overall a great cruise and good value for money.', 
                Star_Rating: '4.6', 
                Cruise_Name: '', Sail_Date: '', Leaving_Port: '', Destination: '', Travel_Name: '', Review_Title, Number_of_Cruises: '', Travel_Party: ''
                , ship_id: 4 },
        {id: 5, Review_User_Name: '', Review:'', Star_Rating: '', Cruise_Name: '', Sail_Date: '', Leaving_Port: '', Destination: '', Travel_Name: '', Review_Title, Number_of_Cruises: '', Travel_Party: ''
                , ship_id: 5 },
        {id: 6, Review_User_Name: '', Review:'', Star_Rating: '', Cruise_Name: '', Sail_Date: '', Leaving_Port: '', Destination: '', Travel_Name: '', Review_Title, Number_of_Cruises: '', Travel_Party: ''
                , ship_id: 6 },
        {id: 7, Review_User_Name: '', Review:'', Star_Rating: '', Cruise_Name: '', Sail_Date: '', Leaving_Port: '', Destination: '', Travel_Name: '', Review_Title, Number_of_Cruises: '', Travel_Party: ''
                , ship_id: 7 },
        {id: 8, Review_User_Name: '', Review:'', Star_Rating: '', Cruise_Name: '', Sail_Date: '', Leaving_Port: '', Destination: '', Travel_Name: '', Review_Title, Number_of_Cruises: '', Travel_Party: ''
                , ship_id: 8 },
        {id: 9, Review_User_Name: 'Robert Wilkinson', 
                Review: 'Pretty much a brand new cruise, you will love this one.', 
                Star_Rating: '4.5', 
                Cruise_Name: '', Sail_Date: '', Leaving_Port: '', Destination: '', Travel_Name: '', Review_Title, Number_of_Cruises: '', Travel_Party: ''
                , ship_id: 9 },
        {id: 10,  Review_User_Name: '', Review:'', Star_Rating: '', Cruise_Name: '', Sail_Date: '', Leaving_Port: '', Destination: '', Travel_Name: '', Review_Title, Number_of_Cruises: '', Travel_Party: ''
                , ship_id: 10 },
        {id: 11,  Review_User_Name: 'Robert Wilkinson', 
                  Review: 'Enjoyed the range of activities on this ship. This classic liner from the 90s that used to be called Legend of The Seas, has a good range of activities for its size. It has a tennis court that was always available to use.', 
                  Star_Rating: '4.3', 
                  Cruise_Name: '', Sail_Date: '', Leaving_Port: '', Destination: '', Travel_Name: '', Review_Title, Number_of_Cruises: '', Travel_Party: ''
                  , ship_id: 11 },
        {id: 12,  Review_User_Name: '', Review:'', Star_Rating: '', Cruise_Name: '', Sail_Date: '', Leaving_Port: '', Destination: '', Travel_Name: '', Review_Title, Number_of_Cruises: '', Travel_Party: ''
                  , ship_id: 12 },
        {id: 13,  Review_User_Name: '', Review:'', Star_Rating: '', Cruise_Name: '', Sail_Date: '', Leaving_Port: '', Destination: '', Travel_Name: '', Review_Title, Number_of_Cruises: '', Travel_Party: ''
                  , ship_id: 13 },
        {id: 14,  Review_User_Name: '', Review:'', Star_Rating: '', Cruise_Name: '', Sail_Date: '', Leaving_Port: '', Destination: '', Travel_Name: '', Review_Title, Number_of_Cruises: '', Travel_Party: ''
                  , ship_id: 14 },
        {id: 15,  Review_User_Name: '', Review:'', Star_Rating: '', Cruise_Name: '', Sail_Date: '', Leaving_Port: '', Destination: '', Travel_Name: '', Review_Title, Number_of_Cruises: '', Travel_Party: ''
                  , ship_id: 15 },
        {id: 16,  Review_User_Name: '', Review:'', Star_Rating: '', Cruise_Name: '', Sail_Date: '', Leaving_Port: '', Destination: '', Travel_Name: '', Review_Title, Number_of_Cruises: '', Travel_Party: ''
                  , ship_id: 16 },
        {id: 17,  Review_User_Name: '', Review:'', Star_Rating: '', Cruise_Name: '', Sail_Date: '', Leaving_Port: '', Destination: '', Travel_Name: '', Review_Title, Number_of_Cruises: '', Travel_Party: ''
                  , ship_id: 17 },
        {id: 18,  Review_User_Name: '', Review:'', Star_Rating: '', Cruise_Name: '', Sail_Date: '', Leaving_Port: '', Destination: '', Travel_Name: '', Review_Title, Number_of_Cruises: '', Travel_Party: ''
                  , ship_id: 18 },
        {id: 19,  Review_User_Name: 'Robert Wilkinson', 
                  Review:'Operates world cruises of a different kind. It is serves as a travelling home and campus for students wanting to learn about different places.', 
                  Star_Rating: '4.3', 
                  Cruise_Name: '', Sail_Date: '', Leaving_Port: '', Destination: '', Travel_Name: '', Review_Title, Number_of_Cruises: '', Travel_Party: ''
                  , ship_id: 19 },
        {id: 20,  Review_User_Name: 'Robert Wilkinson', 
                  Review: 'I have been on this ship on my Contiki tour, when it was cruising for Louis Cruise Lines. It visited some lovely destinations of Greece like Mykonos and highly recommended for younger travellers who want to have a good time.', 
                  Star_Rating: '4.1', Cruise_Name: '', Sail_Date: '', Leaving_Port: '', Destination: '', Travel_Name: '', Review_Title, Number_of_Cruises: '', Travel_Party: ''
                  , ship_id: 20 },
        {id: 21,  Review_User_Name: 'Robert Wilkinson', 
                  Review:'I have not been on this ship, but just like the one I have been on it used to operate under Louis Cruise Lines.', 
                  Star_Rating: '4.3', Cruise_Name: '', Sail_Date: '', Leaving_Port: '', Destination: '', Travel_Name: '', Review_Title, Number_of_Cruises: '', Travel_Party: ''
                  , ship_id: 21 },
        {id: 22,  Review_User_Name: 'Robert Wilkinson', 
                  Review:'This ship has kept the same name and cruise line ever since it has been in service up until this year (2019). It used to be called Superstar Virgo and operated for Star Cruises. It has a beautiful asian feeling to it, as it sails a lot of Asian ports, but also most importantly this means that you will be well looked after at sea in terms of the hospitality. Meals were of top quality and the staff were very approachable. Unfortunately at the moment if you go to book, you will notice that all cruises for the 2020-21 season have been cancelled. Their will be an opportunity to travel in the future though when the situation is better.', 
                  Star_Rating: '4.5', Cruise_Name: '', Sail_Date: '', Leaving_Port: '', Destination: '', Travel_Name: '', Review_Title, Number_of_Cruises: '', Travel_Party: ''
                  , ship_id: 22 },
        {id: 23, Review_User_Name: '', Review:'', Star_Rating: '', Cruise_Name: '', Sail_Date: '', Leaving_Port: '', Destination: '', Travel_Name: '', Review_Title, Number_of_Cruises: '', Travel_Party: ''
                 , ship_id: 23 },
        {id: 24, Review_User_Name: '', Review:'', Star_Rating: '', Cruise_Name: '', Sail_Date: '', Leaving_Port: '', Destination: '', Travel_Name: '', Review_Title, Number_of_Cruises: '', Travel_Party: ''
                 , ship_id: 24 },
        {id: 25, Review_User_Name: 'Robert Wilkinson', 
                 Review:'I did a cruise on Norwegian Dawn in November 2019. The main great part of the cruise was that there was 9 ports calls on a 15 day cruise, so it was great to see that many beautiful places. The highlights were Curaco and Aruba. The main negative part of the cruise was that smoking was allowed in one of the lounges inside the ship and also in the casino, so for non smokers, the smoke smell was there when you were close to these parts of the ship. Food wise, the meat was very tender during dinner meals, so we were happy with that, but sometimes there not enough fruit.', 
                 Star_Rating: '4.4', Cruise_Name: '', Sail_Date: '', Leaving_Port: '', Destination: '', Travel_Name: '', Review_Title, Number_of_Cruises: '', Travel_Party: ''
                 , ship_id: 25 },
        {id: 26, Review_User_Name: '', Review:'', Star_Rating: '', Cruise_Name: '', Sail_Date: '', Leaving_Port: '', Destination: '', Travel_Name: '', Review_Title, Number_of_Cruises: '', Travel_Party: ''
                 , ship_id: 26 },
        {id: 27, Review_User_Name: '', Review:'', Star_Rating: '', Cruise_Name: '', Sail_Date: '', Leaving_Port: '', Destination: '', Travel_Name: '', Review_Title, Number_of_Cruises: '', Travel_Party: ''
                 , ship_id: 27 },
        {id: 28, Review_User_Name: '', Review:'', Star_Rating: '', Cruise_Name: '', Sail_Date: '', Leaving_Port: '', Destination: '', Travel_Name: '', Review_Title, Number_of_Cruises: '', Travel_Party: ''
                 , ship_id: 28 },
      ]);
    });
};
