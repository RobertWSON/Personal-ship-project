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
                        <p>We have come along way since passenger liner days of Titanic. Passenger safety in terms of lifeboats was underestimated when the titanic was built 
                           and as a result there was only about enough lifeboats for 2/3 the passengers. The Titanic was thought of as unsinkable at the time, but several factors    
                           caused the sinking. The iron rivets at the bow were brittle and not up to standard and the way that the watertight compartments were arranged caused                          
                           water to spill over the top of one and then flow into another compartment, eventually caused it to sink from flooding. Since the Titanic steel hulls    
                           have been created to help strengthen ships, rivets have been strengthened and watertight compartments are now in place for modern ships, so now we can 
                           feel much safer. 
                        </p>
                        <br/>
                        <p>The SS Oriana on the left was an example of a steam ship that was powered by steam and built in 1959. It was mostly used to     
                           start with on long distance travel, but over the years became popular, cruising with P & O (Peninsular & Oriental Steamship Navigation) cruise line.
                           SS Oriana was one of the ships that started to make cruising popular. It wasn't too big and so could navigate through the Panama Canal.  
                        </p>
                        <br/>
                        <p>The SS Canberra on the left is again another example of a steam ship built in 1960. It again was with P & O, was well known in its day and made cruising popular.
                           It operated a lot in the South Pacific and was often a frequent visitor to Sydney Harbour.  
                        </p>    
                        <br/>
                        <p>The MV Pacific Princess is the ultimate cruise ship though, back in the day that was repsonsible for making the cruise ship industry what it is today.
                           Back in the late 70's till the mid 80's, it featured on a television series called the Love Boat and because of this it made the idea of cruising fun. 
                           The idea that you could meet someone, that you can fall in love with on a ship, attracted people to go cruising.
                           With it's initial MV, it was an example of a motor vessel ship that didn't need to rely on steam or coal to get it moving.
                           Instead it is controlled by an internal combustion engine, just like a car and was more easier to maintain.
                        </p>
                    </div>
                </div>    
            </div>     
        )
    }
}


export default EvolutionPart1