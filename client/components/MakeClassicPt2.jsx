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

        </React.Fragment>
        )
        
    }
}

export default MakeClassicPt2