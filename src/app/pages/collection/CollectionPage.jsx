import React from "react"
import { compose } from "redux"
import { useSelector } from "react-redux"
import { withRouter } from "react-router-dom"

import CollectionItem from "app/components/collection-item/CollectionItem"
import withCollectionsLoading from "app/components/with-collections-loading/WithCollectionsLoading"

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

const withWrappers = compose(withCollectionsLoading, withRouter)

export default withWrappers(CollectionPage)
