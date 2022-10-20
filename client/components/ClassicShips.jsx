import React from 'react'
import {Link} from 'react-router-dom'


class ClassicShips extends React.Component  {
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

        // const encodedClassicShipName = classic_ship_name.replace(/\s/g, '_')
        // const decodedClassicShipName = classic_ship_name.replace(/_/g, '')

    return  (
        <React.Fragment>
            <h3>{classic_ship_name}</h3> 
            {/* Please note, we have pass this.props as state into the Link individually for classic_ship_name, because 
            it is a property of the Link.*/}
            <Link 
                to={{ 
                    // pathname: `/evolutionpart1/${ship_name}`,
                    pathname: `/evolution-part1/${classic_ship_name}`,
                    state: this.props,
                    encoding: classic_ship_name
                }}>                    
                <img src = {img} title = {img_title} />
            </Link> 

             {/* It does not work well with this, so comment for now    */}
            {/* <div className = "evoTextbox">
                <div>Find out more on {classic_ship_name} , Click on Image</div>

                <div className = "evoFlex">
                    <div className = "evoMargins">Experience {classic_ship_name}</div>

                    <button className = "hornButton" type = "button" onClick = {this.toggleVideo}>
                        Ship Horn
                    </button>
                </div>
                <br />

                <div>
                {this.state.showVideo &&    (
                    <video controls width = "250">
                        <source src = {ship_horn} type = "video/mp4"/>
                    </video>
                )}    
                </div>
            </div>      */}

            {/* Uncomment below        */}
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

export default ClassicShips