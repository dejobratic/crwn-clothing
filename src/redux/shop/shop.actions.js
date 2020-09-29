import { shopService } from "app/services/ShopService"

export const shopAction = {
  LOAD_COLLECTIONS_START: "LOAD_COLLECTIONS_START",
  LOAD_COLLECTIONS_SUCCESS: "LOAD_COLLECTIONS_SUCCESS",
  LOAD_COLLECTIONS_FAILURE: "LOAD_COLLECTIONS_FAILURE",
}

export const loadShopCollectionsStart = () => ({
  type: shopAction.LOAD_COLLECTIONS_START,
})

export const loadShopCollectionsSuccess = (collections) => ({
  type: shopAction.LOAD_COLLECTIONS_SUCCESS,
  payload: collections,
})

export const loadShopCollectionsFailure = (errorMessage) => ({
  type: shopAction.LOAD_COLLECTIONS_FAILURE,
  payload: errorMessage,
})

export const loadShopCollectionsAsync = () => {
  return async (dispatch) => {
    try {
      dispatch(loadShopCollectionsStart())
      const collections = await shopService.getAllCollections()
      dispatch(loadShopCollectionsSuccess(collections))
    } catch (error) {
      dispatch(loadShopCollectionsFailure(error.message))
    }
  }
}
