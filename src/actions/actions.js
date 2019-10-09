//ACTONS
const SHOW_ALL_CHARS = ({
  type: 'SHOW_ALL_CHARS'
})

const SHOW_CHAR = id => ({
  type: 'SHOW_CHAR',
  id
})

export const actions = {
  SHOW_ALL_CHARS,
  SHOW_CHAR,
}