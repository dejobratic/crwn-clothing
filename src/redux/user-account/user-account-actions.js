import { SET_CURRENT_USER } from "redux/user-account/user-account-reducer"

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
})
