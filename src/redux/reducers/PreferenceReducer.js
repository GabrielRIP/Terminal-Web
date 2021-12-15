import { ELIGE_TITULO } from '../actions/PreferenceAction'
const defaultState = {
  titleOne: 'Colors',
  titleTwo: 'Fonts',
  titleThree: 'Characters',
  titleFour: 'About',
  tituloElegido: 'Colors'

}

const preferenceState = (state = defaultState, action) => {
  switch (action.type) {
    case ELIGE_TITULO:
      return {
        ...state,
        tituloElegido: action.payload
      }
    default: return state
  }
}
export default preferenceState
