// Note: I have commented code to make this work 

// import React from 'react'


// class HandleClick extends React.Component   {
//     constructor(props)  {
//         super(props)

//         this.state = {
//             //initialize shipsList as an empty array
//             shipsList: [],
//             //This is false because the shipsList is not initially open.
//             isOpen: false,
//             //This is initially false because we have not visited shipsList yet. 
//             hasfetched: false 
//         }
//         // binding method for HandClick function, which controls clicking on a Cruise Line Heading
//         this.handleClick = this.handleClick.bind(this)
//     }

//     /* When a Ships List is open and user clicks on a Cruise Line Heading, the Ships List Collapses
//        and just a Cruise Line Heading is shown.*/

//     handleClick() {
   
//     //This handleClick sorts out the changing of state between Shipslist being open or not, when a Cruise Line Heading is clicked.
    
//         //This if statement finds out if the shipsList has been visited and if it has, it uses hasFetched to find Ships for List.
//         if(!this.state.hasFetched)  {
//             this.setUpShips()
//         }
    
//         //This block of code below sorts out the toggling of the State for the Cruise Line Headings. 
//         this.setState(prevState =>  ({
//         //Code below will find previous state of Ships List when it is either open or closed.
//         shipsList: prevState.shipsList,
//         //Code below will reverse the Previous State of isOpen for Ships List when it is open or closed.
//         isOpen: !prevState.isOpen,
//         //Code below will find Previous State of hasFetched for Ships List when it is closed.
//         hasFetched: prevState.hasFetched
//         }))
//     }

//     render()    {

//         return  (
               
//             <React.Fragment>                    
                
//                 <button className = "cruiseButton" onClick = {this.handleClick}>{this.props.cruise_line}</button>

//             </React.Fragment>
//         )
//     }
// }

// export default HandleClick  