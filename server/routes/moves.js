const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/:id', (req, res) => {
    db.getCharMoves(req.params.id)
        .then(moves => {
            res.json(moves)
        })
        .catch(err => {
            res.status(500).send(err.message)
        })
})

module.exports = router