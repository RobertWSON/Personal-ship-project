import React from 'react'
import {Link} from 'react-router-dom'


class ClassicShips2 extends React.Component  {
    constructor()   {
        super()

        this.state  = {
            showVideo: false
        }
        this.toggleVideo = this.toggleVideo.bind(this)
    }

    toggleVideo = () =>  {
        this.setState((state) => ({
            showVideo: !state.showVideo
        }))
    }

    render() {
        const  {
            classic_ship_name,
            img, 
            img_title, 
            ship_horn
        } = this.props   

    return  (
        <React.Fragment>
            <h3>{classic_ship_name}</h3> 
            {/* Please note, we have pass this.props as state into the Link individually for ship_name, because 
            it is a property of the Link.*/}
            <Link 
                to={{ 
                    pathname: `/evolution-part2/${classic_ship_name}`,
                    state: this.props
                }}>                    
                <img src = {img} title = {img_title} />
            </Link> 

            <div style={{
                marginTop: '1em',
                fontSize: '1em',
                color: 'darkred'
            }}>
                <div>Find out more on {classic_ship_name} , Click on Image</div>
           
                <div style={{display: 'flex', alignItems: 'center', marginTop: '.3em'}}>
                    <div style={{marginRight: '1em', height: '100%'}}>Experience {classic_ship_name} </div> 
                    <button 
                        style={{
                            backgroundColor: 'moccasin',
                            color: 'brown',
                            fontSize: '1.0em',
                            borderRadius: 5,
                            // borderRadius: 15,
                            borderWidth: 2,
                            borderColor: 'darkslateblue',
                            padding: '0.3em'
                        }}
                        type = "button" 
                        onClick = {this.toggleVideo}>
                        Ship Horn
                    </button>
                </div> 
                <br />
                <div>
                {this.state.showVideo &&    (
                    <video controls width = "250">
                        <source
                            src = {ship_horn}
                            type = "video/mp4"
                        />    
                    </video>
                )}    
                </div>
            </div>
            </React.Fragment>                
            )
        }
}

export default ClassicShips2            