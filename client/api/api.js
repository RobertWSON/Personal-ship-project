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

//This is api for when User Clicks on a Ship from the Ships List and it goes to the correct Cruise Line. 
export function getCruiseLine()   {
    console.log('client/api/api.js getCruiseLine called')

    return request.get('/v1/cruiseline')
        .then(res   =>  {
            const cruiseline = res.body
            console.log('Got cruiseline! client/api/api.js')
            return cruiseline
        })
        .catch  (error =>   {
            //This logs any errors caught, while debugging.
            console.log('caught error in client/api/api.js getCruiseLine', error)
        })
}

//This is api for when User Clicks on a Ship from the Ships List and it goes to the correct Ship on it's Cruise Line Review page. 
export function getShip()   {
    console.log('client/api/api.js getShip called')

    return request.get('/v1/ship')
        .then(res   =>  {
            const ship = res.body
            console.log('Got ship! client/api/api.js')
            return ship
        })
        .catch  (error =>   {
            //This logs any errors caught, while debugging.
            console.log('caught error in client/api/api.js getShip', error)
        })
}

//This is api that gets the correct Ships on it's Cruise Line Review Page. 
export function getShips()   {
    console.log('client/api/api.js getShips called')

    return request.get('/v1/ships')
        .then(res   =>  {
            const ships = res.body
            console.log('Got ship! client/api/api.js')
            return ships
        })
        .catch  (error =>   {
            //This logs any errors caught, while debugging.
            console.log('caught error in client/api/api.js getShips', error)
        })
}