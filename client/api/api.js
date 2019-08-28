import request from 'superagent'


//This is api for when Cruise Line Headings appear on Cruise Lines Page.
export function getCruiseLines ()  {
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

//This is api for when user Clicks on Cruise Line Heading and a List of Ships appears for that Cruise Line on Cruise Lines Page.
//Trying to attempt to get Ships based on their Cruise Line.
export function getListofShips()  {
    console.log('client/api/api.js getListofShips called')

    return request.get(`/v1/listofships`)
        .then(res => {
            const listofships = res.body
            console.log('Got listofships! client/api/api.js')
            return listofships
        })
        .catch (error => {
            //This logs any errors caught, while debugging.
            console.log('caught error in client/api/api.js getListofShips', error)   
        })
}

//This is api for when user clicks on a ship from the List of Ships.
//The Hash Link for the ship is linked to it's correct ship, within it's Cruise Line Page eg cruiselines/princess#star-princess.
export function getShip (cruise_line, id) {
    console.log('api getShip')

    return request.get('/v1/review/cruise_line#ship_name')
        .then(res => {
            const review = res.body
            console.log(res)
            return review
        })
        .catch(() => {
            throw Error('you need to implement an API route for /v1/review')
        })
}  

//This api gets the correct Cruise Line when the user clicks on a Hash Link for a ship from the List of ships eg cruiselines/princess.
export function getCruiseLine (cruise_line, ship_name, id)   {
    console.log('api getCruiseLine')

    return request.get(`/v1/review/cruise_line`)
        .then(res => {
            const review = res.body
            console.log(res)
            return review
        })
        .catch (() => {
            throw Error('you need to implement an API route for /v1/review')   
        })
}

//This api gets the correct ships for the Cruise Line. For example correct ships for Princess Cruise Line etc.
export function getShips(cruise_line)    {
    console.log('api getShips')

    return request.get('/v1/review/cruise_line')
        .then(res =>    {
            const review = res.body
            console.log(res)
            return review
        })
        .catch (()  =>  {
            throw Error('you need to implement an API route for /v1/review')
        })
}
