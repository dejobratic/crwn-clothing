import React from "react"

import CollectionItem from "app/components/collection-item/CollectionItem"

import "app/components/collection-preview/collection-preview.scss"

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((_item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  )
}

export default CollectionPreview