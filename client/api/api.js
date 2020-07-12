import request from 'superagent'


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

//This is api for classic ships to be displayed on Evolution Part 1 and 2 (pages)
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
