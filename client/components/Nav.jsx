import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
    <div className = 'title'>
        <h2>Cruise Shipin</h2>
        <div className = 'navmenu'>    
            <h3><Link to="/home" className={'navoptions'}>Home</Link></h3>
            <h3><Link to="/evolution-part1" className={'navoptions'}>Evolution (Part 1)</Link></h3>
            <h3><Link to="/evolution-part2" className={'navoptions'}>Evolution (Part2)</Link></h3>
            <h3><Link to="/cruise-lines" className={'navoptions'}>Cruise Lines</Link></h3>
            <h3><Link to="Reviews" className={'navoptions'}>Reviews</Link></h3>
        
        </div>
    </div>
    )
}
export default Nav