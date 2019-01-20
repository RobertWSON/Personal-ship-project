const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const db = require('knex')(config)

function getAllShips(testConn)  {
    const conn  = testConb || db
    return conn('Ships').select()
}

function getShipFromId(id, testConn)    {
    const conn = testConn || db
    return conn ('Ships')
    .where('id', id)
    .first()
}

module.exports = {
    getAllShips,
    getShipFromId,
}
