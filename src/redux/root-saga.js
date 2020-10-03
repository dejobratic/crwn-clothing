import { all, call } from "redux-saga/effects"

import { loadShopCollectionsStart } from "redux/shop/shop.sagas"

export default function* rootSaga() {
  yield all([call(loadShopCollectionsStart)])
}
