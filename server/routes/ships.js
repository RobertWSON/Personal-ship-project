// var router = require('express').Router()
const express = require('express')
const db = require('../db/dbships')
const router = express.Router()
router.use(express.json())


// router.get('/', (req, res) => {
//     db.getShips()
//     .then(ships => 
//         res.json(ships))
//     })
// Code below I think is more correct than this one    

router.get('v1/review/ListofShips', (req,res)   =>  {
    db.getListofShips()
        .then(ships =>  
            res.json(ships))
})   

router.get('/:id', (req,res) => {
    let id = req.params.id
    db.getShip(id)
    .then (ship =>
        res.json(ship))
})

router.put('/:id', (req, res) =>    {
    let id = req.params.id
    db.updateShipAv (id)
})

module.exports = router
