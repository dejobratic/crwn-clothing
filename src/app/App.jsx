import React, { useContext } from "react"
import { Switch, Route } from "react-router-dom"

import Header from "app/components/header/Header"
import HomePage from "app/pages/home/HomePage"
import ShopPage from "app/pages/shop/ShopPage"
import UserAccountPage from "app/pages/user-account/UserAccountPage"

import { UserAccountContext } from "app/contexts/UserAccountContext"

import "app/App.scss"

const App = () => {
  const { user } = useContext(UserAccountContext)

  return (
    <>
      <Header currentUser={user}/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/" component={ShopPage} />
        <Route path="/signin" component={UserAccountPage} />
      </Switch>
    </>
  )
}

export default App
