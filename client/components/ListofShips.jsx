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
      // binding method for HandClick function, which controls clicking on a Cruise Line Heading
      this.handleClick = this.handleClick.bind.this
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

        <div>
          <HandleClick onclick={this.handleClick} cruise_line={this.props.cruise_line}/>
        </div>
          

        <ol>
                    
          {/* When Ships List is about to be opened, we will use map to find the correct Ships for the List.*/}
          {this.state.isOpen == true && 
            this.state.shipsList.map (ship => { 
                        
              // Below we are creating constants that will be used in the Link below.

              // The CruiseLine and ShipName constants are used to replace all spaces in the url with an underscore "_".
              const encodedCruiseline = ship.cruise_line.replace(/\s/g, '_')
              const encodedShipName = ship.ship_name.replace(/\s/g, '_')

              // replace function takes two arguments, first argument for matching pattern (what to replace) and 
              // second argument is what to replace with. 
              // In .replace(/\s/g, '')  we are replacing all spaces with '_'
              // '\s'  is a regular expression for space, which needs to be inside /<regular expression>/ 
              // and'g' denotes for global (that means all spaces), if you dont give 'g' there, 
              // it will replace the first space (only one space) and will replaced by '_' 
              // In review page .replace(/_/g, ' ') replaces all underscores with space
                        
              return   (
                        
              //We only need to find the id for each ship, because the api is doing the rest of the work for us by finding the 
              //correct Cruise line to match the id. 
              <li key = {ship.id}>
                            
                <HoverList encodedCruiseline={cruise_line} encodedShipName={ship_name}/>

              </li>
                        )                
                })
                }
                </ol>

      </React.Fragment>
    )  
  } 
}

export default ListofShips