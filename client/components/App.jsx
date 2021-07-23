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
import Review from './Review'

// Cruise Ship Review on it's Review Page
// I think AddReview needs to pickup up a new review from Review_User_Name prop in FindReview component.
// and then AddReview component pick up id for a new review from there.

// The problem is how do you get the corresponding ship_name in ships table to match id 
// in reviews table for a new Review.
// Is the correct ship picked up by <Ship key={ship.id} {...ship}/> in Review Component and then 
// in Ship Component <FindReview encodedShipName={ship_name}/> passes ship_name prop into FindReview component ?

// Not sure if I need to import FindReview
// import FindReview from './FindReview'

// InitialReview is picked in FindReview Component through a Review existing (true)
// and a review id is passed through <InitialReview key={review.id} {...review}/> to display it.    
import InitialReview from './InitialReview'  

import ReviewForm from './ReviewForm'

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
              {/* ship_name gets picked up by <Ship key={ship.id} {...ship}/> in Review Component */}
              <Route path = '/cruiselines/:cruise_line' component={Review}/>

              {/* Route for finding an Initial Review from Reviews Table.   */}
              <Route path ='/cruiselines/:cruise_line/:ship_name' component={InitialReview}/> 

              {/* Route for Adding a Review to a Cruise Ship Review Page, 
              I think maybe this should be for ReviewForm Component, not AddReview commented below*/}
              {/* <Route path ='/cruiselines/:cruise_line/:ship_name/add-review' component={AddReview}/> */}
              <Route path ='/cruiselines/:cruise_line/:ship_name/add-review' component={ReviewForm} />


              {/* Ship Term Route Added, but not going to a new page yet. */}
              <Route path = '/cruiselines/:cruise_line/shipterms' component={ShipTerms}/>

          </div>  

      </BrowserRouter>
    )
  }
}


export default App