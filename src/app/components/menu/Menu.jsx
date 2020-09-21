import React from "react"
import { useSelector } from "react-redux"

import MenuItem from "app/components/menu-item/MenuItem"

import { selectMenuSections } from "redux/menu/menu.selectors"

import "app/components/menu/menu.scss"

const Menu = () => {
  const sections = useSelector(selectMenuSections)

  return (
    <div className="menu">
      {sections.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </div>
  )
}

export default Menu
