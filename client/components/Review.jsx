import React from 'react'
import {Link} from 'react-router-dom'
import {getShip} from '../api/api'

class Review extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      ship:{}
    }
    this.setUpShip = this.setUpShip.bind(this)

  }
  
  componentDidMount() {
    console.log('cdm')
    this.setUpShip()
  }

  setUpShip()  {
    getShips(this.props.match.params.id)
    .then(res =>  {
      this.setState({
        ship: res
      })
    })
  }  

render(){
  return(
    <React.Fragment key = {ship.id}>
      {console.log(this.state.ship)}
        <h2>{this.state.cruise_line}</h2>
        <h2>{this.state.ship.ship_name}</h2>
        <p>(this.state.ship.review</p>
        <h5>Passenger Capacity (Full): {this.state.ship.passenger_full_capacity}</h5>    
        <h5>Passenger Capacity (Double Occupancy): {this.state.ship.double_occupancy_passenger_capacity}</h5> 
        <button><Link to = '/cruiselines'>Back to Cruise Lines</Link></button>

        <img src={this.state.ship.img} /> 
          
    </React.Fragment>
  )
}  
}

export default Review