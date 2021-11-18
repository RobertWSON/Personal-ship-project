const path = require('path')
const express = require('express')
const reviews = require('./routes/reviews')
const cruiselines = require('./routes/cruises')
const shipslist = require('./routes/ships')
const classicships = require('./routes/classics')
const classicship = require('./routes/classic')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

//Line below is a v1 express route for showing intial reviews.
server.use('/v1/reviews', reviews)

//Lines below sorts out, which v1 express route will handle, which request
//and is also used for helping display the Review Page
server.use('/v1/cruiselines', cruiselines)
server.use('/v1/shipslist', shipslist)

// Line below is used for helping display classic ships in their boxes on evolution pages.
server.use('/v1/classicships', classicships)

//Line below is used for making the image link for classic ships on evolution page go to the correct classic ship.
server.use('/v1/classicship', classicship)

//The line below sorts out 404 error, if page does not display
server.use('/v1/*', (req, res) => res.sendStatus(404))

//Code below gets index html file from public folder. 
//This index html file takes us to the app component, which handles the routes from there.
server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = server
