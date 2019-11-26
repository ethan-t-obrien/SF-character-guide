import { getCharacters, getChar } from '../api/sf'
import request from 'superagent'


export const disCharacters = (characters) => {
  return {
    type: 'GET_CHARACTERS',
    characters: characters
  }
  }

  export const disCharacter = (character) => {
    return {
      type: 'GET_CHARACTER',
      character: character
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

export function fetchChar (character) {
  return (dispatch) => {
    getChar(character)
    .then(character => {
      dispatch(disCharacter (character))
    })
  }
}