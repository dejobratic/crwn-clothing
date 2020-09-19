export const cartAction = {
  TOGGLE_CART_VISIBILITY:  "TOGGLE_CART_VISIBILITY",
  ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART"
}

export const toggleCartVisibility = () => ({
  type: cartAction.TOGGLE_CART_VISIBILITY,
})

export const addItemToCart = (item) => ({
  type: cartAction.ADD_ITEM_TO_CART,
  payload: item,
})
