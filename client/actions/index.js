import { getCharacters } from '../api/sf'
import request from 'superagent'


export const disCharacters = (characters) => {
  return {
    type: 'GET_CHARACTERS',
    characters: characters
  }
  }



export function fetchCharacters (characters) {
  return (dispatch) => {
    getCharacters(characters)
    .then(characters => {
      dispatch(disCharacters (characters))
    })
  }
}