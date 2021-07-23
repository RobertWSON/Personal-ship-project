const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const db = require('knex')(config)


function getReviews(cruise_line)   {
    const db = testConn || db
    console.log('server/db/dbreviews.js getReviews called!')

    // We have already connected to Ships Table through Ships route,
    // so now Line below connects to Reviews Table.
    return conn('Reviews')
    // Line below picks ups the reviews by id to initially display for each cruise ship (that has a corresponding id)   
    .select(id)
    // Line below picks up the cruise line from where the ships review id has come from. 
    .where('cruise_line', cruise_line)
    // return the result from the database on the review page for a particular ship from its cruise line.
    .then(dbResult =>   {
        console.log('dbreviews.js - GOT Reviews', dbResult)
            return dbResult
    })
}

module.exports = {
    getReviews
}