import React from 'react'
import{HashLink as Link} from 'react-router-hash-link'

class Qe2 extends React.Component   {
    constructor(props)  {
        super(props)
    }

    render()    {

        return  (
            <React.Fragment>
                <h2 className = "ship">Queen Elizabeth 2</h2>

                <h3>Contents</h3>
                <Link className = "Contents" smooth to = {`/evolutionpart1/qe2/#${History}`}>
                    History
                </Link>
                <br/>

                <img src = {"/images/Evolution/Qe2/5148955_orig.jpg"}/>

                <div className = "ShipDetails">

                    <h3>Ship Specifications</h3>
                    <h4>Years in Service:               1969 - 2008</h4>
                    <h4>Passenger Capacity (Full):      1892</h4>
                    <h4>Crew Capacity:                  1040</h4>
                    <h4>Gross Tonnage:                  70327</h4>
                    <h4>Length:                         293.50 m (963 feet)</h4>
                    <h4>Beam:                           30.10 m (105 feet)</h4>
                    <h4>Draft (Maximum):                9.80 m (32 feet)</h4>
                    <h4>Height:                         62.10 m (203 feet 9 inches)</h4>
                    <h4>Deadweight (Maximum):           11639 Tonnes</h4>
                    <h4>Light Ship Displacement:        38099 Tonnes</h4>
                    <h4>Loaded Displacement (Maximum):  49738 Tonnes</h4>
                </div>

                <h3 id ={History}>History or Background</h3>
                <br/>
                <p>The Qe2 or more formally known as Queen Elizabeth 2, is the first of the Cunard Liners. 
                </p>

                <p>The real history lies though when she was launched in 1969 .
                   <br/> 
                   The photograph below shows her docked in Wellington in the 1980's.
                </p>

                {/* <img src = {"/images/Evolution/GalileoGalilei/Galileo06E.jpg"}/> */}

                <br/><br/>

                <p>Here are the deck plans of Qe2 below.
                </p>

                <img src = {"/images/Evolution/Qe2/2036194_orig.jpg"}/>

                <br/><br/>
                <br/>

                
                

                <button>
                <Link to="/evolutionpart1">Back to Evolution (Part 1)</Link>
            </button>

            </React.Fragment>
        )
    }    
}

export default Qe2