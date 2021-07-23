import React from 'react'
// import StarRating from './StarRating'
import { getNewReview} from '../api/api'

class AddReview extends React.Component    { 

   constructor(props)  {
       super(props)

       this.state = {
           newreview: true
       }
       this.setUpNewReview = this.setUpNewReview.bind(this)
   }

   componentDidMount() {
       console.log('cdm')
       this.setUpReviews()
   }
 
   setUpNewReview()   {
      console.log('getNewReview')
       getNewReview(this.props.cruiseline)
       .then(res =>    {
           this.setState({
               newreview: res
           })
       })
   }

   render(){
       return(
        <React.Fragment>

        {/* Note: <ReviewForm /> is in a separate component because submitting process needs to be handled with state. */}

        {this.state.reviews.map  (review =>  {

            return  (
              
              <ReviewForm key={review.id} {...newreview}/>
            )  
            
              } // end bracket for review =>  {
            ) // end bracket for (ship
          } {/* end bracket for {this.state.reviews.map  */}
  
        </React.Fragment>

      ) // end bracket for return  (
    } //end bracket for render 
  } //end bracket for AddReview Component

export default AddReview