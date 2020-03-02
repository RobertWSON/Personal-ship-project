import React from 'react'
import {HashLink as Link} from 'react-router-hash-link'

class PacificPrincess extends React.Component   {
    constructor(props)  {
        super(props)
    }

    render()    {

        return  (
            <React.Fragment>
                <h2 className = "ship">Pacific Princess</h2>

                <h3>Contents</h3>
                <Link className = "Contents" smooth to = {`/evolutionpart1/pacificprincess/#${History}`}>
                    History
                </Link>
                <br/>
                
                <img src = {"/images/003410.jpg"}/>

                <div className = "ShipDetails">

                    <h3>Ship Specifications</h3>
                    <h4>Years in Service:               1971 - 2014</h4>
                    <h4>Passenger Capacity (Full):      674</h4>
                    <h4>Crew Capacity:                  370</h4>
                    <h4>Gross Tonnage:                  20186 </h4>
                    <h4>Length:                         168.74 m (553 feet 7 inches)</h4>
                    <h4>Beam:                           24.59 m (80 feet 8 inches)</h4>
                    <h4>Draft (Maximum):                7.70 m (25 feet 3 inches)</h4>
                    <h4>Height:                         46.28 m (151 feet 10 inches)</h4>
                    <h4>Deadweight (Maximum):           2936 Tons</h4>
                    <h4>Light Ship Displacement:        13334 Tons</h4>
                    <h4>Loaded Displacement (Maximum):  16270 Tons</h4>
                </div>

                <h3 id = {History}><b>History or Background</b></h3>
                <br/>
                <p>The Pacific Princess is one of the longest serving cruise ships from 1970's, having latest 43 years.
                   She was originally built as Sea Venture and changed her name to Pacific Princess in 1975, in time before the TV show Love Boat, that aired in 1977.  

                </p>

                <br/>

                <p>The photograph below, shows Pacific Princess docked in .
                </p>
                <img src = {"/images/lb0101.jpg"}/>

                <br/><br/>
                <p>Here are the deck plans of Pacific Princess below.
                </p>

                <br/><br/>

                <button>
                    <Link to="/evolutionpart1">Back to Evolution (Part 1)</Link>
                </button>

            </React.Fragment>
        )
    }    
}

export default PacificPrincess