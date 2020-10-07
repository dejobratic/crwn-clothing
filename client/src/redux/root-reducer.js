import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

import userAccountReducer from "redux/user-account/user-account.reducer"
import cartReducer from "redux/cart/cart.reducer"
import menuReducer from "redux/menu/menu.reducer"
import shopReducer from "redux/shop/shop.reducer"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
}

const rootReducer = combineReducers({
  userAccount: userAccountReducer,
  cart: cartReducer,
  menu: menuReducer,
  shop: shopReducer,
})

export default persistReducer(persistConfig, rootReducer)
