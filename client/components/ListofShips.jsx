import React from 'react'
import {getShipsList} from '../api/api'
import {HashLink as Link} from 'react-router-hash-link'


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
      this.setUpShips = this.setUpShips.bind(this),
      //binding method for HandClick function, which controls clicking on a Cruise Line Heading
      this.handleClick = this.handleClick.bind(this)
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

    /* When a Ships List is open and user clicks on a Cruise Line Heading, the Ships List Collapses
       and just a Cruise Line Heading is shown.*/

    handleClick() {
   
    //This handleClick sorts out the changing of state between Shipslist being open or not, when a Cruise Line Heading is clicked.

      //This if statement finds out if the shipsList has been visited and if it has, it uses hasFetched to find Ships for List.
      if(!this.state.hasFetched)  {
        this.setUpShips()
      }

      //This block of code below sorts out the toggling of the State for the Cruise Line Headings. 
      this.setState(prevState =>  ({
        //Code below will find previous state of Ships List when it is either open or closed.
        shipsList: prevState.shipsList,
        //Code below will reverse the Previous State of isOpen for Ships List when it is open or closed.
        isOpen: !prevState.isOpen,
        //Code below will find Previous State of hasFetched for Ships List when it is closed.
        hasFetched: prevState.hasFetched
      }))
    }


    findShipNames(ship) {

      return ship.ship_name

      //This function helps display relevant Cruise Ships Names when user clicks on a Cruise Line Heading.
      //In my backend I have let the database find the relevant Cruise Ships from their Cruise Line, so we just return it here.
    }
    
  render()  {

    return  (
    
      <React.Fragment>

        {/*This is the button for each Cruise line Heading and the state of it will be controlled by the handleClick function.*/}
        {/*What is displayed is the result of the CruiseLine parameter passed as a property from the api*/}
        <button onClick={this.handleClick}>{this.props.cruise_line}</button>
        <ol>
    
          {/* When Ships List is about to be opened, we will use map to find the correct Ships for the List.*/}
          {this.state.isOpen == true && 
            this.state.shipsList.map (ship => {  
              return   (
                //We only need to find the id for each ship, because the api is doing the rest of the work for us by finding the 
                //correct Cruise line to match the id. 
                <li className = "shipsList" key = {ship.id}>
                  <Link smooth to = {`/cruiselines/${ship.cruise_line.replace(/\s+/g, "_")}#${ship.ship_name.replace(/\s+/g, "_")}`}>{this.findShipNames(ship)}</Link>
                </li>
              )  

          //This List has a className, because I want to style fonts using CSS for Cruise Ship Names. 
          //The key is used to get correct ship names for the Ships List, when a Cruise Line Heading is clicked.
          //The Link will be an Anchor Link to a specific ship, on it's Cruise Line Page. 
          //The Link will have a smooth feature, so it scrolls to the correct ship on it's Cruise Line Page. 
          // Note: The Cruise Line Page, can have a Review for more than one ship and will be a Review Component.   
        
        })
        }
      </ol>

      </React.Fragment>
    )  
  }
  
}

export default ListofShips
