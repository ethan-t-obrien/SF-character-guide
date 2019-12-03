import request from 'superagent'

const sfUrl = 'http://localhost:3000/api/v1/characters/'
const sfUrlM = 'http://localhost:3000/api/v1/moves/'

export function getCharacters () {
  return request
  .get(sfUrl)
    .then(res => res.body)
    .catch(() => {
      throw Error ('You need to implement an API route for /v1/characters')
    })
}

export function getChar (characterId) {
  return request
    .get(sfUrl + characterId)
    .then(res => res.body)
    .catch(() => {
      throw Error ('You need to implement an API route for /v1/characters')
    })
}

export function getCharMoves (characterId) {
  return request
  .get(sfUrlM + characterId)
  .then (res => res.body)
  .catch(() => {
    throw Error ('You need to implement an API route for /v1/moves')
  })
}