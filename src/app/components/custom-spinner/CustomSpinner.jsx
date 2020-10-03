import React from "react"

import {
  SpinnerOverlay,
  SpinnerContainer,
} from "app/components/with-spinner/WithSpinner.styles"

const CustomSpinner = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  )
}

export default CustomSpinner
