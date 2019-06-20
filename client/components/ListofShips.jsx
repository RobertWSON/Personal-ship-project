import React from 'react'
import {Link} from 'react-router-dom'
import {getAllShips} from '../api/api'
//import { HashLink as Link } from 'react-router-hash-link'

class ListofShips extends React.Component {
    constructor(props){
      super(props)
  
      this.state = {
        //initialize shipList as an empty array
        shipsLists: []  
      }
      this.setUpCruiseLines = this.setUpCruiseLines.bind(this)
      this.handleClick = this.handleClick.bind(this)
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
          shipsLists: res
        })
      })
    }

    setUpShips() {
      console.log('getAllShips')
      getShips()  
      .then(res =>  {
        
        this.setState({
          shipsLists: res  
        })
      })
    }

    handleClick() {
      this.props.shipsLists(this.props.cruise_line)

      this.setState = ({

      })
    }

    findShipNames(cruise_line) {

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
        <h3 onClick = "this.handleClick">{cruise_line}</h3>

        {this.state.shipList.map (ship => {  
            
          return   <li className = "shipList" key = {ship.cruise_line}><Link to = {`/cruiselines/${cruise_line#ship_name}`}>{this.findShipName(cruise_line)}</Link></li>
          
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