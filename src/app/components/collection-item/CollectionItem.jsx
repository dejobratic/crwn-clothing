import React from "react"
import { useDispatch } from "react-redux"

import CustomButton from "app/components/custom-button/CustomButton"

import { addItemToCart } from "redux/cart/cart-actions"

import "app/components/collection-item/collection-item.scss"

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch()

  const handleAddItemToCart = () => {
    dispatch(addItemToCart(item))
  }

  return (
    <div className="collection-item">
      <div
        className="background"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      />
      <div className="footer">
        <span className="name">{item.name}</span>
        <span className="price">${item.price}</span>
      </div>
      <CustomButton inverted onClick={handleAddItemToCart}>
        ADD TO CART
      </CustomButton>
    </div>
  )
}

export default CollectionItem
