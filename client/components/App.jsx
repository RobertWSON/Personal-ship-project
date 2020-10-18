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
// import Michelangelo from './Michelangelo'
// import Qe2 from './Qe2'
// import Fairstar from './Fairstar'
// import SongofNorway from './SongofNorway'
// import RoyalVikingSky from './RoyalVikingSky'
// import AllureoftheSeas from './AllureoftheSeas'

import CruiseLines from './CruiseLines'
import Review from './Review'
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

              {/* Routes for Evolution pages and associated ships */}
              <Route exact path='/evolutionpart1' component={EvolutionPart1}/>
              <Route path = '/evolutionpart1/:classic_ship_name' component={FindClassic}/>

              <Route exact path='/evolutionpart2' component={EvolutionPart2}/>
              <Route path = '/evolutionpart2/:classic_ship_name' component={FindClassicPt2}/>
              {/* <Route exact path='/evolutionpart2/michelangelo' component={Michelangelo}/> */}
              {/* <Route exact path='/evolutionpart2/qe2' component={Qe2}/> */}
              {/* <Route exact path='/evolutionpart2/fairstar' component={Fairstar}/> */}
              {/* <Route exact path='/evolutionpart2/songofnorway' component={SongofNorway}/> */}
              {/* <Route exact path='/evolutionpart2/royalvikingsky' component={RoyalVikingSky}/> */}
              {/* <Route exact path='/evolutionpart2/allureoftheseas' component={AllureoftheSeas}/> */}

              {/* Route for Cruise Lines page */}
              <Route exact path='/cruiselines' component={CruiseLines}/>

              
              <Route path = '/cruiselines/:cruise_line' component={Review}/>
              {/* Route below is recommended by Ricky Sullivan from slack, as it passes a param.
              The problem is that it just doesn't work at this stage, probably because the backend and api needs to be sorted. 
              <Route path = '/cruiselines/:cruise_line' component={Review}/> */}

              {/* Route for Ship Component that controls the details we are getting for the ship
              and then returns Cruise Line and Correct Ships in Review Component. */}

              {/* Commented out because this Ship route does not work */}
              {/* <Route path = '/cruiselines/:cruise_line' component={Ship}/> */}

              {/* Ship Term Route Added */}
              <Route path = '/cruiselines/:cruise_line/shipterms' component={ShipTerms}/>

              {/* <Route exact path='/booking' component={Booking}/> */}
              
            {/* </div> */}
          </div>  
        {/* </React.Fragment>   */}
      {/* </Router>  */}
      </BrowserRouter>
    )
  }
}


export default App