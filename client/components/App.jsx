import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import EvolutionPart1 from './EvolutionPart1'
import EvolutionPart2 from './EvolutionPart2' 
import CruiseLines from './CruiseLines'
import MovingShip from './MovingShip'
import Porthole from './Porthole'


const App = () => {
  return (
    <Router>
      <React.Fragment>
        <h1>Cruise Shipin</h1> 
        <Route path='/' component={Nav}/>
        <Route exact path='/' component={Home}/>
        
        <Route exact path='/' component={MovingShip}/>
        <Route exact path='/evolutionpart1' component={EvolutionPart1}/>
        <Route exact path='/evolutionpart2' component={EvolutionPart2}/>
        <Route exact path='/cruiselines' component={CruiseLines}/>

      </React.Fragment>  
    </Router>  
  )
}

export default App

