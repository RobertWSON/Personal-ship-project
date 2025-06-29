import React from 'react'
import MakeClassic from './MakeClassic'
import {getClassic} from '../api/api'

class FindClassic extends React.Component   {

    constructor(props)  {
        super(props)

        this.state = {
            //Initializing classicships array to allow for no data coming through.
            classicship: null
        }
        this.setUpClassic = this.setUpClassic.bind(this)
    }
    
    componentDidMount() {
        //  The if statement below checks to see if the Link path has been picked up when FindClassic component mounts, 
        // in it's initial state. It is the inital finding of the Link.  
        if (this.props.location.state) {
            this.setState({ classicship: this.props.location.state})
            //This else part matches the state property in the Link with ship_name and this is what helps display a ship page.  
        }   else    {
            this.setUpClassic(this.props.match.params.classic_ship_name)
        }
    }

    // This function is for the set up of the classic ship and it has been given a temporary name for the parameter (classic name). 
    setUpClassic(ClassicName)  {
        // initially searches getClassic api to find the classic ship.
        getClassic(ClassicName)
        // .then gets data from database
        .then(ship => {
            this.setState({
                //Line  below finds a classic ship
                classicship: ship
            })
        })
    }

    render()    {
        // Line below allows for classicships being null or having no data appearing, so it says Loading... in browser.
        if (this.state.classicship === null) return <div>Loading...</div>
        // We do not need to map for a ship because we have already picked up the ship by a key id in Evolution Part 1.
        // We now have the correct ship, so we can Create our own loading component.

        // const encodedClassicShipName = ship.classic_ship_name.replace(/\s/g, '_')

        return <MakeClassic {...this.state.classicship} />

    }
}

export default FindClassic