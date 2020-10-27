const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const db = require('knex')(config)


function getClassics(testConn)  {

    const conn = testConn || db
    console.log('server/db/dbclassics.js getClassics called!')

    // Initialize evo1 table as a starting point for displaying data
    let evo1
    // Line below connects to Evo1 Table for Evolution Part 1  
    return conn('Evo1')
        // Line below picks out ships to display from Evo1 Database.
        .select()
        //Line below displays classic ships in id order.
        .orderBy('id')
        .then((EvoOneResults) => {
            console.log('dbclassics.js - GOT CLASSIC SHIPS:', EvoOneResults)
        evo1 = EvoOneResults

    // Line below connects to Evo2 Table for Evolution Part 2        
    return conn('Evo2')
        // Line below picks out ships to display from Evo2 Database.        
        .select()
        //Line below displays classic ships in id order.        
        .orderBy('id')    
    })
        .then((EvoTwoResults) => {
            console.log('dbclassics.js - GOT CLASSIC SHIPS:', EvoTwoResults)
    return  {        
        evo1,
        evo2: EvoTwoResults
    }    
    // Commented original below because I am trying this new method above
    // .then(dbResult  =>  {
    //     console.log('dbclassics.js - GOT CLASSIC SHIPS:',dbResult)
    //     return dbResult
    })
}


module.exports = {
    getClassics
}