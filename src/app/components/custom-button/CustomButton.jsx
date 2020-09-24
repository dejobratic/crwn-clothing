import React from "react"

import * as Styled from "app/components/custom-button/CustomButton.styles"

const CustomButton = ({ children, ...props }) => {
  return <Styled.Button {...props}>{children}</Styled.Button>
}

export default CustomButton
