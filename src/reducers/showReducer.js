export const showChars = (state, action) => {
  switch(action.type) {
    case 'SHOW_ALL_CHARS':
      return state.chars
    
    case 'SHOW_CHAR': 
      return state.chars.map((char) => {
        char.id === action.id ? char : 404
      })

    default:
      return state
  }
}