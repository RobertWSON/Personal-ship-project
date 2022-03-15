import React from 'react'
import {Link} from 'react-router-dom'
import ReviewButton from './ReviewButton'
// import FindReview from './FindReview'


class Ship extends React.Component  {
    constructor(props)  {
        super(props)
    }
    
    render()    {

        const   {
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
            // review_id
        } = this.props
        
        // The ShipName constant is used to reference to a Ship Name Heading on the Cruise Line Review Page. 
        // Please note: It is not used to replace all spaces in the url with an underscore "_"
        const encodedShipName = ship_name.replace(/\s/g, '_')



    return  (
        <React.Fragment>


          <div className = "reviewContainer">

            <div className = "cruiseShip">  
                {/* The id in the Ship Name Heading is used as a reference to the url for a specific ship name that a 
                user is reviewing.   */}
                <h2 className = "ship" id ={encodedShipName}>{ship_name}</h2>

                <div className = "cruiseImage">
                    <img src ={img} title = {ship_name}/>
                </div>

            </div>

            <div className="ShipDetails">
                
                <h3>Ship Details</h3>

                <h4>Year: {Year}</h4>
                <h4>Passenger Capacity (Full): {Passenger_Full_Capacity}</h4>
                <h4>
                    Passenger Capacity (Double Occupancy):
                    {Double_Occupancy_Passenger_Capacity}
                </h4>
                <h4>Gross Tonnage: {Gross_Tonnage}</h4>
                <h4>Length: {Length}</h4>
                <h4>Beam: {Beam}</h4>
                <h4>Draft: {Draft}</h4>
                <h4>Height: {Height}</h4>
                <h4>Deadweight: {Deadweight}</h4>
                <h4>Loaded Displacement: {Loaded_Displacement}</h4>
            </div>

            <div className = "backButton">
                <button className = "Button">
                    <Link className = "backLink" to="/cruiselines">Back to Cruise Lines</Link>
                </button>
            </div>    


            <div className = "Review">
                <h3>{ship_name} Reviews:</h3>
                <br/> 


                <button className = "addReview"
                    component={ReviewButton} 
                    to= {{
                        pathname: `/cruiselines/${encodedCruiseline}${encodedShipName}/addreview`,
                        state: this.props}}
                    >
                    Make a Review
                </button> 

                {/* <ReviewButtton key = {props}><button className = "addReview">
                    <Link to= {{
                            pathname: `/cruiselines/${encodedCruiseline}${encodedShipName}/addreview`,
                            state: this.props}}>
                            Make a Review
                    </Link>
                    </button>
                </ReviewButtton> */}

                {/* Go to ReviewButton Component , so that state is controlled when a user clicks Make a Review button */}

                {/* Comment below for now, as it is not working */}
                {/* <div key = {this.props} className="addReview"   
                    <ReviewButton></ReviewButton>
                </div>

                <FindReview shipId={review_id}/>   */}

                {/* FindReview component helps finds a Review.
                2 Conditions, 
                If an Intial review exists from reviews seeds file, then it will be displayed here.
                or after user has made a new review, it gets added here  */}

            </div>

            <div className="ShipTermsIntro">
                <p>
                    <b>Ship Terms</b>
                    <br/>
                    <br/>
                    If you are interested and want to find out more about
                    <br/>what these ship terms actually mean, then click {' '} 
                    <Link to="/cruiselines/shipterms">Here</Link>
                </p>
            </div>

            <div className = "Booking">    
            <a href = {Booking} 
                className = "bookLink" 
                rel = "noopener noreferrer"
                target= "_blank">
                {/* <button className = "Button"> */}
                    Make a Booking
                {/* </button> */}
            </a>  
            </div>    
            {/* <div className = "bookButton">
                <button className = "Button">
                    <a href = {Booking} className = "bookLink" rel = "noopener noreferrer">Make a Booking</a> */}
                    {/* <Link className = "bookLink" to = {`${Booking}`}>Make a Booking</Link> */}
                    {/* <ExternalLink className = "bookLink" to = {`${Booking}`}>Make a Booking</ExternalLink>  */}
                {/* </button>
            </div> */}

        </div>     
            
        </React.Fragment>
        )
    } 
}  

export default Ship