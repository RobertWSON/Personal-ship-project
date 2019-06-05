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
      console.log('getallships')
      getAllShips()  
      .then(res =>  {
        
        this.setState({
          shipList: res  

        })
      })
    }
    
  render()  {

    return  (
    
      <React.Fragment>

        <h3>Testing Cruise Line</h3>

        <ol>
        {this.state.shipList.map (ship => {  
            
          return <li className = "shipList" key = {ship.ship_name}><link to = {'/ship/${ship.id}'}>{ship.ship_name}</link></li>
        })
        }
        </ol> 

      </React.Fragment>
    )  
  }
  
}

export default ListofShips