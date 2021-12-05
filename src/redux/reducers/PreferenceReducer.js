const defaultState = {
  titleOne: 'Colors',
  titleTwo: 'Fonts',
  titleThree: 'Characters',
  titleFour: 'About' 
}

const preferenceState = (state = defaultState, action) => {
  switch(action.type) {
    default: return state
  }
}
export default preferenceState 
