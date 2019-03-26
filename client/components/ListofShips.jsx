import React from 'react'
import {Link} from 'react-router-dom'
import {getAllShips} from '../api/api'
//import { HashLink as Link } from 'react-router-hash-link'

class ListofShips extends React.Component {
    constructor(props){
      super(props)
  
      this.state = {
        shipList: []  
      }
      this.setUpShips = this.setUpShips.bind(this)
    }
    
    componentDidMount(){
      console.log('cdm')
      this.setUpShips()
    }
  
    setUpShips() {
      console.log('getallships')
      getAllShips()  
      .then(res =>{
        
        this.setState({
          shipList: res  

        })
      })
    }

    buildShipName(ship) {
      return ship.cruise_line + ":" + ship.ship_name 
      // ? (ship.cruise_line + ":" + ship.ship_name) : ship.ship_name  
    }
  
  render()  {
    return  (
    
     <React.Fragment>

        {this.state.shipList.map (ship => {  
            
          return  <li className="shipsList" key={ship.cruise_line + "-" + ship.ship_name}><Link to={`/ship/${ship.id}`} >{this.buildShipName(ship)}</Link></li>

          //This displays cruise line , : and then cruise ship name to right of this. 
          //The cruise lines are only displayed for Queen Mary 2 and Marella Celebration ships, but this hasn't worked for the other ships. 

        })}

       </React.Fragment>

    )
  } 
  
  }

export default ListofShips