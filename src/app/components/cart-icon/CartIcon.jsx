import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { toggleCartVisibility } from "redux/cart/cart-actions"

import { ReactComponent as ShoppingBagIcon } from "app/assets/shopping-bag.svg"
import "app/components/cart-icon/cart-icon.scss"

const CartIcon = () => {
  const cartItems = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  const totalItems = cartItems.reduce((a, b) => a + (b['quantity'] || 0), 0)

  const handleToggleCartVisibility = () => {
    dispatch(toggleCartVisibility())
  }
  return (
    <div className="cart-icon" onClick={handleToggleCartVisibility}>
      <ShoppingBagIcon className="shopping-bag-icon" />
      <span className="item-count">{totalItems}</span>
    </div>
  )
}

export default CartIcon
