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

                {/* I thought of maybe having a hover terms, similar to what I did with a classic ship contents could be an option. */}
                {/* I think though probably the best option would be to have different sections (like Tonnage Explained) 
                using accordion. I have saved an example from the internet, which I can work this out from. */}

                <div className = "ShipTerms">
                    <div className = "tonnage">
                        <h2>Tonnage Explained</h2>

                        <h4>Gross Tonnnage: <p>A lot of people get confused by this term, thinking that it is the weight of the ship. 
                            It is actually a measure of the total inside of volume of a ship that is used for charges, like going 
                            into a port or travelling through a canal (eg Panama Canal). The measurement includes the engine room, 
                            bridge, room for cargo and accomodation. One Gross Ton is equal to 100 cubic feet or about 
                            2.83 cubic metres. </p></h4>

                        <h4>Deadweight: <p>This is the total weight of everything that goes on the ship. This includes
                            fuel, people and all other items that are put on the ship after it has been built.</p></h4>

                        <h4>Lightship: <p>This is the empty weight of the ship. It excludes cargo, fuel, water, ballast, stores, 
                            passengers and crew, but includes water in boilers to steaming level.</p></h4> 

                        <h4>Loaded Displacement: 
                            <p>This is the total weight of a ship in water. 
                            The empty weight of a ship + it's deadweight is equal to it's Loaded Displacement,
                            so, if you have that as an equation, then Loaded Displaement = Empty Ship Mass + Deadweight 
                            If you are familiar with Archimedes Principle, then you will know that a ship in water displaces or 
                            pushes aside an equal mass of water to it's own ship mass in order to float.
                            </p>
                        </h4>

                        <hr/>

                    </div>

                    <div className = "measurements">

                        <h2>Understanding Measurements</h2>

                        <h4>Length: <p>This is the total length of the ship. Sometimes some vessels have what is called a bulbous bow 
                            (which bulges under the water). In this situation the ship length is longer at the front of the ship 
                            due to there being more length of ship than you can actually see, as it is hidden under the water 
                            by the bow (front of the ship).
                            </p>
                        </h4>

                        <h4>Beam: <p>This is the width of the ship at it's widest point of it's hull. 
                            The hull is the main structure of the ship that extends it's whole length.
                            </p>
                        </h4>
                            
                        <h4>Draft: <p>a ships draught is the vertical distance starting from the bottom of the ship to the water
                            level - pretty much how far below the water the vessel is sitting. 
                            It can change due to the amount of weight on the ship and the temperature of the water.
                            A ships draft will be less in warm tropical waters than it would be in colder Alaskan waters.
                            Also a ships draft will be less fresh water lakes than it would be in sea water because sea water is 
                            heavier than fesh water because of the salt 
                            </p></h4>

                        <h4>Height: <p>This is the height of the CruiseShip. It is measured from the bottom of the keel 
                            (very bottom of ship) to the masthead.
                            </p>
                        </h4>    

                        <h4>Bridge Height: <p>This is the height to the very top of the bridge, measured from the very bottom of
                            the ship (keel).
                            </p>
                        </h4>

                        <h4>Bridge Height above water: <p>This is the height to the very top of the bridge, measured from the waterline.
                            Now just like the draft, this can change according to the amount of weight on the ship, 
                            temperature of the water and if it is sea or fresh water. 
                            Another important apect to note is that the measurement is taken at the average draft for the ship. 
                            </p>
                        </h4>

                        <h4>Bow to Bridge Length: <p>This is the distance from the very front of the ship (bow) to the start of the
                            bridge from outside the ship. it is important to note that some ships have what is called a bulbous bow
                            under water at the bow, which you cannot see when it is in water as it can extend past the top bow.
                            While quite a lot of ship don't have bulbous bows, taking this measurement in a drydock can get around 
                            not seeing the whole length of the ship when it is in water. 
                            </p>
                        </h4>

                        <h4>Bow Height: <p>This is the height to the very top of the bow from the very bottom of the ship (keel).
                            Please note that a lot of classic older cruise ships bakc in the day had rather high bows and 
                            this made them very seaworthy back then beng able to handle higher waves. 
                            </p>
                        </h4>

                        <hr/>

                    </div>

                    <div className = "capacities">

                        <h2>What does Capacity mean with a Ship</h2>

                        <h4>Passenger Capacity (Full): <p>This is the maximum amount of passengers that a cruise ship
                            can take with all cabins being completely full.
                            </p>
                        </h4>    

                        <h4>Maximum Passengers: <p>This is the same as Passenger Capacity (Full), being the maximum amount of 
                            passengers that a cruise ship can take.
                            </p>
                        </h4>

                        <h4>Passenger Capacity (Double Occupancy): <p>This is the maximum amount of passengers that the Cruise Ship
                            can take, based on there being 2 passengers for every cabin that they are staying in.
                            </p>
                        </h4>

                        <h4>First Class and Tourist Class: <p>These are classes of accomodation only used on some of the oldest
                            classic cruise ships. 
                            <br/>First Class is accomodation that you pay the higher price for.
                            <br/>Tourist Class is accomodation that you pay the lowest price for.
                            </p>
                        </h4>                    

                        <h4>Fuel Capacity: <p>Just like a car, this is a measure of the amount of fuel needed so that a ship can
                            travel. In the times of classic cruise ships the capacity was measured in imperial (UK tons) of 
                            2,240 pounds, but in these modern times, fuel capacity is measured in metric tonnes of 1,000 kg and 
                            sometimes cubic metres (m^3).
                            </p>
                        </h4>

                        <h4>Fuel Consumption: <p>The rate at which fuel is used or consumed while in service.
                            It is usually measured in UK Tons or metric Tonnes per day.
                            </p>
                        </h4>

                        <h4>Fresh Water Capacity:<p>This is amount of fresh water that ship has for drinking water, showers and taps. 
                            It is usually measured in cubic metres, but can also be measured in imperial tons of 2240 pounds for 
                            the older classic cruise ships or metric tonnes of 1000 kg for the modern cruise ships.
                            </p>
                        </h4>

                        <hr/>
                        
                    </div>

                    <div className="other-terms">

                        <h2>Other Common Ship Terms</h2>

                        <h4><b>Year or Year in Service:</b> <p>This is the year that the Cruise Ship is put into service and ready 
                            to take passengers
                            </p>
                        </h4> 

                        <h4>Builder:<p>The company that built the cruise ship and location of where it was built.
                            </p>
                        </h4>
                        
                        <h4>Operator:<p>The cruise line that allows the cruise ship to operate.
                            </p>
                        </h4>
                        
                        <h4>Port of Registry:<p>This is the port where the cruise ship pays its taxes and registration fees to the 
                            company that owns the cruise ship and keeps its details.
                            </p>
                        </h4>

                        <h4>Cost:<p>This is the total cost of how much money was spent to build the ship.
                            </p>
                        </h4>
                        
                        <h4>Conversion Cost:<p>This is the cost of how much money was spent to change the ship in a significant way. 
                            Usually with a cruise ship this involves lengthening the mid section and this allows more passengers to 
                            travel on the cruise ship.
                            </p>
                        </h4>
                        
                        <h4>IMO Number:<p>This stand for International Maritime Organisation Number and every ship needs to have it 
                            to identify it. It has been in place with ships since 1 January 1966 and does not change at all during 
                            the ships entire time at sea. With passenger vessels like cruise ships above 100 Gross Tons they need to 
                            have an IMO number and cargo vessels need to have it above 300 Gross Tons. If you look at the back of a 
                            ship you can see IMO followed by its 7 digit number.
                            </p>
                        </h4>
                        
                        <h4>Speed:<p>This can be separated into 2 Types. The maximum speed that the ship gets up to during its trials 
                            before it goes into service. 
                            The other type is the cruising speed, which is a comfortable speed that it can travel at while in use 
                            on a cruise. Cruising speed can also be known as service speed. Speed is usually measured in knots, 
                            which is 1 nautical mile per hour. A nautical mile is 1,852 metres per hour (1.852 km /h). 
                            </p>
                        </h4>
                        
                        <h4>Power:<p>This is the total power that the ship produces from the propellors. 
                            It can be measured in imperial horsepower or Kilo watts. 
                            Imperial Horsepower is 550 foot pounds of torque per second. 
                            <br/>The formula for power (P) = 2 Pi N T , where Pi = about 3.14159, 
                            N = Number of revolution of the propellor per second (rpm) 
                            and T = Torque moment on the propellor, either measured in foot pound for horsepower 
                            or Newton Metres for Kilo watts. 
                            </p>
                        </h4>
                        
                        <h4>Propellor:<p>A device attached to the keel on the back of a ship with rotating blades and rotating hub. 
                            It is designed to push a ship forward, from thrust that it gets by pumping water through it's pipes 
                            that are connected to the rotating hub. It usually rotates clockwise.
                            </p>
                        </h4>

                        <h4>Propellor Type:<p>The type of propellor used on a cruise ship. Most propellors used on a cruise ships 
                            are of the screw type, which have a a spiral shape and are attached to a propellor shaft.
                            </p>
                        </h4>
                        
                        <h4>Propellor Size:<p>This is the diameter of the rotating propellor blades. It is usually measured in 
                            feet and inches for the older ships and metres for the newer ships.
                            </p>
                        </h4>

                        <h4>Propellor RPM:<p>Propellor speed in revolutions per minute (amount of times it goes around in circles).
                            </p>
                        </h4>       
                        
                        <h4>Rudder<p>This is a solid control surface, behind the propellor, used to move (steer) the ship left 
                            or right. It is attached to the hull at the back of the ship
                            </p>
                        </h4>

                        <h4>Keel:<p>This is the very bottom spine of the ship and the main construction is built on top of it.
                            </p>
                        </h4>
                        
                        <h4>Type of Fuel:<p>This is the type of fuel that the ship uses to operate. In the older days the Titanic 
                            used coal to operate, but these days most ships used heavy density oil of about 0.92 tonnes per cubic 
                            metre.
                            </p>
                        </h4>
                        
                        <h4>Passenger Decks:<p>This is the number of decks that a passenger doing a cruise can have access to.
                            </p>
                        </h4>
                        
                        <h4>Aft:<p>The back part of the ship.
                            </p>
                        </h4>

                        <h4>Forward:<p>The front part of the ship.
                            </p>
                        </h4>
                        
                        <h4>Stern:<p>The very back part of the ship.
                            </p>
                        </h4>
                        
                        <h4>Bow:<p>The very front part of the ship.
                            </p>
                        </h4>
                        
                        <h4>Port:<p>The left side of the ship when facing the bow
                            </p>
                        </h4>
                        
                        <h4>Starboard:<p>The right hand side of the ship when facing the bow.
                            </p>
                        </h4>

                        <hr/>

                    </div>
                </div>   
            </div>
        )
    }
}

export default ShipTerms