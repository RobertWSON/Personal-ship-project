const path = require('path')
const express = require('express')
const cruiseline = require('./routes/cruises')
const ships = require('./routes/ships')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

//Lines below sorts out, which v1 express route will handle, which request
server.use('/v1/ships', ships)
server.use('/v1/cruiselines', cruiseline)

//The line below sorts out 404 error, if page does not display
server.use('/v1/*', (req, res) => res.sendStatus(404))

//Line below gets index html file from public folder. 
//This index html file takes us to the app component, which handles the routes from there.
server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = server
