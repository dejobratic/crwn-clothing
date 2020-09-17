const INITIAL_STATE = {
  currentUser: null,
}

export const SET_CURRENT_USER = "SET_CURRENT_USER"

export const userAccountReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload }
    default:
      return state
  }
}
