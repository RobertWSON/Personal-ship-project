const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const db = require('knex')(config)

function getAllShips(testConn)  {
    const conn = testConn || db
    return conn('Ships').select()
    .orderBy("ship_name")
} 

function getShipFromId(id, testConn)    {
    const conn = testConn || db 
    return conn ('Ships')
    .where('id', id)
    .first()
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
    getAllShips,
    getShipFromId,
    updateShipAv
}