import React from 'react'
import ShipShots from './ShipShots'
import CruiseListHeader from './CruiseListHeader' 

class CruiseLines extends React.Component {
    constructor(props)  {
        super(props)
    }  

    render()    {
        return  (
            // <div>
            <React.Fragment>    
                <div className = "header">
                    <h1>Cruise Lines</h1>    
                </div>
            
                <div>
                    <ShipShots/>
                    <CruiseListHeader/>
                </div>
            </React.Fragment>    
            // </div>        
        )
    }
}

export default CruiseLines