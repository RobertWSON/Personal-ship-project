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
    getShip(this.props.match.params.id)
    .then(res =>  {
      this.setState({
        ship: res
      })
    })
  }  

render(){
  return(
    <React.Fragment>
    {/* <React.Fragment key = {ship.id}> */}
      {console.log(this.state.ship)}
        <h1>{this.state.ship.cruise_line}</h1>
        <h2>{this.state.ship.ship_name}</h2>
        
        <img src={this.state.ship.img} />

        <div className ="ShipDetails">
          <h4>Year: {this.state.ship.Year}</h4>  
          <h4>Passenger Capacity (Full): {this.state.ship.Passenger_Full_Capacity}</h4>    
          <h4>Passenger Capacity (Double Occupancy): {this.state.ship.Double_Occupancy_Passenger_Capacity}</h4>
          <h4>Gross Tonnnage: {this.state.ship.Gross_Tonnage}</h4>
          <h4>Length: {this.state.ship.Length}</h4>
          <h4>Beam: {this.state.ship.Beam}</h4>
          <h4>Draft: {this.state.ship.Draft}</h4>
          <h4>Height: {this.state.ship.Height}</h4>
          <h4>Deadweight: {this.state.ship.Deadweight}</h4>
          <h4>Loaded Displacement: {this.state.ship.Loaded_Displacement}</h4>
        </div>

        <h3>Reviews:</h3><br/>
        <p>{this.state.ship.Review}</p>
        
        <button classname="button"><Link to = '/cruiselines'>Back to Cruise Lines</Link></button>

    </React.Fragment>
  )
}  
}

export default Review