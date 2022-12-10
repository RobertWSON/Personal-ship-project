const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const db = require('knex')(config)


function getClassic(classic_ship_name, testConn)    {

    const conn = testConn || db 
    console.log('server/db/dbclassic.js getClassic called!')   
    
    // Initialize evo table as a starting point for displaying data
    // For some reason the value is never read, not sure why
    let evo

    // Line below connects to Evo Table, which is now used for both Evolution Part 1 and Part 2 ships 
    return conn('Evo')

        // Use a Join here to connect evo1 table with other tables
        .join('classic_cruising', 'classic_cruising.id', 'evo.cruise_convert_id')
        .join('classic_lengthened', 'classic_lengthened.id', 'evo.classic_lengthened')
        .join('name_changes', 'name_changes.id', 'evo.name_change_id')

        
        // where method I have used to previously pick the correct classic cruise ship.
        // I am unsure how it can pick up the joins as well
        .where('classic_ship_name', classic_ship_name)
    
        //Line below picks out Classic Ship Names in alphabetical order by id
        .orderBy('id')
    
        // .first() method returns only the first result, which is an object not an Array.
        .first()
         
        // This picks up the information for a Classic Ship page eg Titanic in Evolution Part 1
        // or Fairstar in Evolution Part 2
        .then((EvoResults) => {
            console.log('dbclassic.js - GOT CLASSIC SHIP:', EvoResults)

        return  {
            evo: EvoResults
        }    
    
    })    
}

module.exports = {
    getClassic
}
