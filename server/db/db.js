const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)


function getCharacters(db = connection) {
  return db('characters').select()
  // .then(characters => {
  //   return characters
  // })
}

function getChar(characterId, db = connection) {
  return db('characters')
  .where('characterId', characterId)
  .join('moveList', 'characterId', 'character_id')
  .select()
}

function getCharMoves(characterId, db = connection) {
  return db('moveList')
  .where('character_id', characterId)
  .select()
}

module.exports = {
  getCharacters,
  getChar,
  getCharMoves
}