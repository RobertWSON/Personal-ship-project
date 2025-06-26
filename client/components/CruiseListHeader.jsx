import React from 'react';
import {getCruiseLines} from '../api/api'
import ListofShips from './ListofShips'


class CruiseListHeader extends React.Component {
    constructor(props)  {
        super(props)

        //setting intial state for Cruise Headings and initialize cruiseHeaders as an empty array
        this.state = {
            cruiseHeaders: []
        } 
        
        //binding methods for setting up Cruise Line Headings
        this.setUpCruiseLines = this.setUpCruiseLines.bind(this)
    }  

    componentDidMount() {
        console.log('cdm')
        this.setUpCruiseLines()
    }

    setUpCruiseLines()  {
        console.log('getcruiselines')
        getCruiseLines()
            .then(res   =>  {

                this.setState({
                    cruiseHeaders: res
                })
            })
    }
     
    render()    {

        return  (

            <React.Fragment>

                {/* There will be Headings for all the Cruise Lines. */}
                {/* Map the Cruiseline Headings for each Ship to display them on the page.
                I want to map ship, because I need each ship displayed in a List, when Cruise Line Heading is clicked.
                Each different Cruise line is showing, so that is excellent. 
                I just have to get it displaying in rows across the page now.*/}

            <div className = "cruiseContainer">

                {this.state.cruiseHeaders.map (ship =>  {
                
                    return (

                    <div key={ship.cruise_line}>

                        {/* ListofShips component needs cruise_line, because when user clicks on Cruise Line Heading button,
                            we need to fetch ships that belongs to that particular cruiseline. */}
                        {/* We need to render multiple ListofShips components, with one for each cruiseline */}
                        <ListofShips cruise_line={ship.cruise_line}></ListofShips>

                    </div>
                    )

                })}

            </div>      

            </React.Fragment> 
        )
    }
} 

export default CruiseListHeader