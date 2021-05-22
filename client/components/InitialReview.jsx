import React from 'react'
// import StarRating from './StarRating'

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
            Cruise_Name,
            Sail_Date,
            Leaving_Port,
            Destination,
            Review_Title,
            Number_of_Cruises,
            Travel_Party,
        } = this.props

        return  (

        <React.Fragment>

            <article>

                <label>Star Rating</label>
                {/* <StarRating/>  */}

                {/* Maybe label for Review Title */}
                <p>{Review_Title}</p>

                {/* Maybe label for Cruise and User Name below */}
                <p>{Cruise_Name} by {Review_User_Name}   (Optional)</p>

                <label>Sail Date: {Sail_Date}</label>   <label> / Travelled as: {Travel_Party}</label>

                <label>Leaving Port: {Leaving_Port}</label>   <label> / Destination: {Destination}</label>

                <Textbox>
                    {Review}

                </Textbox>

                <label>Number of Cruises Travelled: {Number_of_Cruises}</label>

            </article>
            

        </React.Fragment>        
        
        )
    }
}

export default InitialReview