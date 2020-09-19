import { SET_CURRENT_USER } from "redux/user-account/user-account.actions"

const INITIAL_STATE = {
  currentUser: null,
}

export const userAccountReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload }
    default:
      return state
  }
}
