import React, { useState, useEffect } from "react"
import { Route } from "react-router-dom"
import { useDispatch } from "react-redux"

import CollectionsOverview from "app/components/collections-overview/CollectionsOverview"
import CollectionPage from "app/pages/collection/CollectionPage"
import WithSpinner from "app/components/with-spinner/WithSpinner"

import { shopService } from "app/services/ShopService"

import { getShopCollections } from "redux/shop/shop.actions"

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const ShopPage = ({ match }) => {
  const [isLoading, setLoadingFlag] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    const getShopData = async () => {
      const collections = await shopService.getAllCollections()
      dispatch(getShopCollections(collections))
      setLoadingFlag(false)
    }

    getShopData()
  }, [dispatch])

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner isLoading={isLoading} {...props} />
        )}
      />
    </div>
  )
}

export default ShopPage
