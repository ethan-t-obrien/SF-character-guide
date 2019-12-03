const path = require('path')
const express = require('express')

const characters = require('./routes/characters')
const moves = require('./routes/moves')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/characters', characters)
server.use('/api/v1/moves', moves)


module.exports = server
