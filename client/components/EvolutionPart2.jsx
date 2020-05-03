import React from 'react'
import {Link} from 'react-router-dom'

    
class EvolutionPart2 extends React.Component    {
    
    constructor(props)  {
        
        super(props)
    }    

    render()    { 
        

        return (
            <div>
                
                <div className = "header">
                    <h1>Evolution of Cruise Ships</h1> 
                </div>
                    
                <div className = "evoContainer">
                    <div className = "evoShips">  
                        <h3>Fairstar</h3>
                        <Link to = "/evolutionpart2/fairstar">
                            <img src={"/images/Evolution/Fairstar/Fairstar01.jpg"}/>
                        </Link>
                        <br/>
                        <p>Find out more on Fairstar, Click on Image</p>
                        <br/>
                        <p>Fairstar Ship Horn</p>
                        <br/>
                    </div>    

                    <div className = "evoShips">
                        <h3>Michelangelo</h3>
                        <Link to = "evolutionpart2/michelangelo">
                            <img src={"/images/Evolution/Michelangelo/michelangelo_1965_1.jpg"}/>
                        </Link>
                        <br/>
                        <p>Find out more on Michelangelo, Click on Image</p>
                        <br/>
                        <p>Michelangelo Ship Horn</p>
                        <br/>
                    </div>    

                    <div className = "evoShips">
                        <h3>Qe2</h3>
                        <Link to = "evolutionpart2/qe2">
                            <img src={"/images/Evolution/Qe2/5148955_orig.jpg"}/>
                        </Link>
                        <br/>
                        <p>Find out more on Qe2, Click on Image</p>
                        <br/>
                        <p>Qe2 Ship Horn</p>
                        <br/>
                    </div>

                    <div className = "evoShips">    
                        <h3>Song of Norway</h3>
                        <Link to = "evolutionpart2/songofnorway">
                            <img src={"/images/image_manager__rex_thumbnail_images_song_of_norway_08.06.1994.jpg"}/>
                        </Link>
                        <br/>
                        <p>Find out more on Song of Norway, Click on Image</p>
                        <br/>
                        <p>Song of Norway Ship Horn</p>
                        <br/>
                    </div>    

                    <div className = "evoShips">
                        <h3>Royal Viking Sky</h3>
                        <Link to = "/evolutionpart2/royalvikingsky">
                            <img src={"/images/1757063.jpg"}/>
                        </Link>
                        <br/>
                        <p>Find out more on Royal Viking Sky, Click on Image</p>
                        <br/>
                        <p>Royal Viking Sky Ship Horn</p>
                        <br/>
                    </div>

                    <div className = "evoShips">
                        <h3>Allure of the Seas</h3>
                        <Link to = "/evolutionpart2/allureoftheseas">
                            <img src={"/images/UFRPU.jpg"}/>
                        </Link>
                        <br/>
                        <p>Find out more on Allure of the Seas, Click on Image</p>
                        <br/>
                        <p>Allure of the Seas Ship Horn</p>
                        <br/>
                    </div>

                    <div className = "evoIntro">
                        <p>The photo on the left shows Fairstar, which was built in 1957 and is an example of an older style cruise ship. You can clearly see how these older ships had a lot of open deck space.  
                        On the open deck space you were able to go for a swim, play table tennis or catch up on some sun on the deck chairs. 
                        It is an interesting type of older cruise ship because it was originally used as a troop ship and got converted for cruising in 1965. It was the most popular cruise ship under P & O (Peninsular and Steam Navigation) during the late 80's and 90's
                        out of Sydney Harbour. 
                        More details on this ship can be found here <a href ="https://en.wikipedia.org/wiki/TSS_Fairstar">Fairstar</a>.
                        </p>
                        <br/>
                            
                        <p>The photo on the left shows the Song of Norway, built in 1970, when it was being lengthened. Due to to demand of cruises in the 70's cruise ship lengthening started and this was the first cruise ship ever to be 
                        lengthened in 1978. It was lengthening by 85 feet and the passenger capacity increased from 724 to 1024 people. She is now scrapped and more info can be found here <a href ="https://en.wikipedia.org/wiki/MS_Formosa_Queen">Song of Norway</a>  
                        </p>
                        <br/>
                        <p>Here she is as Song of Norway, sailing through the panama Canal in 1994.
                        </p>
                        <br/>

                        <p>The photo on the left or above shows the Royal Viking Sky, built in 1973 and seen here arriving in Picton. 
                        This ship was lengthened by the popular 85 feet in 1991 and renamed Birka Queen. It originally had a passenger capacity of 536 and increased to 900 after lengthening. 
                        More details on this ship can be found here <a href ="https://en.wikipedia.org/wiki/MV_Boudicca">Royal Viking Sky</a>
                        </p>
                            
                        <p>The amazing thing about Royal Viking Sky, is that she is one of the survivors of cruise ships built in the 1970's. Here she can now be seen sailing as Boudicca in Ullapool, Scotland.
                        <br/>She is still cruising today as Boudicca under <a href ="https://www.fredolsencruises.com/our-ships/boudicca">Fred Olsen Cruises</a>.   
                        </p>
                        <br/>

                        <p>The photo on the left shows Allure of the Seas, a modern cruise ship built in 2010, which has a more boxed shaped.
                        These modern cruise ships don't have as much deck space for the same size of ship as the older classic cruise liners. 
                        From the photo you can see that passengers are on the deck above the bow, whereas in the older cruise ships there was no deck space for passengers.
                        In the older cruise ships there was a lot more deck space by the funnel, mast and the back of the ship, than the modern cruise ships, which don't have much.
                        The modern cruise ships have greater Gross Tonnage or interior space, than the older ships because of this. <br/>1 Gross Ton is equal to 2.83m^3 or 100 cubic feet and is a a measure of the total internal volume of a ship,
                        which is used for charging ships at port or going through canals like Panama Canal. <br/>
                        With extra space modern cruise ships have, there is room for more amenities or activities to do than classic liners, like rock climbing, water slides and tennis courts.
                        Whatever you decide is totally your preference.      
                        More details on this ship can be found here <a href ="https://en.wikipedia.org/wiki/MS_Allure_of_the_Seas">Allure of the Seas</a>.
                        </p>
                        <br/>
                    </div>
                </div>       
            </div>            
        )
    }
}


export default EvolutionPart2