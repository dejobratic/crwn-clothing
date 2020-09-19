import { createSelector } from "reselect"

const selectCart = (state) => state.cart

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.items
)

export const selectCartItemsCount = createSelector([selectCartItems], (items) =>
  items.reduce(
    (totalCount, currentItem) => totalCount + currentItem.quantity,
    0
  )
)

export const selectIsCartVisible = createSelector(
  [selectCart],
  (cart) => cart.isVisible
)

export const selectCartTotal = createSelector([selectCartItems], (items) =>
  items.reduce(
    (totalPrice, currentItem) =>
      totalPrice + currentItem.quantity * currentItem.price,
    0
  )
)
