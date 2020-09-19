import React from "react"
import { useDispatch } from "react-redux"

import { clearItemFromCart } from "redux/cart/cart.actions"

import "app/components/checkout-item/checkout-item.scss"

const CheckoutItem = ({ item }) => {
  const dispatch = useDispatch()

  const handleRemoveItem = (itemId) => {
    dispatch(clearItemFromCart(itemId))
  }

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={item.imageUrl} alt="item" />
      </div>
      <span className="name">{item.name}</span>
      <span className="quantity">{item.quantity}</span>
      <span className="price">${item.price}</span>
      <div className="remove-button" onClick={() => handleRemoveItem(item.id)}>
        &#10005;
      </div>
    </div>
  )
}

export default CheckoutItem
