// import React from 'react'
// import {HashLink as Link} from 'react-router-hash-link'
// // import ListofShips from './ListofShips'

// class HoverList extends React.Component {
//     constructor(props)  {
//         super(props)

//         this.state = {
//             //initialize shipsList as an empty array
//             shipsList: [],
//             //This is false because the user has not initially Hovered over Link.
//             isHover: false,
//             //This is initially false because we have not visited shipsList yet. 
//             hasfetched: false 
//         }
//         this.onMouseOut = this.onMouseOut.bind(this)
//         this.onMouseOver = this.onMouseOver.bind(this)
//     }


//     onMouseOut()  {

//     }

//     onMouseOver()   {

//         this.setState = ({
//             isHover:true
//         })

//         // //This block of code below sorts out the toggling of the State for the Cruise Line Headings. 
//         // this.setState(prevState =>  ({
//         //     //Code below will find previous state of Ships List when it is either open or closed.
//         //     shipsList: prevState.shipsList,
//         //     //Code below will reverse the Previous State of isOpen for Ships List when it is open or closed.
//         //     isOpen: !prevState.isHover,
//         //     //Code below will find Previous State of hasFetched for Ships List when it is closed.
//         //     hasFetched: prevState.hasFetched
//         //     }))

//         // <img src ={img}/>

//     }

//     findShipNames(ship) {

//         return ship.ship_name
  
//         //This function helps display relevant Cruise Ships Names when user clicks on a Cruise Line Heading.
//         //In my backend I have let the database find the relevant Cruise Ships from their Cruise Line, so we just return it here.
//       } 
    
//     render()    {

//         return  (

//             <React.Fragment>

//                 <ol>
                    
//                     {/* When Ships List is about to be opened, we will use map to find the correct Ships for the List.*/}
//                     {this.state.isOpen == true && 
//                     this.state.shipsList.map (ship => { 
                        
//                         // Below we are creating constants that will be used in the Link below.

//                         // The CruiseLine and ShipName constants are used to replace all spaces in the url with an underscore "_".
//                         const encodedCruiseline = ship.cruise_line.replace(/\s/g, '_')
//                         const encodedShipName = ship.ship_name.replace(/\s/g, '_')

//                         // replace function takes two arguments, first argument for matching pattern (what to replace) and 
//                         // second argument is what to replace with. 
//                         // In .replace(/\s/g, '')  we are replacing all spaces with '_'
//                         // '\s'  is a regular expression for space, which needs to be inside /<regular expression>/ 
//                         // and'g' denotes for global (that means all spaces), if you dont give 'g' there, 
//                         // it will replace the first space (only one space) and will replaced by '_' 
//                         // In review page .replace(/_/g, ' ') replaces all underscores with space
                        
//                         return   (
                        
//                         //We only need to find the id for each ship, because the api is doing the rest of the work for us by finding the 
//                         //correct Cruise line to match the id. 
//                         <li key = {ship.id}>
                            
//                             {/* Link in Cruise Lines Page to Review Page now works, because we have used encoding referenced from constants above. 
//                             So we now have a HashLink with a hash and underscore in it.   */}
//                             <Link className = "shipsList" smooth to = {`/cruiselines/${encodedCruiseline}#${encodedShipName}`}
//                              onMouseOut = {this.onMouseOut} onMouseOver = {this.onMouseOver}>

//                             {this.findShipNames(ship)}
//                             </Link>
//                         </li>
//                         )  

//                     //This Link has a className, because I want to style fonts using CSS for Cruise Ship Names. 
//                     //The key is used to get correct ship names by id for each Ships List, when a Cruise Line Heading is clicked.
//                     //The Link will be an Anchor Link to a specific ship, on it's Cruise Line Page. 
//                     //The Link will have a smooth feature, so it scrolls to the correct ship on it's Cruise Line Page. 
//                     // Note: The Cruise Line Page, can have a Review for more than one ship and will be Review and Ship Components.   
                
//                 })
//                 }
//                 </ol>

                
//                     {/* <div key={ship.cruise_line}> */}
//                     {/* <div key = {ship.id}     */}
                    
//                         {/* ListofShips component needs cruise_line, because when user clicks on Cruise Line Heading button,
//                         //     we need to fetch ships that belongs to that particular cruiseline. */}
//                         {/* We need to render multiple ListofShips components, with one for each cruiseline */}
//                         {/* <ListofShips> 
//                         // cruise_line={ship.cruise_line} 
//                         // onMouseOut = {this.onMouseOut} onMouseOver = {this.onMouseOver}>

//                         //     {this.findShipNames(ship)}
//                         // </ListofShips>

//                     // </div> */}




//                 {/* //     )

//                 // })}   */}

//             </React.Fragment> 
//         )
//     }
        
// }

// export default HoverList