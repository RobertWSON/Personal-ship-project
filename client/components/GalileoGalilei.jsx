import React from 'react'
import {Link} from 'react-router-dom'

class GalileoGalilei extends React.Component   {
    constructor(props)  {
        super(props)
    }

    render()    {

        return  (
            <React.Fragment>
                <h2 className = "ship">Galileo Galilei</h2>

                <img src = {"/images/Evolution/Galileo Galilei/Galileo03.jpg"}/>

                <div className = "ShipDetails">

                    <h3>Ship Specifications</h3>
                    <h4>Years in Service:               1963 - 1999</h4>
                    <h4>Passenger Capacity (Full):      1750</h4>
                    <h4>Crew Capacity:                  958</h4>
                    <h4>Gross Tonnage:                  27888</h4>
                    <h4>Length:                         213.65 m (700 feet 11 inches)</h4>
                    <h4>Beam:                           28.71 m (94 feet 2 inches)</h4>
                    <h4>Draft (Maximum):                8.60 m (28 feet 3 inches)</h4>
                    <h4>Height:                         50.90 m (167 feet)</h4>
                    <h4>Deadweight (Maximum):           99486 Tonnes</h4>
                    <h4>Light Ship Displacement:        19030 Tonnes</h4>
                    <h4>Loaded Displacement (Maximum):  28516 Tonnes</h4>
                </div>

                <h3>History or Background</h3>
                <br/>
                <p>The Galileo Galilei is an Italian built ship, exclusively meant for cruising all the way through it's career. 

                </p>

                <br/>

                <p>The photograph below shows Galileo Galilei docked in Wellington, New Zealand in 1970's.
                </p>

                <img src = {"/images/Evolution/Galileo Galilei/Galileo06E.jpg"}/>

                <br/><br/>
                <p>Here are the deck plans of Galileo Galilei below.
                </p>

                <img src = {"/images/Evolution/Galileo Galilei/GalileoGalileiPoster.png"}/>
                {/* <img src = {""} */}

                <br/><br/>

                <button>
                <Link to="/evolutionpart1">Back to Evolution (Part 1)</Link>
            </button>

            </React.Fragment>
        )
    }    
}

export default GalileoGalilei