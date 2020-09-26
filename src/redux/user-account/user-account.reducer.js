import { userAccountAction } from "redux/user-account/user-account.actions"

const INITIAL_STATE = {
  currentUser: null,
}

const userAccountReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userAccountAction.SET_CURRENT_USER:
      return { ...state, currentUser: action.payload }
    default:
      return state
  }
}

export default userAccountReducer
