import { takeLatest, put, all, call } from "redux-saga/effects"

import {
  shopAction,
  loadShopCollectionsSuccess,
  loadShopCollectionsFailure,
} from "redux/shop/shop.actions"

import { shopService } from "app/services/ShopService"

export function* loadShopCollections() {
  try {
    const collections = yield shopService.getAllCollections()
    yield put(loadShopCollectionsSuccess(collections))
  } catch (error) {
    yield put(loadShopCollectionsFailure(error.message))
  }
}

export function* onLoadShopCollectionsStart() {
  yield takeLatest(shopAction.LOAD_COLLECTIONS_START, loadShopCollections)
}

export function* shopSagas() {
  yield all([call(onLoadShopCollectionsStart)])
}
