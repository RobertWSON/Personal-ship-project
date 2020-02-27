import React from 'react'
import {Link} from 'react-router-dom'

class Canberra extends React.Component   {
    constructor(props)  {
        super(props)
    }

    render()    {

        return  (
            <React.Fragment>
                <h2 className = "ship">Canberra</h2>

                <img src = {"/images/ss-canberra.jpg"}/>

                <div className = "ShipDetails">

                    <h3>Ship Specifications</h3>
                    <h4>Years in Service:               1961 - 1997</h4>
                    <h4>Passenger Capacity (Full):      2293</h4>
                    <h4>Crew Capacity:                  1100</h4>
                    <h4>Gross Tonnage:                  45270</h4>
                    <h4>Length:                         245 m (818 feet)</h4>
                    <h4>Beam:                           31.25 m (102 feet)</h4>
                    <h4>Draft (Maximum):                9.90 m (32 feet)</h4>
                    <h4>Height:                         55.50 m (182 feet)</h4>
                    <h4>Deadweight (Maximum):           9974 Tons</h4>
                    <h4>Light Ship Displacement:        32605 Tons</h4>
                    <h4>Loaded Displacement (Maximum):  42579 Tons</h4>
                </div>

                <h3>History or Background</h3>
                <br/>
                <p>The Canberra along with the Oriana are the first ships to start off the famous P & O cruise line.
                   The P & O Line started off as P & O Orient Line, but soon was changed to just P & O.
                   At first Canberra was just a passenger ship used to carry passenger from one country to another.
                   It wasn't until 1973, that she began year round cruising between UK and Australia.
                   In 1982 it took on a different operation and was used by the British government to carry troops to the Falkland Islands.
                   After this Canberra was used as a cruise ship again in Australia and the Pacific Islands until she retired in 1997.  
                </p>

                <br/>

                <p>The photograph below shows Canberra docking in Sydney, Australia in 1973.
                </p>

                <img src = {"/images/669382709-612x612.jpg"}/>

                <br/><br/>
                <p>Here are the deck plans of Canberra below, taken from sscanberra.com.
                </p>



                <br/><br/>

                <button>
                <Link to="/evolutionpart1">Back to Evolution (Part 1)</Link>
            </button>

            </React.Fragment>
        )
    }    
}

export default Canberra