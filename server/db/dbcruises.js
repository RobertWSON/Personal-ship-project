const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const db = require('knex')(config)


function getCruiseLines (testConn)  {
    const conn = testConn || db
    console.log('server/db/dbcruises.js getCruiseLines called!')

    //Line below connects to Ships Table
    return conn('Ships')
    //Line below picks out each distinct Cruise Line (only once) from Ships Database
    .distinct('cruise_line')
    //Line below puts Cruise Line Headings in Alphabetical Order.
    .orderBy('cruise_line')
    .then(dbResult  =>  {
        console.log('dbcruises.js - GOT CRUISE LINES:',dbResult)
        return dbResult
    })
}

module.exports = {
    getCruiseLines
}