export const cartAction = {
  TOGGLE_CART_VISIBILITY: "TOGGLE_CART_VISIBILITY",
  ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
  CLEAR_ITEM_FROM_CART: "CLEAR_ITEM_FROM_CART",
  REMOVE_ITEM_FROM_CART: "REMOVE_ITEM_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
}

export const toggleCartVisibility = () => ({
  type: cartAction.TOGGLE_CART_VISIBILITY,
})

export const addItemToCart = (item) => ({
  type: cartAction.ADD_ITEM_TO_CART,
  payload: item,
})

export const removeItemFromCart = (itemId) => ({
  type: cartAction.REMOVE_ITEM_FROM_CART,
  payload: itemId,
})

export const clearItemFromCart = (itemId) => ({
  type: cartAction.CLEAR_ITEM_FROM_CART,
  payload: itemId,
})

export const clearCart = () => ({
  type: cartAction.CLEAR_CART,
})
