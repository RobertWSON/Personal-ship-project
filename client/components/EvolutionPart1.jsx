import React from 'react'
import {Link} from 'react-router-dom'


class EvolutionPart1 extends React.Component    {
    
    constructor(props)  {
        
        super(props)
    }    

    render()    { 
          
        return  (
            <div>
                <div className = "header">
                    <h1>Evolution of Cruise Ships</h1> 
                </div>

                <div className = "evoContainer">   
                    <div className = "evoShips">  
                        <h3>Titanic</h3>
                        <Link to = "/evolutionpart1/titanic" >
                            <img src={"/images/titaniccover.jpg"} 
                            title = "Titanic in Southampton" />
                            {/* alt="Titanic" /> */}
                        </Link>
                        {/* <br/> */}
                        <p>Find out more on Titanic, Click on Image</p>
                        {/* <br/> */}
                        <p>Titanic Ship Horn</p>
                    </div>    

                    <div className = "evoShips">
                        <h3>Oriana</h3>
                        <Link to = "/evolutionpart1/oriana">
                            <img src={"/images/oriana15.jpg"} title = "Oriana in Panama Canal during 1960's"/>
                        </Link>
                        <p>Find out more on Oriana, Click on Image</p>
                        <p>Oriana Ship Horn</p>
                    </div>    

                    <div className = "evoShips">
                        <h3>Canberra</h3>
                        <Link to = "/evolutionpart1/canberra">
                            <img src={"/images/ss-canberra.jpg"}
                            title = "Canberra at Sea during the good times"/>
                        </Link>
                        <p>Find out more on Canberra, Click on Image</p>
                        <p>Canberra Ship Horn</p>
                        <br/>
                    </div>    

                    <div className = "evoShips">
                        <h3>France</h3>
                        <Link to = "/evolutionpart1/france">
                            <img src={"/images/Evolution/France/france_1961_1.jpg"}
                            title = "France in Home Port for the first time in 1961"/>
                        </Link>                       
                        <p>Find out more on France, Click on Image</p>                        
                        <p>France Ship Horn</p>
                        <br/>
                    </div>   

                    <div className = "evoShips"> 
                        <h3>Galileo Galilei</h3>
                        <Link to = "/evolutionpart1/GalileoGalilei">
                            <img src={"/images/Evolution/Galileo Galilei/Galileo03.jpg"}
                            title = "Original Galileo Gallilei at Sea"/>
                        </Link>
                        <p>Find out more on Galileo Galilei, Click on Image</p>
                        <p>Galileo Galilei Ship Horn</p>
                        <br/>
                    </div>    

                    <div className = "evoShips">
                        <h3>Pacific Princess</h3>
                        <Link to = "/evolutionpart1/pacificprincess">
                            <img src={"/images/003410.jpg"}
                            title = "Love Boat Pacific Princess at Sea"/>
                        </Link>                
                        <p>Find out more on Pacific Princess, Click on Image</p>                    
                        <p>Pacific Princess Ship Horn</p>
                    </div>

                    <div className = "evoIntro">
                        <h3 class = "Beginnings">History (Early Beginnings)</h3>
                        <p>The start of this <b>evolution (Part 1)</b> takes you from the beginning of (when)where passenger liners as they called them back then began.
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