import React from 'react'
import {getClassics} from '../api/api'
import ClassicShips from './ClassicShips'


class Evolution extends React.Component    {
    
    constructor(props)  {
        super(props)

        this.state = {      
            // later I will have to work out how the data can come from the correct table eg evo1 or evo2.
            //initialize classicShip as false to allow for no data.
            classicShips: false  
            // Maybe I need 2 data arrays here from the api call.
            // This would separate ship data for the 2 evolution pages.
            // Maybe I could have a variable called shipsData, this can be defined
            // and seperated with evo1Data for Evolution Part 1 and evo2Data for Evolution Part 2
            // Here maybe have eg shipsData: evo1Data, shipsData: evo2Data
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
                classicShips: res.evo
                // Hopefully there is a way that I can separate Evolution Part 1 from Part 2 
                // So I can use id: 1 to 6 for Evolution Part 1 and id: 7 to 12 for Evolution Part 2  
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

            <React.Fragment>

            {/* <div> */}
                <div className = "header">
                    <h1>Evolution of Cruise Ships</h1> 
                </div>

                <div className = "evoContainer">
                    {/* Map classicships in state to find a ship */}
                    
                    {this.state.classicShips.map (ship =>  {

                        // Console for testing if a ship (classic one) is being mapped for the correct one
                        console.log(ship)

                        // const encodedClassicShipName= ship.classic_ship_name.replace(/\s/g, '_')

                        return  (
                            
                            // Returning a div for each classic ship based on id and in id order
                            <div key = {ship.id} className = "evoShips">  

   
                                <ClassicShips {...ship} />
                            </div>
                        )
                    }
                    )}


                    {/* {Evolution === 'evo1' &&
                    ( */}

                    {/* This is the paragraph introduction for Evolution Part 1             */}
                    <div className = "evoIntro">
                        <h3>Early Beginnings</h3>
                        <p>The start of this <b>evolution (Part 1)</b> takes you from the beginning of when passenger liners as they called them back then began.
                           <br/>The Titanic stands out as a main passenger liner for long distance travel, when people in large numbers on a ship began.

                           <br/><br/>The ships, Oriana and Canberra began there careers as passenger liners, and then got converted to cruise ships for shorter travel in holiday places.
                           <br/>They were owned by P & O (Peninsular and Oriental Steam navigation Company), which is one of the most well known cruise companies of all time. 
                           Throughout their career the Oriana and Canberra's appearance and colour had not changed and you can call this type of ship a classic original.
                           <br/><br/>Next we have the largest ship so far (France) which was originally owned by the French Line.
                           France suffered from a problem in the 70's when ship travel was more expensive than air travel and was consequently laid up during the mid to late 70's. 
                           <br/>She made a comeback though, had a complete change in appearance and colour and operated as Norway under Norwegian Cruise Lines.
                           Norway continued as a great success through her career and will be remembered as a classic liner in a different way (lasting a long time).
                           <br/><br/>We can't start this adventure, if we don't have an Italian ship and Gallileo Galiliei is the first of our classic Italian Liners.
                           Galileo Galilei is the first italian ship here, that originally operated as a passenger liner and changed to full time cruising.
                           Unfortunately like Titanic she had a sad ending and sank. <br/>
                           Still she will be remembered though as a classic Italian cruise ship with good open deck space to enjoy holiday travel.  
                           <br/><br/>We will end the beginnings with a beautiful cruise ship, Pacific Princess (or as it was called "Love Boat") that made the cruise ship industry what it is today.
                           <br/>It made you believe that cruising on a ship it's size, will give you a great opportunity to meet the love of your life.   
                        </p>
                    </div>

                    {/* )} */}

                    {/* Maybe use a ternary type operator or conditional rendering idea here 
                    to separate these divs */}

                    {/* {Evolution === 'evo2' &&
                    ( */}
                    {/* This is the paragraph introduction for Evolution Part 2 */}
                    <div className = "evoIntro">
                        <h3>Last of the Classics</h3>
                        <p>The start of this <b>evolution (Part 2)</b> treats you to a real classic Fairstar, that was originally 
                        operated as a troopship and got converted completely to a cruise ship. <br/>I am fortunate enough to have been on this ship during the 90's, when I was a young lad.
                        <br/><br/>The Sea Princess was a classic passenger liner, that got converted to a P & O cruise ship. 
                        <br/><br/>QE2 or as it is more formally known Queen Elizabeth 2, named after the queen is one of the most well known cruise ships of all time.
                        Operated under Cunard it's entire career, she is now still around, but as a floating hotel in Dubai.
                        <br/><br/>Song of Norway goes down as the first of the classic liners ever to be lengthend to allow more passengers.
                        Song of Norway has had lots of differents name during it's career, is scrapped now, but will be rememembered as a great cruise ship that started Royal Caribbean Cruise Line. 
                        <br/><br/>Royal Viking Sky is another classic 70's cruise ship that got lengthened, that operated with many cruise lines. She spent her final years with Fred Olsen Cruise Line, but due to covid it lost the battle of still being able to operate and was scrapped in Aliaga, Turkey in July 2020.
                        <br/><br/>Sovereign of the Seas is a 1980's cruise ship that was the largest afloat at the time it was built. It was originally owned by Royal Caribbean and had a major influence on the mega class cruise ships of today, due to its increase in size from previous ships and its styling. Sadly though it has stopped cruising in 2020 and was scrapped, due to being caught up in the covid situation. It will be remembered as a cruise ship that is responsible for Royal Caribbean Cruise Line success and the development of the modern cruise industry.
                        </p>    
                    </div>

                    {/* )} */}

                </div>

            </React.Fragment>     
        )
    }
}


export default Evolution