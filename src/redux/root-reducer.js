import { combineReducers } from "redux"

import { userAccountReducer } from "redux/user-account/user-account-reducer"

export const rootReducer = combineReducers({
  userAccount: userAccountReducer,
})
