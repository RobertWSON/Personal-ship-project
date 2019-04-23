const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const db = require('knex')(config)

function getShip(id, cruiseLine, testConn)    {
    const conn = testConn || db
    return conn ('Ships')
    .where('id', cruiseLine)
    .first()
}

function getShips(cruiseLine, testConn)  {
    const conn  = testConn || db
    return conn('Ships').select()
}

function updateShipAv (id, testConn)    {
    const conn = testConn || db
    return conn ('Ships')
    .where ('id', id)
    .update({
        available: false
    })
}

function getCruiseLine ()   {
    const conn = testCon || db
    return conn ('CruiseLine')
    .where('ships', id)
}

function getCruiseLines ()  {
    const conn = testConn || db 
    return con ('CruiseLines').select()
}

function updateCruiseLineAv (CruiseLine, testConn)  {
    const conn = testConn || db
    return conn ('CruiseLine')
    .where ('CruiseLine', Ship)
    .update({
        available: false
    })
}

module.exports = {
    getShip,
    getShips,
    updateShipAv,
    getCruiseLine,
    getCruiseLines,
    updateCruiseLineAv
}
