import { shopAction } from "redux/shop/shop.actions"

const INITIAL_STATE = {
  collections: {},
  errorMessage: null,
  isLoadingCollections: true, //TODO: change to areCollectionsLoaded
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopAction.LOAD_COLLECTIONS_START:
      return { ...state, errorMessage: null, isLoadingCollections: true }
    case shopAction.LOAD_COLLECTIONS_SUCCESS:
      return {
        ...state,
        errorMessage: null,
        isLoadingCollections: false,
        collections: action.payload,
      }
    case shopAction.LOAD_COLLECTIONS_FAILURE:
      return {
        ...state,
        isLoadingCollections: false,
        errorMessage: action.payload,
      }
    default:
      return state
  }
}

export default shopReducer
