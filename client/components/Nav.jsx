import React from 'react'
import {Link} from 'react-router-dom'


const Nav = () => {

    return (

        // <React.Fragment>

        //     <li className = "navMenu">
        //         <Link className = "Home" to = {"/"}>Home</Link>
        //         <Link className = "evo1" to = {"/evolutionpart1"}>Evolution (Part 1)</Link>
        //         <Link className = "evo2" to = {"/evolutionpart2"}>Evolution (Part 2)</Link>
        //         <Link className = "cruises" to = {"/cruiselines"}>Cruise Lines</Link>     
        //     </li>

        // </React.Fragment>

    // <div className = 'title'>
    //     <h2>Cruise Shipin</h2>



    //Change to List instead of Heading
        <div className = 'navmenu'> 

            <li>
                <Link className = "mainNav" to = {"/"}>Home</Link>
                <Link className = "mainNav" to = {"/evolutionpart1"}>Evolution (Part 1)</Link>
                <Link className = "mainNav" to = {"/evolutionpart2"}>Evolution (Part 2)</Link>
                <Link className = "mainNav" to = {"/cruiselines"}>Cruise Lines</Link>    
            </li>
    {/* End of Change List to Heading          */}
         
            {/* <h3><Link to="/home" className={'navoptions'}>Home</Link></h3>
            <h3><Link to="/evolution-part1" className={'navoptions'}>Evolution (Part 1)</Link></h3>
            <h3><Link to="/evolution-part2" className={'navoptions'}>Evolution (Part2)</Link></h3>
            <h3><Link to="/cruise-lines" className={'navoptions'}>Cruise Lines</Link></h3>
            <h3><Link to="Reviews" className={'navoptions'}>Reviews</Link></h3>  */}

    {/* Original Heading with Link          
            <h3><Link to={"/"}>Home</Link> 
                <Link to={"/evolutionpart1"}>Evolution (Part 1)</Link>
                <Link to={"/evolutionpart2"}>Evolution (Part2)</Link>
                <Link to={"/cruiselines"}>Cruise Lines</Link> 
                <Link to={"Reviews"}>Reviews</Link> 
            </h3> 
    End of Original Heading with Link              */}

        </div>
    //</div>


    )
}

export default Nav