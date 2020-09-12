import React from "react"

import "app/components/custom-button/custom-button.scss"

const CustomButton = ({ children, oAuthButton, ...otherProps }) => {
  return (
    <button className={`${oAuthButton ? 'o-auth-button' : ''} custom-button`} {...otherProps}>
      {children}
    </button>
  )
}

export default CustomButton
