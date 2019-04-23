import React from 'react'
import {Link} from 'react-router-dom'
import {getCruiseLine, getCruiselines, getShips} from '../api/api'

class Review extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      ship:{}
    }
    this.setUpCruiseLine = this.setUpCruiseLine.bind(this)


  }
  
  componentDidMount() {
    console.log('cdm')
    this.setUpCruiseLine()
  }

  setUpCruiseLine() {
    getCruiseline(this.props.match.params.id.ship_names/cruise_line)
    .then(res =>  {
      this.setState({
        cruiseline: res
      })
    })
  }

  setUpShips()  {
    getShips(this.props.match.params.id.ship_names)
    .then(res =>  {
      this.setState({
        ships: res
      })
    })
  }  

render(){
  return(
    <React.Fragment>
      {console.log(this.state.ship)}
        <h2>{this.state.cruise_line}</h2>
        <h2>{this.state.cruise_line.ship_name}</h2>
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