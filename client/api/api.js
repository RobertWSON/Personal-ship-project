import request from 'superagent'
//import Review from '../components/Review';


export function getShip (id, cruiseline) {
    console.log('api getShip')

    return request
        
        .get('/v1/review/cruiseLine#ship_name${id}')
        .then(res => {
            const review = res.body
            console.log(res)
            return review
        })
        .catch(() => {
            throw Error('you need to implement an API route for /v1/review')
        })
}  

//Maybe this should be get getListofShips, instead of getShips

export function getListofShips(cruiseline)  {
    console.log('api getListofShips')
// export function getShips (cruiseLine)   {
//     console.log('api getShips')

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
