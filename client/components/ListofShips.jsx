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

        {/* <h3>Testing Cruise Line - (Princess)</h3> */}

        {this.state.shipList.map (ship => {  
            
          return  <h3 onClick = "this.handleClick">{cruise_line}</h3> 
                  <li className = "shipList" key = {ship.cruise_line}><Link to = {`/cruiselines/${cruise_line#ship_name}`}>{this.findShipName(cruise_line)}</Link></li>
        })
        }

      </React.Fragment>
    )  
  }
  
}

export default ListofShips