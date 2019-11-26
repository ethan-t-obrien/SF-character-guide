function reducer (state = {}, action) {
  switch (action.type) {
    case 'GET_CHARACTER':
      return action.character
      default: return state
  }
}

export default reducer