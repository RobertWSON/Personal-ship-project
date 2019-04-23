import request from 'superagent'
import Review from '../components/Review';


export function getShip (id, cruiseline)    {
    return request
    .get('v1/review/cruiseLine#ship_name${id}')
    .then(res =>    {
        const review = res.body
        console.log(res)
        return Review
    }) 
    .catch  (() =>  {
        throw Error('you need to implement an API route for v1/review')
        .catch(console.error)
    })
}

export function getShips (cruiseLine)  {
    console.log('api getShips')

    return request
    .get('v1/review/cruise_Line/ship_names')
    
    .then(res =>    {

        const review = res.body
        console.log(res)
        return Review 
    })
    .catch (()  =>  {
        throw Error('you need to implement an API route for /v1/ListofShips')
        .catch(console.error)
    })
    
}

export function getCruiseLine (ships, id)   {
    return request
    .get('/v1/review/cruise_Line')

    .then(res =>    {
        const review = res.body
        return Review

    })
    .catch (() =>   {
        throw Error('you need to implement an API route for /v1/review')
        .catch(console.error)
    })
}

export function getCruiselines (ships) {
    return request
    .get('/v1/review/ListofShips') 

    .then(res =>    {
        const review = res.body
        console.log(res)
        return review
    })
    .catch(()   =>  {
        throw Error('you need to implement an API route for /v1/ListofShips')
        .catch(console.error)
    })

}

// export function getAllShips () {
//     console.log('api getAllShips')

//     return request
//         //.get('v1/listofships')
//         .get('/v1/review')
//         //.get('/v1/cruiselines')
//         .then(res => {
//             const review = res.body
//             console.log(res)
//             return review
//             //return ships
//         })
//         .catch(() => {
//             throw Error('you need to implement an API route for /v1/listofships')
//             .catch(console.error)
//             //throw Error('you need to implement an API route for /v1/review')
//             //throw Error('you need to implement an API route for /v1/cruiselines')
//         })
// }  

// export function getShip (id)    {
//     return request.get(`/v1/review/${id}`)
//     //return request.get('/v1/ship/${id}')
//     //return request.get(`/v1/cruiselines/${id}`)
    
//     .then(res => {
//         console.log(res.body)

//         //const ship = res.body
//         const review = res.body
//         return review
//         //return ship
//     })
//     .catch (() => {
//         throw Error('you need to implement an API route for /v1/review')  
//         .catch(console.error)  
//         //throw Error('You need to implement an API route for /v1/cruiselines')
//     })
// }