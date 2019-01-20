const path = require('path')
const express = require('express')
// const ship = require('./routes/review')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

// server.use('v1/cruiselines', ships)
// server.use('v1/*', (req, res) => res.sendStatus(404))

// server.get('*', (req, res) => {
//     res.sendFile(path.join(_dirname, './public/index.html'))
// })

module.exports = server
