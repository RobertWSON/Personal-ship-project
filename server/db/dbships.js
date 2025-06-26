const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const db = require('knex')(config)


function getShipsList(cruise_line, testConn)   {
    const conn = testConn || db
    console.log('server/db/dbships.js getShipsList called!')

    //Line below connects to Ships Table
    return conn('Ships')
    //Line below picks out the Ships to display for each Cruise Line
    .select()
    //Line below picks up the Cruise line from where the Ships names have come from
    .where('cruise_line', cruise_line)
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