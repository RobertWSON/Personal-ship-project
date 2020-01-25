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


module.exports = router
