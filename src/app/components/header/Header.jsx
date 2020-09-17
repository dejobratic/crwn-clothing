import React from "react"
import { Link } from "react-router-dom"
import { connect, useSelector } from "react-redux"

import { userAccountService } from "app/services/UserAccountService"

import { ReactComponent as Logo } from "app/assets/crown.svg"
import "app/components/header/header.scss"

const Header = () => {
  const currentUser = useSelector((state) => state.userAccount.currentUser)

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
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentUser: state.userAccount.currentUser,
})

export default connect(mapStateToProps)(Header)
