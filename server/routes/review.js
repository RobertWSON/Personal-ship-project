const express = require('express')
const db = require('../db/dbreview')
// I think you can also use var router = require('express').Router() below
const router = express.Router()
router.use(express.json())


router.get('/:cruise_line', (req,res)   =>  {
    db.getNewReview(req.params.cruise_line)
        .then(newreview =>  
            res.json(newreview))
})    

module.exports = router