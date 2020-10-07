import React from "react"
import { useSelector } from "react-redux"

import withSpinner from "app/components/with-spinner/WithSpinner"

import { selectShopCollectionsLoadingFlag } from "redux/shop/shop.selectors"

const withCollectionsLoading = (WrappedComponent) => (props) => {
  const isLoading = useSelector(selectShopCollectionsLoadingFlag)
  const WrappedComponentWithSpinner = withSpinner(WrappedComponent)
  return <WrappedComponentWithSpinner isLoading={isLoading} {...props} />
}

export default withCollectionsLoading
