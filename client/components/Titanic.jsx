import React from 'react'
import {HashLink as Link} from 'react-router-hash-link'

class Titanic extends React.Component   {
    constructor(props)  {
        super(props)
    }

    render()    {

        return  (
            <React.Fragment>
                <h2 className = "ship">Titanic</h2>

                <h3>Contents</h3>
                <Link className = "Contents" smooth to = {`/evolutionpart1/titanic/#${History}`}>
                    History
                </Link>
                <br/>
                {/* <Link className = "Contents" smooth to = {`/evolutionpart1/titanic/#${Ending}`}>
                    The Ending of Titanic    
                </Link> */}
                <br/><br/>

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

                <h3 id ={History}>History or Background</h3>
                <br/>
                <p>The Titanic is the start of where it all begin with travelling in large numbers. 
                   The ship was built in Belfast, Northern Ireland and one of the sister ships of the RMS Line, which stands for Royal Mail Steam Line.
                   At the time it was one of the largest passenger ships. Unfortunately it did not end well for it though. 
                   On it's maiden voyage travelling from Southhampton to New York it sailed for 10 days and then unfortunately hit an iceberg and that was the start of the disaster.
                </p>

                <br/><br/>
                <p>Below is a photo of the deck plans of the Titanic and you can clearly see that the bulkheads are not closed off at the top.
                    So this means during flooding water from one compartment can flow over the bulkhead and fill another compartment, eventually flooding the ship.
                </p>

                <Link to = "/evolutionpart1/titanic/images/evolution/titanic/d1my6c8-6d48eae7-255d-4e4d-bc8a-ff9ba1b0c417.jpg">
                    <img src = {"/images/evolution/titanic/d1my6c8-6d48eae7-255d-4e4d-bc8a-ff9ba1b0c417.jpg"}/>
                </Link>

                <br/><br/>

                {/* <h3 id ={Ending}>The Ending of Titanic</h3> */}

                <p>However there is a twist to the above theory of why it sank.<br/>
                   It is believed that at the beginning of its voyage, there was a fire that started at the bottom of the ship.
                   The crew who are responsible usually for filling the boilers up with coal, had a new challenge and they were trying to get rid of the fire.
                   The fire caused a distinctive dark mark on the outside hull and it is believed that the bulkheads inside had been weakened by the fire.   
                </p>

                <p>Here are 2 photos below,<br/><br/> the photo on the left shows the dark mark on the outside hull<br/><br/>
                   and the photo on the right shows the inside bulkhead that is weakened from the fire.
                </p>

                {/* <img src = "" */}

                <button>
                    <Link to="/cruiselines">Back to Cruise Lines</Link>
                </button>

            </React.Fragment>
        )
    }    
}

export default Titanic