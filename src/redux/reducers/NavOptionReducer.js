import { CHANGE_STATE } from '../actions/NavOptionAction'

const defaultState = {
  stateBoolean: false,
  classHamburger: 'hamburgerClose',
  classBoxFloat: 'floatDisabled'
}

const navOptionState = (state = defaultState, action) => {
  switch(action.type) {
    case CHANGE_STATE:
      return {
        ...state,
        stateBoolean: action.payload,
        classHamburger: action.payload ? 
          'hamburgerClose hamburgerOpen' : 
          'hamburgerClose',
        classBoxFloat: action.payload ? 
          'floatDisabled floatEnabled' : 
          'floatDisabled'
      }
    default: return state
  }
}
export default navOptionState 
