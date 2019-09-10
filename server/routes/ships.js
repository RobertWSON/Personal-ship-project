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


module.exports = router
