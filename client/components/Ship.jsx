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
                    Passenger Capacity (Double Occupancy): {Double_Occupancy_Passenger_Capacity}
                </h4>
                <h4>Gross Tonnage: {Gross_Tonnage}</h4>
                <h4>Length: {Length} m</h4>
                <h4>Beam: {Beam} m</h4>
                <h4>Draft: {Draft} m</h4>
                <h4>Height: {Height} m</h4>
                <h4>Deadweight: {Deadweight} Tonnes</h4>
                <h4>Loaded Displacement: {Loaded_Displacement} Tonnes</h4>
            </div>

                
            {/* CSS for Review part on ./public/main.css (Line 592 to 594) 
            I think this needs improving, align-content: flex-start; maybe not correct   */}
            <div className = "Review">
                <h3 className = "shipReview">{ship_name} Reviews:</h3>
                <br/> 

                <ReviewButton 
                    destination={`/cruiselines/${encodedCruiseline}/${encodedShipName}/addreview`}
                    label ={"Make a Review"}
                /> 

                <div className = "reviewFind">
                    <h4 className = "reviewHead">Finding a Review</h4>
                </div>

                {/* <FindReview shipId={review_id}/>  */}

                {/* FindReview component helps finds a Review.
                2 Conditions, 
                If an Intial review exists from reviews seeds file, then it will be displayed here.
                or after user has made a new review, it gets added here  */}

                {/* css not used at very end of ./public/main.css for initial review and Make a Review Button.
                This is Lines 1586 to 1594 and I think I was experimenting on a different branch.  */}

                {/* CSS for Cruise Lines Back Button on ./public/main.css (Line 575 to 590)     */}
                <div className = "backButton">
                    <button className = "Button">
                        <Link className = "backLink" to="/cruiselines">Back to Cruise Lines</Link>
                    </button>
                </div> 

            </div>   


            {/* CSS for Booking button Link on line 637     */}
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

            {/* CSS for Cruise Lines Back Button on ./public/main.css (Line 575 to 590)     */}
            {/* <div className = "backButton">
                <button className = "Button">
                    <Link className = "backLink" to="/cruiselines">Back to Cruise Lines</Link>
                </button>
            </div>         */}

            {/* CSS for Ship Terms Introduction and Link on ./public/main.css (Line 544 to 554)     */}
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

        </div>     
            
        </React.Fragment>
        )
    } 
}  

export default Ship