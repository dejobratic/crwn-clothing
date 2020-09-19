import React from "react"
import { useSelector } from "react-redux"

import CartDropdownItem from "app/components/cart-dropdown-item/CartDropdownItem"
import CustomButton from "app/components/custom-button/CustomButton"

import { selectCartItems } from "redux/cart/cart.selectors"

import "app/components/cart-dropdown/cart-dropdown.scss"

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems)

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartDropdownItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default CartDropdown
