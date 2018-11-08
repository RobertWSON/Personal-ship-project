import React from 'react'
import {Link} from 'react-router-dom'
import Slider from "react-slick";

// export const EvolutionPart1 = () => {
//     return (
//         <div>
//             <div className = 'container'>
//                 <h1>Evolution of Cruise Ships</h1>
//             </div>
//                 <Link className="navmenu" to="/Nav" >Home</Link>
//                 <Link className="navmenu" to="/Nav" >Evolution (Part 1)</Link>
//                 <Link className="navmenu" to="/Nav" >Evolution (Part 2)</Link>
//                 <Link className="navmenu" to="/Nav" >Cruise Lines</Link>
//             </div>  
//             // <div>
                
//             // </div>   
            
            
        
//     )
// }

class CruiseLines extends React.Component  {
    constructor(props)  {
        super(props)    
        this.state = {
            images: [
            "/images/Symphone-of-the-Seas-heading-left-OU2.jpg",
            "/images/nc-composite-suntravel.jpg",
            "/images/",
            "/images/",
            "/images/",
            "/images/",
            "/images/",
            "/images/",
            "/images/",
            "/images/",   
            ],
        }                
    }    
    

    render()    {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidestoShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3500,
            centerMode: true,
            adaptiveHeight: true
        }
    
        return (
            <div>
                <div className = 'container'>
                    <h1>Cruise Lines</h1>
                </div>

                <Slider {...settings}>
                    {this.state.images.map(image => {
                        return (
                            <div className="slide"><img key = {image} src = {image}/></div>
                        )
                    }
                    )}
                
                </Slider>

                <div className='cruiselines'>
                    <p><b>Reviews</b> <br/>
                        <b>Royal caribbean</b> 
                        <br/>Symphony of the Seas -   Gross Tonnage: 228,081     Passengers: 5518 Normal capacity</p>
                        <img src={"/images/methode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F487c86a2-4a3d-11e8-ad0c-add3a1f6e1f4"}/>  
                        
                </div>     
            </div>         
        )

    }
}

export default CruiseLines