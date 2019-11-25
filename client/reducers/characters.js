function reducer (state = [], action) {
  switch (action.type) {
    case 'GET_CHARACTERS':
      return action.characters
      default: return state
  }
}

export default reducer