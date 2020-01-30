import React from 'react'
//import {Link} from 'react-router-dom'
import Ship from './Ship'
import {getShipsList} from '../api/api'


class Review extends React.Component  {
  constructor(props){
    super(props)
      const decodeCruiseline = props.match.params.cruise_line.replace(/_/g, ' ') 

    this.state = {
      cruiseline: decodeCruiseline,
      ships: []
    }
    this.setUpShips = this.setUpShips.bind(this)
  }

  componentDidMount() {
    console.log('cdm')
    this.setUpShips()
  }

  setUpShips()  {
    getShipsList(this.state.cruiseline)
    .then(res =>  {
      this.setState({
        ships: res
      })
    })
  }

  render()  {

    return  (
      <React.Fragment>

        <h1>{this.state.cruiseline}</h1>
        {this.state.ships.map  (ship =>  {
          return  (
            
            <Ship key={ship.id} {...ship}/>
          )  

            } // end bracket for ship =>  {
          ) // end bracket for (ship
        } {/* end bracket for {this.state.ship.map  */}

      </React.Fragment>
    ) // end bracket for return  (

  } //end bracket for render 
} //end bracket for Review Component


export default Review