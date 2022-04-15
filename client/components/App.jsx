import React from 'react'

//I will change to BrowserRouter because I think that this only works with Hash Link
import {BrowserRouter, Route} from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'

// Evolution pages (Part1)
import EvolutionPart1 from './EvolutionPart1'
import FindClassic from './FindClassic'
// Evolution pages (Part2)
import EvolutionPart2 from './EvolutionPart2'
import FindClassicPt2 from './FindClassicPt2'

// Cruise Lines page
import CruiseLines from './CruiseLines'
// Cruise Ship Review page
import ShipList from './ShipList'
// Route to Form page for adding a review
import ReviewForm  from './ReviewForm'

// A Ship Terms page to help understand all ship terms
import ShipTerms from './ShipTerms'


class App extends React.Component {
  constructor(props)  {
    super() 
  }

  render () {
    return (
      <BrowserRouter>
    
          <div>   
              <Route path='/' component={Nav}/>
              <Route exact path='/' component={Home}/>

              {/* Routes for Evolution pages and associated ships  */}
              <Route exact path='/evolution-part1' component={EvolutionPart1}/>
              <Route path = '/evolution-part1/:classic_ship_name' component={FindClassic}/>
              <Route exact path='/evolution-part2' component={EvolutionPart2}/>
              <Route path = '/evolution-part2/:classic_ship_name' component={FindClassicPt2}/>

              {/* Route for Cruise Lines page */}
              <Route exact path='/cruiselines' component={CruiseLines}/>

              {/* Route for the Review of each ship on it's Cruise Line page.  
              Recommended by Ricky Sullivan from slack, as it passes a param. */}
              <Route path = '/cruiselines/:cruise_line' component={ShipList}/>
              
              {/* Route for displaying Review Form for user to fill out information that will be displayed. */}
              <Route path = '/cruiselines/:cruise_line/ship_name/addreview' component={ReviewForm}/>

              {/* Ship Term Route, it just needs to go to it's own separate page. */}
              <Route path = '/shipterms' component={ShipTerms}/>

          </div>  

      </BrowserRouter>
    )
  }
}


export default App