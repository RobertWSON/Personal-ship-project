import React from 'react'
// import StarRating from './StarRating'
import { getNewReview} from '../api/api'

class AddReview extends React.Component    { 

   constructor(props)  {
       super(props)

       // replace function takes two arguments, first argument for matching pattern (what to replace) and 
       // second argument is what to replace with. 
       // In .replace(/\s/g, '')  we are replacing all spaces with '_'
       // '\s'  is a regular expression for space, which needs to be inside /<regular expression>/ 
       // and'g' denotes for global (that means all spaces), if you dont give 'g' there, 
       // it will replace the first space (only one space) and will replaced by '_' 
       // In review page .replace(/_/g, ' ') replaces all underscores with space
       const encodedAddReview = addreview.replace(/\s/g, '-')

       this.state = {
           newreview: true, encodedAddReview
       }
       this.setUpNewReview = this.setUpNewReview.bind(this)
   }

   componentDidMount() {
       console.log('cdm')
       this.setUpReviews()
   }
 
   setUpNewReview()   {
       getNewReview(this.state.newreview)
       .then(res =>    {
           this.setState({
               newreview: res
           })
       })
   }

   render(){
       return(
          
        // <ReviewForm encodedAddReview = {newreview}/> 
          <ReviewForm newreview = {encodedAddReview}/>  
       )
   }
}
/* <AddForm or ReviewForm /> in a separate component because the submitting process needs to be handled with state. */ 

export default AddReview