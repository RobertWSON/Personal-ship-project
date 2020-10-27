const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const db = require('knex')(config)


function getClassic(classic_ship_name, testConn)    {

    const conn = testConn || db 
    console.log('server/db/dbclassic.js getClassicc called!')   
    
    // Initialize evo1 table as a starting point for displaying data
    let evo1

    // Line below connects to Evo1 Table for Evolution Part 1 
    return conn('Evo1')

        // I am going to give where a try, it may work
        // I think where is the appropriate method to use here
        .where('classic_ship_name', classic_ship_name)
    
        //Line below picks out ship names in alphabetical order by id
        .orderBy('id')
    
        // .first() method returns only the first result, which is an object not an Array.
        .first()
        // Uncommented below to see what happens with regards to displaying Evolution Part 2 page correctly.
        // Now commented at 12:53 am on Sunday because 
        // .then(dbResult =>  {
        //     console.log('dbclassic.js - GOT CLASSIC SHIP:', dbResult)
        //     return dbResult
        // })
        .then((EvoOneResults) => {
            console.log('dbclassic.js - GOT CLASSIC SHIP:', EvoOneResults)
        evo1 = EvoOneResults
    
    // Line below connects to Evo2 Table for Evolution Part 2        
    return conn('Evo2')
    
        .where('classic_ship_name', classic_ship_name)
        .orderBy('id') 
        .first()
    })
        .then((EvoTwoResults) => {
        console.log('dbclassic.js - GOT CLASSIC SHIP:', EvoTwoResults)
    return  {        
        evo1,
        evo2: EvoTwoResults
    }           
    })
}

module.exports = {
    getClassic
}