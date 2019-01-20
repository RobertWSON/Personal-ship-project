import React from 'react'
import {Link} from 'react-router-dom'
import {getAllShips} from '../api/api'

const initialState = {

}


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
  
  render()  {
    return  (

      // <div>
    
     <React.Fragment>
        {this.state.shipList.map(ship => {
          // console.log(ship.ship_name)
          return
            
          // <div>
          //   <p>Cruise Line</p>
            {/* <table>
              <tr>    */}


                <li key={ship.ship_name}><Link to={`/ship/${ship.id}`}>{ship.ship_name}</Link></li>
              {/* </tr>
            </table> */}

            cruise_line
            ship_name
              // <p><b>Reviews</b> <br/>
              // <b>Royal caribbean</b> 
              // <br/>Symphony of the Seas -   Gross Tonnage: 228,081    Passengers: 5518 Normal capacity      Crew:     Length:     Width:     Draft:    </p>
          //     {/* <img src={"/images/methode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F487c86a2-4a3d-11e8-ad0c-add3a1f6e1f4"}/> */}
          // </div>
        })}
  
        <br/><br/>Cruise Line: Fred Olsen<br/>
        Ship Name: Boudicca         Gross Tonnage: 28372     Passengers: 880       Crew: 329     Length: 205.47      Width: 25.20      Draft: 7.55
        <br/><br/>
        Ship Name: Blackwatch       Gross Tonnage: 28613     Passengers: 804       Crew: 330     Length: 205.47      Width: 25.22      Draft: 7.55

       </React.Fragment>
      // </div>
    )
  } 
  }

export default ListofShips