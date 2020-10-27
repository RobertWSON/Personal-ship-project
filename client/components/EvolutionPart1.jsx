import React from 'react'
import {getClassics} from '../api/api'
import ClassicShips from './ClassicShips'


class EvolutionPart1 extends React.Component    {
    
    constructor(props)  {
        super(props)

        this.state = {      
            // later I will have to work out how the data can come from the correct table eg evo1 or evo2.
            //initialize classicShip as false to allow for no data.
            classicShips: false        
        }

        this.setUpClassics = this.setUpClassics.bind(this)
    }    

    componentDidMount() {
        console.log('cdm')
        this.setUpClassics()
    }

    setUpClassics() {
        console.log('getClassics')
        //Line below gets the getClassics function from the api.
        getClassics()
        //.then get a response from finding ships from database.
        .then(res =>    {

            this.setState({
                // Returns response from api
                classicShips: res.evo1
            })
        })
    }
    
    render()    { 
        //console for testing if data is coming through.
        console.log(this.state.classicShips)
        // Line below allows for classicships being false and no data is appearing, so it says Loading...
        if(!this.state.classicShips) return <div>Loading...</div>
        //Else display the following elements below on the page.
        return  (
            <div>
                <div className = "header">
                    <h1>Evolution of Cruise Ships</h1> 
                </div>

                <div className = "evoContainer">
                    {/* Map classicships in state to find a ship */}
                    {this.state.classicShips.map (ship =>  {
                        // Console for testing if a ship (classic one) is being mapped for the correct one
                        console.log(ship)
                        return  (

                            // Returning a div for each classic ship based on id and in id order
                            <div key = {ship.id} className = "evoShips">     
                                <ClassicShips {...ship} />
                            </div>
                        )
                    }
                    )}
                                    
                    <div className = "evoIntro">
                        {/* <h3 className = "Beginnings">History (Early Beginnings)</h3> */}
                        <h3>Early Beginnings</h3>
                        <p>The start of this <b>evolution (Part 1)</b> takes you from the beginning of when passenger liners as they called them back then began.
                           <br/>The Titanic stands out as a main passenger liner for long distance travel, when people in large numbers on a ship began.

                           <br/><br/>The ships, Oriana and Canberra began there careers as passenger liners, and then got converted to cruise ships for shorter travel in holiday places.
                           <br/>They were owned by P & O (Peninsular and Oriental Steam navigation Company), which is one of the most well known cruise companies of all time. 
                           Throughout their career the Oriana and Canberra's appearance and colour had not changed and you can call this type of ship a classic original.
                           <br/><br/>Next we have the largest ship so far (France) which was originally owned by the French Line.
                           France suffered from a problem in the 70's when ship travel was more expensive than air travel and was consequently laid up during the mid 70's. 
                           <br/>She made a comeback though, had a complete change in appearance and colour and operated as Norway under Norwegian Cruise Lines.
                           Norway continued as a great success through her career and will be remembered as a classic liner in a different way (lasting a long time).
                           <br/><br/>We can't start this adventure, if we don't have an Italian ship and Gallileo Galiliei is the first of our classic Italian Liners.
                           Galileo Galilei is the first ship here, that operated as a cruise ship throughout her entire career.
                           Unfortunately like Titanic she had a sad ending and sank. <br/>
                           Still she will be remembered though as a classic Italian cruise ship with good open deck space to enjoy holiday travel.  
                           <br/><br/>We will end the beginnings with a beautiful cruise ship, Pacific Princess (or as it was called "Love Boat") that made the cruise ship industry what it is today.
                           <br/>It made you believe that cruising on a ship it's size, will give you a great opportunity to meet the love of your life.   
                        </p>
                    </div>
                </div>
            </div>     
        )
    }
}


export default EvolutionPart1