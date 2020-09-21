import React from "react"
import { useSelector } from "react-redux"

import CollectionItem from "app/components/collection-item/CollectionItem"

import { selectShopCollection } from "redux/shop/shop.selectors"

import "app/pages/collection/collection-page.scss"

const CollectionPage = ({ match }) => {
  const collectionUrlParam = match.params.collectionId
  const collection = useSelector(selectShopCollection(collectionUrlParam))
  console.log("collection", collection)
  return (
    <div className="collection">
      {collection.items.map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default CollectionPage
