import React from 'react'
// import {Link} from 'react-router-dom'
import {getShips} from '../api/api'
import {getCruiseLines} from '../api/api' 
import { HashLink as Link} from 'react-router-hash-link'
import CruiseListHeader from './CruiseListHeader' 

class ListofShips extends React.Component {
    constructor(props){
      super(props)
  
      this.state = {
        //initialize Cruise Line Header and shipList as an empty array
        CruiseLineHeader: [],
        shipsList: []
         
      }
      this.setUpCruiseLines = this.setUpCruiseLines.bind(this)
      this.setUpShips = this.setUpShips.bind(this)
    }
   
    componentDidMount(){
      console.log('cdm')
      this.setUpCruiseLines()
      this.setUpShips()
    }

    setUpCruiseLines()  {
      console.log('getcruiselines')
      getCruiseLines()
      .then(res =>  {

        this.setState({
          CruiseLineHeader: res
        })
      })
    }

    setUpShips() {
      console.log('getAllShips')
      getShips()  
      .then(res =>  {
        
        this.setState({
          shipsLists: {isOpen:false}  
        })
      })
    }

    findShipNames(ship) {

      ship.cruise_line.id = ship.ship_name.id

      return ship.ship_name

      // This function helps display the Cruise Ships based on the Cruise Line
      
      // Example Code
      //   For Cruise_line === "Carnival"

      //   Ships Displayed =

      //   You have to group the Cruise Lines by their corresponding Ships, somehow

      //   return ship.ship_names

      //   this returns the Ship Names based on there Cruise Lines                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 

    }
    
  render()  {

    return  (
    
      <React.Fragment>

        {/* There will be Headings for all the Cruise Lines.
        When a Cruise Line Heading is clicked, the Ships List opens up for that Heading.
        When user clicks on a Cruise Line Heading, when a Ships List is open, the Ships List Collapses.  
           */}
        <CruiseListHeader/>

        {this.state.shipsList.map (ship => {  
            
          return   (
              <li className = "shipList" key = {ship.cruise_line}><Link smooth to = {`/cruiselines/${ship.cruise_line}#${ship.ship_name}`}>{this.findShipName(ship)}</Link></li>
    
          )
          
          // I have to find a key that can display each ship name for each Headings Ships List.
          // The Link will be an Anchor Link to that specific ship, on it's Cruise Line Page.
          // Note: The Cruise Line Page, can have a Review for more than one ship and will be a Review Component.   


        })
        }

      </React.Fragment>
    )  
  }
  
}

export default ListofShips
