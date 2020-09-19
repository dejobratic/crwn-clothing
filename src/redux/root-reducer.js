import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

import { userAccountReducer } from "redux/user-account/user-account.reducer"
import { cartReducer } from "redux/cart/cart.reducer"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
}

const rootReducer = combineReducers({
  userAccount: userAccountReducer,
  cart: cartReducer,
})

export default persistReducer(persistConfig, rootReducer)
