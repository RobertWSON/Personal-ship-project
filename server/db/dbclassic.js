const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const db = require('knex')(config)


function getClassic(ship_name, testConn) {
  const conn = testConn || db

  //Line below connects to Evo1 Table
  return conn('Evo1')
    //Line below picks out each distinct Ship Name from Evo1 Database
    .where('ship_name', ship_name)
    //Line below picks out ship names in alphabetical order by id
    .orderBy('id')
    .first()
}

module.exports = {
  getClassic
}