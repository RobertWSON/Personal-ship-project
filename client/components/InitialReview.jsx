import React from 'react'
// Will sort out StarRating after I have Initial Reviews displayed

// The idea of this component is if the seeds file already has my Initial Review,
// then the Review is displayed or shown as an article with the seeds Review in a Textbox within the Review.
// If there is no Review in the seeds file, then nothing gets displayed and the Review is hidden. 

class InitialReview extends React.Component {
    constructor(props)  {
        super(props)
    }    

    render()    {
    
        const   {
            Review_User_Name,
            Review,
            // Star_Rating,
            Cruise_Name,
            Cruise_Duration,
            Sail_Date,
            Leaving_Port,
            Destination,
            Disembark_Date,
            Travel_Name,
            Review_Title,
            Number_of_Cruises,
            Travel_Party

        }   = this.props

        
        return  (

        <React.Fragment>

            {/* This article below will be displayed on a ships review page for an existing review taken from reviews table. */}
            <article>

                <label>Star Rating:</label>
                {/* <StarRating Rating={Star_Rating} /> uncomment when this is working */}

                <p><strong>{Review_Title}</strong>  by {Review_User_Name}</p>

                {/* Maybe label for Cruise and User Name below */}
                <p><strong>{Cruise_Name}</strong> travelled under the name {Travel_Name}</p>

                <p>Cruise Duration: {Cruise_Duration}</p>

                <label>Sail Date: {Sail_Date}   / Travelled as: {Travel_Party}</label> 

                <label>Disembark Date: {Disembark_Date}</label>

                <label>Leaving Port: {Leaving_Port}   /  Destination: {Destination}</label>

                <Textbox>
                    {Review}
                </Textbox>

                <label>Number of Cruise Travelled: {Number_of_Cruises}</label>

            </article>

        </React.Fragment>        
        
        )
    }
}

export default InitialReview