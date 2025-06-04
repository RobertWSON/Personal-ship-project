import React from 'react'
import {Link} from 'react-router-dom'

//export const EvolutionPart1 = () => {  // Should be export const CruiseLines
export const CruiseLines = () => {     

    return (
        <div>
            <div className = 'container'>
                <h1>Evolution of Cruise Ships</h1>
            </div>
                <Link className="navmenu" to="/Nav" >Home</Link>
                <Link className="navmenu" to="/Nav" >Evolution (Part 1)</Link>
                <Link className="navmenu" to="/Nav" >Evolution (Part 2)</Link>
                <Link className="navmenu" to="/Nav" >Cruise Lines</Link>
            </div>  
            // <div>
                
            // </div>    
        
    )
}