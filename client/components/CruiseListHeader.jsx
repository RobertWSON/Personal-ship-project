import React from 'react' 
import {getCruiseLines } from '../api/api';

class CruiseListHeader extends React.Component {
    constructor(props)  {
        super(props)

        this.state = {
            cruiseHeaders: []
        } 
        //this.state.shipsList = {isOpen: false}
        
        //binding methods for Cruise Line Headers and Handle Click Function
        this.setUpCruiseLines = this.setUpCruiseLines.bind(this),
        this.handleClick = this.handleClick.bind(this)
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


    //handleClick(event)    {
        /* There will be Headings for all the Cruise Lines.
        When a Cruise Line Heading is clicked, it goes to ListofShips Component and the Ships List opens up for that Heading.
        When user clicks on a Cruise Line Heading, when a Ships List is open, the Ships List Collapses.*/

    //     this.setState = {
    //         cruiseHeaders: 
    //     }

    //     return  (   
    //         <div>    
    //             <ListofShips/>
    //         </div>
    //         )


    // }

    render()    {
        return  (

            <React.Fragment>

                     <h3><button onClick = {this.handleClick}>{ship.cruise_line}</button></h3>    
              
            </React.Fragment>    
        )
    }
}

export default CruiseListHeader