import React from 'react'
import {Link} from 'react-router-dom'
import FindReview from './FindReview'
// I don't think we need HashLink because I don't think it works for Adding a Review.  
// import {HashLink as link} from 'react-router-hash-link'
// import {HashLink} from 'react-router-hash-link'


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

        // Don't need addreview variable because I have add-review in routes
        // Creating a variable addreview for the end of the url, which can be encoded
        // const encodedAddReview = addreview.replace(/\s/g, '-')

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

                {/* I think rather than a button below, it should be a Link disguised as a button.
                for example <Link className = "addReview" to = > Make a Review </Link> */}

                <Link className = "addReview" to = {`/cruiselines/${encodedCruiseline}/${encodedShipName}/add-review`}>
                    <div className= "reviewButton">
                        <span>Make a Review</span>
                    </div>
                </Link>

                {/* How the Components Work for Review Process --- */}
                {/* The FindReview component, I think could take ship_name prop.
                    I was thinking about using key={ship.id} , but I may not need it because the key 
                    for correct cruise ship has been picked up already, by ship.id in Review Component.  
                */}

                {/* In this Ship component, the FindReview component code below, picks up the correct 
                cruise ship and then goes into FindReview component. 

                In FindReview component it has to go through state, base on, if a review exists or not for that ship.
                If a review from the reviews table does exist for the ship, then it takes that review id as a key 
                and goes to InitialReview component.
                
                If a review from the reviews table does not exist for the ship, then using an empty Review_User_Name prop, 
                it goes to AddReview component, where it picks up the api.
                Once AddReview component picks up an api through state, it uses a new review to be passed as a prop
                into ReviewForm component.
                In ReviewForm component the new review for a ship, gets all the details to fill out the form, 
                it then gets submitted and the new review details are displayed on a ship review page,
                eg http://localhost:3000/cruiselines/Celestyal_Cruises#Celestyal_Crystal. */}

                {/* How Review Process Works --- */}
                {/* Code below goes to a FindReview component where it finds if an Initial Review exists for the ship.
                If an initial review does exist from ships reviews file, then it will be displayed.

                If an initial Review does not exist, then user can click on Make a Review button to make a Review.
                When user makes a Review, a new page opens in a separate window allowing user to fill out a form 
                and then submit it. The Users new Review gets diplayed on a ships Review page 
                */}

                <FindReview encodedShipName={ship_name}/> 

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