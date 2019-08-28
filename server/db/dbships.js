const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const db = require('knex')(config)

function getShip(id, cruiseLine, testConn)  {
    const conn = testConn || db
    
    return conn ('Ships')
    .where('id', cruiseLine)
    .first()
} 

function getListofShips(testConn)   {
    const conn = testConn || db
    console.log('server/db/dbships.js getListofShips called!')

    //Line below connects to Ships Table
    return conn('Ships')
    //Line below picks out each Cruise Line to get the Ships from  
    .distinct('cruise_line')
    //Line below picks out the Ships to display for each Cruise Line
    .select('ship-name')
    //Line below puts Ships in Alphabetical Order.
    .orderBy("ship_name")    
    .then(dbResult  =>  {
        console.log('dbships.js - GOT LIST OF SHIPS:', dbResult)
        return dbResult
    })
}

function updateShipAv (id, testConn)    {
    const conn = testConn || db
    return conn ('Ships')
    .where ('id', id)
    .update({
        available: false
    })
}

module.exports = {
    getShip,
    getListofShips,
    updateShipAv
}