import React from 'react' 
import {getCruiseLines } from '../api/api';

class CruiseListHeader extends React.Component {
    constructor(props)  {
        super(props)

        //setting intial state for cruise heading and shipsList and initialize cruiseHeaders as an empty array
        this.state = {
            cruiseHeaders: [],
            shipsList: {isOpen:false}
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
    handleClick(event)   {

    // Maybe do a ternary operator here before open and close functions
    this.state.shipsList === isOpen ? OpenShipsList : CloseshipsList     

        OpenshipsList(event) {

            this.setState = {shipsList: {isOpen:true}}

            return 
                <div>
                    <ListofShips/>
                </div>
        }


        CloseshipsList(event)   {

            this.setState = {shipsList: {isOpen: false}}
            render()
        }

    }

    // This renders at the start when the page loads and also when you close a list

    render()    {
        return  (

            <React.Fragment>

                     <h3><button onClick = {this.handleClick}>{ship.cruise_line}</button></h3>    
              
            </React.Fragment>    
        )
    }
}

export default CruiseListHeader