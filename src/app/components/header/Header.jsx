import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

import CartIcon from "app/components/cart-icon/CartIcon"
import CartDropdown from "app/components/cart-dropdown/CartDropdown"

import { userAccountService } from "app/services/UserAccountService"

import { ReactComponent as Logo } from "app/assets/crown.svg"
import "app/components/header/header.scss"

const Header = () => {
  const currentUser = useSelector((state) => state.userAccount.currentUser)

  const isCartVisible = useSelector((state) => state.cart.isVisible)

  const handleSignOut = async () => {
    await userAccountService.signOut()
  }

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={handleSignOut}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon className="option" />
      </div>
      {isCartVisible ? <CartDropdown /> : <></>}
    </div>
  )
}

export default Header
