const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const db = require('knex')(config)


function getReviews()   {
    const db = testConn || db
    console.log('server/db/dbreviews.js getReviews called!')

// return db('ships')
//     .join('reviews','ships.id', '=', 'reviews.ship_id')
//     .where('ship_id', '=', id)
//     .select("*", "ships.id AS sid", "reviews.id AS rid")
//     .first()

//Trial new joins code 4th Nov 2021    
// return db('ships') I think this should be "return conn" instead of "return db"
    return connect('ships') 
    .join('reviews','ships.id', 'reviews.ship_id')
    .where({ship_id:id})
    .select("*", "ships.id AS sid", "reviews.ship_id AS rid")
    .first()
    
    .then(record => {
        console.log(record)
        console.log('Ship' + record.Review_User_Name + 'has a' + record.Review + ' ' + record.StarRating + '' + record.Cruise_Name + '' 
        + record.Cruise_Duration + '' + '' + record.Sail_Date + '' + record.Leaving_Port + '' + record.Destination + '' 
        + record.Disembark_Date + '' + record.Travel_Name + '' + record.Review_Title + '' + record.Number_of_Cruises + '' 
        + record.Travel_Party + '' + record.ship_id)
    }).then(() => {
        console.log('dbreviews.js - GOT Reviews')
            return dbrecord
})
}

module.exports = {
    getReviews
}