import React from 'react'
import Slider from "react-slick";

class ShipShots extends React.Component  {
    constructor(props)  {
        super(props)    
        this.state = {
            images: [
            "/images/Symphone-of-the-Seas-heading-left-OU2.jpg",
            "/images/nc-composite-suntravel.jpg",
            "/images/920x920.jpg",
            "/images/1024x1024.jpg",
            "/images/Cunard-Queen-Mary-2.jpg",
            "/images/2D0B1B9700000578-3258548-Room_with_a_view_A_suite_on_Queen_Mary_2_with_lounge_area_and_te-a-37_1443887000460.jpg",
            "/images/2D0B23EF00000578-3258548-Luxury_at_sea_The_liner_boasts_its_own_spa_with_jacuzzi_and_wate-a-38_1443887002992.jpg",
            "/images/2D0B232200000578-3258548-Never_a_dull_moment_There_are_many_classes_on_offer_from_yoga_to-a-41_1443887011515.jpg",
            "/images/fred-olsen-boudicca_x400_41.jpg",
            "/images/hqdefault.jpg",
            "/images/16979.jpg", 
            "/images/Accommodation on Boudicca-min.jpg",
            "/images/cabin-DSC01406_400.jpg",
            "/images/JS3.jpg",   
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

                <Slider {...settings}>
                    {
                        this.state.images.map((image, index) => (
                            <div className="slide" key={index}>
                                <img key = {image} src = {image}/>
                            </div>
                        ))
                    }
                
                </Slider>

            </div>                   
            
        )
    }
}

export default ShipShots