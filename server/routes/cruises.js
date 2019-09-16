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

//These routes are used for getting Cruise Line on Review Page
router.get('/', (req,res)   =>  {
    db.getCruiseLine()
        .then(cruiseline =>
            res.json(cruiseline))
})

module.exports = router
