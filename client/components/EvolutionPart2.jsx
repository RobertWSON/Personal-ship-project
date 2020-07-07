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
                            <img src={"/images/Evolution/Fairstar/Fairstar01.jpg"}
                            title = "Fairstar cruising off Pacific Islands in early 90's"/>
                        </Link>
                        {/* <br/> */}
                        <p>Find out more on Fairstar, Click on Image</p>
                        {/* <br/> */}
                        <p>Fairstar Ship Horn</p>
                        <br/>
                    </div>    

                    <div className = "evoShips">
                        <h3>Michelangelo</h3>
                        <Link to = "evolutionpart2/michelangelo">
                            <img src={"/images/Evolution/Michelangelo/michelangelo_1965_1.jpg"}
                            title = "Michelangelo cruising off Canary Islands in 1965"/>
                        </Link>                        
                        <p>Find out more on Michelangelo, Click on Image</p>                    
                        <p>Michelangelo Ship Horn</p>
                    </div>    

                    <div className = "evoShips">
                        <h3>Qe2</h3>
                        <Link to = "evolutionpart2/qe2">
                            <img src={"/images/Evolution/Qe2/5148955_orig.jpg"}
                            title = " Queen Elizabeth 2 in original colours, cruising off Canary Isles "/>
                        </Link>                   
                        <p>Find out more on Qe2, Click on Image</p>                        
                        <p>Qe2 Ship Horn</p>
                    </div>

                    <div className = "evoShips">    
                        <h3>Song of Norway</h3>
                        <Link to = "evolutionpart2/songofnorway">
                            <img src={"/images/image_manager__rex_thumbnail_images_song_of_norway_08.06.1994.jpg"}
                            title = "Song of Norway in Panama Canal 1994"/>
                        </Link>
                        <p>Find out more on Song of Norway, Click on Image</p>
                        <p>Song of Norway Ship Horn</p>
                    </div>    

                    <div className = "evoShips">
                        <h3>Royal Viking Sky</h3>
                        <Link to = "/evolutionpart2/royalvikingsky">
                            <img src={"/images/1757063.jpg"}
                            title = "Royal Viking Sky in Picton, New Zealand, March 1982"/>
                        </Link>
                        <p>Find out more on Royal Viking Sky, Click on Image</p>
                        <p>Royal Viking Sky Ship Horn</p>
                    </div>

                    <div className = "evoShips">
                        <h3>Allure of the Seas</h3>
                        <Link to = "/evolutionpart2/allureoftheseas">
                            <img src={"/images/UFRPU.jpg"}
                            title = "Allure of the Seas maiden voyage celebration"/>
                        </Link>
                        <p>Find out more on Allure of the Seas, Click on Image</p>
                        <p>Allure of the Seas Ship Horn</p>                        
                    </div>

                    <div className = "evoIntro">
                    <h3 className = "Endings">History (Last of the Classics)</h3>
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