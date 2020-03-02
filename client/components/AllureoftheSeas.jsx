import React from 'react'
import {HashLink as Link} from 'react-router-hash-link'

class AllureoftheSeas extends React.Component   {
    constructor(props)  {
        super(props)
    }

    render()    {

        return  (
            <React.Fragment>
                <h2 className = "ship">Allure of the Seas</h2>

                <h3>Contents</h3>
                <Link className = "Contents" smooth to = {`/evolutionpart1/allureoftheseas/#${History}`}>
                    History
                </Link>
                <br/>

                <img src={"/images/UFRPU.jpg"}/>

                <div className = "ShipDetails">

                    <h3>Ship Specifications</h3>
                    <h4>Years in Service:               2010 to Present</h4>
                    <h4>Passenger Capacity (Full):      6780</h4>
                    <h4>Crew Capacity:                  2200</h4>
                    <h4>Gross Tonnage:                  225282</h4>
                    <h4>Length:                         362.0 m (1187 feet)</h4>
                    <h4>Beam:                           47.00 m (154 feet 2.4 inches)</h4>
                    <h4>Draft (Maximum):                9.32 m (30 feet 7 inches)</h4>
                    <h4>Height:                         72 m or 83.32 m (236 feet 2.64 inches or 273 feet 4.3 inches)</h4>
                    <h4>Deadweight (Maximum):           19750 Tonnes</h4>
                    <h4>Light Ship Displacement:        100000 Tonnes</h4>
                    <h4>Loaded Displacement (Maximum):  80250 Tonnes</h4>
                </div>

                <h3 id = {History}>History or Background</h3>
                <br/>
                <p>The Allure of the Seas has operated with Royal Caribbean Cruise Line for it's entire cruise life so far.
                   Allure of the Seas is classified as an oasis class cruise ship and is the first of it's type along with Oasis of the Seas.
                   Oasis class ships are designed to carry more than 5400 people and were the largest cruise ships when they 
                   came in to service at the end of the 2000's.     
                </p>

                <p>In total, Allure of the Seas has 18 decks, but 16 decks are accesible to passengers.
                   Here are the deck plans of Allure of the Seas below.
                </p>

                <br/>

                <p>  
                </p>

                <img src = {"/images/Royal Caribbean/Allure-Of-The-Seas-Family-Featured-2-800x450.jpg"}/>

                <br/><br/>

                {/* <img src = {"}/> */}

                <br/><br/>
                

                <button>
                <Link to="/evolutionpart1">Back to Evolution (Part 1)</Link>
            </button>

            </React.Fragment>
        )
    }    
}

export default AllureoftheSeas