import React from "react"
import { useSelector } from "react-redux"

import CollectionPreview from "app/components/collection-preview/CollectionPreview"

import { selectShopCollections } from "redux/shop/shop.selectors"

import "app/components/collections-overview/collections-overview.scss"

const CollectionsOverview = () => {
  const collections = useSelector(selectShopCollections)

  return (
    <div className="collections-overview">
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </div>
  )
}

export default CollectionsOverview
