import { userAccountAction } from "redux/user-account/user-account.actions"

const INITIAL_STATE = {
  currentUser: null,
  errorMessage: null,
}

const userAccountReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userAccountAction.SIGN_IN_SUCCESS:
    case userAccountAction.SIGN_UP_SUCCESS:
      return { ...state, errorMessage: null, currentUser: action.payload }

    case userAccountAction.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null }

    case userAccountAction.SIGN_IN_FAILURE:
    case userAccountAction.SIGN_UP_FAILURE:
    case userAccountAction.SIGN_OUT_FAILURE:
      return { ...state, errorMessage: action.payload }

    default:
      return state
  }
}

export default userAccountReducer
