import React from "react"
import { useSelector } from "react-redux"

import CollectionItem from "app/components/collection-item/CollectionItem"

import { selectShopCollection } from "redux/shop/shop.selectors"

import "app/pages/collection/collection-page.scss"

const CollectionPage = ({ match }) => {
  const collection = useSelector(
    selectShopCollection(match.params.collectionId)
  )
  const { title, items } = collection

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default CollectionPage
