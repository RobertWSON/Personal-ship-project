import React from 'react'
//import {Link} from 'react-router-dom'

//export const EvolutionPart1 = () => {

    
class EvolutionPart1 extends React.Component    {
    
    constructor(props)  {
        
        super(props)
    }    


    render()    { 
        

        return (
            <div>
                <div className = 'container'>
                     <h1>Evolution of Cruise Ships</h1> 
                    </div>
                    {/* <Link className="navmenu" to="/Nav" >Home</Link>
                    <Link className="navmenu" to="/Nav" >Evolution (Part 1)</Link>
                    <Link className="navmenu" to="/Nav" >Evolution (Part 2)</Link>
                    <Link className="navmenu" to="/Nav" >Cruise Lines</Link>

                    <div>  */}
            
                    <div>
                        <img src={"/images/titaniccover.jpg"}/> 
                        <p>We have come along way since passenger liner days of Titanic. Passenger safety in terms of lifeboats was underestimated when the titanic was built 
                           and as a result there was only about enough lifeboats for 2/3 the passengers. The Titanic was though of as unsinkable at the time, but several factors    
                           caused the sinking. The iron rivets at the bow were brittle and not up to standard and the way that the watertight compartments were arranged caused                          
                           water to spill over the top of one and then flow into another compartment, eventually caused it to sink from flooding. Since the Titanic steel hulls    
                           have been created to help strengthen ships, rivets have been strengthened and watertight compartments are now in place for modern ships, so now we can 
                           feel much safer. 
                        </p>
                    </div>       
                    <div>    
                        <img src={"/images/oriana15.jpg"}/>
                        <p>The SS Oriana on the left or above was an example of a steam ship that was powered by steam and built in 1959. It was mostly used to     
                           start with on long distance travel, but over the years became popular, cruising with P & O (Peninsular & Oriental Steamship Navigation) cruise line.
                           SS Oriana was one of the ships that started to make cruising popular. it wasn't too big and so could navigate through the Panama Canal.  
                        </p>
                    </div>
                    <div>
                        <img src={"/images/ss-canberra.jpg"}/>
                        <p>The SS Canberra on the left or above is again another example of a steam ship built in 1960. It again was with P & O, was well known in its day and made cruising popular.
                           It operated a lot in the South Pacific and was often a frequent visitor to Sydney Harbour.  

                        </p>    
                    </div>
                    <div>
                        <img src={"/images/003410.jpg"}/>
                        <p>The MV Pacific Princess is the ultimate cruise ship though, back in the day that was repsonsible for making the cruise ship industry what it is today.
                           Back in the late 70's till the mid 80's, it featured on a television series called the Love Boat and because of this it made the idea of cruising fun. 
                           The idea that you could meet someone, that you can fall in love with on a ship, attracted people to go cruising.
                           With it's initial MV, it was an example of a motor vessel ship that didn't need to rely on steam or coal to get it moving.
                           Instead it is controlled by an internal combustion engine, just like a car and was more easier to maintain.

                        </p>
                    </div>
                
                {/* </div> */}
            </div>            
        )
    }
}


export default EvolutionPart1