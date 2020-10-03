import { takeLatest, put } from "redux-saga/effects"

import {
  shopAction,
  loadShopCollectionsSuccess,
  loadShopCollectionsFailure,
} from "redux/shop/shop.actions"

import { shopService } from "app/services/ShopService"

export function* loadShopCollectionsAsync() {
  try {
    const collections = yield shopService.getAllCollections()
    yield put(loadShopCollectionsSuccess(collections))
  } catch (error) {
    yield put(loadShopCollectionsFailure(error.message))
  }
}

export function* loadShopCollectionsStart() {
  yield takeLatest(shopAction.LOAD_COLLECTIONS_START, loadShopCollectionsAsync)
}
