import React, { useEffect } from "react"
import { Route } from "react-router-dom"
import { useDispatch } from "react-redux"

import CollectionsOverview from "app/components/collections-overview/CollectionsOverview"
import CollectionPage from "app/pages/collection/CollectionPage"

import { loadShopCollectionsAsync } from "redux/shop/shop.actions"

const ShopPage = ({ match }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const loadShopCollections = async () => {
      dispatch(await loadShopCollectionsAsync())
    }

    loadShopCollections()
  }, [dispatch])

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  )
}

export default ShopPage
