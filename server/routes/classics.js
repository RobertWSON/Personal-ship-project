const express = require('express')
const db = require('../db/dbclassics')
const router = express.Router()
router.use(express.json())


router.get('/', (req, res) => {
    db.getClassics()
    .then(classics => 
        res.json(classics))
    })

module.exports = router