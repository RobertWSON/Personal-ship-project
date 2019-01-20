import React from 'react'
import {Link} from 'react-router-dom'
import Slider from "react-slick";

// export const home = () => {

class Home extends React.Component  {
    constructor(props)  {
        super(props)    
        this.state = {
            images: [
            "/images/555-large-15de21c670ae7c3f6f3f1f37029303c9.jpg",
            "/images/2017-05-14-Ullapool-Cruise-Ship-Boudicca-8373_2000x.jpg",
            "/images/2668001.jpg",
            "/images/article-2294399-18B4F28B000005DC-307_964x621.jpg",
            "/images/carnival-blimp-02.gif",
            "/images/Ecstacy-Liner.jpg",
            "/images/GetImage.jpeg",
            "/images/massadam.jpg",
            "/images/radiance--e1411774013140.jpg",
            "/images/ship-in-Koper-Slovenia-_picmonkeyed.jpg",   
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
    
        // console.log("home")
        return (
            <div>
                <div className = 'container'>
                    <h1>Cruise Shipin</h1>
                </div>

                {/* <div>
                    <Link className="navmenu" to="/Nav" >Home</Link>
                    <Link className="navmenu" to="/Nav" >Evolution (Part 1)</Link>
                    <Link className="navmenu" to="/Nav" >Evolution (Part 2)</Link>
                    <Link className="navmenu" to="/Nav" >Cruise Lines</Link>
                </div> */}

                <Slider {...settings}>
                    {this.state.images.map(image => {
                        return (
                            <div className="slide"><img key = {image} src = {image}/></div>
                        )
                    }
                    )}
                
                </Slider>

                <div className='paragraph'>
                    <p>If you want to learn about the evolution of cruise ships of how they started off and have become the global force today in terms
                        of holiday travel, then you have come to the right place. 
                        <br/>You are also welcome to review our class of luxury cruise ships we have on offer, from the cruiselines.
                    </p>    
                </div>     
            </div>         
        )

    }
}

export default Home