import React from 'react'
import {HashLink as Link} from 'react-router-hash-link'

class Michelangelo extends React.Component   {
    constructor(props)  {
        super(props)
    }

    render()    {

        return  (
            <React.Fragment>
                <h2 className = "ship">Michelangelo</h2>

                <h3>Contents</h3>
                <Link className = "Contents" smooth to = {`/evolutionpart1/michelangelo/#history`}>
                {/* <Link className = "Contents" smooth to = {`/evolutionpart1/michelangelo/#${History}`}> */}
                    History
                </Link>
                <br/>

                <img src = {"/images/Evolution/Michelangelo/michelangelo_1965_1.jpg"}/>

                <div className = "ShipDetails">

                    <h3>Ship Specifications</h3>
                    <h4>Years in Service:               1965 - 1991</h4>
                    <h4>Passenger Capacity (Full):      1775</h4>
                    <h4>Crew Capacity:                  720</h4>
                    <h4>Gross Tonnage:                  45911</h4>
                    <h4>Length:                         276.20 m (906 feet 2 inches)</h4>
                    <h4>Beam:                           30.10 m (89 feet 9 inches)</h4>
                    <h4>Draft (Maximum):                10.40 m (34 feet 1 inches)</h4>
                    <h4>Height:                         52.60 m (167 feet)</h4>
                    <h4>Deadweight (Maximum):           9192 Tonnes</h4>
                    <h4>Light Ship Displacement:        35130 Tonnes</h4>
                    <h4>Loaded Displacement (Maximum):  44322 Tonnes</h4>
                </div>

                <h3 id = "history">History or Background</h3>
                {/* <h3 id = {History}>History or Background</h3> */}
                <br/>
                <p>The Michelangelo was an Italian built cruise ship that operated between Europe (usually Genoa and Canary Islands) and New York, USA.
                   <br/>
                   Quite simply enough she operated for the Italian Line throughout her whole career.   
                <br/><br/>

                <strong>Above</strong> she can be seen off the coast of the Canary Islands.
                <br/><br/> 
                      
                <strong>Below</strong> she can be seen docked in Genoa, Italy in 1967. 
                </p>

                <img src = {"/images/Evolution/Michelangelo/2195234.jpg"}/>

                <p>
                   Here she can be seen approaching Santa Cruz de Tenerife, Canary Islands in the early part of her career on 17th October 1966. 
                </p>
                <br/>

                <img src = {"/images/Evolution/Michelangelo/2773064.jpg"}/>
                <br/>

                <p>Sadly though on 5h July 1975 she was taken out of service and laid up La Spezia, Italy next to her sister ship Raffaelo.
                   Here is the sad sight of her laid up next to Raffaelo in La Spezia. 
                </p>

                <img src = {"/images/Evolution/Michelangelo/2436310.jpg"}/>
                <br/><br/>

                <p>Here are the deck plans of michelangelo below.
                </p>

                {/* <img src = {"/images/Evolution/Michelangelo/"}/> */}

                <br/><br/>
                <br/>

                <button>
                <Link to="/evolutionpart1">Back to Evolution (Part 1)</Link>
            </button>

            </React.Fragment>
        )
    }    
}

export default Michelangelo