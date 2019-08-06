import React from 'react'
import {Link} from 'react-router-dom'
import {getCruiseLine, getShips} from '../api/api' 
// import { HashLink as Link } from 'react-router-hash-link'

class Review extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      cruiseline:{},
      ships:{}
    }
    this.setUpCruiseLine = this.setUpCruiseLine.bind(this),
    this.setUpShips = this.setUpShips.bind(this)

  }
  
  componentDidMount() {
    console.log('cdm')
    this.setUpCruiseLine()
    this.setUpShips()
  }

  setUpCruiseLine() {
    getCruiseLine(this.props.match.params.id.ship_names/cruise_line)
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

  {this.state.cruiseline.map (cruiseline =>{ 

  return  (
    <React.Fragment>
    {/* <React.Fragment key = {cruise_line}>  */}
    {/* <React.Fragment key = {ship.id}> */}
      {console.log(this.state.ship)}
        <h1>{this.state.ship.cruise_line}</h1>
        <h2 id = "{ship_name}">{this.state.ship.ship_name}</h2>
        
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
        
        <button><Link to = '/cruiselines'>Back to Cruise Lines</Link></button>       
          
    </React.Fragment>
  )

})//end brackets for ships  
} //end bracket for this.state.cruiseline.map 

} //end bracket for render  
} //end bracket for Review Component

export default Review
