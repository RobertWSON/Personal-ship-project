import React from 'react'
import {getShipsList} from '../api/api'
import {HashLink as Link} from 'react-router-hash-link'
import {ListofShips} from './ListofShips'


class ListofShips extends React.Component {
    constructor(props){
      super(props)
  
      this.state = {
        //initialize shipsList as an empty array
        shipsList: []
         
      }
      //binding method for Ships in their List for their Cruise Line
      this.setUpShips = this.setUpShips.bind(this)
    }
   
    componentDidMount(){
      console.log('cdm')
      this.setUpShips()
    }

    setUpShips() {
      console.log('getShipsList')
      getShipsList()
      
      .then(res =>  {
        
        this.setState({
          shipsList: res  
        })
      })
    }


    findShipNames(ship) {

      return ship.ship_name

      //This function helps display relevant Cruise Ships when user clicks on their Cruise Line
      //In my backend I have let the database find the relevant Cruise Ships from their Cruise Line, so we just return it here
    }
    
  render()  {

    return  (
    
      <React.Fragment>

      <ol>
        {this.state.shipsList.map (ship => {  
            
          return   (
              <li className = "shipsList" key = {ship.cruise_line}><Link smooth to = {`/cruiselines/${ship.cruise_line}#${ship.ship_name}`}>{this.findShipName(ship)}</Link></li>
    
          )
          //This List has a className, because I want to style fonts using CSS for CruiseShip names 
          //The key is used to get correct ship names for the Ships List, when a Cruise Line Heading is clicked.
          //The Link will be an Anchor Link to a specific ship, on it's Cruise Line Page. 
          //The Link will have a smooth feature, so it scrolls to the correct ship on it's Cruise Line Page. 
          // Note: The Cruise Line Page, can have a Review for more than one ship and will be a Review Component.   
        })
        }
      </ol>

      </React.Fragment>
    )  
  }
  
}

export default ListofShips
