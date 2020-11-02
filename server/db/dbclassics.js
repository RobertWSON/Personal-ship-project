const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const db = require('knex')(config)


function getClassics(testConn)  {

    const conn = testConn || db
    console.log('server/db/dbclassics.js getClassics called!')

    // I may not need let evo1 because it seems like it doesn't make a difference with localhost
    // Initialize evo1 table as a starting point for displaying data
    let evo1

    // Line below connects to Evo1 Table for Evolution Part 1  
    return conn('Evo1')
        // Line below picks out ships to display from Evo1 Table.
        .select()
        //Line below displays Classic Ships in id order.
        .orderBy('id')
        
        //This picks up the information for all Classic Ships on Evolution Part 1 Page
        .then((EvoOneResults) => {
            console.log('dbclassics.js - GOT CLASSIC SHIPS:', EvoOneResults)
        evo1 = EvoOneResults

    // Line below connects to Evo2 Table for Evolution Part 2        
    return conn('Evo2')
        // Line below picks out ships to display from Evo2 Table.        
        .select()
        //Line below displays classic ships in id order.             
        .orderBy('id')    
    })
        //This picks up the information for all Classic Ships on Evolution Part 2 Page
        .then((EvoTwoResults) => {
            console.log('dbclassics.js - GOT CLASSIC SHIPS:', EvoTwoResults)

    // This displays information for the Classic Ships, taken from either evo1 or evo2 seeds        
    return  {        
        evo1,
        evo2: EvoTwoResults
        }    
    })
}


module.exports = {
    getClassics
}