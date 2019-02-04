// var router = require('express').Router()
const express = require('express')
const db = require('../db/db')
const router = express.Router()
router.use(express.json())


router.get('/', (req, res) => {
    db.getAllShips()
    .then(ships => 
        res.json(ships))
    })

router.get('/:id', (req,res) => {
    let id = req.params.id
    db.getShipFromId(id)
    .then (ship =>
        res.json(ship))
})

router.put('/:id', (req, res) =>    {
    let id = req.params.id
    db.updateShipAv (id)
})
// router.put('/:id', (req, res) => {
//     let id = req.params.id
//     db.updateShipAv (id)
// })

module.exports = router