import React from 'react'
import ShipShots from './ShipShots'
import CruiseListHeader from './CruiseListHeader' 

class CruiseLines extends React.Component {
    constructor(props)  {
        super(props)
    }  

    render()    {
        return  (
            <div className = "container">
            {/* <div className = "Container"> */}
                <div className = "header">
                    <h1>Cruise Lines</h1>    
                </div>
            
                <div>
                    <ShipShots/><br></br>
                    <CruiseListHeader/>
                </div>    
            </div>    
        )
    }
}

export default CruiseLines