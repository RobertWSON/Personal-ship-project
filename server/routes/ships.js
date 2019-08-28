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

router.get('/', (req,res)   =>  {
    db.getListofShips()
        .then(listofships =>  
            res.json(listofships))
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
