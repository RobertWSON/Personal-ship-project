import React from 'react'
// Show More Text commented for now, because not working
// import ShowMoreText from 'react-show-more-text'
import {HashLink as Link} from 'react-router-hash-Link'


class MakeClassic extends React.Component   {
    constructor(props)  {
        super(props)
    }

    // functions for Show More Text commented for now, because not working
    // executeOnClick(isExpanded) {
    //     console.log(isExpanded);
    // }


    render()   {
        const   {
            ship_name, img, img_title, service_years, france_service_years, early_service_years, original_name, early_years,
            pacific_princess_years, pacific_years, loveboat_final_year, build_yard, operator, registry_port, cost, imo, 
            passenger_capacity_full, crew_capacity, gross_tonnage, length, beam, draft, height, funnel_height, speed, deadweight, 
            lightship, loaded_displacement, power, power_rpm, fuel_type, fuel_capacity, fuel_consumption, fresh_water, propellors,
            propellor_size, rudder, rudder_size, decks, accessible_decks, bridge_height, bridge_water, shelter_deck, 
            bow_bridge, bow_height, cruise_ship_name, norway_years, norway_operator, conversion_cost, norway_passengers, 
            norway_crew, norway_gt, norway_fuel_capacity, norway_fuel_consume, norway_fresh_water, norway_speed, 
            norway_passenger_decks, norway_last_name, norway_final_year, norway_final_gt, galileo_name, galileo_years, galileo_gt, 
            galileo_passenger_capacity, meridian_name, meridian_years, meridian_gt, meridian_passenger_capacity, gg_last_name,
            sunvista_years, sunvista_gt, sunvista_passenger_capacity, early_1st_para, early_2nd_para, cruise_1st_para, ship_plans, 
            ship_plans_cont, img_trials, img_trials_title, img_early, img_early_title, img_1stcruise, img_1stcruise_title, 
            early_video, cruise_video, mem_video, cruise_2nd_para, mem_1st_para, mem_2nd_para, plans_para, final_1st_para, final_2nd_para
        } = this.props

        // const newResult = speed.split('|')
        // newResult = ['Maximum 23 knots (43 km/ hr, 26 mph)', '21 knots (39 km/ hr, 24 mph)']
      

    return  (
        <React.Fragment>

            {/* <div className = "classicContainer"> */}

            <h2 className = "shipTitle">{ship_name}</h2>

            <div className = "contents">

                <div className = "contentsHead">
                    <h3>Contents</h3>
                </div>

                <div className = "contentsMenu">
                    <ol>
                    {/* <li className = "early">< Link smooth to = {`/evolutionpart1/${ship_name}/#early`}>Early Life</Link></li> */}
                        <li><Link className = "early" smooth to = {`/evolutionpart1/${ship_name}/#early`}>Early Life</Link></li> 
                        
                        <li><Link className = "cruise" smooth to = {`/evolutionpart1/${ship_name}/#cruise`}>As a Cruise Ship</Link></li>
                        <li><Link className = "mem" smooth to = {`/evolutionpart1/${ship_name}/#mem`}>Memorable Moments</Link></li>
                        <li><Link className = "plans" smooth to = {`/evolutionpart1/${ship_name}/#plans`}>Ship Plans</Link></li>
                        <li><Link className = "final" smooth to = {`/evolutionpart1/${ship_name}/#final`}>Final Years</Link></li> 
                        {/* <li><Link smooth to = {`/evolutionpart1/${ship_name}/#early`}>Early Life</Link></li>
                        <li><Link smooth to = {`/evolutionpart1/${ship_name}/#cruise`}>As a Cruise Ship</Link></li>
                        <li><Link smooth to = {`/evolutionpart1/${ship_name}/#mem`}>Memorable Moments</Link></li>
                        <li><Link smooth to = {`/evolutionpart1/${ship_name}/#plans`}>Ship Plans</Link></li>
                        <li><Link smooth to = {`/evolutionpart1/${ship_name}/#final`}>Final Years</Link></li> */}
                    </ol>
                </div>        

                {/* Headings below commented because I need Links */}
                {/* <h4>Early Life</h4>
                <h4>As a Cruise Ship</h4>
                <h4>Memorable Moments</h4>
                <h4>Ship Plans</h4>
                <h4>Final Years </h4>  */}
                {/* Commented because these ships in Part 1 are not in service now.  */}
                {/* <h4>Recent Times</h4> */}
            </div>

            <div className = "classicContainer"> 

            <div className = "classicShip">

                <div className = "shipImage">
                <img src = {img}
                     title = {img_title}/>
                </div>
            </div>

            <div className = "classicDetails">
            {/* <div className = "ShipDetails"> */}

                {/* Maybe have a div hear that handles inital specifications for the ship */}
              <div className = "initialDetails">
                <h2>{ship_name} Ship Specifications</h2>
                {/* <h3>Ship Specifications</h3> */}
                {service_years !== '' && <h4>Years in Service: {service_years}</h4>}
                {france_service_years !== '' && <h4>Service Years as France: {france_service_years}</h4>}
                {early_service_years !== '' && <h4>Service Years as Galileo Galilei: {early_service_years}</h4>}
                {original_name !== '' && <h4>Pacific Princess Original Name: {original_name}</h4>}
                {early_years !== '' && <h4>Years as Sea Venture: {early_years}</h4>}
                {pacific_princess_years !== '' && <h4>Years as Pacific Princess: {pacific_princess_years}</h4>}
                {pacific_years !== '' && <h4>Years as Pacific: {pacific_years}</h4>}
                {loveboat_final_year !== '' && <h4>Love Boat's Final Year: {loveboat_final_year}</h4>}
                {build_yard !== '' && <h4>Builder: {build_yard}</h4>}
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
                {/* <ShowMoreText
                       Default options 
                    lines={48}
                    more='Show more'
                    less='Show less'
                    anchorClass=''
                    onClick={this.executeOnClick}
                    expanded={false}
                    width={480}
                >  */}

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
              <div className = "norwayDetails">
                {/* {ship_name !== '' && <h2>{ship_name} as a Cruise Ship</h2>} */}
                {cruise_ship_name !== '' && <h2>{cruise_ship_name} as a Cruise Ship</h2>}
                {/* <h2>France as a Cruise Ship</h2> */}
                {/* {cruise_ship_name !== '' && <h4>{cruise_ship_name} as a Cruise Ship</h4>} */}

                {cruise_ship_name !== '' && <h4>France Liner New Name: {cruise_ship_name}</h4>}
                {norway_years !== '' && <h4>Years as Norway: {norway_years}</h4>}
                {norway_operator !== '' && <h4>Operator: {norway_operator}</h4>}
                {conversion_cost !== '' && <h4>France to Norway Conversion Cost:{conversion_cost}</h4>}
                {norway_passengers !== '' && <h4>Norway Maximum Passenger: {norway_passengers}</h4>}
                {norway_crew !== '' && <h4>Norway Maximum Crew: {norway_crew}</h4>}
                {norway_gt !== '' && <h4>Norway Gross Tonnage: {norway_gt}</h4>}
                {norway_fuel_capacity !== '' && <h4>Norway Fuel Capacity: {norway_fuel_capacity}</h4>}
                {norway_fuel_consume !== '' && <h4>Norway Fuel Consumption: {norway_fuel_consume}</h4>}
                {norway_fresh_water !== '' && <h4>Norway Fresh Water Capacity: {norway_fresh_water}</h4>}
                {norway_speed !== '' && <h4>Norway Speed: {norway_speed}</h4>}
                {norway_passenger_decks !== '' && <h4>Norway Passenger Decks: {norway_passenger_decks}</h4>}
                {norway_last_name !== '' && <h4>France's Last Name: {norway_last_name}</h4>}
                {norway_final_year !== '' && <h4>France's Final Year: {norway_final_year}</h4>}
                {norway_final_gt !== '' && <h4>France's Final Gross Tonnage:{norway_final_gt}</h4>}
              </div>

              {/* A div for Galileo Galilei as a cruise ship    */}
              <div className = "galileoDetails">    
                {/* {ship_name !== '' && <h2>{ship_name} as a Cruise Ship</h2>} */}
                {galileo_name !== '' && <h2>{galileo_name} as a Cruise Ship</h2>}
                {/* <h2>Galileo Galilei as a Cruise Ship</h2> */}
                {/* {galileo_name !== '' && <h4>{galileo_name} as a Cruise Ship</h4>}  */}

                {galileo_name !== '' && <h4>Galileo Galilei's 1st New Name: {galileo_name}</h4>}
                {galileo_years !== '' && <h4>Years as Galileo: {galileo_years}</h4>}
                {galileo_gt !== '' && <h4>Galileo Gross Tonnage: {galileo_gt}</h4>}
                {galileo_passenger_capacity !== '' && <h4>Galileo Maximum Passengers: {galileo_passenger_capacity}</h4>}
                {meridian_name !== '' && <h4>Galileo Galilei's 2nd New Name: {meridian_name}</h4>}
                {meridian_years !== '' && <h4>Years as Meridian: {meridian_years}</h4>}
                {meridian_gt !== '' && <h4>Meridian Gross Tonnage: {meridian_gt}</h4>}
                {meridian_passenger_capacity !== '' && <h4>Meridian Maximum Passengers: {meridian_passenger_capacity}</h4>}
                {gg_last_name !== '' && <h4>Galileo Galilei's Last Name: {gg_last_name}</h4>} 
                {sunvista_years !== '' &&<h4>Years as Sun Vista: {sunvista_years}</h4>}
                {sunvista_gt !== '' && <h4>Sun Vista Gross Tonnage: {sunvista_gt}</h4>}
                {sunvista_passenger_capacity !== '' && <h4>Sun Vista Maximum Passengers: {sunvista_passenger_capacity}</h4>}

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

export default MakeClassic