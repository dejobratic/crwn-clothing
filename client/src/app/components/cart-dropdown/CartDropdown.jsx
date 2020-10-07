import React from "react"
import { withRouter } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import CartDropdownItem from "app/components/cart-dropdown-item/CartDropdownItem"
import CustomButton from "app/components/custom-button/CustomButton"

import { toggleCartVisibility } from "redux/cart/cart.actions"
import { selectCartItems } from "redux/cart/cart.selectors"

import "app/components/cart-dropdown/cart-dropdown.scss"

const CartDropdown = ({ history }) => {
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()

  const handleGoToCheckout = () => {
    history.push("/checkout")
    dispatch(toggleCartVisibility())
  }

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => (
            <CartDropdownItem key={item.id} item={item} />
          ))
        ) : (
          <span className="empty-cart-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={handleGoToCheckout}>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default withRouter(CartDropdown)
