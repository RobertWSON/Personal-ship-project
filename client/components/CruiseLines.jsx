import React from 'react'
//import {Link} from 'react-router-dom'
import Slider from "react-slick";
//import CruiseLinesHeader from './CruiseLinesHeader'
import ShipShots from './ShipShots'
import ListofShips from './ListofShips' 

class CruiseLines extends React.Component {
    constructor(props)  {
        super(props)
    }  

    render()    {
        return  (
            <div>
                <div>
                    <h1>Cruise Lines</h1>    
                </div>
            
                <div>
                    <ShipShots/><br></br>
                    <ListofShips/>
                </div>    
            </div>    
        )
    }
}

export default CruiseLines