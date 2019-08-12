const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const db = require('knex')(config)

function getCruiseLine(ships, testConn)  {
    const conn = testConn || db
    
    return conn ('CruiseLine')
    .where('ships', id)
} 

function getCruiseLines (testConn)  {
    const conn = testConn || db
    console.log('server/db/dbcruises.js getCruiseLines called!')

    //Line below connects Ships table
    return conn('ships')
    //Line below selects cruise_line from each ship. It uses distinct(), instead of select(), because that does not repeat Cruise Line Headings. 
    .distinct('cruise_line')
    //Line below puts Cruise Line Headings in Alphabetical Order.
    .orderBy('cruise_line')
    .then(dbResult  =>  {
        console.log('dbcruises.js - GOT CRUISE LINES:',dbResult)
        return dbResult
    })
}

function updateCruiseLineAv (CruiseLine, testConn)    {
    const conn = testConn || db
    return conn ('CruiseLine')
    .where ('CruiseLine', Ship)
    .update({
        available: false
    })
}

module.exports = {
    getCruiseLine,
    getCruiseLines,
    updateCruiseLineAv
}