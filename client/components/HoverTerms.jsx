// import React from 'react'
// import {HashLink as Link} from 'react-router-hash-Link'


// class HoverTerms extends React.Component {
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

            /* We need to put the hover events in the overall contents div, so that it controls both the 
            contents heading and contents menu when a user hovers. */

            /* <div className = "contents"    
                onMouseEnter = {this.handleMouseHover}
                onMouseLeave = {this.handleMouseHover} >
                <div className = "contentsHead">
                    <h3>Contents</h3>
                </div>   

                {this.state.isHovering && 
        
                <div className = "contentsMenu">
                    <ol> 
                        <li><Link smooth to = {`/shipterms/#tonnage`}>Tonnage</Link></li>
                        <li><Link smooth to = {`/shipterms/#measurements`}>Measurements</Link></li>
                        <li><Link smooth to = {`/shipterms/#capacity`}>Capacity</Link></li>
                        <li><Link smooth to = {`/shipterms/#other`}>Other Ship Terms</Link></li>
                    </ol>
                </div> 
                }    
            </div>     
            
            </React.Fragment>
        )
    }
}

export default HoverTerms */