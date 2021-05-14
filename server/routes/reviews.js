const express = require('express')
const db = require('../db/dbreviews')
// I think you can also use var router = require('express').Router() below
const router = express.Router()
router.use(express.json())


router.get('/:cruise_line', (req,res)   =>  {
    db.getReviews(req.params.cruise_line)
        .then(reviews =>  
            res.json(reviews))
})    

module.exports = router