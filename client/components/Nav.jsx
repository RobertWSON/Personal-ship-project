import React from 'react'
import {Link} from 'react-router-dom'


const Nav = () => {
     
    return (
    // <div className = 'title'>
    //     <h2>Cruise Shipin</h2>

        <div className = 'navmenu'>    
            {/* <h3><Link to="/home" className={'navoptions'}>Home</Link></h3>
            <h3><Link to="/evolution-part1" className={'navoptions'}>Evolution (Part 1)</Link></h3>
            <h3><Link to="/evolution-part2" className={'navoptions'}>Evolution (Part2)</Link></h3>
            <h3><Link to="/cruise-lines" className={'navoptions'}>Cruise Lines</Link></h3>
            <h3><Link to="Reviews" className={'navoptions'}>Reviews</Link></h3> */}

            {/* <h2 className ="top-links"> */}
            {/* <h2> */}

            <li>
                <Link to={"/"}>Home</Link>
                <Link to={"/evolutionpart1"}>Evolution (Part 1)</Link>
                <Link to={"/evolutionpart2"}>Evolution (Part2)</Link>
                <Link to={"/cruiselines"}>Cruise Lines</Link>
                
                {/* <Link to={"Reviews"}>Reviews</Link> */}
            {/* </h2> */}
            </li>
        </div>
    //</div>
    )
}

export default Nav