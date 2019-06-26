const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const db = require('knex')(config)

function getCruiseLine(ships, testConn)  {
    const conn = testConn || db
    
    return conn ('CruiseLine')
    .where('ships', id)
} 

function getCruiseLines (ships, testConn)    {
    const conn = testConn || db 
    
    return conn('CruiseLines').select()
    .orderBy("cruise_line")
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