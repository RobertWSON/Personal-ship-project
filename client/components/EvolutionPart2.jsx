import React from 'react'
import {getClassics} from '../api/api'
import ClassicShips2 from './ClassicShips2'


class EvolutionPart2 extends React.Component    {
    
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
                classicShips: res.evo2
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
                                <ClassicShips2 {...ship} />
                            </div>
                        )
                    }
                    )} 

                <div className = "evoIntro">
                        <h3>Last of the Classics</h3>
                        <p>The start of this <b>evolution (Part 2)</b> treats you to a real classic Fairstar, that was originally 
                        operated as a troopship and got converted completely to a cruise ship. <br/>I am fortunate enough to have been on this ship during the 90's, when I was a young lad.
                        <br/><br/>The Michelangelo was an Italian classic liner, which earns it classic because of it's capped laticed funnels. 
                        <br/><br/>QE2 or as it is more formally known Queen Elizabeth 2, named after the queen is one of the most well known cruise ships of all time.
                        Operated under Cunard it's entire career, she is now still around, but as a floating hotel in Dubai.
                        <br/><br/>Song of Norway goes down as the first of the classic liners ever to be lengthend to allow more passengers.
                        Song of Norway has had lots of differents name during it's career, is scrapped now, but will be rememembered as a great cruise ship. 
                        <br/><br/>Royal Viking Sky is another classic cruise ship that got lengthened, but it is still in operation today and can be seen on my Cruise Lines page for Fred Olsen cruises.
                        <br/><br/>Lastly Allure of the Seas is a different type of cruise ship from the other classic ones I have in the evolution pages.
                        Being the box shape it is, it is designed to carry more passengers and is a lot larger than the other ships.
                        It is also available for cruises on my Cruise Lines page for Royal Caribbean cruises. 
                        </p>    
                    </div>
                </div>       
            </div>            
        )
    }
}

export default EvolutionPart2