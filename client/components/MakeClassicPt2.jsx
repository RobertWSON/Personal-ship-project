import React from 'react'
import HoverContents2 from './HoverContents2'


class MakeClassicPt2 extends React.Component   {
    constructor(props)  {
        super(props)
    }

    render()    {
        const   {
            // Original props before more added
            // original_ship_name, img, img_title, img_trials, img_trials_title, img_early, img_early_title, early_service_years, 
            // build_yard, original_operator, registry_port, cost, imo, passenger_capacity_full, crew_capacity, gross_tonnage,
            // length, beam, draft, height, funnel_height, speed, deadweight, lightship, loaded_displacement, power,power_rpm, 
            // fuel_consumption, fresh_water, propellors, cruise_ship_name, name_after_lengthening, first_name_change, 
            // second_name_change, third_name_change, fourth_name_change, fifth_name_change, sixth_name_change, seventh_name_change,
            // eighth_name_change, ninth_name_change, cruise_years  
            
            // Ship Name used for web address, titles and Evolution Part 2 Ship Image (Official Name)
            classic_ship_name,

            // Original Ship Data (intialDetails)
            img, img_title, original_ship_name, early_service_years, build_yard, original_operator,
            registry_port, cost, imo, passenger_capacity_full, crew_capacity, gross_tonnage, length, beam, draft, 
            height, funnel_height, speed, deadweight, lightship, loaded_displacement, power, power_rpm, fuel_capacity, 
            fuel_consumption, fresh_water, propellors, propellor_size, rudder, rudder_size, decks, accessible_decks,   
            bridge_height, bridge_water, shelter_deck, bow_bridge, bow_height,   

            // Data for when it was a Cruise Ship (cruiseDetails)
            cruise_ship_name, cruise_years, cruise_operator, cruise_reg_port, conversion_cost, cruise_passengers_max,
            cruise_crew_max, cruise_gt, cruise_funnel_hgt, cruise_speed, cruise_deadweight, cruise_lightship,
            cruise_displacement, cruise_power, cruise_power_rpm, cruise_fuel_capacity, cruise_fuel_consumption, 
            cruise_fresh_water, cruise_propellors, cruise_propellor_size, cruise_rudder, cruise_rudder_size, 
            cruise_decks, cruise_passenger_decks, cruise_bridge_height, cruise_bridge_water,cruise_shelter_deck, 
            cruise_bow_bridge, cruise_bow_height,   
            
            // Data for when the cruise ship was lengthened
            name_after_lengthening, first_name_change, second_name_change, third_name_change, fourth_name_change,
            fifth_name_change, sixth_name_change, seventh_name_change, eighth_name_change, ninth_name_change, 
            lengthened_service_yrs, lengthened_operator, lengthened_reg_port, lengthened_cost, lengthened_passengers, 
            lengthened_crew, lengthened_gt, lengthened_length, lengthened_beam, lengthened_draft, 
            lengthened_deadweight, lengthened_lightship, lengthened_displacement, lengthened_funnel_hgt, 
            lengthened_speed, lengthened_power, lengthened_power_rpm, lengthened_fuel_capacity,
            lengthened_fuel_consumption, lengthened_propellors, lengthened_propellor_size, lengthened_rudder, 
            lengthened_rudder_size, lengthened_decks, lengthened_passenger_decks, lengthened_bridge_height, 
            lengthened_bridge_water, lengthened_shelter_deck, lengthened_bow_bridge, lengthened_bow_height,

            // div id = early
            early_1st_para, early_video, img_trials, img_trials_title, early_2nd_para, img_early, img_early_title,
            
            // div id = cruise
            cruise_1st_para, img_1stcruise, img_1stcruise_title, cruise_2nd_para, cruise_video,
            
            // Paragraph and Photo of lengthened cruise ship
            name_before_lengthening, lengthened_para, img_lengthened, img_lengthened_title,
            afterlengthen_para, img_afterlengthen, img_afterlengthen_title,  
            // May not need this img_after_lengthened because img_1stcruise could be use instead
            // img_after_lengthened: '',

            // Now we try having paragrah and image for each of the times the cruise ship changed cruise operators
            img_2ndcruise, img_2ndcruise_title,
            cruise_3rd_para, img_3rdcruise, img_3rdcruise_title,
            cruise_4th_para, img_4thcruise, img_4thcruise_title,         
            cruise_5th_para, img_5thcruise, img_5thcruise_title,
            cruise_6th_para, img_6thcruise, img_6thcruise_title,
            cruise_7th_para, img_7thcruise, img_7thcruise_title,
            cruise_8th_para,img_8thcruise, img_8thcruise_title,
            cruise_9th_para, img_9thcruise, img_9thcruise_title,
            cruise_10th_para, img_10thcruise, img_10thcruise_title,
            // End of Cruise Ship section with paragraphs and images


            // div id = mem
            mem_1st_para, mem_video, mem_2nd_para,
            
            // div id = plans 
            plans_para, ship_plans, ship_plans_cont,  

            // div id = final
            final_1st_para, final_2nd_para, img_final, img_final_title 

        } = this.props

    return  (
        <React.Fragment>

            {/* <h2 className = "shipTitle">{cruise_ship_name}</h2> */}
            <h2 className = "shipTitle">{classic_ship_name}</h2>

            {/* All the divs (including contents) are put in the HoverContents component.
            This is because the hover events need to be controlled by the outer contents div here. */}

            {/* Code below passes classic ship prop to HoverContents component */}
            <HoverContents2 classicName={classic_ship_name}/>                

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
                <h2>{classic_ship_name} Ship Specifications</h2>

                {/* Cruise Ship Original below only appears if there is information in the seeds.
                Also this only needs to appears if the ship has been lengthend or it go converted completely to a cruise ship eg Fairstar.  */}
                {classic_ship_name !== '' && <h4>{classic_ship_name} Original</h4>}
                {/* Original Name for specs that are needed when the ship started differently or got lengthened 
                eg Fairstar, Song of Norway and Royal Viking Sky */}
                {original_ship_name !== '' && <h3>Original Ship Name: {original_ship_name}</h3>}


                {/*  Maybe I put ship that has same name throughout career in cruiseDetails div
                Now we can go with below data for original ship */}
                {/* {service_years !== '' && <h4>Years in Service: {service_years}</h4>} */}
                {early_service_years !== '' && <h4>Years in Service: {early_service_years}</h4>}
                {build_yard !== '' && <h4>Builder: {build_yard}</h4>}
                {original_operator !== '' && <h4>Operator: {original_operator}</h4>}
                {/* {operator !== '' && <h4>Operator: {operator}</h4>} */}
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
                {/* I may not need furl_type because the all have marine oil */}
                {/* {fuel_type !== '' && <h4>Type of Fuel: {fuel_type}</h4>} */}
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

              {/* A div for when it was operating as a cruise ship */}
              <div className = "cruiseDetails">    
            
                {cruise_ship_name !== '' && <h2>{cruise_ship_name} as a Cruise Ship</h2>}

                {/* Probably don't need all the specs below because they are in initialDetails for the original
                Maybe I should have cruise and variable name eg cruise_service_yrs */}

                {/* Maybe have cruise_years instead of service_years */}    
                {cruise_years !== '' && <h4>Years as a CruiseShip: {cruise_years}</h4>}
                {/* {service_years !== '' && <h4>Years in Service: {service_years}</h4>} */}
                
                {/* Maybe have cruise_operator instead of operator */}
                {cruise_operator !== '' && <h4>Cruise Operator: {cruise_operator}</h4>}
                {/* {operator !== '' && <h4>Operator: {operator}</h4>} */}

                {/* Maybe have cruise_reg_port instead of registry_port */}
                {cruise_reg_port !== '' && <h4>Port of Registry: {cruise_reg_port}</h4>}
                {/* {registry_port !== '' && <h4>Port of Registry: {registry_port}</h4>} */}

                {/* Maybe have conversion_cost instead of cost */}
                {conversion_cost !== '' && <h4>Conversion Cost: {conversion_cost}</h4>}
                {/* {cost !== '' && <h4>Cost: {cost}</h4>} */}

                {/* Maybe have cruise_passengers_max instead of passenger_capacity_full */}
                {cruise_passengers_max !== '' && <h4>Maximum Cruise Passengers: {cruise_passengers_max}</h4>}
                {/* {passenger_capacity_full !== '' && <h4>Maximum Passenger: {passenger_capacity_full}</h4>} */}

                {/* Maybe have cruise_crew_max instead of crew_capacity */}
                {cruise_crew_max !== '' && <h4>Maximum Cruise Crew: {cruise_crew_max}</h4>}
                {/* {crew_capacity !== '' && <h4>Maximum Crew: {crew_capacity}</h4>} */}
                
                {/* Maybe have cruise_gt instead of gross_tonnage */}
                {cruise_gt !== '' && <h4>Gross Tonnage: {cruise_gt}</h4>}
                {/* {gross_tonnage !== '' && <h4>Gross Tonnage: {gross_tonnage}</h4>} */}

                {/* These below are extras may not need all of them */}
                {cruise_funnel_hgt !== '' && <h4>Funnel Height: {cruise_funnel_hgt}</h4>}
                {cruise_speed !== '' && <h4>Speed: {cruise_speed}</h4>}
                {cruise_deadweight !== '' && <h4>Deadweight:{cruise_deadweight}</h4>}
                {cruise_lightship !== '' && <h4>lightship{cruise_lightship}</h4>}
                {cruise_displacement !== '' && <h4>Displacement (Maximum):{cruise_displacement}</h4>}
                {cruise_power !== '' && <h4>Power:{cruise_power}</h4>}
                {cruise_power_rpm !== '' && <h4>Propellor RPM:{cruise_power_rpm}</h4>}
                {cruise_fuel_capacity !== '' && <h4>Fuel Capacity:{cruise_fuel_capacity}</h4>}
                {cruise_fuel_consumption !== '' && <h4>Fuel Consumption:{cruise_fuel_consumption}</h4>}
                {cruise_fresh_water !== '' && <h4>Fresh Water Capacity:{cruise_fresh_water}</h4>}
                {cruise_propellors !== '' && <h4>Propellor Type:{cruise_propellors}</h4>}
                {cruise_propellor_size !== '' && <h4>Propellor Size:{cruise_propellor_size}</h4>}
                {cruise_rudder !== '' && <h4>Rudder Type:{cruise_rudder}</h4>}
                {cruise_rudder_size !== '' && <h4>Rudder Size:{cruise_rudder_size}</h4>}
                {cruise_decks !== '' && <h4>Total Number of Decks:{cruise_decks}</h4>}
                {cruise_passenger_decks !== '' && <h4>Passenger Decks:{cruise_passenger_decks}</h4>}
                {cruise_bridge_height !== '' && <h4>Bridge Height:{cruise_bridge_height}</h4>}
                {cruise_bridge_water !== '' && <h4>Bridge Height Above Water:{cruise_bridge_water}</h4>}
                {cruise_shelter_deck !== '' && <h4>Shelter Deck:{cruise_shelter_deck}</h4>}
                {cruise_bow_bridge !== '' && <h4>Bow to Bridge Length:{cruise_bow_bridge}</h4>}
                {cruise_bow_height !== '' && <h4>Bow Height:{cruise_bow_height}</h4>}

              </div>

                {/* Possibly a div hear that handles changed names for the ship, maybe have different background colour  */}
              <div className = "lengthenedDetails">
                
                <h2>{cruise_ship_name} after Lengthening</h2>
                
                {name_after_lengthening !== '' && <h4 className = "NameChange">Ship Name Changes: {name_after_lengthening} </h4>}
                {first_name_change !== '' && <h4 className = "NameChange">{first_name_change} </h4>}    
                {second_name_change !== '' && <h4 className = "NameChange">{second_name_change} </h4>}
                {third_name_change !== '' && <h4 className = "NameChange">{third_name_change} </h4>}
                {fourth_name_change !== '' && <h4 className = "NameChange">{fourth_name_change} </h4>}
                {fifth_name_change !== '' && <h4 className = "NameChange">{fifth_name_change} </h4>}
                {sixth_name_change !== '' && <h4 className = "NameChange">{sixth_name_change} </h4>}
                {seventh_name_change !== '' && <h4 className = "NameChange">{seventh_name_change} </h4>}
                {eighth_name_change !== '' && <h4 className = "NameChange">{eighth_name_change} </h4>}
                {ninth_name_change !== '' && <h4 className = "NameChange">{ninth_name_change} </h4>}

                {lengthened_service_yrs !== '' && <h4>Years in Service:{lengthened_service_yrs} </h4>}
                
                {lengthened_operator !== '' && <h4>Cruise Operators: {lengthened_operator}</h4>}
                {lengthened_reg_port !== '' && <h4>Port of Registry: {lengthened_reg_port}</h4>}
                {lengthened_cost !== '' && <h4>Cost to Lengthen: {lengthened_cost}</h4>}

                {lengthened_passengers !== '' && <h4>Passengers (Maximum):{lengthened_passengers} </h4>}
                {lengthened_crew !== '' && <h4>Crew (Maximum): {lengthened_crew}</h4>}
                {lengthened_gt !== '' && <h4>Gross Tonnage: {lengthened_gt}</h4>}
                {lengthened_length !== '' && <h4>Length: {lengthened_length}</h4>}
                {lengthened_beam !== '' && <h4>Beam: {lengthened_beam}</h4>}
                {lengthened_draft !== '' && <h4>Draft (Maximum): {lengthened_draft}</h4>}
                {lengthened_deadweight !== '' && <h4>Deadweight (Maximum): {lengthened_deadweight}</h4>}
                {lengthened_lightship !== '' && <h4>Lightship Displacement: {lengthened_lightship}</h4>}
                {lengthened_displacement !== '' && <h4>Loaded Displacement (Maximum):{lengthened_displacement}</h4>}

                {/* These below are extras may not need all of them */}
                {lengthened_funnel_hgt !== '' && <h4>Funnel Height: {lengthened_funnel_hgt}</h4>}
                {lengthened_speed !== '' && <h4>Speed: {lengthened_speed}</h4>}
                {lengthened_deadweight !== '' && <h4>Deadweight:{lengthened_deadweight}</h4>}
                {lengthened_lightship !== '' && <h4>Lightship: {lengthened_lightship}</h4>}
                {lengthened_displacement !== '' && <h4>Displacement (Maximum):{lengthened_displacement}</h4>}
                {lengthened_power !== '' && <h4>Power:{lengthened_power}</h4>}
                {lengthened_power_rpm !== '' && <h4>Propellor RPM:{lengthened_power_rpm}</h4>}
                {lengthened_fuel_capacity !== '' && <h4>Fuel Capacity:{lengthened_fuel_capacity}</h4>}
                {lengthened_fuel_consumption !== '' && <h4>Fuel Consumption:{lengthened_fuel_consumption}</h4>}
                {lengthened_propellors !== '' && <h4>Propellor Type:{lengthened_propellors}</h4>}
                {lengthened_propellor_size !== '' && <h4>Propellor Size:{lengthened_propellor_size}</h4>}
                {lengthened_rudder !== '' && <h4>Rudder Type:{lengthened_rudder}</h4>}
                {lengthened_rudder_size !== '' && <h4>Rudder Size:{lengthened_rudder_size}</h4>}
                {lengthened_decks !== '' && <h4>Total Number of Decks:{lengthened_decks}</h4>}
                {lengthened_passenger_decks !== '' && <h4>Passenger Decks:{lengthened_passenger_decks}</h4>}
                {lengthened_bridge_height !== '' && <h4>Bridge Height:{lengthened_bridge_height}</h4>}
                {lengthened_bridge_water !== '' && <h4>Bridge Height Above Water:{lengthened_bridge_water}</h4>}
                {lengthened_shelter_deck !== '' && <h4>Shelter Deck:{lengthened_shelter_deck}</h4>}
                {lengthened_bow_bridge !== '' && <h4>Bow to Bridge Length:{lengthened_bow_bridge}</h4>}
                {lengthened_bow_height !== '' && <h4>Bow Height:{lengthened_bow_height}</h4>}

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
 
                <br/>
                <br/>
                <p>Contents:    Previous       Next        Top</p>

            </div>

            <div id = "cruise">
                <h3>As a Cruise Ship</h3>    
                <br/><br/>
                <p>{cruise_1st_para}</p>

                <img src = {img_1stcruise} title = {img_1stcruise_title}/>

                {/* Heading for Lengthening     */}
                {/* <h4>{classic_ship_name} Cruise Ship Lengthening</h4> */}
                {name_before_lengthening !== '' && <h4>{name_before_lengthening} Cruise Ship Lengthening</h4>}
                {/* Paragraph talking about lengthening  of ship and an image  */}
                {lengthened_para !== '' && <p>{lengthened_para}</p>}
                <img src = {img_lengthened} title = {img_lengthened_title}/>

                {/* <h4>{classic_ship_name} After Ship Lengthening</h4> */}
                {/* Paragraph and Photo after lengthening when Ship had same name and did not change cruise line. */}
                {name_after_lengthening !== '' && <h4>{name_after_lengthening} After Ship Lengthening</h4>}
                
                {afterlengthen_para !== '' && <p>{afterlengthen_para}</p>}

                <img src = {img_afterlengthen} title = {img_afterlengthen_title}/>
                <br/><br/>
                
                {first_name_change !== '' && <h4>{first_name_change}</h4>}

                <p>{cruise_2nd_para}</p>

                <img src = {img_2ndcruise} title = {img_2ndcruise_title}/> 
                <br/><br/>

                {second_name_change !== '' && <h4>{second_name_change}</h4>}

                <p>{cruise_3rd_para}</p>

                <img src = {img_3rdcruise} title = {img_3rdcruise_title}/>
                <br/><br/>

                {third_name_change !== '' && <h4>{third_name_change}</h4>}

                <p>{cruise_4th_para}</p>

                <img src = {img_4thcruise} title = {img_4thcruise_title}/>
                <br/><br/>

                {fourth_name_change !== '' && <h4>{fourth_name_change}</h4>}

                <p>{cruise_5th_para}</p>

                <img src = {img_5thcruise} title = {img_5thcruise_title}/>
                <br/><br/>

                {fifth_name_change !== '' && <h4>{fifth_name_change}</h4>}

                <p>{cruise_6th_para}</p>

                <img src = {img_6thcruise} title = {img_6thcruise_title}/>
                <br/><br/>

                {sixth_name_change !== '' && <h4>{sixth_name_change}</h4>}

                <p>{cruise_7th_para}</p>

                <img src = {img_7thcruise} title = {img_7thcruise_title}/>
                <br/><br/>

                {seventh_name_change !== '' && <h4>{seventh_name_change}</h4>}

                <p>{cruise_8th_para}</p>

                <img src = {img_8thcruise} title = {img_8thcruise_title}/>
                <br/><br/>

                {eighth_name_change !== '' && <h4>{eighth_name_change}</h4>}

                <p>{cruise_9th_para}</p>

                <img src = {img_9thcruise} title = {img_9thcruise_title}/>
                <br/><br/>

                {ninth_name_change !== '' && <h4>{ninth_name_change}</h4>}

                <p>{cruise_10th_para}</p>

                <img src = {img_10thcruise} title = {img_10thcruise_title}/>
                <br/><br/>

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
                {/* <h3>{ship_name} Ship Plans</h3> */}
                <h3>{classic_ship_name} Ship Plans</h3>  
                <br/><br/>

                <p>{plans_para}</p>
                <img src = {ship_plans} />
                <img src = {ship_plans_cont} />           
            </div>    

            <div id = "final">    
                <h3>Final Years</h3> 

                <p>{final_1st_para}</p>
                <p>{final_2nd_para}</p>
                <img src = {img_final} title = {img_final_title} />

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