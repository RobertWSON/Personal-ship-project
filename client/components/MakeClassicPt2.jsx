import React from 'react'
import {HashLink as Link} from 'react-router-hash-Link'


class MakeClassicPt2 extends React.Component   {
    constructor(props)  {
        super(props)
    }

    render()   {
        const   {
            original_ship_name, img, img_title, img_trials, img_trials_title, img_early, img_early_title, early_service_years, 
            build_yard, original_operator, registry_port, cost, imo, passenger_capacity_full, crew_capacity, gross_tonnage,
            length, beam, draft, height, funnel_height, speed, deadweight, lightship, loaded_displacement, power,power_rpm, 
            fuel_consumption, fresh_water, propellors, cruise_ship_name, name_after_lengthening, first_name_change, 
            second_name_change, third_name_change, fourth_name_change, fifth_name_change, sixth_name_change, seventh_name_change,
            eight_name_change, ninth_name_change          
        } = this.props

    return  (
        <React.Fragment>

            <h2 className = "shipTitle">{cruise_ship_name}</h2>

            <div className = "contents">

                <div className = "contentsHead">
                    <h3>Contents</h3>
                </div> 

                <div className = "contentsMenu">
        
                    <ol> 
                        <li><Link className = "early" smooth to = {`/evolutionpart1/${ship_name}/#early`}>Early Life</Link></li> 
                        <li><Link className = "cruise" smooth to = {`/evolutionpart1/${ship_name}/#cruise`}>As a Cruise Ship</Link></li>
                        <li><Link className = "mem" smooth to = {`/evolutionpart1/${ship_name}/#mem`}>Memorable Moments</Link></li>
                        <li><Link className = "plans" smooth to = {`/evolutionpart1/${ship_name}/#plans`}>Ship Plans</Link></li>
                        <li><Link className = "final" smooth to = {`/evolutionpart1/${ship_name}/#final`}>Final Years</Link></li> 
                    </ol>

                </div>         

            </div> 

            <div className = "classicContainer"> 

            <div className = "classicShip">

                <div className = "shipImage">
                    <img src = {img}
                     title = {img_title}/>
                </div>
            </div>

            <div className = "classicDetails">

                {/* Maybe have a div hear that handles inital specifications for the ship */}
              <div className = "initialDetails">
                  {/* Ship Specifications Title for every Ship */}
                <h2>{cruise_ship_name} Ship Specifications</h2>

                {/* Cruise Ship Original below only appears if there is information in the seeds.
                Also this only needs to appears if the ship has been lengthend or it go converted completely to a cruise ship eg Fairstar.  */}
                {cruise_ship_name !== '' && <h4>{cruise_ship_name} Original</h4>}
                {/* Original Name for specs that are needed when the ship started differently or got lengthened 
                eg Fairstar, Song of Norway and Royal Viking Sky */}
                {original_ship_name !== '' && <h3>Original Ship Name: {original_ship_name}</h3>}


                {/*  Maybe I put ship that has same name throughout career in cruiseDetails div
                Now we can go with below data for original ship */}
                {service_years !== '' && <h4>Years in Service: {service_years}</h4>}
                {build_yard !== '' && <h4>Builder: {build_yard}</h4>}
                {original_operator !== '' && <h4>Operator: {original_operator}</h4>}

                {operator !== '' && <h4>Operator: {operator}</h4>}
                {registry_port !== '' && <h4>Port of Registry: {registry_port}</h4>}
                {cost !== '' && <h4>Cost: {cost}</h4>}
                {imo !== '' && <h4>IMO Number: {imo}</h4>}
                {passenger_capacity_full !== '' && <h4>Maximum Passenger: {passenger_capacity_full}</h4>}
                {crew_capacity !== '' && <h4>Maximum Crew: {crew_capacity}</h4>}
                {gross_tonnage !== '' && <h4>Gross Tonnage: {gross_tonnage}</h4>}
                {length !== '' && <h4>Length: {length}</h4>}
                {beam !== '' && <h4>Beam: {beam}</h4>}
                {draft !== '' && <h4>Draft: {draft}</h4>}
                {height !== '' && <h4>Ship Height: {height}</h4>}
                {funnel_height !== '' && <h4>Ship Height to Funnel Top: {funnel_height}</h4>}
                {/* This space is where I have show more text, for when user wants to see more */}
                {/* To start with I am going to do show more text within classicDetails div  */}

                {speed !== '' && <h4>Speed: {speed}</h4>}
                {/* <h4>Maximum speed: {newResult[0]}</h4>}
                <h4>Cruising speed: {newResult[1]}</h4>} */}
                {deadweight !== '' && <h4>Deadweight: {deadweight}</h4>}
                {lightship !== '' && <h4>Lightship: {lightship}</h4>}
                {loaded_displacement !== '' && <h4>Loaded Displacement: {loaded_displacement}</h4>}
                {power !== '' && <h4>Power: {power}</h4>}
                {power_rpm !== '' && <h4>Propellor RPM: {power_rpm}</h4>}
                {fuel_type !== '' && <h4>Type of Fuel: {fuel_type}</h4>}
                {fuel_capacity !== '' && <h4>Fuel Capacity: {fuel_capacity}</h4>}
                {fuel_consumption !== '' && <h4>Fuel Consumption: {fuel_consumption}</h4>}
                {fresh_water !== '' && <h4>Fresh Water Capacity: {fresh_water}</h4>}
                {propellors !== '' && <h4>Propellor Type: {propellors}</h4>}
                {propellor_size !== '' && <h4>Propellor Size: {propellor_size}</h4>}
                {rudder !== '' && <h4>Rudder Type: {rudder}</h4>}
                {rudder_size !== '' && <h4>Rudder Size: {rudder_size}</h4>}
                {decks !== '' && <h4>Decks: {decks}</h4>}
                {accessible_decks !== '' && <h4>Passenger Decks: {accessible_decks}</h4>}
                {bridge_height !== '' && <h4>Bridge Height: {bridge_height}</h4>}
                {bridge_water !== '' && <h4>Bridge Height above Water: {bridge_water}</h4>}
                {shelter_deck !== '' && <h4>Shelter Deck: {shelter_deck}</h4>}
                {bow_bridge !== '' && <h4>Bow to Bridge Length: {bow_bridge}</h4>}
                {bow_height !== '' && <h4>Bow Height: {bow_height}</h4>}
              </div>    
                {/* Maybe end of div that handles inital specifications for the ship */}

                {/* Possibly a div hear that handles changed names for the ship, maybe have different background colour  */}
              <div className = "lengthenedDetails">
                
                <h2>{cruise_ship_name} after Lengthening</h2>
                
                {name_after_lengthening !== '' && <h2>Ship Name Changes:{name_after_lengthening} </h2>}
                {first_name_change !== '' && <h2 class = "NameChange">{first_name_change} </h2>}    
                {second_name_change !== '' && <h2 class = "NameChange">{second_name_change} </h2>}
                {third_name_change !== '' && <h2 class = "NameChange">{third_name_change} </h2>}
                {fourth_name_change !== '' && <h2 class = "NameChange">{fourth_name_change} </h2>}
                {fifth_name_change !== '' && <h2 class = "NameChange">{fifth_name_change} </h2>}
                {sixth_name_change !== '' && <h2 class = "NameChange">{sixth_name_change} </h2>}
                {seventh_name_change !== '' && <h2 class = "NameChange">{seventh_name_change} </h2>}
                {eighth_name_change !== '' && <h2 class = "NameChange">{eighth_name_change} </h2>}
                {ninth_name_change !== '' && <h2 class = "NameChange">{ninth_name_change} </h2>}

                {lengthened_service_yrs !== '' && <h2>Years in Service:{lengthened_service_yrs} </h2>}
                {operator !== '' && <h4>Operator: {operator}</h4>}
                
                {lengthened_passengers !== '' && <h2>Passengers (Maximum):{lengthened_passengers} </h2>}
                {lengthened_crew !== '' && <h2>Crew (Maximum): {lengthened_crew}</h2>}
                {lengthened_gt !== '' && <h2>Gross Tonnage: {lengthened_gt}</h2>}
                {lengthened_length !== '' && <h2>Length: {lengthened_length}</h2>}
                {lengthened_beam !== '' && <h2>Beam: {lengthened_beam}</h2>}
                {lengthened_draft !== '' && <h2>Draft (Maximum): {lengthened_draft}</h2>}
                {lengthened_deadweight !== '' && <h2>Deadweight (Maximum): {lengthened_deadweight}</h2>}
                {lengthened_lightship !== '' && <h2>Lightship Displacement: {lengthened_lightship}</h2>}
                {lengthened_displacement !== '' && <h2>Loaded Displacement (Maximum):{lengthened_displacement}</h2>}

              </div>

              {/* A div for when in was operating as a cruise ship    */}
              <div className = "cruiseDetails">    
            
                {cruise_ship_name !== '' && <h2>{cruise_ship__name} as a Cruise Ship</h2>}

                {/* Probably don't need all the specs below because they are in initialDetails for the original
                Maybe I should have cruise and variable name eg cruise_service_yrs */}
                {service_years !== '' && <h4>Years in Service: {service_years}</h4>}
                {operator !== '' && <h4>Operator: {operator}</h4>}
                {registry_port !== '' && <h4>Port of Registry: {registry_port}</h4>}
                {cost !== '' && <h4>Cost: {cost}</h4>}
                {imo !== '' && <h4>IMO Number: {imo}</h4>}
                {passenger_capacity_full !== '' && <h4>Maximum Passenger: {passenger_capacity_full}</h4>}
                {crew_capacity !== '' && <h4>Maximum Crew: {crew_capacity}</h4>}
                {gross_tonnage !== '' && <h4>Gross Tonnage: {gross_tonnage}</h4>}
                {length !== '' && <h4>Length: {length}</h4>}
                {beam !== '' && <h4>Beam: {beam}</h4>}
                {draft !== '' && <h4>Draft: {draft}</h4>}
                {height !== '' && <h4>Ship Height: {height}</h4>}
                {funnel_height !== '' && <h4>Ship Height to Funnel Top: {funnel_height}</h4>}
                {/* This space is where I have show more text, for when user wants to see more */}
                {/* To start with I am going to do show more text within classicDetails div  */}

                {speed !== '' && <h4>Speed: {speed}</h4>}
                {/* <h4>Maximum speed: {newResult[0]}</h4>}
                <h4>Cruising speed: {newResult[1]}</h4>} */}
                {deadweight !== '' && <h4>Deadweight: {deadweight}</h4>}
                {lightship !== '' && <h4>Lightship: {lightship}</h4>}
                {loaded_displacement !== '' && <h4>Loaded Displacement: {loaded_displacement}</h4>}
                {power !== '' && <h4>Power: {power}</h4>}
                {power_rpm !== '' && <h4>Propellor RPM: {power_rpm}</h4>}
                {fuel_type !== '' && <h4>Type of Fuel: {fuel_type}</h4>}
                {fuel_capacity !== '' && <h4>Fuel Capacity: {fuel_capacity}</h4>}
                {fuel_consumption !== '' && <h4>Fuel Consumption: {fuel_consumption}</h4>}
                {fresh_water !== '' && <h4>Fresh Water Capacity: {fresh_water}</h4>}
                {propellors !== '' && <h4>Propellor Type: {propellors}</h4>}
                {propellor_size !== '' && <h4>Propellor Size: {propellor_size}</h4>}
                {rudder !== '' && <h4>Rudder Type: {rudder}</h4>}
                {rudder_size !== '' && <h4>Rudder Size: {rudder_size}</h4>}
                {decks !== '' && <h4>Decks: {decks}</h4>}
                {accessible_decks !== '' && <h4>Passenger Decks: {accessible_decks}</h4>}
                {bridge_height !== '' && <h4>Bridge Height: {bridge_height}</h4>}
                {bridge_water !== '' && <h4>Bridge Height above Water: {bridge_water}</h4>}
                {shelter_deck !== '' && <h4>Shelter Deck: {shelter_deck}</h4>}
                {bow_bridge !== '' && <h4>Bow to Bridge Length: {bow_bridge}</h4>}
                {bow_height !== '' && <h4>Bow Height: {bow_height}</h4>}

              </div>    
                {/* </ShowMoreText> */}
                {/* End of show more text within classicDetails div */}

                {/* Possibly end of div that handles changed names for the ship with maybe different background colour */}
                
            </div>

            <div id = "early">     
                <h3>Early Life</h3>    
                <br/><br/>
                <p>{early_1st_para}</p>

                <video controls width = "500">
                    <source
                        src = {early_video}
                        type = "video/mp4"
                    />    
                </video>

                <img src = {img_trials}
                     title = {img_trials_title}/>

                <p>{early_2nd_para}</p>    

                <img src = {img_early}
                     title = {img_early_title}/>

                {/* <video controls width = "500">
                    <source
                        src = {early_video}
                        type = "video/mp4"
                    />    
                </video>      */}
            </div>

            <div id = "cruise">
                <h3>As a Cruise Ship</h3>    
                <br/><br/>
                <p>{cruise_1st_para}</p>

                <img src = {img_1stcruise}
                    title = {img_1stcruise_title}/>

                {/* Heading for Lengthening     */}
                {/* Paragraph talking about lengthening of ship    */}

                <p>{cruise_2nd_para}</p>

                 <video controls width = "500">
                    <source
                        src = {cruise_video}
                        type = "video/mp4"
                    />    
                </video>
   
            </div>

            <div id = "mem">     
                <h3>Memorable Moments</h3>

                <p>{mem_1st_para}</p>

                <video controls width = "500">
                    <source
                        src = {mem_video}
                        type = "video/mp4"
                    />    
                </video>

                <p>{mem_2nd_para}</p>

            </div>

            <div id = "plans">    
                <h3>{ship_name} Ship Plans</h3>  
                <br/><br/>

                <p>{plans_para}</p>
                <img src = {ship_plans} />
                <img src = {ship_plans_cont} />           
            </div>    

            <div id = "final">    
                <h3>Final Years</h3> 

                <p>{final_1st_para}</p>
                <p>{final_2nd_para}</p>

            </div>

            {/* Commented because these ships in Part 1 are not in service now. Will need this is Part 2. */}
            {/* <div className = "recent">
                <h3>Recent Times</h3>
            </div> */}

            </div>           

        </React.Fragment>
        )
        
    }
}

export default MakeClassicPt2