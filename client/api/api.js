import request from 'superagent'


//This is api for when Cruise Line Headings appear on Cruise lines Page.
export function getCruiseLines (ships)  {
    console.log('getCruiseLines')
    
    return request

    .get(`/v1/review/ListofShips`)
    .then(res => {
        const review = res.body
        console.log(res)
        return review
    })
    .catch (() => {
        throw Error('you need to implement an API route for /v1/ListofShips')
    }) 
}

//This is api for when user Clicks on Cruise Line Heading and a List of Ships appears for that Cruise Line on Cruise Lines Page.
export function getListofShips(cruiseline)  {
    console.log('api getListofShips')

    return request
    
    .get(`/v1/cruise_line/ship_names`)
    .then(res => {
        const review = res.body
        console.log(res)
        return review
    })
    .catch (() => {
        throw Error('you need to implement an API route for /v1/ListofShips')   
    })
}

//This is api for when user clicks on a ship from the List of Ships.
//The Hash Link for the ship is linked to it's correct ship, within it's Cruise Line Page eg cruiselines/princess#star-princess.
export function getShip (id, cruiseline) {
    console.log('api getShip')

    return request
        
        .get('/v1/review/cruise_line#ship_name${id}')
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
export function getCruiseLine (ships, id)   {
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
export function getShips(cruiseline)    {
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
