import React from 'react'
// import Ship from './Ship'


class AddReview extends React.Component {
    constructor(props)  {
        super(props)

        this.state = {
            isClicked: false
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick()   {
     
        
    }

    render()    {        
        return  (

        <React.Fragment>

            <div className = "Review"> 

                {/* <h3>Reviews:</h3>
                <br/>  */}

                {/* This is the initial Review taken from my Ship.js seeds file */}
                {/* <textarea className = "initial">{Review}</textarea>   */}

                <button className = "addReview" onClick = {this.handleClick}>
                    Make a Review
                </button>
                <br/>
                {/* This is the initial Review taken from my Ship.js seeds file 
                <textarea className = "initial">{Review}</textarea>    */}

                <br/>

                {/* This is the text box that appears when a user clicks Make Review Button. */}
                <textarea classname = "writeReview"></textarea>

            </div>

        </React.Fragment>        
        
        )
    }
}

export default AddReview