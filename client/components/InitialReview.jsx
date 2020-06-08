import React from 'react'
//import Ship from './Ship'

// The idea of this component is if the seeds file already has my Initial Review,
// then the Textbox with it's Review should be displayed or Shown. 
// If there is no Review in the seeds file, then the Textbox should be Hidden. 

class InitialReview extends React.Component {
    constructor(props)  {
        super(props)

        // this.state = {
            
        // }

        // this.state = {
        //     isClicked: false
        // }

        // this.handleClick = this.handleClick.bind(this)
    // }

    // handleClick()   {    
    }

    render()    {        
        return  (

        <React.Fragment>

            {/* <div className = "Review">  */}

                {/* This is the initial Review taken from my Ship.js seeds file  */}
                {/* <textarea className = "initial">{Review}</textarea>     */}

            {/* this.state.map */}

                <Ship/>
            {/* </div> */}

        </React.Fragment>        
        
        )
    }
}

export default InitialReview