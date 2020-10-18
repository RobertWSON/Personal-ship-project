const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const db = require('knex')(config)


// function getClassics (testConn)  {
// function getClassics (id, testConn)  { 
//id doesn't work, so I will try ship_name
// function getClassics (ship_name, testConn)   { 
function getClassics(testConn)  {

    const conn = testConn || db
    console.log('server/db/dbclassics.js getClassics called!')

    // Line below connects to Evo1 Table for Evolution Part 1 
    // and then Evo2 Table for Evolution Part 2 
    return conn('Evo1','Evo2')
    // Line below picks out ships to display from Evo1 Database.
    .select()
    // .select(ship_name)
    // .select(id)
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