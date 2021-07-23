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
            Review_Ship_Name,
            Review_img,
            Review,
            // Star_Rating,
            Cruise_Name,
            Sail_Date,
            Cruise_Year,
            Cruise_Month,
            Leaving_Port,
            Destination,
            Review_Title,
            Number_of_Cruises,
            Travel_Party,
        } = this.props

        return  (

        //   Note: These props passed here should have data from the reviews table, as this is an  
        //   initial Review to be displayed .

        <React.Fragment>

            <article>
                
                <label>Star Rating</label>
                {/* <StarRating ={Star_Rating}/>  */}

                {/* Maybe label for Review Title */}
                <p>{Review_Title}</p>
                
                {/* I have added these based on what you need from when you add review through ReviewFrom */}
                <h1>Review your 
                    {Review_Ship_Name} 
                cruise
                </h1> 

                <div className = "yourCruise">
                     <label>Your Cruise on 
                     {Review_Ship_Name} 
                     {/* not ship_name */}
                     </label>
                     
                     <img src ={Review_img} />
                     {/* Maybe ship_name below can go after Your Cruise
                     <p>{ship_name}</p> */}
                  </div>

                  <label>Your Travelling Name:</label>
                  <textbox>{Review_User_Name}</textbox>  <label>Number of Cruises Travelled: {Number_of_Cruises}</label>

                  <label><b>Cruise Name:</b></label>
                    {/* or maybe textarea */}
                    <textbox>{Cruise_Name}</textbox>

                    <h2>Sailing Date: {Sail_Date}</h2> 

                    <label><b>Year:{Cruise_Year}</b></label>

                    <label><b>Month:{Cruise_Month}</b></label>  

                {/* End of adding extras based on what I need from when you add review through ReviewFrom */}        
                

                {/* Maybe label for Cruise and User Name below */}
                <p>{Cruise_Name} by {Review_User_Name}   (Optional)</p>

                <label>Sail Date: {Sail_Date}</label>   <label> / Travelled as: {Travel_Party}</label>

                <label>Leaving Port: {Leaving_Port}</label>   <label> / Destination: {Destination}</label>

                <Textbox>
                    {Review}

                </Textbox>

            </article>
            

        </React.Fragment>        
        
        )
    }
}

export default InitialReview