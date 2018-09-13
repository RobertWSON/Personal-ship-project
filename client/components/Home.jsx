import React from 'react'
import {Link} from 'react-router-dom'

export const home = () => {
    return (
        <div>
            <div className = 'container'>
                <h1>Cruise Shipin</h1>
            </div>
            <div>s
                <Link className="navmenu" to="/Nav" >Home</Link>
                <Link className="navmenu" to="/Nav" >Evolution (Part 1)</Link>
                <Link className="navmenu" to="/Nav" >Evolution (Part 2)</Link>
                <Link className="navmenu" to="/Nav" >Cruise Lines</Link>
            </div>
            <div className='paragraph'>
                <p>If you want to learn about the evolution of cruise ships of how they started off and have become the global force today in terms
                   of holiday travel, then you have come to the right place. 
                   You are also welcome to review our class of luxury cruise ships we have on offer.
                </p>    
            </div>    
        </div>         
    )
}