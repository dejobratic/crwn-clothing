import { all, call } from "redux-saga/effects"

import { shopSagas } from "redux/shop/shop.sagas"
import { userAccountSagas } from "redux/user-account/user-account.sagas"
import { cartSagas } from "redux/cart/cart.sagas"

export default function* rootSaga() {
  yield all([call(shopSagas), call(userAccountSagas), call(cartSagas)])
}
