// var router = require('express').Router()
const express = require('express')
const db = require('../db/dbcruises')
const router = express.Router()
router.use(express.json())


router.get('/', (req, res) => {
    db.getCruiseLines()
    .then(cruiselines => 
        res.json(cruiselines))
    })

router.get('/:id', (req,res) => {
    let id = req.params.id
    db.getCruiseLine(ship, id)
    .then (cruiseline =>
        res.json(cruiseline))
})

router.put('/:id', (req, res) =>    {
    let id = req.params.id
    db.updateCruiseLineAv (ship, id)
})

module.exports = router
