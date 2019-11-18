import request from 'superagent'

const sfUrl = 'http://localhost:3000/api/v1/characters/'

export function getCharacters () {
  return request
  .get(sfUrl)
    .then(res => res.body)
    .catch(() => {
      throw Error ('You need to implement an API route for /v1/characters')
    })
}