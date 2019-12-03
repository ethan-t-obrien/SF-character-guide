import { combineReducers } from 'redux'

import characters from './characters'
import characterBio from './characterBio'
// import moves from './moves'

export default combineReducers({
  characters,
  characterBio,
  // moves
})
