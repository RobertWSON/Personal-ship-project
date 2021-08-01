import React from 'react'

import InitialReview from './InitialReview'
import AddReview from './AddReview'
import { getReviews } from '../api/api'

class FindReview extends React.Component    { 

    constructor(props)  {
        super(props)
        // const encodedAddReview = Add_Review(/\s/g, '-')

        this.state = {
            reviews: false
        }
        this.setUpReviews = this.setUpReviews.bind(this)
    }
 
    componentDidMount() {
        console.log('cdm')
        this.setUpReviews()
    }

    setUpReviews()   {
        getReviews(this.state.reviews)
        .then(res =>    {
            this.setState({
                reviews: res
            })
        })
    }

    // const encodedAddReview = Add_Review(/\s/g, '-')

    render()    {
        if (this.state.reviews == true)

        return  (
        
            <React.Fragment>

                {this.state.reviews.map (review => {
                    return  (
                        <InitialReview key={review.id} {...review}/>
                        )    
                    } //end bracket for review =>   {        
                  )  // end bracket for (review  
                } {/*end bracket for {this.state.reviews.map}*/}    
                
            </React.Fragment> 

        ) // end bracket for return
        
        // If Review_User_Name does not have data in reviews table, then a new review 
        // has to be added for that cruise Ship.        

        return  (    

            <AddReview reviews={this.props.Review_User_Name}/>
        ) 
    } // end bracket for render
} // end bracket for FindReview Component

export default FindReview