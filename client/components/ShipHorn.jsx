import React from 'react'


// Going to try a show/hide for a sound video file when Ship Horn is clicked, instead of opening new url.
class ShipHorn extends React.Component  {
    constructor()   {
        super()

        this.state  = {
            showVideo: false
        }
        this.toggleVideo = this.toggleVideo.bind(this)
    }
    
    toggleVideo = () =>  {
        this.setState((state) => ({
            // ...state,
            showVideo: !state.showVideo
        }))
    }

    // toggleVideo()   {
         
    //     this.setState(prevState =>  ({
    //         showVideo: !prevState.showVideo
    //     }))
    // }

    render()    {
        return  (
            <React.Fragment>
                
                <button class = "video" type = "button" onClick = {this.toggleVideo}>
                    Ship Horn
                </button>
                {this.state.showVideo &&    (
                    <video controls width = "250">
                        <source
                            src = {this.props.shipHorn}
                            type = "video/mp4"
                        />    
                    </video>
                )}
            </React.Fragment>
        )
    }
}

export default ShipHorn