import React from 'react'
import {Link} from 'react-router-dom'
import FindReview from './FindReview'
// import {HashLink as link} from 'react-router-hash-link'
import {HashLink} from 'react-router-hash-link'


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
            Booking
        } = this.props
        
        // The ShipName constant is used to reference to a Ship Name Heading on the Cruise Line Review Page. 
        // Please note: It is not used to replace all spaces in the url with an underscore "_"
        // This encodedShipName has worked before the add review change.
        const encodedShipName = ship_name.replace(/\s/g, '_')

        // Below code controls getting cruise line encoding for Make a Review Link button
        const encodedCruiseline = cruise_line.replace(/\s/g, '_')

        // Creating a variable addreview for the end of the url, which can be encoded
        const encodedAddReview = addreview.replace(/\s/g, '-')

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

                {/* <button className = "addReview">
                    Make a Review
                </button> */}    

                <HashLink className = "addReview" to = {`/cruiselines/${encodedCruiseline}#${encodedShipName}/${encodedAddReview}`}>
                    <div className= "reviewButton">
                        <span>Make a Review</span>
                    </div>
                </HashLink>

                {/* I think rather than a button it should be a Link disguised as a button.
                <Link className = "addReview" to = >
                
                </Link> */}

                {/* This goes to the FindReview component where it finds if an Initial Review exists for the ship.
                If initial review does exist from ships seeds file, then it will be displayed.

                If an initial Review does not exist, then user can click on Make a Review button to make a Review.
                When user makes a Review, a new page opens in a separate window allowing user to fill out a form and then submit it.
                The Users new Review gets diplayed on a ships Review page 
                eg http://localhost:3000/cruiselines/Celestyal_Cruises#Celestyal_Crystal*/}

                <FindReview/> 

                <div className = "ReviewAdded">
                    <article>

                        <label>Star Rating</label>
                        {/* <StarRating/>  */}

                        {/* Maybe label for Review Title */}
                        <p>{this.state.value}</p>

                        {/* Maybe label for Cruise and User Name below */}
                        <p>{this.state.value} by {this.state.value}   (Optional)</p>

                        <label>Sail Date: {this.state.value}</label>   <label> / Travelled as: {this.state.value}</label>

                        <label>Leaving Port: {this.state.value}</label> <label> / Destination: {this.state.value}</label>

                        <Textbox>
                            {this.state.value}

                        </Textbox>

                        <label>Number of Cruises Travelled: {this.state.value}</label>

                    </article>
                </div>

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