import React from 'react'
import {Link} from 'react-router-dom'
import {getCruiseLine, getShips, getShip} from '../api/api' 
// import { HashLink as Link } from 'react-router-hash-link'

class Review extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      cruiseline:{},
      ships:{},
      ship:{}
    }
    this.setUpCruiseLine = this.setUpCruiseLine.bind(this),
    this.setUpShips = this.setUpShips.bind(this),
    this.setUpShip = this.setUpShips.bind(this)
  }
  
  componentDidMount() {
    console.log('cdm')
    this.setUpCruiseLine()
    this.setUpShips()
    this.setUpShip()
  }

  setUpCruiseLine() {
    getCruiseLine()
    .then(res =>  {
      this.setState({
        cruiseline: res
      })
    })
  }

  setUpShips()  {
    getShips()
    .then(res =>  {
      this.setState({
        ships: res
      })
    })
  }  

  setUpShip()  {
    getShip()
    .then(res =>  {
      this.setState({
        ship: res
      })
    })
  }

render(){

  {this.state.cruiseline.map (ship =>{ 

  return  (
    <React.Fragment>
    {/* <React.Fragment key = {cruise_line}>  */}
    {/* <React.Fragment key = {ship.id}> */}
      

        <h1 key = {ship.cruise_line}>{this.state.ship.cruise_line}</h1>
        {console.log(this.state.ship)}
        
        <h2 key = {ship.ship_name} id = "{ship_name}">{this.state.ship.ship_name}</h2>
        {console.log(this.state.ship)}

        <img src={this.state.ship.img} />

        <div className ="ShipDetails">

        <h3>Ship Details</h3>
              
          <h4>Year: {this.state.ship.Year}</h4>  
          <h4>Passenger Capacity (Full): {this.state.ship.Passenger_Full_Capacity}</h4>    
          <h4>Passenger Capacity (Double Occupsancy): {this.state.ship.Double_Occupancy_Passenger_Capacity}</h4>
          <h4>Gross Tonnnage: {this.state.ship.Gross_Tonnage}</h4>
          <h4>Length: {this.state.ship.Length}</h4>
          <h4>Beam: {this.state.ship.Beam}</h4>
          <h4>Draft: {this.state.ship.Draft}</h4>
          <h4>Height: {this.state.ship.Height}</h4>
          <h4>Deadweight: {this.state.ship.Deadweight}</h4>
          <h4>Loaded Displacement: {this.state.ship.Loaded_Displacement}</h4>
        </div>

        <div className = "ShipTermsIntro">
          <p>
            <b>Ship Terms</b>
            <br/><br/>
            If you are interested and want to find out more about what these ship terms actually mean,
          then click <Link to = '/cruiselines/shipterms'>Here</Link>
          </p>
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
