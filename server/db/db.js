const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)


function getCharacters(db = connection) {
  return db('characters').select()
  // .then(characters => {
  //   return characters
  // })
}

module.exports = {
  getCharacters
}