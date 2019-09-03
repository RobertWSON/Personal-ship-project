import React from 'react';
import {getCruiseLines} from '../api/api'
//import {getListofShips} from '../api/api'
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
        When user clicks on a Cruise Line Heading, when a Ships List is open, the Ships List Collapses.*/
        // If we click on Cruise Line Heading, then a shipsList is Opened and we go to ListofShips Component, 
        // else if we click on Cruise Line Heading when shipsList is Open then just the Cruise Line Heading is shown. 

    handleClick(event)   {
        //This handleClick sorts out the changing of state, when Cruise Heading is clicked

        //this handleClick function should only handle the 'isOpen' value in the state.
        //any renders supposedly to be made on the 'render' method instead.
        this.setState(prevState =>  ({
            shipsList:  {
                //will reverse prevState of isOpen.
                isOpen: !prevState.shipsList.isOpen,
            }
        }))
    }

    // This renders at the start when the page loads and also when you close a list

    //We can handle the way you render the component that depends on the this.state.shipsList.isOpen this way.  
    render()    {
        //destructive declaration for isOpen from inside shipsList in the state.
        const {shipsList: {isOpen}} = this.state

        return  (

            <React.Fragment>

                {/* Map the Cruiseline Headings for each Cruise Line to display them on the page
                I am currently get all Cruise Lines for each Ship. I only want each Cruise Line appear once and
                I want to map ship because I need each ship displayed in a List for a Cruise Line when isOpen is True. */}
                {this.state.cruiseHeaders.map (ship =>  {
                
                return  (
                    <div>
                        {
                            //Line below has Conditonal Operator that displays ShipsList when isOpen is True. 
                            //isOpen && <ListofShips />
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