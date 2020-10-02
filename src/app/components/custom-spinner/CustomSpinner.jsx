import React from "react"

import {
  SpinnerOverlay,
  SpinnerContainer,
} from "app/components/with-spinner/WithSpinner.styles"

const CustomSpinner = () => {
  console.log("spinning")
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  )
}

export default CustomSpinner
