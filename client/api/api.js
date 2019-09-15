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
export function getShipsList()  {
    console.log('client/api/api.js getShipsList called')

    return request.get(`/v1/shipslist`)
        .then(res => {
            const shipslist = res.body
            console.log('Got shipslist! client/api/api.js')
            return shipslist
        })
        .catch (error => {
            //This logs any errors caught, while debugging.
            console.log('caught error in client/api/api.js getShipsList', error)   
        })
}
