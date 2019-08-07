import request from 'superagent'


//This is api for when Cruise Line Headings appear on Cruise Lines Page.
export function getCruiseLines (cruise_line)  {
    console.log('getCruiseLines')
    
    return request

    .get(`/#/cruiselines`)
    .then(res => {
        const cruiselines = res.body
        console.log(res)
        return cruiselines
    })
    .catch (() => {
        throw Error('you need to implement an API route for /#/cruiselines')
    }) 
}

//This is api for when user Clicks on Cruise Line Heading and a List of Ships appears for that Cruise Line on Cruise Lines Page.
export function getListofShips(cruise_line, ship_name)  {
    console.log('api getListofShips')

    return request
    
    .get(`/#/cruiselines`)
    .then(res => {
        const cruiselines = res.body
        console.log(res)
        return cruiselines
    })
    .catch (() => {
        throw Error('you need to implement an API route for /#/cruiselines')   
    })
}

//This is api for when user clicks on a ship from the List of Ships.
//The Hash Link for the ship is linked to it's correct ship, within it's Cruise Line Page eg cruiselines/princess#star-princess.
export function getShip (cruise_line, id) {
    console.log('api getShip')

    return request
        
        .get('/v1/review/cruise_line#ship_name')
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

    return request
    
    .get(`/v1/review/cruise_line`)
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

    return request

        .get('/v1/review/cruise_line')
        .then(res =>    {
            const review = res.body
            console.log(res)
            return review
        })
        .catch (()  =>  {
            throw Error('you need to implement an API route for /v1/review')
        })
}
