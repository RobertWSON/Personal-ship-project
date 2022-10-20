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
            // Comment this below, as this is from original classic-cruiseships branch
            // classic_ship_name, img, img_title, service_years, france_service_years, early_service_years, original_name, early_years,
            // pacific_princess_years, pacific_years, loveboat_final_year, build_yard, operator, registry_port, cost, imo, 
            // passenger_capacity_full, crew_capacity, gross_tonnage, length, beam, draft, height, funnel_height, speed, deadweight, 
            // lightship, loaded_displacement, power, power_rpm, fuel_type, fuel_capacity, fuel_consumption, fresh_water, propellors,
            // propellor_size, rudder, rudder_size, decks, accessible_decks, bridge_height, bridge_water, shelter_deck, 
            // bow_bridge, bow_height, cruise_ship_name, norway_years, norway_operator, conversion_cost, norway_passengers, 
            // norway_crew, norway_gt, norway_fuel_capacity, norway_fuel_consume, norway_fresh_water, norway_speed, 
            // norway_passenger_decks, norway_last_name, norway_final_year, norway_final_gt, galileo_name, galileo_years, galileo_gt, 
            // galileo_passenger_capacity, meridian_name, meridian_years, meridian_gt, meridian_passenger_capacity, gg_last_name,
            // sunvista_years, sunvista_gt, sunvista_passenger_capacity, early_1st_para, early_2nd_para, cruise_1st_para, ship_plans, 
            // ship_plans_cont, img_trials, img_trials_title, img_early, img_early_title, img_1stcruise, img_1stcruise_title, 
            // early_video, cruise_video, mem_video, cruise_2nd_para, mem_1st_para, mem_2nd_para, plans_para, final_1st_para, final_2nd_para


            classic_ship_name, img, img_title, original_ship_name, early_service_years, service_years, 
            france_service_years, pacific_princess_years, pacific_years, loveboat_final_year, build_yard, 
            original_operator, operator, registry_port, cost, imo, passenger_capacity_full, crew_capacity, gross_tonnage, 
            length, beam, draft, height, height_funnel_top, speed, deadweight, lightship, loaded_displacement, power, 
            power_rpm, fuel_type, fuel_capacity, fuel_consumption, fresh_water, propellors, propellor_size, rudder,
            rudder_size, decks, accessible_decks, bridge_height, bridge_water, 
            //Shelter Deck from Titanic, need it here with nothing as a variable for some ships to make this work.
            shelter_deck, bow_bridge, bow_height, 

            // Foreign key for France as Norway cruise ship    
            // norway_id: '2',
            // Foreign key for Galileo Galilei as a cruise ship
            // galileo_id: '2',
            // Foreign Key Link to these classic ships, for their details when they were a cruise ship
            // classic_cruise_id: '2', 
            // Foreign Key Link for when these classic cruise ships were Lengthened to carry more cruise passengers
            // lengthened_id: '2',
            // Foreign Key for when a classic cruise ship had a name change during it's time as a Cruise Ship
            // name_changes_id: '2',

            // For each ships horn on either Evolution Part 1 and Evolution Part 2 Pages
            // ship_horn is handled in EvolutionPart1 and Part2 components 

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
                {france_service_years !== '' && <h4>Service Years as France: {france_service_years}</h4>}
                {early_service_years !== '' && <h4>Service Years as Galileo Galilei: {early_service_years}</h4>}
                {original_ship_name !== '' && <h4>Pacific Princess Original Name: {original_ship_name}</h4>}
                {early_service_years !== '' && <h4>Years as Sea Venture: {early_service_years}</h4>}
                {pacific_princess_years !== '' && <h4>Years as Pacific Princess: {pacific_princess_years}</h4>}
                {pacific_years !== '' && <h4>Years as Pacific: {pacific_years}</h4>}
                {loveboat_final_year !== '' && <h4>Love Boat's Final Year: {loveboat_final_year}</h4>}
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
                {height !== '' && <h4>Ship Height: {height}</h4>}
                {height_funnel_top !== '' && <h4>Ship Height to Funnel Top: {height_funnel_top}</h4>} 

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
                    width={480}
                > 

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

                {/* Possibly a div hear that handles changed names for the ship, maybe have different background colour  */}
              <div className = "norwayDetails">

                <ShowMoreText
                    //Default options 
                    // lines={48}
                    line={16}
                    more='Show more'
                    less='Show less'
                    anchorClass='my-anchor-css-class'
                    onClick={this.executeOnClick}
                    expanded={false}
                    width={480}
                >
 
                {/* Comment below for now until I get this working
                This will be used later when I have the joins with the extra tables in place */}
                    
                {/* Originally commented {ship_name !== '' && <h2>{ship_name} as a Cruise Ship</h2>} */}
                {/* {cruise_ship_name !== '' && <h2>{cruise_ship_name} as a Cruise Ship</h2>} */}
                {/* Originally commented <h2>France as a Cruise Ship</h2> */}
                {/* Originally commented {cruise_ship_name !== '' && <h4>{cruise_ship_name} as a Cruise Ship</h4>} */}
                {/* {cruise_ship_name !== '' && <h4>France Liner New Name: {cruise_ship_name}</h4>}
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
                {norway_final_gt !== '' && <h4>France's Final Gross Tonnage:{norway_final_gt}</h4>} */}
                </ShowMoreText>

              </div>

              {/* A div for Galileo Galilei as a cruise ship    */}
              <div className = "galileoDetails"> 

                <ShowMoreText
                    //Default options 
                    // lines={48}
                    line={13}
                    more='Show more'
                    less='Show less'
                    anchorClass='my-anchor-css-class'
                    onClick={this.executeOnClick}
                    expanded={false}
                    width={480}
                >
                   
                {/* Comment below for now until I get this working
                This will be used later when I have the joins with the extra tables in place */}
                {/* Originally commented  {ship_name !== '' && <h2>{ship_name} as a Cruise Ship</h2>} */}
                {/* Not a comment {galileo_name !== '' && <h2>{galileo_name} as a Cruise Ship</h2>} */}
                {/* Orignally Commented <h2>Galileo Galilei as a Cruise Ship</h2> */}
                {/* Originally Commented {galileo_name !== '' && <h4>{galileo_name} as a Cruise Ship</h4>}  */}
                {/* {galileo_name !== '' && <h4>Galileo Galilei's 1st New Name: {galileo_name}</h4>}
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
                {sunvista_passenger_capacity !== '' && <h4>Sun Vista Maximum Passengers: {sunvista_passenger_capacity}</h4>} */}

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