import React from 'react'
import {Link} from 'react-router-dom'

class France extends React.Component   {
    constructor(props)  {
        super(props)
    }

    render()    {

        return  (
            <React.Fragment>
                <h2 className = "ship">France</h2>

                <img src = {"/images/Evolution/France/france_1961_1.jpg"}/>

                <div className = "ShipDetails">
                    <h3>France</h3>
                    <div className = "France">
                        {/* Original Specs */}
                        <h3>Ship Specifications</h3>
                        <h4>Years in Service:               1961 - 1974 (Laid up 1974 - 1979)</h4>
                        <h4>Passenger Capacity (Full):      2030</h4>
                        <h4>Crew Capacity:                  1100</h4>
                        <h4>Gross Tonnage:                  66348</h4>
                        <h4>Length:                         315.51 m (1035 feet)</h4>
                        <h4>Beam:                           33.70 m (110 feet 7 inches)</h4>
                        <h4>Draft (Maximum):                10.49 m (34 feet 5 inches)</h4>
                        <h4>Height:                         67.66 m (222 feet)</h4>
                        <h4>Deadweight (Maximum):           13960 Tonnes</h4>
                        <h4>Light Ship Displacement:        43647 Tonnes</h4>
                        <h4>Loaded Displacement (Maximum):  57607 Tonnes</h4>
                    </div>

                    <h3>Norway</h3>
                    <div className = "Norway">
                        {/* Changed Specs */}
                        <h3>Ship Specifications</h3>
                        <h4>Years in Service:               1979 - 2008</h4>
                        <h4>Passenger Capacity (Full):      2030</h4>
                        <h4>Crew Capacity:                  1100</h4>
                        <h4>Gross Tonnage:                  70060 (from 1979 to 1984) and 76049 (after)</h4>
                        <h4>Length:                         315.51 m (1035 feet)</h4>
                        <h4>Beam:                           33.70 m (110 feet 7 inches)</h4>
                        <h4>Draft (Maximum):                10.49 m (34 feet 5 inches)</h4>
                        <h4>Height:                         67.66 m (222 feet)</h4>
                        <h4>Deadweight (Maximum):           13960 Tonnes</h4>
                        <h4>Light Ship Displacement:        43647 Tonnes</h4>
                        <h4>Loaded Displacement (Maximum):  57607 Tonnes</h4>
                    </div>

                </div>

                <h3>History or Background</h3>
                <br/>
                <p>The SS France was a steam ship, hence the intials SS, that originally operated for the French Line.
                   <br/>As can be seen in the photo above she originally had a black and white hull (this is the main structure of the ship).
                   <br/>
                   <br/>The <strong>above</strong> photo was taken when she was entering her home port of Le Havre, France for the very first time on 23rd of November 1961.
                </p>

                <p>Her hull colour had changed to <strong>green</strong> during the mid to late 1960's and this rare photo below,
                   shows her departing from Southhampton with her green hull.
                </p>

                {/* <img src = {""}/> */}

                <p>You can see here leaving Le Havre her home Port in France, probably during the early 1970's 
                </p>
                <br/>

                <img src = {"/images/Evolution/France/france_1961_2.jpg"}/>

                <p>

                </p>


                <p>The photograph below shows France laid up in .
                   It was out of service between October 1974 to 1980. 
                </p>

                {/* <img src = {"/images/Evolution/France/"}/> */}

                <br/><br/>
                <p>Here are the deck plans of France below.
                </p>

                {/* <img src = {"/images/Evolution/France/"}/> */}

                <br/><br/>

                <button>
                <Link to="/evolutionpart1">Back to Evolution (Part 1)</Link>
            </button>

            </React.Fragment>
        )
    }    
}

export default France