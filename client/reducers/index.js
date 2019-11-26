import { combineReducers } from 'redux'

import characters from './characters'
import characterBio from './characterBio'

export default combineReducers({
  characters,
  characterBio
})
