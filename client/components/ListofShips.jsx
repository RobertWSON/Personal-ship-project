import React from 'react'
import {Link} from 'react-router-dom'
import {getAllShips} from '../api/api'
//import { HashLink as Link } from 'react-router-hash-link'

class ListofShips extends React.Component {
    constructor(props){
      super(props)
  
      this.state = {
        //initialize shipList as an empty array
        shipList: []  
      }
      this.setUpShips = this.setUpShips.bind(this)
    }
    
    componentDidMount(){
      console.log('cdm')
      this.setUpShips()
    }

    setUpShips() {
      console.log('getAllShips')
      getAllShips()  
      .then(res =>  {
        
        this.setState({
          shipList: res  

        })
      })
    }

    findShipName(ship) {
      return ship.cruise_line ? (ship.cruise_line + ":" + " " + ship.ship_name) 
      : ship.ship_name    
    }
    
  render()  {

    return  (
    
      <React.Fragment>

        <h3>Testing Cruise Line - (Crystal Cruises)</h3>

        <ol>
        {this.state.shipList.map (ship => {  
            
          return <li className = "shipList" key = {ship.cruise_line + "-" + ship.ship_name}><Link to = {`/ship/${ship.id}`}>{this.findShipName(ship)}</Link></li>
        })
        }
        </ol>

      </React.Fragment>
    )  
  }
  
}

export default ListofShips