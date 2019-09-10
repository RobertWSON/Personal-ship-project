import React from 'react';
import {getCruiseLines} from '../api/api'
//import {getShipsList} from '../api/api'
//import ListofShips from './ListofShips'
//import {CruiseListHeader} from './CruiseListHeader'


class CruiseListHeader extends React.Component {
    constructor(props)  {
        super(props)

        //setting intial state for Cruise Heading and shipsList and initialize cruiseHeaders as an empty array
        this.state = {
            cruiseHeaders: [],
            shipsList: {isOpen: false}
        } 
        
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
    
    /* There will be Headings for all the Cruise Lines.
        When a Cruise Line Heading is clicked, it goes to ListofShips Component and the Ships List opens up for that Heading.
        When a Ships List is open and user clicks on a Cruise Line Heading, the Ships List Collapses
        and just a Cruise Line Heading is shown.*/
      
    handleClick(event)   {
        //This handleClick sorts out the changing of state between Shipslist being open or not, when a Cruise Line Heading is clicked.
        //HandleClick function should only handle 'isOpen' value in the state
        //and any renders are to be made on the 'render' method instead.

        this.setState(prevState =>  ({
            shipsList:  {
                //will reverse prevState of isOpen.
                isOpen: !prevState.shipsList.isOpen,
            }
        }))
    }

     
    render()    {
        //This renders at the start when page loads and also when you close a Ships List
        //We can handle the way you render the component that depends on the this.state.shipsList.isOpen in the code below. 
        //This is a destructive declaration for isOpen from inside shipsList in the state that does this.
        const {shipsList: {isOpen}} = this.state

        return  (

            <React.Fragment>

                {/* Map the Cruiseline Headings for each Ship to display them on the page
                I want to map ship because I need each ship displayed in a List for a Cruise Line when isOpen is True.
                Each different Cruise line is showing, so that is good, but not opening Ships List.*/}
                {this.state.cruiseHeaders.map (ship =>  {
                
                return  (
                    <div>
                        {
                            //Line below is a Conditonal Operator that displays ShipsList when isOpen is True
                            isOpen == true && <ListofShips/>
                        }
                        
                        <h3 key = {ship.cruise_line}><button onClick = {this.handleClick}>{ship.cruise_line}</button></h3>
                    </div>

                    )

                    })
                }  

            </React.Fragment> 
        )
    }
} 

export default CruiseListHeader