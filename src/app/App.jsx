import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { useSelector } from "react-redux"

import Header from "app/components/header/Header"
import HomePage from "app/pages/home/HomePage"
import ShopPage from "app/pages/shop/ShopPage"
import UserAccountPage from "app/pages/user-account/UserAccountPage"
import CheckoutPage from "app/pages/checkout/CheckoutPage"

import useDispatchAction from "app/hooks/useDispatchAction"

import { checkUserSession } from "redux/user-account/user-account.actions"
import { selectCurrentUser } from "redux/user-account/user-account.selectors"

import "app/App.scss"

const App = () => {
  useDispatchAction(checkUserSession)
  const currentUser = useSelector(selectCurrentUser)

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <UserAccountPage />
          }
        />
      </Switch>
    </>
  )
}

export default App
