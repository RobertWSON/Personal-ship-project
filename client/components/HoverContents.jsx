// This component commented because ship_name is not defined in it and id Hash Links as well

// import React from 'react'
// import {HashLink as Link} from 'react-router-hash-Link'


// class HoverContents extends React.Component {
//     constructor(props)  {
//         super(props) 
        
//         this.state = {
//             isHovering: false
//         }

//         this.handleMouseHover = this.handleMouseHover.bind(this)
//     }

//     handleMouseHover()  {
//         this.setState(this.toggleHoverState)
//     }

//     toggleHoverState(state) {
//         return  {
//             isHovering: !state.isHovering
//         }
//     }

//     render()    {
//         return  (
//             <React.Fragment>

//                 <div className = "contentsHead"
//                     onMouseEnter = {this.handleMouseHover}
//                     onMouseLeave = {this.handleMouseHover}
//                 >
//                     <h3>Contents</h3>
//                 </div>
//                 {this.state.isHovering && 
//                     <div className = "contentsMenu">
//                         <ol> 
//                         <li><Link className = "early" smooth to = {`/evolutionpart1/${ship_name}/#early`}>Early Life</Link></li> 
//                         <li><Link className = "cruise" smooth to = {`/evolutionpart1/${ship_name}/#cruise`}>As a Cruise Ship</Link></li>
//                         <li><Link className = "mem" smooth to = {`/evolutionpart1/${ship_name}/#mem`}>Memorable Moments</Link></li>
//                         <li><Link className = "plans" smooth to = {`/evolutionpart1/${ship_name}/#plans`}>Ship Plans</Link></li>
//                         <li><Link className = "final" smooth to = {`/evolutionpart1/${ship_name}/#final`}>Final Years</Link></li> 
//                     </ol>
//                 </div>         
                
//                 }


//             </React.Fragment>
//         )
//     }
// }

// export default HoverContents