import React from 'react'
import {Link} from 'react-router-dom'
// import ReviewButton from './ReviewButton' //Maybe not needed
// import FindReview from './FindReview'


class Ship extends React.Component  {
    constructor(props)  {
        super(props)
    }

    state = {
        toggleReviews: false,
        toggleReviewForm: false,
    }
    
    render()    {

        const   {
            cruise_line,
            ship_name,
            img,
            Year, 
            Gross_Tonnage,
            Passenger_Full_Capacity,
            Double_Occupancy_Passenger_Capacity,
            Length,
            Beam,
            Draft,
            Height,
            Loaded_Displacement,
            Deadweight,
            Booking,
            // Destructure id prop for reviews
            //review_id
        } = this.props
        
        // The ShipName constant is used to reference to a Ship Name Heading on the Cruise Line Review Page. 
        // Please note: It is not used to replace all spaces in the url with an underscore "_"
        const encodedShipName = ship_name.replace(/\s/g, '_')

        // The Cruiseline constant is used in the link for Review Button. This is the link for the form page and 
        // it is used to replace all spaces in cruiseline part of url with an underscore "_"
        const encodedCruiseline = cruise_line.replace(/\s/g, '_')



    return  (
        <React.Fragment>

          <div className = "reviewContainer">

            <div className = "cruiseShip">  
                {/* The id in the Ship Name Heading is used as a reference to the url for a specific ship name that a 
                user is reviewing.   */}
                <h2 id ={encodedShipName}>{ship_name}</h2>

                <div className = "wrapper">
                    <img src ={img} title = {ship_name}/>
                </div>

            </div>

            <div className="ShipDetails">                
                <h3>Ship Details</h3>

                <ul>
                    <li>Year: {Year}</li>
                    <li>Passenger Capacity (Full): {Passenger_Full_Capacity}</li>
                    <li>Passenger Capacity (Double Occupancy): {Double_Occupancy_Passenger_Capacity}</li>
                    <li>Gross Tonnage: {Gross_Tonnage}</li>
                    <li>Length: {Length} m</li>
                    <li>Beam: {Beam} m</li>
                    <li>Draft: {Draft} m</li>
                    <li>Height: {Height} m</li>
                    <li>Deadweight: {Deadweight} Tonnes</li>
                    <li>Loaded Displacement: {Loaded_Displacement} Tonnes</li>
                </ul>
            </div>

                
            {/* CSS for Review part on ./public/main.css (Line 592 to 594) 
            I think this needs improving, align-content: flex-start; maybe not correct   */}
            <div className = "review">
                <div className = "wrapper">
                    <h3 width = {100}>{ship_name} Reviews:</h3>
                
                    <button onClick={() => this.setState({ toggleReviews: !this.state.toggleReviews })}>
                    Show Reviews
                    </button>

                    <button onClick={() => this.setState({ toggleReviewForm: !this.state.toggleReviewForm })}>    
                        <Link to ={`/cruiselines/${encodedCruiseline}/${encodedShipName}/addreview`}>
                        Make a Review
                        </Link>
                    </button>

                </div>

                <div className = "wrapper">
                    {this.state.toggleReviews ? <Reviews shipId={id}/> : ""}
                </div>

                <div className = "wrapper">
                    {this.state.toggleReviewForm ? <ReviewForm shipId={id}/> : ""}
                </div>

                {/* Comment this below and see how it looks */}
                {/* <div className = "wrapper">
                    <h3>Finding a Review</h3>

                    <button>
                        <Link className = "backLink" to="/cruiselines">Back to Cruise Lines</Link>
                    </button>
                </div>   */}
            </div>   


            {/* CSS for Booking button Link on line 637     */}
            <div className = "Booking">    
                <a href = {Booking} 
                    className = "bookLink" 
                    rel = "noopener noreferrer"
                    target= "_blank">
                    Make a Booking
                </a>  
            </div> 

            {/* CSS for Ship Terms Introduction and Link on ./public/main.css (Line 544 to 554)     */}
            <div className="ShipTermsIntro">
                <p>
                    <b>Ship Terms</b>
                    <br/>
                    <br/>
                    If you are interested and want to find out more about
                    <br/>what these ship terms actually mean, then click 
                    <Link to="/shipterms">Here</Link>
                </p>
            </div>
        </div>         
            
        </React.Fragment>
        )
    } 
}  

export default Ship