import request from 'superagent'

// This is api for when a new review is added in the Review Form page.  
// This form page has a url http://localhost:3000/cruiselines/Celestyal_Cruises/Celestyal_Crystal/add-review for example.
// The newly created review appears in the 
// cruise ship review page http://localhost:3000/cruiselines/Celestyal_Cruises#Celestyal_Crystal for example.

// I am not completely sure if passing cruise_line through this function is the correct way to go for url.
// This is because, cruise_line prop has been passed previously with getShipsList, so do I need to do it again ?

// As we know Review Front-end component picks up ship.id and passes it into Ship Component.
// From there ship_name prop gets passed into FindReview component (how is it done correctly) ? 

// In FindReview component , AddReview Component notices that a review is false (does not exist)
// , so it passes an empty Review_User_Name prop to create for Add Review component.

// In AddReview component, the new review picked up by the empty user name goes through 
// state based on a new review to be added (true), goes through mapping based on review.id .
// From there it goes to ReviewForm Component where a new user fills out form 
// and finally the new details get submitted to be displayed on a cruise ship review page.

export function getNewReview(cruise_line)  { 
    console.log('client/api/api.js getNewReview called')
    
    return request.get(`/v1/newreview/${cruise_line}`)
        .then(res =>  {
            const newreview = res.body
            console.log('Got newreview! client/api/api.js', newreview)
            return newreview
        })
        .catch(error =>  {
            // This logs any errors caught, while debugging.
            console.log('caught error in client/api/api.js getNewReview', error)
        })
} 

// This is api for an existing review displayed on a cruise ship reviews page and are taken from my reviews table. 
// An example url could be  http://localhost:3000/cruiselines/Celestyal_Cruises#Celestyal_Crystal for a review.

// I am not completely sure if passing cruise_line through this function is the correct way to go for url.
// This is because, cruise_line prop has been passed previously with getShipsList, so do I need to do it again ?

// As we know Review Front-end component picks up ship.id and passes it into Ship Component
// and from there ship_name prop gets passed into FindReview component, where an InitialReview gets found
// from review.id. 

export function getReviews(cruise_line)    {
    console.log('client/api/api.js getReviews called')

    return request.get(`/v1/reviews/${cruise_line}`)
        .then(res => {
            const reviews = res.body
            console.log('Got reviews! client/api/api.js', reviews)
            return reviews
        })
        .catch(error => {
            // This logs any errors caught, while debugging.
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