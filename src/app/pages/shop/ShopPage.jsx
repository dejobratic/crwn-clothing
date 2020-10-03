import React, { useEffect } from "react"
import { Route } from "react-router-dom"
import { useDispatch } from "react-redux"

import CollectionsOverview from "app/components/collections-overview/CollectionsOverview"
import CollectionPage from "app/pages/collection/CollectionPage"

import { loadShopCollectionsStart } from "redux/shop/shop.actions"

const ShopPage = ({ match }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadShopCollectionsStart())
  }, [dispatch])

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  )
}

export default ShopPage
