import React from "react"

import "app/components/custom-button/custom-button.scss"

const CustomButton = ({ children, oAuthButton, inverted, ...otherProps }) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        oAuthButton ? "o-auth-button" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default CustomButton
