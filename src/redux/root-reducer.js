import { combineReducers } from "redux"

import { userAccountReducer } from "redux/user-account/user-account-reducer"
import { cartReducer } from "redux/cart/cart-reducer"

export const rootReducer = combineReducers({
  userAccount: userAccountReducer,
  cart: cartReducer,
})
