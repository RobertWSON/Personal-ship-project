import React from 'react'
import MakeClassic from './MakeClassic'
import {getClassic} from '../api/api'

class FindClassic extends React.Component   {

    constructor(props)  {
        super(props)

        // Commented constant below, because we want to see how it works without decoding to start with
        // Constant below is used to replace all underscore in Ship Name in url at top of page,
        // with a space, using .replace(/_/g, '')'. So it's decoding url underscore to a space.
        // The constant also matches the correct ship name through using props and parameters.
        // const decodeClassicship = props.match.params.ship_name.replace(/_/g, )

        this.state = {
            // Commented constant below, because we want to see how it works without decoding to start with
            //The relevent classic ship name in state, should be set to decoded constant.
            // classicship: decodeClassicship,
            
            //initialize classicShip as an array from evo1 table.
            classicship: ['evo1']
        }
        this.setUpClassic = this.setUpClassic.bind(this)
    }
    
    componentDidMount() {
        console.log('cdm')
        this.setUpClassic()
    }

    setUpClassic()  {
        getClassic(this.state.classicship)

        .then(res =>    {
            this.setState({
                classicship: res
            })
        })
    }

    render()    {

        return  (
            <React.Fragment>

            {this.state.classicship.map (ship => {
                return  (

                    <MakeClassic key = {ship.id} {...ship}/>
                )
            }
            )}

            </React.Fragment>
        )
    }
}

export default FindClassic