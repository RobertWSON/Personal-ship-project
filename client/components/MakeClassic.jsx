import React from 'react'


class MakeClassic extends React.Component   {
    constructor(props)  {
        super(props)
    }

    render()    {

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
            img_trials, img_trials_title, img_early, img_early_title, img_1stcruise, img_1stcruise_title, early_video, mem_video
        } = this.props

    return  (
        <React.Fragment>

            <h2 className = "shipTitle">{ship_name}</h2>

            <div className = "contents">
                <h3>Contents</h3>
                <h4>Early Life</h4>
                <h4>As a Cruise Ship</h4>
                <h4>Memorable Moments</h4>
                <h4>Ship Plans</h4>
                <h4>Final Years </h4>
                {/* Commented because these ships in Part 1 are not in service now.  */}
                {/* <h4>Recent Times</h4> */}
            </div>

            <div className = "classicContainer">

            <div className = "classicShip">
                <img src = {img}
                     title = {img_title}/>
            </div>

            <div className = "classicDetails">
            {/* <div className = "ShipDetails"> */}
                <h3>{ship_name}</h3>
                <h3>Ship Specifications</h3>
                <h4>Years in Service: {service_years}</h4>
                <h4>Service Years as France: {france_service_years}</h4>
                <h4>Service Years as Galileo Galilei: {early_service_years}</h4>
                <h4>Pacific Princess Original Name: {original_name}</h4>
                <h4>Years as Sea Venture: {early_years}</h4>
                <h4>Years as Pacific Princess: {pacific_princess_years}</h4>
                <h4>Years as Pacific: {pacific_years}</h4>
                <h4>Love Boat's Final Year: {loveboat_final_year}</h4>
                <h4>Builder: {build_yard}</h4>
                <h4>Operator: {operator}</h4>
                <h4>Port of Registry: {registry_port}</h4>
                <h4>Cost: {cost}</h4>
                <h4>IMO Number: {imo}</h4>
                <h4>Maximum Passenger: {passenger_capacity_full}</h4>
                <h4>Maximum Crew: {crew_capacity}</h4>
                <h4>Gross Tonnage: {gross_tonnage}</h4>
                <h4>Length: {length}</h4>
                <h4>Beam: {beam}</h4>
                <h4>Draft: {draft}</h4>
                <h4>Ship Height: {height}</h4>
                <h4>Ship Height to Funnel Top: {funnel_height}</h4>
                <h4>Speed: {speed}</h4>
                <h4>Deadweight: {deadweight}</h4>
                <h4>Lightship: {lightship}</h4>
                <h4>Loaded Displacement: {loaded_displacement}</h4>
                <h4>Power: {power}</h4>
                <h4>Propellor RPM: {power_rpm}</h4>
                <h4>Type of Fuel: {fuel_type}</h4>
                <h4>Fuel Capacity: {fuel_capacity}</h4>
                <h4>Fuel Consumption: {fuel_consumption}</h4>
                <h4>Fresh Water Capacity: {fresh_water}</h4>
                <h4>Propellor Type: {propellors}</h4>
                <h4>Propellor Size: {propellor_size}</h4>
                <h4>Rudder Type: {rudder}</h4>
                <h4>Rudder Size: {rudder_size}</h4>
                <h4>Decks: {decks}</h4>
                <h4>Passenger Decks: {accessible_decks}</h4>
                <h4>Bridge Height: {bridge_height}</h4>
                <h4>Bridge Height above Water: {bridge_water}</h4>
                <h4>Shelter Deck: {shelter_deck}</h4>
                <h4>Bow to Bridge Length: {bow_bridge}</h4>
                <h4>Bow Height: {bow_height}</h4>
                <h4>France Liner New Name: {cruise_ship_name}</h4>
                <h4>Years as Norway: {norway_years}</h4>
                <h4>Operator: {norway_operator}</h4>
                <h4>France to Norway Conversion Cost:{conversion_cost}</h4>
                <h4>Norway Maximum Passenger: {norway_passengers}</h4>
                <h4>Norway Maximum Crew: {norway_crew}</h4>
                <h4>Norway Gross Tonnage: {norway_gt}</h4>
                <h4>Norway Fuel Capacity: {norway_fuel_capacity}</h4>
                <h4>Norway Fuel Consumption: {norway_fuel_consume}</h4>
                <h4>Norway Fresh Water Capacity: {norway_fresh_water}</h4>
                <h4>Norway Speed: {norway_speed}</h4>
                <h4>Norway Passenger Decks: {norway_passenger_decks}</h4>
                <h4>France's Last Name: {norway_last_name}</h4>
                <h4>France's Final Year: {norway_final_year}</h4>
                <h4>France's Final Gross Tonnage:{norway_final_gt}</h4>
                <h4>Galileo Galilei's 1st New Name: {galileo_name}</h4>
                <h4>Years as Galileo: {galileo_years}</h4>
                <h4>Galileo Gross Tonnage: {galileo_gt}</h4>
                <h4>Galileo Maximum Passengers: {galileo_passenger_capacity}</h4>
                <h4>Galileo Galilei's 2nd New Name: {meridian_name}</h4>
                <h4>Years as Meridian: {meridian_years}</h4>
                <h4>Meridian Gross Tonnage: {meridian_gt}</h4>
                <h4>Meridian Maximum Passengers: {meridian_passenger_capacity}</h4>
                <h4>Galileo Galilei's Last Name: {gg_last_name}</h4> 
                <h4>Years as Sun Vista: {sunvista_years}</h4>
                <h4>Sun Vista Gross Tonnage: {sunvista_gt}</h4>
                <h4>Sun Vista Maximum Passengers: {sunvista_passenger_capacity}</h4>
            </div>

            <div className = "classic-background">
                <h3>Early Life</h3>
                <br/><br/>
                {/* <p>{first_para}</p> */}
                <p>{early_1st_para}</p>

                <img src = {img_trials}
                     title = {img_trials_title}/>

                <p>{early_2nd_para}</p>    

                <img src = {img_early}
                     title = {img_early_title}/>

                <video controls width = "500">
                    <source
                        src = {early_video}
                        type = "video/mp4"
                    />    
                </video>     
            </div>

            <div className = "cruise">
                <h3>As a Cruise Ship</h3>
                <br/><br/>
                {/* <p>{second_para}</p>  */}
                <p>{cruise_1st_para}</p>

                <img src = {img_1stcruise}
                    title = {img_1stcruise_title}/>
            </div>

            <div className = "memories">
                <h3>Memorable Moments</h3>

                <video controls width = "500">
                    <source
                        src = {mem_video}
                        type = "video/mp4"
                    />    
                </video>

            </div>

            <div className = "plans">
                <h3>{ship_name} Ship Plans</h3> 
                <br/><br/>
                <img src = {ship_plans} />           
            </div>    

            <div className = "final">
                <h3>Final Years</h3>
            </div>

            {/* Commented because these ships in Part 1 are not in service now. */}
            {/* <div className = "recent">
                <h3>Recent Times</h3>
            </div> */}

            </div>

        </React.Fragment>
    )
        
    }
}

export default MakeClassic