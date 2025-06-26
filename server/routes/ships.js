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


module.exports = router
