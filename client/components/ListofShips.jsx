import React from 'react'
import {Link} from 'react-router-dom'
import {getShips, getCruiseLine, getCruiselines} from '../api/api'
//import { HashLink as Link } from 'react-router-hash-link'

class ListofShips extends React.Component {
    constructor(props){
      super(props)
  
      this.state = {
        shipList: []  
      }

      this.setUpCruiseLines = this.setUpCruiseLines.bind(this)
      this.handleClick = this.handleClick.bind(this)
      this.setUpShips = this.setUpShips.bind(this)

    }
    
    componentDidMount(){
      console.log('cdm')
      this.setUpCruiseLines
      this.setUpShips()
    }
  
    setUpCruiseLines () {
      console.log('getcruiselines')
      getCruiselines()
      .then(res =>  {

        this,setState({
          shipLists: res
          
        })
      })
    }

    setUpShips() {
      console.log('getships')
      getShips()  
      .then(res =>{
        
        this.setState({
          shipLists: res  

        })
      })
    }

    handleClick()  {
      this.props.shipList(this.props.cruise_line)
    }

    findShipNames(cruise_line) {
    //This function helps display the Cruise Ships based on the Cruise Line
      
    // Example Code
      // For Cruiseline === "Carnival"

      //Ships.Displayed = 

      //You have to group the cruise lines by there corresponding ships, somehow

      return ship.ship_names 

      //this returns the Ship Names based on there Cruise Lines  
      
    }
    
  render()  {
    return  (
    
     <React.Fragment>

        {this.state.shipLists.map (ship => {  
            
            return  <li className="shipsLists" key={ship.cruise_line} handleClick="this.handleClick"><Link to={`/cruiselines/cruise_line#ship_name`} >{this.findShipNames(cruise_line)}</Link></li>

          //This displays cruise line , : and then cruise ship name to right of this. 
          //The cruise lines are only displayed for Queen Mary 2 and Marella Celebration ships, but this hasn't worked for the other ships. 

        })}

       </React.Fragment>

    )
  } 
  
  }

export default ListofShips