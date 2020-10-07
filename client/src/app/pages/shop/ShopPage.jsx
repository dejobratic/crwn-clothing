import React from "react"
import { Route } from "react-router-dom"

import CollectionsOverview from "app/components/collections-overview/CollectionsOverview"
import CollectionPage from "app/pages/collection/CollectionPage"

import useDispatchAction from "app/hooks/useDispatchAction"

import { loadShopCollectionsStart } from "redux/shop/shop.actions"

const ShopPage = ({ match }) => {
  useDispatchAction(loadShopCollectionsStart)

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  )
}

export default ShopPage
