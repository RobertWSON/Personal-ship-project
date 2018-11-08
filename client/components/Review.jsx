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
  
  componentDidMount(){
    this.setUpShip()
  }

  setUpShip(){
    getShip(this.props.match.params.id)
    .then(res =>{
      this.setState({
        ship: res
      })
    })
  }

render(){
  return(
   <React.Fragment>
   {console.log(this.state.ship)}

    <div class="title">
      <h1>Review</h1>
      <button onClick={()=> alert('Well done, you are on your way to a fantastic cruise')}>Book Cruise</button>
      <button><Link to='/'>Back to Cruise Lines</Link></button>
    </div>

    <div class="reviewphoto">
      <h2>{this.state.ship.ship_name}</h2>
      <img src={this.state.ship.img}/>
    </div>

    <div class="shipdetails">
      <h2>Details of Ship</h2>  
      <p>Gross Tonnage: {this.state.ship.Gross_Tonnage}</p>
      <p>Passenger Capacity (Full): {Passenger_Full_Capacity}</p>  
      <p>Passenger Capacity (Double Occupancy): {Double_Occupancy_Passenger_Capacity}</p>
      <p>Length: {Length}</p>
      <p>Beam: {Beam}</p>  
      <p>Draft: {Draft}</p>
      <p>Height: {Height}</p>
      <p>Loaded Displacement: {Loaded_Displacement}</p>
      <p>Deadweight: {Deadweight}</p>    
    </div>  

    <div class="Review">
        <h2>Review</h2>  
        <p>{this.state.ship.ship_description}</p>
    </div>

    </React.Fragment>
  )
}  
}

export default Review