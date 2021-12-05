import { combineReducers } from "redux";
import navOptionState from './NavOptionReducer'
import preferenceState from './PreferenceReducer'

const rootReducers = combineReducers({
  navOptionState,
  preferenceState
})

export default rootReducers
