import React from 'react'
import {Link} from 'react-router-dom'

class RoyalVikingSky extends React.Component   {
    constructor(props)  {
        super(props)
    }

    render()    {

        return  (
            <React.Fragment>
                <h2 className = "ship">Royal Viking Sky</h2>

                <img src={"/images/1757063.jpg"}/>

                <div className = "ShipDetails">
                    <h3>Royal Viking Sky Original</h3>
                    <div className = "RoyalVikigSky">
                        {/* Original Specs */}
                        <h3>Ship Specifications</h3>
                        <h4>Years in Service:               1973 to 1982</h4>
                        <h4>Passenger Capacity (Full):      536</h4>
                        <h4>Crew Capacity:                  324</h4>
                        <h4>Gross Tonnage:                  21891</h4>
                        <h4>Length:                         177.70 m (583 feet)</h4>
                        <h4>Beam:                           25.19 m (82 feet 8 inches)</h4>
                        <h4>Draft (Maximum):                7.00 m (23 feet)</h4>
                        <h4>Height:                         46.12 m ( feet)</h4>
                        <h4>Deadweight (Maximum):           3595 Tonnes</h4>
                        <h4>Light Ship Displacement:        13626 Tonnes</h4>
                        <h4>Loaded Displacement (Maximum):  17221 Tonnes</h4>
                    </div>

                    <h3>Royal Viking Sky after Lengthening</h3>
                    <div className = "Boudicca">
                        {/* Changed Specs */}
                        <h3>Ship Specifications</h3>
                        <h4>Ship Name Changes:              Royal Viking Sky (1982 to 1991)
                                                       <br/>Sunward (1991 to 1992)
                                                       <br/>Birka Queen (1992)
                                                       <br/>Sunward (1992 to 1993)
                                                       <br/>Golden Princess (1993 to 1997)
                                                       <br/>SuperStar Capricorn (1997 to 1998)
                                                       <br/>Hyundai Keumgang (1998 to 2001)
                                                       <br/>SuperStar Capricorn (2001 to 2004)
                                                       <br/>Grand Latino (2004 to 2005)
                                                       <br/>Boudicca (2005 to present)
                        </h4>

                        <h4>Years in Service:               1982 to present</h4>
                        <h4>Passenger Capacity (Full):      536</h4>
                        <h4>Crew Capacity:                  324</h4>
                        <h4>Gross Tonnage:                  21891</h4>
                        <h4>Length:                         177.70 m (583 feet)</h4>
                        <h4>Beam:                           25.19 m (82 feet 8 inches)</h4>
                        <h4>Draft (Maximum):                7.00 m (23 feet)</h4>
                        <h4>Height:                         46.12 m ( feet)</h4>
                        <h4>Deadweight (Maximum):           3595 Tonnes</h4>
                        <h4>Light Ship Displacement:        13626 Tonnes</h4>
                        <h4>Loaded Displacement (Maximum):  17221 Tonnes</h4>
                    </div>

                </div>

                <h3>History or Background</h3>
                <br/>
                <p>The Royal Viking Sky operated with Royal Viking Cruise Line from 1973 to 1991.
                   She was the second ship in history to be lengthened.  
                </p>

                <p>Here are the deck plans of Royal Viking Sky below.
                </p>

                <br/>

                <p>
                </p>

                {/* <img src = {""}/> */}

                <br/><br/>

                <p>Here she is in 2014 operating under her most recent name Boudicca in Ullapool, Scotland</p>

                <img src = {"/images/2017-05-14-Ullapool-Cruise-Ship-Boudicca-8373_2000x.jpg"}/>

                <br/><br/>
                

                <button>
                <Link to="/evolutionpart1">Back to Evolution (Part 1)</Link>
            </button>

            </React.Fragment>
        )
    }    
}

export default RoyalVikingSky