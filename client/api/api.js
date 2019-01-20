import request from 'superagent'

export function getAllShips () {
    return request
        .get('/v1/review')
        //.get('/v1/cruiselines')
        .then(res => {
            const ships = res.body
            console.log(res)
            return ships
        })
        .catch(() => {
            throw Error('you need to implement an API route for /v1/cruiselines')
        })
}  

export function getShip (id)    {
    return request.get(`/v1/review/${id}`)
    //return request.get(`/v1/cruiselines/${id}`)
    .then(res => {
        console.log(res.body)

        const ship = res.body
        return ship
    })
    .catch (() => {
        throw Error('You need to implement an API route for /v1/cruiselines')
    })
}