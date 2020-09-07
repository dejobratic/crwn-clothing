import React from "react"
import { Switch, Route } from "react-router-dom"

import Header from "app/components/header/Header"
import HomePage from "app/pages/home-page/HomePage"
import ShopPage from "app/pages/shop-page/ShopPage"

import "app/App.scss"

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/" component={ShopPage} />
      </Switch>
    </>
  )
}

export default App
