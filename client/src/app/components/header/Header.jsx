import React from "react"
import { useSelector, useDispatch } from "react-redux"

import CartIcon from "app/components/cart-icon/CartIcon"
import CartDropdown from "app/components/cart-dropdown/CartDropdown"

import { selectCurrentUser } from "redux/user-account/user-account.selectors"
import { selectIsCartVisible } from "redux/cart/cart.selectors"
import { signOutStart } from "redux/user-account/user-account.actions"


import {
  HeaderContainer,
  LogoContainer,
  OptionContainer,
  OptionLink,
} from "app/components/header/Header.styles"
import { ReactComponent as Logo } from "app/assets/crown.svg"

const Header = () => {
  const currentUser = useSelector(selectCurrentUser)
  const isCartVisible = useSelector(selectIsCartVisible)
  const dispatch = useDispatch()

  const handleSignOut = () => {
    dispatch(signOutStart())
  }

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={handleSignOut}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionContainer>
      {isCartVisible ? <CartDropdown /> : <></>}
    </HeaderContainer>
  )
}

export default Header
