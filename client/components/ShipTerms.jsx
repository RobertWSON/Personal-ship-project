import React from 'react'
import {Link} from 'react-router-dom'

class ShipTerms extends React.Component {

    constructor(props)  {
        super(props)    
    }

    render()    {
        return  (
            <div>
                <div className="header">
                    <h1>Ship Terms</h1>
                </div>

                <div className="ShipTerms">
                    <h4><b>Year:</b> <p>This is the year that the Cruise Ship is put into service and ready to take passengers</p></h4> 
                    <h4>Passenger Capacity (Full): <p></p></h4>    
                    <h4>Passenger Capacity (Double Occupancy): <p>This is the maximum amount of passengers that the Cruise Ship can take, based on there being 2 passengers for every cabin that they are staying in.</p></h4>
                    <h4>Gross Tonnnage: <p></p></h4>    
                    <h4>Length: <p>This is the total length of the ship. Sometimes some vessels have what is called a bulbous bow (which bulges under the water). In this situation the ship length is longer at the front of the ship due to there being more length of ship than you can see, under the water at the bow (front of ship)</p></h4>
                    <h4>Beam: <p>This is the width of the ship at it's widest point of it's hull. The hull is the main structure of the ship that extends it's whole length.</p></h4>    
                    <h4>Draft: <p>a ships draught is the vertical distance starting from the bottom of the ship to the water level - pretty much how far below the water the vessel is sitting. It can change due to the amount of weight on the ship</p></h4>
                    <h4>Height: <p>This is the height of the CruiseShip. It is measured from the bottom of the keel (very bottom of ship) to the masthead.</p></h4>    
                    <h4>Deadweight: <p>This is the total weight of everything that goes on the ship. This includes </p></h4>
                    <h4>Loaded Displacement: 
                        <p>This is the total weight of the ship in the water. 
                        The empty weight of a ship + it's deadweight is equal to it's Loaded Displacement,
                        so, if you have that as an equation, then Loaded Displaement = Empty Ship Mass + Deadweight 
                        If you are familiar with Archimedes Principle, then you will know that a ship in water displaces or pushes aside an equal mass of water to it's own ship mass in order to float.
                        </p>
                    </h4>
                </div>
            </div>
        )
    }
}

export default ShipTerms