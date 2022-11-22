const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const db = require('knex')(config)


function getClassic(classic_ship_name, testConn)    {

    const conn = testConn || db 
    console.log('server/db/dbclassic.js getClassic called!')   
    
    // I may not need let evo1 because seems like it doesn't make a difference with localhost
    // Initialize evo1 table as a starting point for displaying data
    let evo1

    // Line below connects to Evo1 Table for Evolution Part 1 
    return conn('Evo1')

        // Use a Join here to connect evo1 table with other tables
        .join('cruise_convert', 'cruise_convert.id', 'evo1.cruise_convert_id')
        .join('name_changes_pt1', 'name_changes_pt1.id', 'evo1.name_changes_pt1_id')
        

        // I am going to give where a try, it may work
        // I think where is the appropriate method to use here
        .where('classic_ship_name', classic_ship_name)
    
        //Line below picks out Classic Ship Names in alphabetical order by id
        .orderBy('id')
    
        // .first() method returns only the first result, which is an object not an Array.
        .first()
         
        //This picks up the information for a Classic Ship page eg Titanic in Evolution Part 1
        .then((EvoOneResults) => {
            console.log('dbclassic.js - GOT CLASSIC SHIP:', EvoOneResults)
        evo1 = EvoOneResults
   
    // Line below connects to Evo2 Table for Evolution Part 2         
    return conn('Evo2')
    
        // Use a Join here to connect evo2 table with other tables
        .join('classic_cruising', 'classic_cruising.id', 'evo2.classic_cruising_id')
        .join('classic_lengthened', 'classic_lengthened.id', 'evo2.classic_lengthened_id')
        .join('name_changes_pt2', 'name_changes_pt2.id', 'evo2.name_changes_pt2_id')


        .where('classic_ship_name', classic_ship_name)
        .orderBy('id') 
        .first()
    })
    // This picks up the information for a Classic Ship page eg Fairstar in Evolution Part 2
        .then((EvoTwoResults) => {
        console.log('dbclassic.js - GOT CLASSIC SHIP:', EvoTwoResults)
    
    // This displays information for a Classic Ship, taken from either evo1 or evo2 seeds     
    return  {        
        evo1,
        evo2: EvoTwoResults
    }           
    })

}

module.exports = {
    getClassic
}