// var router = require('express').Router()
const express = require('express')
const db = require('../db/dbships')
const router = express.Router()
router.use(express.json())


router.get('/', (req,res)   =>  {
    db.getShipsList()
        .then(shipslist =>  
            res.json(shipslist))
})   

//These routes are used for getting Ships on Review Page
router.get('/', (req,res)   =>  {
    db.getShips()
        .then(ships =>
            res.json(ships))
})

router.get('/', (req,res)   =>  {
    db.getShip()
        .then(ship =>
            res.json(ship))
})

module.exports = router
