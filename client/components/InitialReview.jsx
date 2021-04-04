import React from 'react'
import StarRating from './StarRating'

// The idea of this component is if the seeds file already has my Initial Review,
// then the Review is displayed or shown as an article with the seeds Review in a Textbox within the Review.
// If there is no Review in the seeds file, then nothing gets displayed and the Review is hidden. 

class InitialReview extends React.Component {
    constructor(props)  {
        super(props)

        // this.state = {
            
        // }

    }    

    render()    {        
        return  (

        <React.Fragment>

            <article>

                <label>Star Rating</label><StarRating/> 

                {/* Maybe label for Review Title */}
                <p>{Review_Title}</p>

                {/* Maybe label for Cruise and User Name below */}
                <p>{Cruise_Name} by {Review_user_name}   (Optional)</p>

                <label>Sail Date: {sail_date}</label>   <label> / Travelled as: {travel_party}</label>

                <label>Leaving Port: {starting_port}</label>   <label> / Destination: {destination}</label>

                <Textbox>
                    {Review}

                </Textbox>

                <label>Number of Cruises Travelled: {number_cruises}</label>

            </article>
            

        </React.Fragment>        
        
        )
    }
}

export default InitialReview