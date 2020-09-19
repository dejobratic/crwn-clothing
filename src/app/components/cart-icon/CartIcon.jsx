import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { toggleCartVisibility } from "redux/cart/cart.actions"
import { selectCartItemsCount } from "redux/cart/cart.selectors"

import { ReactComponent as ShoppingBagIcon } from "app/assets/shopping-bag.svg"
import "app/components/cart-icon/cart-icon.scss"

const CartIcon = () => {
  const cartItemCount = useSelector(selectCartItemsCount)
  const dispatch = useDispatch()

  const handleToggleCartVisibility = () => {
    dispatch(toggleCartVisibility())
  }
  return (
    <div className="cart-icon" onClick={handleToggleCartVisibility}>
      <ShoppingBagIcon className="shopping-bag-icon" />
      <span className="item-count">{cartItemCount}</span>
    </div>
  )
}

export default CartIcon
