import request from 'superagent'

// This api is for displaying an existing review on a cruise ship reviews page and is taken from my reviews table 
// that has a ship_id join with ships table 
// An example url could be http://localhost:3000/cruiselines/Celestyal_Cruises#Celestyal_Crystal for a review.

// At first, I thought review_id was going to be the join 
// export function getReviews(review_id or ship_id)    {
//export function getReviews(review_id)   {  review_id I think should get taken from mapping process in component

// export function getReview(cruise_line)  {
// May not need cruise_line passed as prop because review details get picked up by review.id in FindReview 
// and join in databse dbreviews file
export function getReviews()    {

    console.log('client/api/api.js getReviews API Endpoint Called')

    // return request.get(`/v1/reviews/${review_id or ship_id}`)
    // return request.get(`/v1/reviews/${review_id}`)   review_id not needed in v1 route
    // return request.get(`/v1/reviews/${cruise_line}`) 

    // may need to not use cruise_line as prop 
    return request.get(`/v1/reviews`)
        .then(res =>  {
            const reviews = res.body
            console.log('Got Existing Reviews! client/api/api.js', reviews)
            return reviews
        })
        .catch(error => {
            // This logs any errors caught, while debugging
            console.log('caught error in client/api/api.js getReviews', error)
        })
}

//This is api for when Cruise Line Headings appear on Cruise Lines Page.
export function getCruiseLines()  {
    console.log('client/api/api.js getCruiseLines called')
    
    return request.get(`/v1/cruiselines`)
        .then(res => {
            const cruiselines = res.body
            console.log('Got cruiselines! client/api/api.js', cruiselines)
            return cruiselines
        })
        .catch (error =>  {
            //This logs any errors caught, while debugging. 
            console.log('Caught error in client/api/api.js getCruiseLines', error)
        })
}

//This is api for when User Clicks on Cruise Line Heading and a List of Ships appears for that Cruise Line on Cruise Lines Page.
//Trying to attempt to get Ships based on their Cruise Line.
export function getShipsList(cruise_line)  {
    console.log('client/api/api.js getShipsList called')

    return request.get(`/v1/shipslist/${cruise_line}`)
        .then(res => {
            const shipslist = res.body
            console.log('Got shipslist! client/api/api.js', shipslist)
            return shipslist
        })
        .catch (error => {
            //This logs any errors caught, while debugging.
            console.log('caught error in client/api/api.js getShipsList', error)   
        })
}

//This api is for classic ships to be displayed on Evolution Part 1 and 2 (pages)
export function getClassics()   {
// export function getClassics(id)   {
//Did not work with id will try ship_name  
// export function getClassics(ship_name)  {  

    console.log('client/api/api.js getClassics called')

    // return request.get (`/v1/classicships/${ship_name}`)
    // return request.get(`/v1/classicships/${id}`) 
    return request.get(`/v1/classicships`)
    // return request.get(`/v1/classics`)
        .then(res => {

            // const classics = res.body
            const classicships = res.body
            console.log('Got classicships! client/api/api.js', classicships)
            // console.log('Got classics! client/api/api.js', classics)
            // return classics
            return classicships
        })
        .catch (error => {
            //This logs any errors caught, while debugging.
            console.log('Caught error in client/api/api.js getClassics', error)
        })
}

// This api is for going to a classic ship page when you click on image on Evolution Part 1 page. 
export function getClassic(classic_ship_name)   {
// export function getClassic(ship_name)   {
    console.log('client/api/api.js getClassic called')

    return request.get(`/v1/classicship/${classic_ship_name}`)
    // return request.get(`/v1/classicship/${ship_name}`)
        .then(res =>  {
            const classicship = res.body
            //ship
            console.log('Got classicship! client/api/api.js', classicship)
            return classicship
        })
        .catch (error =>  {
            // console.log('Caught error in client/api/api.js', classicship)
            console.log('Caught error in client/api/api.js getClassic', error)
        })
}