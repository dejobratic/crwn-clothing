import React, { useEffect } from "react"
import { Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import CollectionsOverview from "app/components/collections-overview/CollectionsOverview"
import CollectionPage from "app/pages/collection/CollectionPage"
import WithSpinner from "app/components/with-spinner/WithSpinner"

import { loadShopCollectionsAsync } from "redux/shop/shop.actions"
import { selectShopCollectionsLoadingFlag } from "redux/shop/shop.selectors"

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const ShopPage = ({ match }) => {
  const dispatch = useDispatch()
  const isLoadingCollections = useSelector(selectShopCollectionsLoadingFlag)

  useEffect(() => {
    const loadShopCollections = async () => {
      dispatch(await loadShopCollectionsAsync())
    }

    loadShopCollections()
  }, [dispatch])

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionsOverviewWithSpinner
            isLoading={isLoadingCollections}
            {...props}
          />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner
            isLoading={isLoadingCollections}
            {...props}
          />
        )}
      />
    </div>
  )
}

export default ShopPage
