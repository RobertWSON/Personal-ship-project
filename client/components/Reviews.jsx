import React from 'react'

// This Component is used for displaying Reviews for a ship

// Swap this for an api call using shipId
import {reviews} from '../../data.js'
console.log(reviews)

// James Prentice has 1st review from data.js commented here

function Reviews ({shipId}) {
    return  (
        <div>   {
            reviews.map((review)  =>  {
                return  (
                    <div>
                        <p>Name: {review.Review_User_Name}</p>
                        <p>{review.Review}</p>
                    </div>
                )
            })
        }</div>
    )
}

export default Reviews