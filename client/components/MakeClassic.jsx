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
            // classic_ship_name is a Ship Name used for web address, titles and a Ship Image (Official Name)
            // It is used as a prop below with ClassicDetails Div for Ship Specs

            // ClassicContainer contains ClassicShip and ClassicDetails Div below
            // ClassicShip Div with shipImage inside it for the photo
            img, img_title,


            // ClassicDetails Div for Ship Specs
            // Original Ship Data (InitialDetails Div) Props
            classic_ship_name, original_ship_name, service_years, early_service_years, build_yard, 
            original_operator, operator, registry_port, cost, imo, passenger_capacity_full, crew_capacity, 
            gross_tonnage, length, beam, draft, height, height_funnel_top, speed, deadweight, lightship, 
            loaded_displacement, power, power_rpm, fuel_type, fuel_capacity, fuel_consumption, fresh_water, 
            propellors, propellor_size, rudder, rudder_size, decks, accessible_decks, bridge_height, bridge_water, 
            // shelter deck only used with Titanic passenger ship for Evolution Part 1
            shelter_deck, bow_bridge, bow_height,
            
            
            // Data for when it was a Cruise Ship (cruiseDetails)

            // CruiseDetails Div Props
            cruise_ship_name, cruise_years,
            // I think it is good to show name changes when it was a Cruise Ship in the Cruise Details Specs
            // Taken from name_changes table, these below are name changes for Evolution Part 1 only
            second_ship_name, second_name_years, third_ship_name, third_name_years,
            // Add these extra name changes to be used for Evolution Part 2, which has more ship name changes
            // Taken from name_changes table
            fourth_ship_name, fourth_name_years, fifth_ship_name, fifth_name_years, sixth_ship_name, sixth_name_years,
            seventh_ship_name, seventh_name_years, eighth_ship_name, eighth_name_years, ninth_ship_name, 
            ninth_name_years, last_ship_name, last_name_years, 
            // loveboat_final_year only used for Pacific Princess in Evolution Part 1
            loveboat_final_year, 
            // Continue with rest of necessary Cruise Ship Information
            cruise_gt, cruise_operator, cruise_reg_port, conversion_cost, cruise_passengers_max, cruise_crew_max,
            cruise_height, cruise_funnel_hgt, cruise_speed, cruise_deadweight,
            cruise_lightship, cruise_displacement, cruise_power, cruise_power_rpm, cruise_fuel_capacity,
            cruise_fuel_consumption, cruise_fresh_water, 
            // Added these below for Evolution Part 1
            cruise_propellors, cruise_propellor_size, cruise_rudder, cruise_rudder_size,
            // These deck variables already existed, but not cruise bridge
            cruise_decks, cruise_passenger_decks, cruise_bridge_height, cruise_bridge_water, cruise_bow_bridge, 
            cruise_bow_height,  
            

            // Data for when the cruise ship was lengthened
            name_after_lengthened, 
            // Name changes after it was lengthened
            // Comment below for now because I need to figure out how to get code to work below
            second_lengthen_name, second_lengthen_name_yrs, third_lengthen_name, third_lengthen_name_yrs,
            fourth_lengthen_name, fourth_lengthen_name_yrs, fifth_lengthen_name, fifth_lengthen_name_yrs,
            sixth_lengthen_name, sixth_lengthen_name_yrs, seventh_lengthen_name, seventh_lengthen_name_yrs,
            eighth_lengthen_name, eighth_lengthen_name_yrs, ninth_lengthen_name, ninth_lengthen_name_yrs,
            last_lengthen_name, last_lengthen_name_yrs,

            // Cruise Ship Lengthened Details continued
            lengthened_service_yrs, lengthened_operator, lengthened_reg_port, lengthened_cost, lengthened_passengers, 
            lengthened_crew, lengthened_gt, lengthened_length, lengthened_beam, lengthened_draft, 
            lengthened_deadweight, lengthened_lightship, lengthened_displacement, lengthened_funnel_hgt, 
            lengthened_speed, lengthened_power, lengthened_power_rpm, lengthened_fuel_capacity,
            lengthened_fuel_consumption, lengthened_propellors, lengthened_propellor_size, lengthened_rudder, 
            lengthened_rudder_size, lengthened_decks, lengthened_passenger_decks, lengthened_bridge_height, 
            lengthened_bridge_water, lengthened_bow_bridge, lengthened_bow_height,


            // Early Div Section for early life of a classic ship (has section id)
            early_1st_para, early_video, early_2nd_para, img_trials, img_trials_title, early_3rd_para, img_early, 
            img_early_title, 

            // Cruise Div Section for cruise life of a classic ship (has section id)
            cruise_1st_para, img_1stcruise, img_1stcruise_title, 

            // This part only applies to Evolution Part 2, where some ships there have been lengthened. 
            // Props for only Evolution Part 2
            name_before_lengthening, lengthened_para, img_lengthened, img_lengthened_title, afterlengthen_para,
            img_afterlengthen, img_afterlengthen_title,

            // Continue with Paragraphs and images for each time the cruise ship changed names
            cruise_2nd_para, img_2ndcruise, img_2ndcruise_title, cruise_3rd_para, img_3rdcruise, img_3rdcruise_title, 
            cruise_4th_para, img_4thcruise, img_4thcruise_title, cruise_5th_para, img_5thcruise, img_5thcruise_title,
            // Add these props below for Evolution Part 2, for when some ships had more names
            cruise_6th_para, img_6thcruise, img_6thcruise_title,
            cruise_7th_para, img_7thcruise, img_7thcruise_title,
            cruise_8th_para,img_8thcruise, img_8thcruise_title,
            cruise_9th_para, img_9thcruise, img_9thcruise_title,
            cruise_10th_para, img_10thcruise, img_10thcruise_title,
            // I will have to decide in time if it is better to have cruise_video at end of "As a Cruise Ship" Section
            // or have it at the beginning or middle part of "As a Cruise Ship" Section.
            cruise_video,

            // This is the Memorable Moments Div (id = mem)
            mem_1st_para, mem_video, mem_2nd_para, 

            // This is the Plans Div (id = plans)
            plans_para, ship_plans, ship_plans_cont, 

            // This is the Final Div (id = final)
            final_1st_para, final_2nd_para, img_final, img_final_title
 
            
        } = this.props

        // For splitting result with props, when data has to be separted or put on next line
        // const newResult = speed.split('|')
        // newResult = ['Maximum 23 knots (43 km/ hr, 26 mph)', '21 knots (39 km/ hr, 24 mph)']

        // Encoding for url, it does not work like this
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

                {service_years !== '' && <h4>Years in Service: {service_years}</h4>}
                {original_ship_name !== '' && <h4>{classic_ship_name} Original Name: {original_ship_name}</h4>}
                {early_service_years != '' && <h4>Service Years as {original_ship_name}: {early_service_years}</h4>}

                {build_yard !== '' && <h4>Builder: {build_yard}</h4>}
                {original_operator !== '' && <h4>Original Operator: {original_operator}</h4>}
                {operator !== '' && <h4>Operator changes: {operator}</h4>}
                {registry_port !== '' && <h4>Port of Registry: {registry_port}</h4>}

                {cost !== '' && <h4>Cost: {cost}</h4>}
                {imo !== '' && <h4>IMO Number: {imo}</h4>}
                {passenger_capacity_full !== '' && <h4>Maximum Passengers: {passenger_capacity_full}</h4>}
                {crew_capacity !== '' && <h4>Maximum Crew: {crew_capacity}</h4>}
                {gross_tonnage !== '' && <h4>Gross Tonnage: {gross_tonnage}</h4>}
                {length !== '' && <h4>Length: {length}</h4>}
                {beam !== '' && <h4>Beam: {beam}</h4>}
                {draft !== '' && <h4>Draft: {draft}</h4>}
                {height !== '' && <h4>Ship Height overall, to top of mast: {height}</h4>}
                {height_funnel_top !== '' && <h4>Ship Height to Funnel Top: {height_funnel_top}</h4>} 

                {/* This space is where I have show more text, for when user wants to see more

                {/* To start with I am going to do show more text within initialDetails div  */}

                {/* ShowMoreText not always working for some ships */}
                {/* <ShowMoreText
                    //Default options 
                    // lines={48}
                    lines={21}
                    more='Show more'
                    less='Show less'
                    anchorClass='my-anchor-css-class'
                    onClick={this.executeOnClick}
                    expanded={false}
                    width={480}>  */}

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

                {/* </ShowMoreText> */}


              </div>    
                

                {/* I have removed original norwayDetails followed by galileoDetails Div, 
                because I think you can just use cruiseDetails instead for all of the ships.
                Originally I thought Norway and Galileo could have different div colours,
                but maybe it is better just to have the one colour under a cruiseDetails Div.  */}
              <div className = "cruiseDetails">
                
                {cruise_ship_name !== '' && <h2>{cruise_ship_name} as a Cruise Ship</h2>}

                {/* Could have ShowMoreText used here */}

                {cruise_years !== '' && <h4>Years as a CruiseShip: {cruise_years}</h4>}

                {/* I think it is good to include names changes that the ship had while it was a Cruise Ship */}
            
                {second_ship_name !== '' && <h4>{second_ship_name} : {second_name_years}</h4>}
                {third_ship_name !== '' && <h4>{third_ship_name} : {third_name_years}</h4>}
                {fourth_ship_name !== '' && <h4>{fourth_ship_name} : {fourth_name_years}</h4>}
                {fifth_ship_name !== '' && <h4>{fifth_ship_name} : {fifth_name_years}</h4>}
                {sixth_ship_name !== '' && <h4>{sixth_ship_name} : {sixth_name_years}</h4>}
                {seventh_ship_name !== '' && <h4>{seventh_ship_name} : {seventh_name_years}</h4>}
                {eighth_ship_name !== '' && <h4>{eighth_ship_name} : {eighth_name_years}</h4>}
                {ninth_ship_name !== '' && <h4>{ninth_ship_name} : {ninth_name_years}</h4>}
                {last_ship_name !== '' && <h4>{last_ship_name} : {last_name_years}</h4>} 


                {/* Add in here the different name changes it had when it was a cruise ship for part 1 */}
                {/* Comment this, as I think it may be set out better above */}
                {/* {second_ship_name !== '' && <h4>Second Name as a Cruise Ship: {second_ship_name}</h4>}
                {second_name_years !== '' && <h4>Cruise Ship Years with this Second Name: {second_name_years}</h4>}
                {third_ship_name !== '' && <h4>Second Name as a Cruise Ship: {third_ship_name}</h4>}
                {third_name_years !== '' && <h4>Cruise Ship Years with this Second Name: {third_name_years}</h4>}
                {last_ship_name !== '' && <h4>Last Name of {classic_ship_name}: {last_ship_name}</h4>}
                {last_name_years !== '' && <h4>Final Years of {classic_ship_name}: {last_name_years}</h4>} */}

                {/* Also include loveboat_final_year Only for Pacific Princess Cruise Ship as an extra */}
                {loveboat_final_year !== '' && <h4>Love Boat's Final Year: {loveboat_final_year}</h4>}

                <ShowMoreText
                    //Default options 
                    // lines={48}
                    line={20}
                    // or line={30}
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
                {cruise_height !== '' && <h4>Cruise Ship Height to top of Mast: {cruise_height}</h4>}
                {cruise_funnel_hgt !== '' && <h4>Cruise Ship Height to top of Funnel: {cruise_funnel_hgt}</h4>}
                {cruise_speed !== '' && <h4>Speed: {cruise_speed}</h4>}
                {cruise_deadweight !== '' && <h4>Deadweight:{cruise_deadweight}</h4>}
                {cruise_lightship !== '' && <h4>Lightship{cruise_lightship}</h4>}
                {cruise_displacement !== '' && <h4>Loaded Displacement (Maximum):{cruise_displacement}</h4>}
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
                {cruise_bow_bridge !== '' && <h4>Bow to Bridge Length:{cruise_bow_bridge}</h4>}
                {cruise_bow_height !== '' && <h4>Bow Height:{cruise_bow_height}</h4>}
                
                {/* With norwayDetails Div, I Originally had these 
                norway_last_name, norway_final_year, norway_final_gt */}

                </ShowMoreText>

              </div>      

                {/* Possibly end of div that handles changed names for the ship with maybe different background colour */}
                
            {/* </div> */}

            
                <div className = "lengthenedDetails">

                    <h2>{cruise_ship_name} after Lengthening</h2>

                    <ShowMoreText
                        line={45}
                        more='Show more'
                        less='Show less'
                        anchorClass='my-anchor-css-class'
                        onClick={this.executeOnClick}
                        expanded={false}
                        width={480}>

                    {/* I think it is best to have these different ship names to show in lengthened details section 
                    for when it was lengthened */}

                    {name_after_lengthened !== '' && <h4 className = "NameChange">{name_after_lengthened} Ship Name Changes</h4>}  
                    {second_lengthen_name !== '' && <h4 className = "NameChange">{second_lengthen_name} : {second_lengthen_name_yrs}</h4>}
                    {third_lengthen_name !== '' && <h4 className = "NameChange">{third_lengthen_name} : {third_lengthen_name_yrs}</h4>} 
                    {fourth_lengthen_name !== '' && <h4 className = "NameChange">{fourth_lengthen_name} : {fourth_lengthen_name_yrs}</h4>}
                    {fifth_lengthen_name !== '' && <h4 className = "NameChange">{fifth_lengthen_name} : {fifth_lengthen_name_yrs}</h4>}
                    {sixth_lengthen_name !== '' && <h4 className = "NameChange">{sixth_lengthen_name} : {sixth_lengthen_name_yrs}</h4>}
                    {seventh_lengthen_name !== '' && <h4 className = "NameChange">{seventh_lengthen_name} : {seventh_lengthen_name_yrs}</h4>}
                    {eighth_lengthen_name !== '' && <h4 className = "NameChange">{eighth_lengthen_name} : {eighth_lengthen_name_yrs}</h4>}
                    {ninth_lengthen_name !== '' && <h4 className = "NameChange">{ninth_lengthen_name} : {ninth_lengthen_name_yrs}</h4>}
                    {last_lengthen_name !== '' && <h4 className = "NameChange">{last_lengthen_name} : {last_lengthen_name_yrs}</h4>}

                    {/* Lengthend Ship Details continued */}
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
                    {lengthened_funnel_hgt !== '' && <h4>Funnel Height: {lengthened_funnel_hgt}</h4>}
                    {lengthened_speed !== '' && <h4>Speed: {lengthened_speed}</h4>}
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
                    {/* I think that I do not need lengthened_shelter_deck because that was only used with titanic */}
                    {lengthened_bow_bridge !== '' && <h4>Bow to Bridge Length:{lengthened_bow_bridge}</h4>}     
                    {lengthened_bow_height !== '' && <h4>Bow Height:{lengthened_bow_height}</h4>}

                    </ShowMoreText>

                </div>
            {/* End of ClassicDetails Div */}
            </div>     


            {/* Back to MakeClassic updated component */}
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

                {name_before_lengthening !== '' && <h4>{name_before_lengthening} Cruise Ship Lengthening</h4>}
                {/* Paragraph talking about lengthening  of ship and an image  */}
                {lengthened_para !== '' && <p>{lengthened_para}</p>}
                <img src = {img_lengthened} title = {img_lengthened_title}/>

                {/* Paragraph and Photo after lengthening when Ship had same name and did not change cruise line. */}
                {name_after_lengthened !== '' && <h4>{name_after_lengthened} After Ship Lengthening</h4>}
                
                {afterlengthen_para !== '' && <p>{afterlengthen_para}</p>}

                <img src = {img_afterlengthen} title = {img_afterlengthen_title}/>
                <br/><br/>
                
                {second_ship_name !== '' && <h4>{second_ship_name}</h4>}
                {second_name_years !== '' && <h4>{second_name_years}</h4>}

                <p>{cruise_2nd_para}</p>

                <img src = {img_2ndcruise} title = {img_2ndcruise_title}/>

                {third_ship_name !== '' && <h4>{third_ship_name}</h4>}
                {third_name_years !== '' && <h4>{third_name_years}</h4>}

                <p>{cruise_3rd_para}</p>

                <img src = {img_3rdcruise} title = {img_3rdcruise_title}/>

                {fourth_ship_name !== '' && <h4>{fourth_ship_name}</h4>}
                {fourth_name_years !== '' && <h4>{fourth_name_years}</h4>}

                <p>{cruise_4th_para}</p>

                <img src = {img_4thcruise} title = {img_4thcruise_title}/>

                {fifth_ship_name !== '' && <h4>{fifth_ship_name}</h4>}
                {fifth_name_years !== '' && <h4>{fifth_name_years}</h4>}

                <p>{cruise_5th_para}</p>

                <img src = {img_5thcruise} title = {img_5thcruise_title}/>

                {/* Add more paragraphs and images for more ship name change in Evolution Part 2 */}
                {sixth_ship_name !== '' && <h4>{sixth_ship_name}</h4>} 
                {sixth_name_years !== '' && <h4>{sixth_name_years}</h4>}   

                <p>{cruise_6th_para}</p>

                <img src = {img_6thcruise} title = {img_6thcruise_title}/>
                <br/><br/>

                {seventh_ship_name !== '' && <h4>{seventh_ship_name}</h4>} 
                {seventh_name_years !== '' && <h4>{seventh_name_years}</h4>}   

                <p>{cruise_7th_para}</p>

                <img src = {img_7thcruise} title = {img_7thcruise_title}/>
                <br/><br/>

                {eighth_ship_name !== '' && <h4>{eighth_ship_name}</h4>} 
                {eighth_name_years !== '' && <h4>{eighth_name_years}</h4>}   

                <p>{cruise_8th_para}</p>

                <img src = {img_8thcruise} title = {img_8thcruise_title}/>
                <br/><br/>

                {ninth_ship_name !== '' && <h4>{ninth_ship_name}</h4>}
                {ninth_name_years !== '' && <h4>{ninth_name_years}</h4>}

                <p>{cruise_9th_para}</p>

                <img src = {img_9thcruise} title = {img_9thcruise_title}/>
                <br/><br/>

                {last_ship_name !== '' && <h4>{last_ship_name}</h4>}
                {last_name_years !== '' && <h4>{last_name_years}</h4>}

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
