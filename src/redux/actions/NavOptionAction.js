export const CHANGE_STATE = 'CHANGE_STATE'

export const changeState = (valorBool) => {
  return {
    type: CHANGE_STATE,
    payload: valorBool
  }
}
