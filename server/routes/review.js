var router = require('express').Router()
const db = require('../db/ships')


router.get('/', (req, res) => {
    db.ships()
    .then(ships => {
        res.json(ships)
    })
})


module.exports = router