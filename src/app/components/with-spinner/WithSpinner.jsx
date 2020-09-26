import React from "react"

import {
  SpinnerOverlay,
  SpinnerContainer,
} from "app/components/with-spinner/WithSpinner.styles"

const Spinner = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  )
}

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />
}

export default WithSpinner
