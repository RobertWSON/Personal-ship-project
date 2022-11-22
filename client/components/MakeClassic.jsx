import React from 'react'
import ShowMoreText from 'react-show-more-text'
import HoverContents from './HoverContents'


class MakeClassic extends React.Component   {
    constructor(props)  {
        super(props)
    }

    // Function for expand when Show more or Show less is clicked
    executeOnClick(isExpanded) {
        console.log(isExpanded)
    }

    render()   {
        const   {
            
            // classic_ship_name is used at top of page with h2 shipTitle and Link to HoverContents component 
            
            // ClassicContainer contains ClassicShip and ClassicDetails Div below
            // ClassicShip Div with shipImage inside it for the photo
            img, img_title,

            // ClassicDetails for Ship Specs
            // InitialDetails Div Props
            classic_ship_name, service_years, original_ship_name, early_service_years, build_yard, original_operator, 
            operator, registry_port, cost, imo, passenger_capacity_full, crew_capacity, gross_tonnage, 
            length, beam, draft, height, height_funnel_top, speed, deadweight, lightship, loaded_displacement, power, 
            power_rpm, fuel_type, fuel_capacity, fuel_consumption, fresh_water, propellors, propellor_size, rudder,
            rudder_size, decks, accessible_decks, bridge_height, bridge_water, 
            // shelter deck only used with Titanic passenger ship
            shelter_deck, bow_bridge, bow_height,
            
            // CruiseDetails Div Props
            cruise_ship_name, cruise_years, second_ship_name, second_name_years, third_ship_name, third_name_years,  
            last_ship_name, last_name_years, loveboat_final_year, cruise_gt, cruise_operator, cruise_reg_port, conversion_cost,   
            cruise_passengers_max, cruise_crew_max, cruise_funnel_hgt, cruise_speed, cruise_deadweight,
            cruise_lightship, cruise_displacement, cruise_power, cruise_power_rpm, cruise_fuel_capacity,
            cruise_fuel_consumption, cruise_fresh_water, cruise_decks, cruise_passenger_decks,            
 
            // Early Div Section for early life of a classic ship (has section id)
            early_1st_para, early_video, early_2nd_para, img_trials, img_trials_title, early_3rd_para, img_early, 
            img_early_title, 

            // Cruise Div Section for cruise life of a classic ship (has section id)
            cruise_1st_para, img_1stcruise, img_1stcruise_title, 
            // This part only applies to Evolution Part 2, where some ships there have been lengthened. 
            // name_before_lengthened: '', lengthened_para: '', img_lengthened: '', img_lengthened_title: '', 
            // name_after_lengthening: '', afterlengthen_para: '', img_afterlengthened: '', img_afterlengthened_title: '',
            cruise_2nd_para, img_2ndcruise, img_2ndcruise_title, cruise_3rd_para, img_3rdcruise, img_3rdcruise_title, 
            cruise_4th_para, img_4thcruise, img_4thcruise_title, cruise_5th_para, img_5thcruise, img_5thcruise_title, 
            cruise_video,

            // This is the Memorable Moments Div (id = mem)
            mem_1st_para, mem_video, mem_2nd_para, 

            // This is the Plans Div (id = plans)
            plans_para, ship_plans, ship_plans_cont, 

            // This is the Final Div (id = final)
            final_1st_para, final_2nd_para, img_final, img_final_title
 
            
        } = this.props

        // const newResult = speed.split('|')
        // newResult = ['Maximum 23 knots (43 km/ hr, 26 mph)', '21 knots (39 km/ hr, 24 mph)']

        // const encodedClassicShipName = classic_ship_name.replace(/\s/g, '_')

    return  (
        <React.Fragment>

            {/* <div className = "classicContainer"> */}

            <h2 className = "shipTitle">{classic_ship_name}</h2>

            {/* All the divs (including contents) are put in the HoverContents component.
            This is because the hover events need to be controlled by the outer contents div here. */}

            {/* Code below passes classic ship prop to HoverContents component */}
            <HoverContents classicName={classic_ship_name}/>               

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

                
                <h2>{classic_ship_name} Ship Specifications</h2> 
                {/* <h3>Ship Specifications</h3> */}

                {service_years !== '' && <h4>Years in Service: {service_years}</h4>}

                {/* I don't think I need france_service_years  */}
                {/* Get rid of these 4 below */}
                {/* {france_service_years !== '' && <h4>Service Years as France: {france_service_years}</h4>}
                {early_service_years !== '' && <h4>Service Years as Galileo Galilei: {early_service_years}</h4>}
                {original_ship_name !== '' && <h4>Pacific Princess Original Name: {original_ship_name}</h4>}
                {early_service_years !== '' && <h4>Years as Sea Venture: {early_service_years}</h4>} */}

                {/* Change these 4 above to this below */}
                {/* original_ship_name, early_service_years, c*/}
                {original_ship_name !== '' && <h4>{classic_ship_name} Original Name: {original_ship_name}</h4>}
                {early_service_years != '' && <h4>Service Years as {original_ship_name}: {early_service_years}</h4>}

                {/* <h4>Final Year: {last_name_years}</h4> */}

                {/* Include these 2 lines below in cruiseDetails section */}
                {/* {pacific_princess_years !== '' && <h4>Years as Pacific Princess: {pacific_princess_years}</h4>}
                {pacific_years !== '' && <h4>Years as Pacific: {pacific_years}</h4>} */}
                
                {/* I think loveboat_final_year maybe should go in cruiseDetails Div */}
                {/* {loveboat_final_year !== '' && <h4>Love Boat's Final Year: {loveboat_final_year}</h4>} */}

                {build_yard !== '' && <h4>Builder: {build_yard}</h4>}
                {original_operator !== '' && <h4>Original Operator: {original_operator}</h4>}
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
                {height !== '' && <h4>Ship Height overall to top of mast: {height}</h4>}
                {height_funnel_top !== '' && <h4>Ship Height from Keel bottom to Funnel Top: {height_funnel_top}</h4>} 

                {/* This space is where I have show more text, for when user wants to see more
                
                {/* To start with I am going to do show more text within classicDetails div  */}
                <ShowMoreText
                    //Default options 
                    // lines={48}
                    line={21}
                    more='Show more'
                    less='Show less'
                    anchorClass='my-anchor-css-class'
                    onClick={this.executeOnClick}
                    expanded={false}
                    width={480}> 

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
                {/* Shelter Deck from Titanic, need it here with nothing as a variable for some ships to make this work. */}
                {shelter_deck !== '' && <h4>Shelter Deck: {shelter_deck}</h4>}
                {bow_bridge !== '' && <h4>Bow to Bridge Length: {bow_bridge}</h4>}
                {bow_height !== '' && <h4>Bow Height: {bow_height}</h4>}

                </ShowMoreText>

              </div>    
                {/* Maybe end of div that handles inital specifications for the ship */}

                {/* I have removed original norwayDetails followed by galileoDetails Div, 
                because I think you can just use cruiseDetails instead for all of the ships.
                Originally I thought Norway and Galileo could have different div colours,
                but maybe it is better just to have the one colour under a cruiseDetails Div.  */}

              <div className = "cruiseDetails">
                
                {cruise_ship_name !== '' && <h2>{cruise_ship_name} as a Cruise Ship</h2>}

                {/* Could have ShowMoreText used here */}

                {cruise_years !== '' && <h4>Years as a CruiseShip: {cruise_years}</h4>}
                {/* Add in here the different name changes it had when it was a cruise ship for part 1 */}
                {second_ship_name !== '' && <h4>Second Name as a Cruise Ship: {second_ship_name}</h4>}
                {second_name_years !== '' && <h4>Cruise Ship Years with this Second Name: {second_name_years}</h4>}
                {third_ship_name !== '' && <h4>Second Name as a Cruise Ship: {third_ship_name}</h4>}
                {third_name_years !== '' && <h4>Cruise Ship Years with this Second Name: {third_name_years}</h4>}
                {last_ship_name !== '' && <h4>Last Name of {classic_ship_name}: {last_ship_name}</h4>}
                {last_name_years !== '' && <h4>Final Years of {classic_ship_name}: {last_name_years}</h4>}

                {/* Also include loveboat_final_year Only for Pacific Princess Cruise Ship as an extra */}
                {loveboat_final_year !== '' && <h4>Love Boat's Final Year: {loveboat_final_year}</h4>}

                <ShowMoreText
                    //Default options 
                    // lines={48}
                    line={20}
                    more='Show more'
                    less='Show less'
                    anchorClass='my-anchor-css-class'
                    onClick={this.executeOnClick}
                    expanded={false}
                    width={480}>

                {/* Cruise Ship Specs continued below */}
                {cruise_gt !== '' && <h4>Gross Tonnage: {cruise_gt}</h4>}
                {cruise_operator !== '' && <h4>Cruise Operator: {cruise_operator}</h4>}
                {cruise_reg_port !== '' && <h4>Port of Registry: {cruise_reg_port}</h4>}
                {conversion_cost !== '' && <h4>Conversion Cost: {conversion_cost}</h4>}
                {cruise_passengers_max !== '' && <h4>Maximum Cruise Passengers: {cruise_passengers_max}</h4>}
                {cruise_crew_max !== '' && <h4>Maximum Cruise Crew: {cruise_crew_max}</h4>}
                {cruise_funnel_hgt !== '' && <h4>Ship Height from Keel bottom to Funnel Top: {cruise_funnel_hgt}</h4>}
                {cruise_speed !== '' && <h4>Speed: {cruise_speed}</h4>}
                {cruise_deadweight !== '' && <h4>Deadweight:{cruise_deadweight}</h4>}
                {cruise_lightship !== '' && <h4>Lightship{cruise_lightship}</h4>}
                {cruise_displacement !== '' && <h4>Displacement (Maximum):{cruise_displacement}</h4>}
                {cruise_power !== '' && <h4>Power:{cruise_power}</h4>}
                {cruise_power_rpm !== '' && <h4>Propellor RPM:{cruise_power_rpm}</h4>}
                {cruise_fuel_capacity !== '' && <h4>Fuel Capacity:{cruise_fuel_capacity}</h4>}
                {cruise_fuel_consumption !== '' && <h4>Fuel Consumption:{cruise_fuel_consumption}</h4>}
                {cruise_fresh_water !== '' && <h4>Fresh Water Capacity:{cruise_fresh_water}</h4>}
                {cruise_decks !== '' && <h4>Total Number of Decks:{cruise_decks}</h4>}
                {cruise_passenger_decks !== '' && <h4>Passenger Decks:{cruise_passenger_decks}</h4>}
                {/* With norwayDetails Div, I Originally had these
                norway_last_name
                norway_final_year
                norway_final_gt */}

                </ShowMoreText>

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
                        type = "video/mp4"/>    
                </video>

                <p>{early_2nd_para}</p>  

                <img src = {img_trials} title = {img_trials_title}/>  
   
                <p>{early_3rd_para}</p> 
                <img src = {img_early} title = {img_early_title} />
                        
                <br/>
                <br/>
                <p>Contents:    Previous       Next        Top</p>        

            </div>    

            <div id = "cruise">
                <h3>As a Cruise Ship</h3>    
                <br/><br/>
                <p>{cruise_1st_para}</p>

                <img src = {img_1stcruise} title = {img_1stcruise_title}/>

                <p>{cruise_2nd_para}</p>

                <img src = {img_2ndcruise} title = {img_2ndcruise_title}/>

                <p>{cruise_3rd_para}</p>

                <img src = {img_3rdcruise} title = {img_3rdcruise_title}/>

                <p>{cruise_4th_para}</p>

                <img src = {img_4thcruise} title = {img_4thcruise_title}/>

                <p>{cruise_5th_para}</p>

                <img src = {img_5thcruise} title = {img_5thcruise_title}/>

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
                <img src={img_final} title = {img_final_title} />

            </div>

            </div>

        </React.Fragment>
    )
        
    }
}

export default MakeClassic