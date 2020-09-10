import React from 'react'
import {HashLink as Link} from 'react-router-hash-link'

class Fairstar extends React.Component   {
    constructor(props)  {
        super(props)
    }

    render()    {

        return  (
            <React.Fragment>
                <h2 className = "ship">Fairstar</h2>

                <h3>Contents</h3>
                <Link className = "Contents" smooth to = {`/evolutionpart1/fairstar/#${History}`}>
                    History
                </Link>
                <br/>

                <img src = {"/images/Evolution/Fairstar/Fairstar01.jpg"}/>

                <div className = "ShipDetails">
                    <h3>Oxfordshire</h3>
                    <div className = "Oxfordshire">
                        {/* Original Specs */}
                        <h3>Ship Specifications</h3>
                        <h4>Years in Service:               1957 - 1964</h4>
                        <h4>Passenger Capacity (Full):      1300</h4>
                        <h4>Crew Capacity:                  700</h4>
                        <h4>Gross Tonnage:                  21619</h4>
                        <h4>Length:                         185.76 m (609 feet 5.4 inches)</h4>
                        <h4>Beam:                           23.86 m (78 feet 3 inches)</h4>
                        <h4>Draft (Maximum):                8.41 m (27 feet 7 inches)</h4>
                        <h4>Height:                         47.85 m (167 feet)</h4>
                        <h4>Deadweight (Maximum):           8800 Tonnes</h4>
                        <h4>Light Ship Displacement:        14250 Tonnes</h4>
                        <h4>Loaded Displacement (Maximum):  23050 Tonnes</h4>
                    </div>
                    
                    <h3>Fairstar</h3>
                    <div className = "Fairstar">
                        {/* Changed Specs */}
                        <h3>Ship Specifications</h3>
                        <h4>Years in Service:               1964 - 1997</h4>
                        <h4>Passenger Capacity (Full):      1300</h4>
                        <h4>Crew Capacity:                  700</h4>
                        <h4>Gross Tonnage:                  23169</h4>
                        <h4>Length:                         185.76 m (609 feet 5.4 inches)</h4>
                        <h4>Beam:                           23.86 m (78 feet 3 inches)</h4>
                        <h4>Draft (Maximum):                8.41 m (27 feet 7 inches)</h4>
                        <h4>Height:                         47.85 m (167 feet)</h4>
                        <h4>Deadweight (Maximum):           8800 Tonnes</h4>
                        <h4>Light Ship Displacement:        14250 Tonnes</h4>
                        <h4>Loaded Displacement (Maximum):  23050 Tonnes</h4>
                    </div>
                </div>

                <h3 id = {History}>History or Background</h3>
                <br/>
                <p>The Fairstar in the mid to late 80's and 90's was the most popular cruise ship in Australia to depart from Sydney on Pacific Island Cruises.
                   <br/>She operated under P & O with the Sitmar Line throughout here whole cruise life from 1964 to 1997. 
                   <br/><br/>
                   <strong>Above</strong> she can be seen in the Pacific Islands during early 90's when she had a blue funnel.
                   <br/><br/>
                   <strong>Below</strong> she can be seen docked in Sydney, Australia with the blue funnel.
                </p>
                <br/>

                <img src = {"/images/Evolution/Fairstar/TSS-Fairstar-in-Sydney.jpg"}/>
                <br/>

                <p>Here are the deck plans of Fairstar below in a photographic format.
                </p>

                <img src = {"/images/Evolution/Fairstar/Fairstar-RG-Photopage-Ships-Layout.jpg"}/>
                <br/>

                <p>The real history lies though when she was launched in 1957 as a Troop ship called Oxfordshire.
                   She would operate as a troop ship between UK and Australia till 1964. 
                   The photograph below shows her as Oxfordshire docked in Southhampton.
                </p>

                <img src = {"/images/Evolution/Fairstar/troopship_21a.jpg"}/>
                <br/>

                <p>Here is a classic black and white photo of the Oxfordshore in Mallaca Straits in 1958.
                </p>
                <br/>

                <img src = {"/images/Evolution/Fairstar/Oxfordshire_Malacca_Str_4.jpg"}/>
                <br/>

                <div id = "plans">    
                    <h3>Fairstar or Oxfordshire Ship Plans</h3>  
                    <br/><br/>

                    <p></p>
                    <img src = {'/images/Evolution/Michelangelo/Michangelo_Side_View_Plan.jpeg'} />
                    <img src = {'/images/Evolution/Michelangelo/Michelangelo_Full_Ship_Plans.jpg'} />
                {/* <img src = {ship_plans_cont} />            */}
                </div>

                <button>
                <Link to="/evolutionpart2">Back to Evolution (Part 2)</Link>
            </button>

            </React.Fragment>
        )
    }    
}

export default Fairstar