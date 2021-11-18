const express = require('express')
const db = require('../db/dbreviews')
const router = express.Router()
router.use(express.json())


// router.get('/:Review_User_Name', (req,res)   =>  { 
// router.get('/:cruise_line', (req,res)   =>  { 
// Try no cruise_line prop 
router.get('/:', (req, res)   =>    { 

    // db.getReviews(req.params.review_id)
    // db.getReviews(req.params.cruise_line)

    // Try no req.params
    db.getReviews()
        .then(reviews   =>
            res.json(reviews))
})


module.exports = router