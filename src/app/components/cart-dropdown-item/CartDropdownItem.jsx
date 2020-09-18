import React from "react"

import "app/components/cart-dropdown-item/cart-dropdown-item.scss"

const CartDropdownItem = ({ item: { imageUrl, name, price, quantity } }) => {
  return (
    <div className="cart-dropdown-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} × ${price}
        </span>
      </div>
    </div>
  )
}

export default CartDropdownItem
