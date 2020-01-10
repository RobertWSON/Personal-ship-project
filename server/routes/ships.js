// var router = require('express').Router()
const express = require('express')
const db = require('../db/dbships')
const router = express.Router()
router.use(express.json())


router.get('/:cruise_line', (req,res)   =>  {
    db.getShipsList(req.params.cruise_line)
        .then(shipslist =>  
            res.json(shipslist))
})   

//This route is used for getting Ships on Review Page
router.get('/', (req,res)   =>  {
    db.getShips(req.params.cruise_line)
        .then(ships =>
            res.json(ships))
})

router.get('/', (req,res)   =>  {
    db.getShip()
        .then(ship =>
            res.json(ship))
})

module.exports = router
