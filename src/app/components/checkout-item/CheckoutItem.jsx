import React from "react"
import { useDispatch } from "react-redux"

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "redux/cart/cart.actions"

import "app/components/checkout-item/checkout-item.scss"

const CheckoutItem = ({ item }) => {
  const dispatch = useDispatch()

  const handleAddITem = () => {
    dispatch(addItemToCart(item))
  }

  const handleRemoveItem = () => {
    dispatch(removeItemFromCart(item))
  }

  const handleClearItem = () => {
    dispatch(clearItemFromCart(item))
  }

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={item.imageUrl} alt="item" />
      </div>
      <span className="name">{item.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleRemoveItem}>
          &#10094;
        </div>
        <span className="value">{item.quantity}</span>
        <div className="arrow" onClick={handleAddITem}>
          &#10095;
        </div>
      </span>
      <span className="price">${item.price}</span>
      <div className="remove-button" onClick={handleClearItem}>
        &#10005;
      </div>
    </div>
  )
}

export default CheckoutItem
