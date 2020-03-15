// Note: I have commented code to make this work 


// import React from 'react'
// import {HashLink as Link} from 'react-router-hash-link'


// class HoverList extends React.Component {
//     constructor(props)  {
//         super(props)

//         this.state = {
//             //This is false because the user has not initially Hovered over Link.
//             isHover: false
//         }
//         this.onMouseOut = this.onMouseOut.bind(this),
//         this.onMouseOver = this.onMouseOver.bind(this)
//     }


//     onMouseOut()  {
//         this.setState({isHover: false})
//     }

//     onMouseOver()   {

//         this.setState   (
//             {isHover == true} &&   
//             <img src = {this.props.shipImage}/>
//         )
//     }

//     // findShipNames(ship) {

//     //     return ship.ship_name
  
//         //This function helps display relevant Cruise Ships Names when user clicks on a Cruise Line Heading.
//         //In my backend I have let the database find the relevant Cruise Ships from their Cruise Line, so we just return it here.
    
//     render()    {

//         return  (

//             <React.Fragment>

//                 {/* Link in Cruise Lines Page to Review Page now works, because we have used encoding referenced from constants above. 
//                 So we now have a HashLink with a hash and underscore in it.   */}

//                 {/* Comment below as it has to be changed */}
//                 {/* <Link className = "shipsList" smooth to = {`/cruiselines/${encodedCruiseline}#${encodedShipName}`}
//                     onMouseOut = {this.onMouseOut} onMouseOver = {this.onMouseOver}>

//                     {this.findShipNames(ship)}
//                 </Link>  */}

//                 <Link className = {this.state.isHover ? "isHover" : shipsList}
//                     smooth
//                     to = {`/cruiselines/${this.props.encodedCruiseline}#${this.props.encodedShipName}`}
//                     onMouseOut = {this.onMouseOut}
//                     onMouseOver = {this.onMouseOver}>
//                         {this.props.ShipName}
//                 </Link>
//                     {/* //This Link has a className, because I want to style fonts using CSS for Cruise Ship Names. 
//                     //The key is used to get correct ship names by id for each Ships List, when a Cruise Line Heading is clicked.
//                     //The Link will be an Anchor Link to a specific ship, on it's Cruise Line Page. 
//                     //The Link will have a smooth feature, so it scrolls to the correct ship on it's Cruise Line Page. 
//                     // Note: The Cruise Line Page, can have a Review for more than one ship and will be Review and Ship Components.*/}
              

//             </React.Fragment> 
//         )
//     }      
// }

// export default HoverList