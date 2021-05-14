import request from 'superagent'

// This is api for when a new review is added in the form page.  
// This form page has a url http://localhost:3000/cruiselines/Celestyal_Cruises#Celestyal_Crystal/add-review for example.
// The new review appears in the cruise ship review page http://localhost:3000/cruiselines/Celestyal_Cruises#Celestyal_Crystal
// I am trying to pass cruise_line through this function because it is part of url
// and I will let components in front-end get the ship id and review id from there.
export function getNewReview(cruise_line)  {
    // Tried getNewReview(add-review), but that is not valid, thought about trying (Review_User_Name), 
    // but I don't want that in the url, so I think nothing gets passed and add-review 
    // is handled in FindReview component or route in App Component.
     
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

// This is api for for existing reviews taken from my reviews table are displayed on a cruise ship page
// for example http://localhost:3000/cruiselines/Celestyal_Cruises#Celestyal_Crystal 
// I am trying to pass cruise_line through this function because it is part of url
// and I will let components in front-end get the ship id and review id from there.
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