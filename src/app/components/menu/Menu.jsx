import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"

import MenuItem from "app/components/menu-item/MenuItem"

import { selectMenuSections } from "redux/menu/menu.selectors"

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const Menu = () => {
  const sections = useSelector(selectMenuSections)

  return (
    <StyledDiv>
      {sections.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </StyledDiv>
  )
}

export default Menu
