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
  .first()
}

module.exports = {
  getCharacters,
  getChar
}