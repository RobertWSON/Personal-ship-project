const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const db = require('knex')(config)


function getClassics (testConn)  {
    const conn = testConn || db
    console.log('server/db/dbclassics.js getClassics called!')

    //Line below connects to Ships Table
    return conn('Evo1')
    // Line below picks out ships to display from Evo1 Database.
    .select()
    //Line below displays classic ships in id order.
    .orderBy('id')
    .then(dbResult  =>  {
        console.log('dbclassics.js - GOT CLASSIC SHIPS:',dbResult)
        return dbResult
    })
}


module.exports = {
    getClassics
}