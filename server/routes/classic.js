const express = require('express')
const db = require('../db/dbclassic')
const router = express.Router()
router.use(express.json())

router.get('/:ship_name', (req,res) =>  {
    db.getClassic(req.params.ship_name)
        .then(classicship =>
            res.json(classicship))
})

module.exports = router