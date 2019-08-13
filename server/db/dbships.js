const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const db = require('knex')(config)

function getShip(id, cruiseLine, testConn)  {
    const conn = testConn || db
    
    return conn ('Ships')
    .where('id', cruiseLine)
    .first()
} 

function getListofShips(cruiseLine, testConn)   {
    const conn = testConn || db

    return conn('Ships').select()
    .orderBy("ship_name")    
    
    // .where('id', cruiseLine)
    // .first()
}

function updateShipAv (id, testConn)    {
    const conn = testConn || db
    return conn ('Ships')
    .where ('id', id)
    .update({
        available: false
    })
}

module.exports = {
    getShip,
    getListofShips,
    updateShipAv
}