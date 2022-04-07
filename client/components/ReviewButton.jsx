import React from 'react'
import {Link} from 'react-router-dom'
// import AddReview from './AddReview'
// import ReviewForm from './ReviewForm'


class ReviewButton extends React.Component  {
    constructor(props)  {
        super(props)

    }

    render()  {

     return  (
         <React.Fragment>

            <button>
                <Link className="addReview" to={this.props.destination}>{this.props.label}</Link>
            </button>
            

         </React.Fragment>
        )
    }
}

export default ReviewButton