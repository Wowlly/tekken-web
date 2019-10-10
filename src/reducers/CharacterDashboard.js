const initialState = {
  characterList:[
    {id: 1, name: 'Yoshimitsu', },
    {id: 2, name: 'Paul'},
  ], 
  isFecthing: false,
  selectedCharacter: 1,
}


export const showChars = (state, action) => {
  switch(action.type) {
    case 'SHOW_ALL_CHARS':
      return state.chars
    
    case 'SHOW_CHAR': 
      return state.chars.map(char => (char.id === action.id) ? char : 404)

    default:
      return initialState
  }
}