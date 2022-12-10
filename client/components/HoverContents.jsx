import React from 'react'
import {HashLink as Link} from 'react-router-hash-link'


class HoverContents extends React.Component {
    constructor(props)  {
        super(props) 
        
        this.state = {
            isHovering: false
        }

        this.handleMouseHover = this.handleMouseHover.bind(this)
    }

    handleMouseHover()  {
        this.setState(this.toggleHoverState)
    }

    toggleHoverState(state) {
        return  {
            isHovering: !state.isHovering
        }
    }

    render()    {
        return  (
            <React.Fragment>

            {/* We need to put the hover events in the overall contents div, so that it controls both the 
            contents heading and contents menu when a user hovers. */}

            <div className = "contents"    
                onMouseEnter = {this.handleMouseHover}
                onMouseLeave = {this.handleMouseHover}
                >
                <div className = "contentsHead">
                    <h3>Contents</h3>
                </div>   

                {this.state.isHovering && 
        
                <div className = "contentsMenu">
                    <ol> 
                        <li><Link className = "early" smooth to = {`/evolution-part1/${this.props.classic_ship_name}/#early`}>Early Life</Link></li> 
                        <li><Link className = "cruise" smooth to = {`/evolution-part1/${this.props.classic_ship_name}/#cruise`}>As a Cruise Ship</Link></li>
                        <li><Link className = "mem" smooth to = {`/evolution-part1/${this.props.classic_ship_name}/#mem`}>Memorable Moments</Link></li>
                        <li><Link className = "plans" smooth to = {`/evolution-part1/${this.props.classic_ship_name}/#plans`}>Ship Plans</Link></li>
                        <li><Link className = "final" smooth to = {`/evolution-part1/${this.props.classic_ship_name}/#final`}>Final Years</Link></li> 
                    </ol>
                </div> 
                // I am thinking that the best way to do this for both Evolution Part 1 and Part 2 classic ship pages
                // is to use a ternary operator between the divs using :, so this allows for both 
                // evolution-part1 and evolution-part2 pages to be able to use hoverContents
                // :
                // <div className = "contentsMenu">
                //     <ol> 
                //         <li><Link className = "early" smooth to = {`/evolution-part2/${this.props.classic_ship_name}/#early`}>Early Life</Link></li> 
                //         <li><Link className = "cruise" smooth to = {`/evolution-part2/${this.props.classic_ship_name}/#cruise`}>As a Cruise Ship</Link></li>
                //         <li><Link className = "mem" smooth to = {`/evolution-part2/${this.props.classic_ship_name}/#mem`}>Memorable Moments</Link></li>
                //         <li><Link className = "plans" smooth to = {`/evolution-part2/${this.props.classic_ship_name}/#plans`}>Ship Plans</Link></li>
                //         <li><Link className = "final" smooth to = {`/evolution-part2/${this.props.classic_ship_name}/#final`}>Final Years</Link></li> 
                //     </ol>
                // </div>
                }    
            </div>     
            
            </React.Fragment>
        )
    }
}

export default HoverContents




