import React from 'react'
import {Link} from 'react-router-dom'

export const Ship = props =>    {
    
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
        } = props

    return  (
        <React.Fragment>

            <h2 id ={ship_name}>{ship_name}</h2>

            <img src ={img}/>

            <div className="ShipDetails">
                
                <h3>Ship Details</h3>

                <h4>Year: {Year}</h4>
                <h4>Passenger Capacity (Full): {Passenger_Full_Capacity}</h4>
                <h4>
                    Passenger Capacity (Double Occupancy):('')
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

            <h3>Reviews:</h3>
            <br/>
            <p>{Review}</p>

            <button>
                <Link to="/cruiselines">Back to Cruise Lines</Link>
            </button>

        </React.Fragment>

    )
}    