import React from 'react'
import {getShipsList} from '../api/api'
import HandleClick from './HandleClick'
import HoverList from './HoverList'


class ListofShips extends React.Component {
    constructor(props){
      super(props)
  
      this.state = {
        //initialize shipsList as an empty array
        shipsList: [],
        //This is false because the shipList is not initially open.
        isOpen: false,
        //This is initially false because we have not visited shipsList yet. 
        hasfetched: false 
      }
      //binding method for setting up Ships in their List for their Cruise Line
      this.setUpShips = this.setUpShips.bind(this)
    }
   
    componentDidMount(){
      console.log('cdm')
      this.setUpShips()
    }

    setUpShips() {
      console.log('getShipsList')
      //Line below gets the Ships List function and CruiseLine parameter passed as a property from the api. 
      getShipsList(this.props.cruise_line)
      
      .then(res =>  {
        
        this.setState({
          shipsList: res,
          //This saves us from making an api call , when the CruiseLine heading has already been visited. 
          hasFetched: true  
        })
      })
    }
    
  render()  {

    return  (
    
      <React.Fragment>

        <HandleClick/>
        <HoverList/>

      </React.Fragment>
    )  
  }
  
}

export default ListofShips