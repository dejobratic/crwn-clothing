import { shopAction } from "redux/shop/shop.actions"

const INITIAL_STATE = {
  collections: {},
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopAction.GET_COLLECTIONS:
      return { ...state, collections: action.payload }
    default:
      return state
  }
}

export default shopReducer
