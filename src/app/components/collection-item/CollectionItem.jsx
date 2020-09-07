import React from "react"

import "app/components/collection-item/collection-item.scss"

const CollectionItem = ({ name, price, imageUrl }) => {
  return (
    <div className="collection-item">
      <div
        className="background"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  )
}

export default CollectionItem
