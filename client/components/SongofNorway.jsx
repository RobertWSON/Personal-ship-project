import React from 'react'
import {HashLink as Link} from 'react-router-hash-link'

class SongofNorway extends React.Component   {
    constructor(props)  {
        super(props)
    }

    render()    {

        return  (
            <React.Fragment>
                <h2 className = "ship">Song of Norway</h2>

                <h3>Contents</h3>
                <Link className = "Contents" smooth to = {`/evolutionpart1/songofnorway/#${History}`}>
                    History
                </Link>
                <br/>

                <img src={"/images/image_manager__rex_thumbnail_images_song_of_norway_08.06.1994.jpg"}/>

                <div className = "ShipDetails">
                    <h3>Song of Norway</h3>
                    <div className = "SongofNorway">
                        {/* Original Specs */}
                        <h3>Ship Specifications</h3>
                        <h4>Years in Service:               1970 - 2013</h4>
                        <h4>Passenger Capacity (Full):      724</h4>
                        <h4>Crew Capacity:                  400</h4>
                        <h4>Gross Tonnage:                  18416</h4>
                        <h4>Length:                         168.32 m ( feet  inches)</h4>
                        <h4>Beam:                           23.96 m ( feet  inches)</h4>
                        <h4>Draft (Maximum):                6.70 m ( feet  inches)</h4>
                        <h4>Height:                         44.85 m ( feet)</h4>
                        <h4>Deadweight (Maximum):           3202 Tonnes</h4>
                        <h4>Light Ship Displacement:        12250 Tonnes</h4>
                        <h4>Loaded Displacement (Maximum):  15452 Tonnes</h4>
                    </div>

                    <h3>Sundream</h3>
                    <div className = "Sundream">
                        {/* Changed Specs */}
                        <h3>Ship Specifications</h3>
                        <h4>Years in Service:               1991 - 2013</h4>
                        <h4>Passenger Capacity (Full):      1024</h4>
                        <h4>Crew Capacity:                  600</h4>
                        <h4>Gross Tonnage:                  23095</h4>
                        <h4>Length:                         194.32 m ( feet  inches)</h4>
                        <h4>Beam:                           23.96 m ( feet  inches)</h4>
                        <h4>Draft (Maximum):                7.00 m ( feet  inches)</h4>
                        <h4>Height:                         44.85 m ( feet)</h4>
                        <h4>Deadweight (Maximum):           4295 Tonnes</h4>
                        <h4>Light Ship Displacement:        14350 Tonnes</h4>
                        <h4>Loaded Displacement (Maximum):  18645 Tonnes</h4>
                    </div>
                </div>

                <h3 id ={History}>History or Background</h3>
                <br/>
                <p>The Song of Norway operated with Royal Caribbean Cruise Line from 1970 to 1997.
                   <br/><br/><strong>Above</strong> she can be seen cruising through the panama Canal in 1994.
                   <br/><br/>Due to to demand of cruises in the 70's cruise ship lengthening started and this was the first cruise ship ever to be lengthened in cruise ship history.
                   <br/><br/><strong>Below</strong> she can be seen being lengthend in 1978. 
                   <br/>She was lengthenend by 85 feet and the passenger capacity increased from 724 to 1024 people. 
                </p>
                <br/>

                <img src = {"/images/b5ac2c1fe37dee95a51c61cd713f42dc.jpg"}/> 

                <p>

                </p>

                <p>Here are the deck plans of Song of Norway below.
                </p>

                <br/>

                {/* <imgr src = {""}/> */}

                <p>In  1991 she had a name change and was now called Sundream
                </p>

                {/* <img src = {"/images/b5ac2c1fe37dee95a51c61cd713f42dc.jpg"}/> */}

                <br/><br/>
                
                <div id = "plans">    
                    <h3>Song of Norway Ship Plans</h3>  
                    <br/><br/>

                    <p></p>
                    <img src = {'/images/Evolution/Michelangelo/Michangelo_Side_View_Plan.jpeg'} />
                    <img src = {'/images/Evolution/Michelangelo/Michelangelo_Full_Ship_Plans.jpg'} />
                {/* <img src = {ship_plans_cont} />            */}
                </div>

                <button>
                <Link to="/evolutionpart1">Back to Evolution (Part 1)</Link>
            </button>

            </React.Fragment>
        )
    }    
}

export default SongofNorway