const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const db = require('knex')(config)


function getNewReview(cruise_line)   {
    const db = testConn || db
    console.log('server/db/dbreviews.js getNewReview called!')

    // We have already connected to Ships Table through Ships route,
    // so now Line below connects to Reviews Table.
    return conn('Reviews')
    // Line below picks ups the new review by review user name to display for each cruise ship.   
    .select(Review_User_Name)
    // Line below picks up the cruise line from where the ships review user name has come from. 
    .where('cruise_line', cruise_line)
    // return the result from the reviews database on the review page for a particular ship from its cruise line.
    .then(dbResult =>   {
        console.log('dbreview.js - GOT New Review', dbResult)
            return dbResult
    })
}

module.exports = {
    getNewReview
}