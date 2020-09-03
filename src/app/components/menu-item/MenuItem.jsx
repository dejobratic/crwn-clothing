import React from "react"

import "app/components/menu-item/menu-item.scss"

const MenuItem = ({ title, subtitle = "SHOP NOW", background, size }) => {
  return (
    <div className={`menu-item ${size}`}>
      <div
        className="background"
        style={{ backgroundImage: `url(${background})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">{subtitle.toUpperCase()}</span>
      </div>
    </div>
  )
}

export default MenuItem
