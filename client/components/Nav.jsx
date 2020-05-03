import React from 'react'
import {Link} from 'react-router-dom'


const Nav = () => {

    return (

         <React.Fragment>
            
            <div className = "navContainer">

                <nav  className = "navmenu"> 
         
                    <Link className = "home" to = {"/"}>Home</Link>
                    <Link className = "evo1" to = {"/evolutionpart1"}>Evolution (Part 1)</Link>
                    <Link className = "evo2" to = {"/evolutionpart2"}>Evolution (Part 2)</Link>
                    <Link className = "cruises" to = {"/cruiselines"}>Cruise Lines</Link>
         
                </nav>    

            </div>

         </React.Fragment>

    )
}

export default Nav