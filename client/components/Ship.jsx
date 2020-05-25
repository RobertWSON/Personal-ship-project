import React from 'react'
import {Link} from 'react-router-dom'
import AddReview from './AddReview'
import InitialReview from './InitialReview'


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
            Review
        } = this.props
        
        // The ShipName constant is used to reference to a Ship Name Heading on the Cruise Line Review Page. 
        // Please note: It is not used to replace all spaces in the url with an underscore "_"
        const encodedShipName = ship_name.replace(/\s/g, '_')



    return  (
        <React.Fragment>


          {/* <div className = "reviewContainer"> */}

            <div className = "cruiseShip">  
                {/* The id in the Ship Name Heading is used as a reference to the url for a specific ship name that a 
                user is reviewing.   */}
                <h2 className = "ship" id ={encodedShipName}>{ship_name}</h2>

                <img src ={img}/>

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
            
            <div className="ShipTermsIntro">
                <p>
                    <b>Ship Terms</b>
                    <br/>
                    <br/>
                    If you are interested and want to find out more about what these ship terms actually mean, then click{''}
                    <Link to="/cruiselines/shipterms">Here</Link>
                </p>
            </div>

            <div className = "backButton">
                <button>
                    <Link to="/cruiselines">Back to Cruise Lines</Link>
                </button>
            </div>    

            <div className = "review">
                <h3>Reviews:</h3>
                <br/> 

                {/* This is the initial Review taken from my Ship.js seeds file */}
                {/* <div key = {ship.Review}> */}
                
                {/* I think we have to sort out the showing and hiding of the Reviews in Initial Review component 
                and then return <textarea></textarea> as a React Fragment in this Ship component.
                I think this is the only way to do this because you can only access the Review prop through 
                this Ship Component. */}

                <textarea className = "initial">
                    {Review}
                </textarea>
                
                {/* <div key = {this.props.Review}>    
                    <InitialReview Review = {Review}/>
                </div> */}
                
                {/* <textarea className = "initial">{Review}</textarea>    */}

                {/* <div>
                    <initialReview/>
                </div> */}

                {/* We need to go to another component (AddReview), so we can add a Review. */}
                        
                {/* <div className = "makeReview"> */}
                {/* <div className = "Review"> */}
                <div>    
                    <AddReview/>
                </div>    
                {/* </div> */}

                {/* <button className = "AddReview">
                    Make a Review
                </button> */}
                {/* <textarea></textarea> */}

                
            </div>
            
          {/* </div> */}

        </React.Fragment>
        )
    } 
}  

export default Ship