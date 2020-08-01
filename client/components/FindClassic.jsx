import React from 'react'
import MakeClassic from './MakeClassic'
import {getClassic} from '../api/api'

class FindClassic extends React.Component   {

    constructor(props)  {
        super(props)

        this.state = {
            
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