// import React from 'react'
// import {Link} from 'react-router-dom'
// import AddReview from './AddReview'


// class ReviewButton extends React.Component  {
//     constructor(props)  {
//         super(props)

//         this.state = {
//             isClicked: false
//         }

//         this.handleClick = this.handleClick.bind(this)
//     }

//     handleClick()   {
//         this.setState(this.toggleClickState)
//     }

//     toggleClickState(state) {
//         return  {
//             isClicked: !state.isClicked
//         }
//     }

//     render()  {
//         const   {
//             cruise_line,
//             ship_name,
//             review_id
//         } = this.props

//     return  (
//         <React.Fragment>

//             <Link to={`/cruiselines/${encodedCruiseline}${encodedShipName}/addreview`}>Make a Review</Link>

//         </React.Fragment>
//         )
//     }
// }

// export default ReviewButton