const express = require('express')
const router = express.Router()

const db = require('../db/db')


router.get('/', (req, res) => {
  db.getCharacters()
    .then(characters => {
      res.send(characters)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/:id', (req, res) => {
  db.getChar(req.params.id)
      .then(character => {
          res.send(character)
      })
      .catch(err => {
          res.status(500).send(err.message)
      })
})


module.exports = router