import React from 'react'
import {Link} from 'react-router-dom'


const Nav = () => {

    return (

         <React.Fragment>
            
            <div className = "navContainer">

                <nav  className = "navmenu"> 
         
                    <Link className = "home" to = {"/"}>Home</Link>
                    <Link className = "evo1" to = {"/evolution-part1"}>Evolution (Part 1)</Link>

                    {/* At the moment I will comment Evolution Part 2, so that I can just get Part 1 
                    working as a whole */}
                    {/* <Link className = "evo2" to = {"/evolution-part2"}>Evolution (Part 2)</Link> */}
                    
                    <Link className = "cruises" to = {"/cruiselines"}>Cruise Lines</Link>
         
                </nav>    

            </div>

         </React.Fragment>

    )
}

export default Nav