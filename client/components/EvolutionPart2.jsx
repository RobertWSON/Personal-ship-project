import React from 'react'
import {Link} from 'react-router-dom'

// export const EvolutionPart2 = () => {
//     return (
//         <div>
//             <div className = 'container'>
//                 <h1>Evolution of Cruise Ships</h1>
//             </div>
//             <div>
//                 <Link className="navmenu" to="/Nav" >Home</Link>
//                 <Link className="navmenu" to="/Nav" >Evolution (Part 1)</Link>
//                 <Link className="navmenu" to="/Nav" >Evolution (Part 2)</Link>
//                 <Link className="navmenu" to="/Nav" >Cruise Lines</Link>
//             </div>    
//         </div>    
//     )
// }

    
class EvolutionPart2 extends React.Component    {
    
    constructor(props)  {
        
        super(props)
    }    


    render()    { 
        

        return (
            <div>
                <div className = 'container'>
                     <h1>Evolution of Cruise Ships</h1> 
                    </div>
                    
                    <div>    
                        <img src={"/images/Fairstar-RG-Photopage-Ships-Layout.jpg"}/> 
                        <p>The photo on the left or above shows Fairstar, which was built in 1957 and is an example of an older style cruise ship. You can clearly see how these older ships had a lot of open deck space.  
                           On the open deck space you were able to go for a swim, play table tennis or catch up on some sun on the deck chairs. 
                           It is an interesting type of older cruise ship because it was originally used as a troop ship and got converted for cruising in 1965. It was the most popular cruise ship under P & O during the late 80's and 90's
                           out of Sydney Harbour. 
                           More details on this ship can be found here <a href ="https://en.wikipedia.org/wiki/TSS_Fairstar">Fairstar</a>.
                        </p>

                        <img src={"/images/UFRPU.jpg"}/>
                        <p>The photo on the left or above shows Allure of the Seas, a modern cruise ship built in 2010, which has a more boxed shaped.
                           These modern cruise ships don't have as much deck space for the same size of ship as the older classic cruise liners. 
                           From the photo you can see that passengers are on the deck above the bow, whereas in the older cruise ships there was no deck space for passengers.
                           In the older cruise ships there was a lot more deck space by the funnel, mast and the back of the ship, than the modern cruise ships, which don't have much.
                           The modern cruise ships have greater Gross Tonnage or interior space, than the older ships because of this. <br/>1 Gross Ton is equal to 2.83m^3 or 100 cubic feet and is a a measure of the total internal volume of a ship,
                           which is used for charging ships at port or going through canals like Panama Canal. <br/>
                           With extra space modern cruise ships have there is room for more amenities or activities to do than cassic liners like rock climbing, water slides and tennis courts.
                           Whatever you decided is totally your preference.      
                           More details on this ship can be found here <a href ="https://en.wikipedia.org/wiki/MS_Allure_of_the_Seas">Allure of the Seas</a>.
                        </p>    
                    </div>

                    <div>
                        <img src={"/images/b5ac2c1fe37dee95a51c61cd713f42dc.jpg"}/> 
                        <p>The photo on the left or above shows the Song of Norway, built in 1970, when it was being lengthened. Due to to demand of cruises in the 70's cruise ship lengthening started and this was the first cruise ship ever to be 
                           lengthened in 1978. It was lengthening by 85 feet and the passenger capacity increased from 724 to 1024 people. She is now scrapped and more info can be found here <a href ="https://en.wikipedia.org/wiki/MS_Formosa_Queen">Song of Norway</a>  
                        </p>
                        <img src={"/images/image_manager__rex_thumbnail_images_song_of_norway_08.06.1994.jpg"}/>
                        <p>Here she is sailing through the panama Canal in 1994.
                        </p>
                    </div>       
                    <div>    
                        <img src={"/images/1757063.jpg"}/> 
                        <p>The photo on the left or above shows the Royal Viking Sky, built in 1973 and seen here arriving in Picton. 
                           This ship was lengthened by the popular 85 feet in 1991 and renamed Birka Queen. It originally had a passenger capacity of 536 and increased to 900 after lengthening. 
                           More details on this ship can be found here <a href ="https://en.wikipedia.org/wiki/MV_Boudicca">Royal Viking Sky</a>
                        </p>

                        <img src={"/images/2017-05-14-Ullapool-Cruise-Ship-Boudicca-8373_2000x.jpg"}/>
                        <p>The amazing thing about Royal Viking Sky, is that she is one of the survivors of cruise ships built in the 1970's. Here she can now be seen sailing as Boudicca in Ullapool, Scotland.
                           <br/>She is still cruising today as Boudicca under <a href ="https://www.fredolsencruises.com/our-ships/boudicca">Fred Olsen Cruises</a>.   
                        </p>    
                    </div>
                    
            </div>            
        )
    }
}


export default EvolutionPart2