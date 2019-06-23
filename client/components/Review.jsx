import React from 'react'
import {Link} from 'react-router-dom'
import {getShip} from '../api/api'

class Review extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      room:{}
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
        room: res
      })
    })
  }

render(){
  return(
   <React.Fragment>
   {console.log(this.state.ship)}
      <h2>{this.state.room.room_name}</h2>
      <p>{this.state.room.description}</p>
      <h5>Capacity: {this.state.room.capacity}</h5>
      <button onClick={()=> alert('Well done, good booking, proud of you')}>BOOK</button>
      <button><Link to='/'>Back to home</Link></button>
      <p></p>
      <img src={this.state.room.img} />
    </React.Fragment>
  )
}

  
}
export default Home