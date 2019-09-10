const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const db = require('knex')(config)


function getShipsList(testConn)   {
    const conn = testConn || db
    console.log('server/db/dbships.js getShipsList called!')

    //Line below connects to Ships Table
    return conn('Ships')
    //Line below picks out each Cruise Line to get the Ships from  
    .distinct('cruise_line')
    //Line below picks out the Ships to display for each Cruise Line
    .select('ship-name')
    //Line below puts Ships in Alphabetical Order.
    .orderBy("ship_name")    
    .then(dbResult  =>  {
        console.log('dbships.js - GOT SHIPS LIST:', dbResult)
        return dbResult
    })
}


module.exports = {
    getShipsList
}