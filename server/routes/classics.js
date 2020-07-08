const express = require('express')
const db = require('../db/dbclassics')
const router = express.Router()
router.use(express.json())


// router.get('/', (req, res) => {
// router.get('/:id', (req, res) => { 
router.get('/:ship_name', (req, res) => {       

    // db.getClassics()
    //Seeing if params works below
    // db.getClassics(req.params.id )
    //Did not work with id trying ship_name
    db.getClassics(req.params.ship_name)
    // .then(classics => 
    .then(classicships =>
        // res.json(classics))
        res.json(classicships))
    })

module.exports = router