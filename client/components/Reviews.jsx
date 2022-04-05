import React from 'react'

// Obviously swap this for a api call using shipId
import {reviews} from '../../data.js'
console.log(reviews)
// id: 1,
// Review_User_Name: 'Paul Austin', 
// Review: 'I was on this ship for her maiden cruise from Port Canaveral. Amazingly big ship, so it was difficult to get to know everyone on board, like it is on the smaller ships. The activities however were excellent as there was a lot to choose from, like rock climbing, indoor cricket, tennis and touch rugby. The shows had lots of variety, ranging from argentinian and salsa dancing and singing from opera to songs with a comical side to them. I would recommend this ship to all variety of ages, as the passengers range from families, group of friends or loved ones on a trip.', 
// Star_Rating: '4.0', 
// Cruise_Name: 'Spain to Italy by Sea',
// Cruise_Duration: '7 days (5 nights)',
// Sail_Date: '7th April 2018',
// Leaving_Port: 'Barcelona, Spain',
// Destination: 'Naples, Italy',
// Disembark_Date: '13th April 2018',
// Travel_Name: 'Austin', Review_Title: 'Barcelona to Naples by Sea',
// Number_of_Cruises: '10',
// Travel_Party: 'Large Group',
// Ship_Id: '17'

function Reviews({shipId}) {
  return (
    <div>{
      reviews.map((review) => {
        return (
          <div>
            <p>Name: {review.Review_User_Name}</p>
            <p>{review.Review}</p>
            <p></p>
          </div>
        )
      })
      
    }</div>
  )
}

export default Reviews