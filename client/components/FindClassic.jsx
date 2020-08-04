import React from 'react'
import MakeClassic from './MakeClassic'
import {getClassic} from '../api/api'

class FindClassic extends React.Component   {

    constructor(props)  {
        super(props)

        this.state = {
            
            //initialize classicShip as an array from evo1 table.
            // classicship: ['evo1']
            classicship: null
        }
        this.setUpClassic = this.setUpClassic.bind(this)
    }
    
    componentDidMount() {
        console.log(this.props)
        const { location, match} = this.props
        if (location.state) {
            this.setState({ classicship: location.state})
        }   else    {
            this.setUpClassic(match.params.ship_name)
        }
    }

    setUpClassic(ShipName)  {
        getClassic(ShipName)

        .then(ship =>    {
            this.setState({
                classicship: ship
            })
        })
    }

    render()    {

        if (!this.state.classicship) return <div>Loading...</div>// Create your loading component
        return <MakeClassic {...this.state.ClassicShip} />

    }
}

export default FindClassic