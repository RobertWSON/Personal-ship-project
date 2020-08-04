const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const db = require('knex')(config)


function getClassic(ship_name, testConn)    {
    const conn = testConn || db 
    // console.log('server/db/dbclassic.js getClassic called')

    //Line below connects to Evo1 Table
    return conn('Evo1')
    //Line below picks out each distinct Ship Name from Evo1 Database
    // .distinct('ship_name')
    // I have a feeling that distinct may not be correct to use here
     
    // .first() method returns only the first result, which is an object not an Array.
    // .first()
    // .select(ship_name, img, img_title)

    // I am going to give where a try, it may work
    .where('ship_name', ship_name)
    //Line below picks out ship names in alphabetical order by id
    .orderBy('id')
    // .first() method returns only the first result, which is an object not an Array.
    .first()
    // .then(dbResult =>  {
    //     console.log('dbclassic.js - GOT CLASSIC SHIP:', dbResult)
    //     return dbResult
    // }) 
}

module.exports = {
    getClassic
}