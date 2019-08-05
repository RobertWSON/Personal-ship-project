import React from 'react'
// import {Link} from 'react-router-dom'
import {getShips} from '../api/api'
import { HashLink as Link} from 'react-router-hash-link'
import CruiseListHeader from './CruiseListHeader' 

class ListofShips extends React.Component {
    constructor(props){
      super(props)
  
      this.state = {
        //initialize shipsList as an empty array
        shipsList: []
         
      }
      this.setUpShips = this.setUpShips.bind(this)
      //this.onHover = this.onHover.bind(this)
    }
   
    componentDidMount(){
      console.log('cdm')
      this.setUpShips()
    }

    setUpShips() {
      //console.log('getShips')
      console.log('getListofShips')
      //getShips()
      getListofShips()
      
      .then(res =>  {
        
        this.setState({
          shipsList: res  
        })
      })
    }

    //This is an onMouseOver event for when you run your mouse over ship in it's list
    onHover(event)  {

      getInitialState
      
      this.setState = {}
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

      <ol>
        {this.state.shipsList.map (ship => {  
            
          return   (
              // <li className = "shipsList" key = {ship.cruise_line} onMouseOver={this.onHover}><link smooth to = {`/cruiselines/${ship.cruise_line}#${ship.ship_name}`}>{this.findShipName(ship)}</link></li>
              <li className = "shipsList" key = {ship.cruise_line}><Link smooth to = {`/cruiselines/${ship.cruise_line}#${ship.ship_name}`}>{this.findShipName(ship)}</Link></li>
    
          )
          
          // I have to find a key that can display each ship name for each Headings Ships List.
          // The Link will be an Anchor Link to that specific ship, on it's Cruise Line Page.
          // Note: The Cruise Line Page, can have a Review for more than one ship and will be a Review Component.   

            // I would like to do a onMouse Hover function, so that when you run your mouse over ship in list a corresponding image appears

        })
        }
      </ol>

      </React.Fragment>
    )  
  }
  
}

export default ListofShips
