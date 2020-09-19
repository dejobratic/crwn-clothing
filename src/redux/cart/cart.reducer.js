import { cartAction } from "redux/cart/cart.actions"

import { addItemToCart } from "redux/cart/cart.utils"

const INITIAL_STATE = {
  isVisible: false,
  items: [],
}

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartAction.TOGGLE_CART_VISIBILITY:
      return { ...state, isVisible: !state.isVisible }
    case cartAction.ADD_ITEM_TO_CART:
      return { ...state, items: addItemToCart(state.items, action.payload) }
    default:
      return state
  }
}
