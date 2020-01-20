import React from 'react';
//import {HashRouter as Router, Route} from 'react-router-dom'

//I will change to BrowserRouter because I think that this only works with Hash Link
import { BrowserRouter, Route } from 'react-router-dom';

//import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Nav from './Nav';
import Home from './Home';
import EvolutionPart1 from './EvolutionPart1';
import EvolutionPart2 from './EvolutionPart2';
import CruiseLines from './CruiseLines';
import Review from './Review';
//import ListofShips from './ListofShips'
//import { HashLink as Link } from 'react-router-hash-link'
import ShipTerms from './ShipTerms';

// import MovingShip from './MovingShip'
// import Porthole from '.`/Porthole'

class App extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <BrowserRouter>
        {/* <Router> */}
        {/* <React.Fragment> */}
        <div>
          {/* <div>
                <h1>Cruise Shipin</h1> 
            </div> */}
          {/* <div> */}
          <Route path="/" component={Nav} />
          <Route exact path="/" component={Home} />

          {/* <Route exact path='/' component={MovingShip}/> */}
          <Route exact path="/evolutionpart1" component={EvolutionPart1} />
          <Route exact path="/evolutionpart2" component={EvolutionPart2} />
          <Route exact path="/cruiselines" component={CruiseLines} />

          <Route path="/cruiselines/:cruise_line" component={Review} />
          {/* Route below is recommended by Ricky Sullivan from slack, as it passes a param.
              The problem is that it just doesn't work at this stage, probably because the backend and api needs to be sorted. 
              <Route path = '/cruiselines/:cruise_line' component={Review}/> */}

          {/* Ship Term Route Added */}
          <Route exact path="/cruiselines/shipterms" component={ShipTerms} />

          {/* </div> */}
        </div>
        {/* </React.Fragment>   */}
        {/* </Router>  */}
      </BrowserRouter>
    );
  }
}

export default App;
