import React from 'react'

//I will change to BrowserRouter because I think that this only works with Hash Link
import {BrowserRouter, Route} from 'react-router-dom'
import Nav from './Nav'

// Cruise Lines page
import CruiseLines from './CruiseLines'
// Cruise Ship Review page
import Review from './Review'


class App extends React.Component {
  constructor(props)  {
    super() 
  }

  render () {
    return (
      <BrowserRouter>
    
          <div>   
              <Route path='/' component={Nav}/>

              {/* Route for Cruise Lines page */}
              <Route exact path='/cruiselines' component={CruiseLines}/>

              {/* Route for the Review of each ship on it's Cruise Line page.  
              Recommended by Ricky Sullivan from slack, as it passes a param. */}
              <Route path = '/cruiselines/:cruise_line' component={Review}/>

          </div>  

      </BrowserRouter>
    )
  }
}


export default App