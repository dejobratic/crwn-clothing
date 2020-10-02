import React from "react"
import { useSelector } from "react-redux"
import { compose } from "redux"

import CollectionPreview from "app/components/collection-preview/CollectionPreview"
import withCollectionsLoading from "app/components/with-collections-loading/WithCollectionsLoading"

import { selectShopCollectionsForPreview } from "redux/shop/shop.selectors"

import "app/components/collections-overview/collections-overview.scss"

const CollectionsOverview = () => {
  const collections = useSelector(selectShopCollectionsForPreview)

  return (
    <div className="collections-overview">
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </div>
  )
}

const withWrappers = compose(withCollectionsLoading)

export default withWrappers(CollectionsOverview)
