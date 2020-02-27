import React from 'react'
import {Link} from 'react-router-dom'

class Titanic extends React.Component   {
    constructor(props)  {
        super(props)
    }

    render()    {

        return  (
            <React.Fragment>
                <h2 className = "ship">Titanic</h2>

                <img src = {"/images/titaniccover.jpg"}/>

                <div className = "ShipDetails">

                    <h3>Ship Specifications</h3>
                    <h4>Years in Service:               1912</h4>
                    <h4>Passenger Capacity (Full):      2300</h4>
                    <h4>Crew Capacity:                  1100</h4>
                    <h4>Gross Tonnage:                  46329</h4>
                    <h4>Length:                         269 m (880 feet)</h4>
                    <h4>Beam:                           28.68 m (88 feet)</h4>
                    <h4>Draft (Maximum):                10.32 m (34 feet)</h4>
                    <h4>Height:                         53.34 m (175 feet)</h4>
                    <h4>Deadweight (Maximum):           13830 Tonnes</h4>
                    <h4>Light Ship Displacement:        38800</h4>
                    <h4>Loaded Displacement (Maximum):  52630 Tonnes</h4>
                </div>

                <h3>History or Background</h3>
                <br/>
                <p>The Titanic is the start of where it all begin with travelling in large numbers. 
                   The ship was built in Belfast, Northern Ireland and one of the sister ships of the RMS Line, which stands for Royal Mail Steam Line.
                   At the time it was one of the largest passenger ships. Unfortunately it did not end well for it though. 
                   On it's maiden voyage travelling from Southhampton to New York it sailed for 10 days and then unfortunately hit an iceberg and that was the start of the disaster.
                </p>

                <br/><br/>
                <p>Below is a photo of the deck plans of the Titanic and you can clearly see that the bulkheads are not closed off at the top.
                    So this means during flooding water from one compartment can flow over the bulkhead and fill another compartment, evetually flooding the ship.
                </p>

                <Link to = "/evolutionpart1/titanic/images/evolution/titanic/d1my6c8-6d48eae7-255d-4e4d-bc8a-ff9ba1b0c417.jpg">
                    <img src = {"/images/evolution/titanic/d1my6c8-6d48eae7-255d-4e4d-bc8a-ff9ba1b0c417.jpg"}/>
                </Link>

                <br/><br/>

                <button>
                    <Link to="/cruiselines">Back to Cruise Lines</Link>
                </button>

            </React.Fragment>
        )
    }    
}

export default Titanic