import React from "react"

import CustomSpinner from "app/components/custom-spinner/CustomSpinner"

const withSpinner = (WrappedComponent) => ({ isLoading }) => {
  return isLoading ? <CustomSpinner /> : <WrappedComponent />
}

export default withSpinner
