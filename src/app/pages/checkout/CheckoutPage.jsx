import React from "react"
import { useSelector } from "react-redux"

import CheckoutItem from "app/components/checkout-item/CheckoutItem"

import { selectCartItems, selectCartTotal } from "redux/cart/cart.selectors"

import "app/pages/checkout/checkout-page.scss"

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <div className="total">
        <span>TOTAL: ${cartTotal}</span>
      </div>
    </div>
  )
}

export default CheckoutPage
