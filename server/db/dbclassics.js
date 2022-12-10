const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const db = require('knex')(config)


function getClassics(testConn)  {

    const conn = testConn || db
    console.log('server/db/dbclassics.js getClassics called!')

    // Initialize evo table as a starting point for displaying data
    let evo

    // Line below connects to Evo Table, which has ships for both Evolution Part 1 and Part 2 
    return conn('Evo')
        // Line below picks out ships to display from Evo1 Table.
        .select()
        //Line below displays Classic Ships in id order.
        .orderBy('id')
        
        //This picks up the information for all Classic Ships on Evolution Part 1 Page
        .then((EvoResults) => {
            console.log('dbclassics.js - GOT CLASSIC SHIPS:', EvoResults)

        
    // This displays information for the Classic Ships, taken from either evo1 or evo2 seeds 
    // It is info to be displayed for each of the ships on either Evolution Part 1 page eg Titanic
    // or Evolution Part 2 page eg Fairstar       
    return  {        
        evo: EvoResults
        }    
    })
}

module.exports = {
    getClassics
}