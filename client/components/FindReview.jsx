import React from 'react'
import InitialReview from './InitialReview'
import {getReviews} from '../api/api'


class FindReview extends React.Component    {

    constructor(props)  {
        super(props)

        this.state = {
            // Initialize reviews as an empty Array. 
            reviews: []
        }
        this.setUpReviews = this.setUpReviews.bind(this)
    }

    componentDidMount() {
        console.log('cdm')
        this.setUpReviews()
    }

    setUpReviews()   {
        console.log('getReviews')
        // Line below gets the getReviews function from api.
        getReviews(this.props.review_id)
        //.then get a response from finding reviews from database.
        .then(res   =>  {
            this.setState({
                // Returns response from api
                // reviews: res.reviews
                // Trying just res for api response
                reviews: res
            })
        })
    }

    render()    {

        // if (this.state.reviews == null)
        
        return  (

        <React.Fragment>
            {/* {this.state.reviews.map ( review   =>   {    
            Maybe need to get review_id from ships table and because it has a join with reviews table 
            it gets the details from each review.id form the reviews table. */}

            {this.state.reviews.map   (review  =>  {
                return  (  
                    <InitialReview key= {review.id} {...review} />              
                    // <InitialReview key={review.id} {...review} />
                    // <InitialReview key={review or ship.id}  {...review or ship} /> 
                        )
                })
            }
        </React.Fragment>
        )          
    }
}

export default FindReview