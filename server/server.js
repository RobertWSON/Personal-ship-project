const path = require('path')
const express = require('express')
const ships = require('./routes/ships')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/v1/review', ships)
server.use('/v1/*', (req, res) => res.sendStatus(404))

//server.use('api/ships', require ('./routes/review'))

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

// server.use('v1/cruiselines', ships)
// })

module.exports = server
