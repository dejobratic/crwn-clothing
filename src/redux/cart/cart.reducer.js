import { cartAction } from "redux/cart/cart.actions"

import { addItemToCart, removeItemFromCart } from "redux/cart/cart.utils"

const INITIAL_STATE = {
  isVisible: false,
  items: [],
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartAction.TOGGLE_CART_VISIBILITY:
      return { ...state, isVisible: !state.isVisible }

    case cartAction.ADD_ITEM_TO_CART:
      return { ...state, items: addItemToCart(state.items, action.payload) }

    case cartAction.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      }

    case cartAction.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        items: removeItemFromCart(state.items, action.payload),
      }

    case cartAction.CLEAR_CART:
      return { ...state, items: [] }

    default:
      return state
  }
}

export default cartReducer
