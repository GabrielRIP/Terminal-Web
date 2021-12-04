export const CHANGE_STATE = 'CHANGE_STATE'

export const change_state = (valorBool) => {
  return {
    type: CHANGE_STATE,
    payload: valorBool
  }
}
