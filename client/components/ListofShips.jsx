import React from 'react'
import {Link} from 'react-router-dom'
import {getAllShips} from '../api/api'

class ListofShips extends React.Component {
    constructor(props){
      super(props)
  
      this.state = {
        shipList:[]
      }
      this.setUpShips = this.setUpShips.bind(this)
    }
    
    componentDidMount(){
      this.setUpShips()
    }
  
    setUpShips(){
      getAllShips()
      .then(res =>{
        
        this.setState({
          shipList: res
        })
      })
    }
  
  render(){
    return(
     <React.Fragment>
        {this.state.shipList.map(ship => {
          return 
            <li key={ship.ship_name}><Link to={`/room/${ship.id}`} >{ship.ship_name}</Link></li>
          
        })}
  
        
        
      </React.Fragment>
    )
  } 
  }

export default ListofShips