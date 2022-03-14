// import React from 'react'

// class ReviewForm extends React.Component    {

//    constructor(props)  {
//       super(props)
 
//       this.state = {
//       value: ''
//       }  
//       // binding method for when when new information is collected in this review form. 
//       this.handleChange = this.handleChange.bind(this),
//       // binding method for when user clicks submit button and new review gets displayed on reviews page.
//       this.handleSubmit = this.handleSubmit.bind(this)
//    }

//    handleChange(event)  {
//       this.setState({value: event.target.value})
//    }

//    handleSubmit(event)  {
//       alert('{Review_User_Name' + this.state.value)
//       event.preventDefault()
//    }

//     render()    {

//       const   {
//          Review_User_Name,
//          Review_Ship_Name,
//          Review_img,
//          Review,
//          Cruise_Name,
//          Sail_Date,
//          Leaving_Port,
//          Destination,
//          Review_Title,
//          // Star_Rating,
//          Number_of_Cruises,
//          Travel_Party
//      } = this.props

//    //   Note: These props passed here should have no data from the reviews table, so this is where the 
//    //   user can add information in the Review Form. 

//         return  (

//             <React.Fragment>

//                 <Form onSubmit = {this.handleSubmit}>
                  
//                   <label><b>Review Title: (Optional), but it does give an idea on the overall experience</b></label>
//                      <p>Sum up your cruise in a few words (for example Amazing Caribbean Cruise)</p>
//                   <textbox>{Review_Title}</textbox>

//                   {/* Maybe don't need {ship_name} in h1 */}
//                   <h1>Review your 
//                      {Review_Ship_Name} 
//                   cruise</h1>

//                   <div className = "yourCruise">
//                      <label>Your Cruise on 
//                      {Review_Ship_Name} 
//                      {/* not ship_name  */}
//                      </label>
                     
//                      <img src ={Review_img} />
//                      {/* Maybe ship_name below can go after Your Cruise
//                      <p>{ship_name}</p> */}
//                   </div>

//                     <label>Your Travelling Name:</label><p>(Optional) Don't have to give your Name if you don't want to</p>
//                     {/* or maybe textarea */}
//                     <textbox>{Review_User_Name}</textbox>

//                     <label><b>Cruise Name:</b></label>
//                     {/* or maybe textarea */}
//                     <textbox>{Cruise_Name}</textbox>

//                     <h2>Sailing Date: {Sail_Date}</h2>

//                    <label><b>Year:</b></label>
//                    <select id = "year">
//                       <option value>Select Year</option>
//                       <option value="2019">2019</option>
//                       <option value="2018">2018</option>
//                       <option value="2017">2017</option>
//                       <option value="2016">2016</option>
//                       <option value="2015">2015</option>                                                                                        
//                    </select>

//                    <label><b>Month:</b></label>
//                    <select id = "month">
//                       <option value>Select Month</option>
//                       <option value="1">January</option>
//                       <option value="2">February</option>
//                       <option value="3">March</option>
//                       <option value="4">April</option>
//                       <option value="5">May</option>
//                       <option value="6">June</option>
//                       <option value="7">July</option>
//                       <option value="8">August</option>
//                       <option value="9">September</option>
//                       <option value="10">October</option>
//                       <option value="11">November</option>
//                       <option value="12">December</option>                                                                                        
//                    </select>

//                      <label><b>Cruise Leaving Port</b></label>
//                      <textbox>{Leaving_Port}</textbox>

//                      <label><b>Cruise Destination</b></label>
//                      <textbox>{Destination}</textbox>

//                    <label><b>Star Rate your Cruise Experience</b></label>

//                    {/* <StarRating/><button>Click to Rate</button> */}

//                    <label><b>Add a Review</b></label>
//                    <p>Give us a brief overview of your cruise</p>   
//                    {/* or maybe textarea */}
//                    <textbox>{Review}</textbox>

//                    <label><b>Share about you</b></label>
//                    <br/>
//                    <p>How many cruises have you been on ?</p> 
//                    <br/>  
//                    <label><b>Cruises: {Number_of_Cruises}</b></label>
//                    <select id = "cruises">
//                       <option value>Select Number of Cruises</option>
//                       <option value="1">1 (First Cruise)</option>
//                       <option value="2">2 to 3 Cruises</option>
//                       <option value="3">4 TO 6 Cruises</option>
//                       <option value="4">7 to 9 Cruise</option>
//                       <option value="5">10 to 12 Cruises</option>
//                       <option value="6">13 to 15 Cruises</option>
//                       <option value="7">16 to 18 Cruises</option>
//                       <option value="8">19 or More Cruises</option>                                                                                       
//                    </select> 

//                    <br/>
//                    <p>How did you travel on your Cruise ?</p> 
//                    <br/>  
//                    <label><b>Travelling Party:{Travel_Party}</b></label>
//                    <select id = "cruises">
//                       <option value>Select Travelling Party</option>
//                       <option value="1">Single / Friends</option>
//                       <option value="2">Couple</option>
//                       <option value="3">Family (with Young Children)</option>
//                       <option value="4">Family (with Older Children)</option>
//                       <option value="5">Large Group</option>                                                                                       
//                    </select> 

//                     {/* or maybe button tag below */}
//                     <input type = "submit" value = "Submit Your Review" />

//                 </Form>

//                 </React.Fragment>
//         )
//       }
//    }

// export default ReviewForm