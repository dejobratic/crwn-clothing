import React, { useEffect } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import Header from "app/components/header/Header"
import HomePage from "app/pages/home/HomePage"
import ShopPage from "app/pages/shop/ShopPage"
import UserAccountPage from "app/pages/user-account/UserAccountPage"

import { setCurrentUser } from "redux/user-account/user-account.actions"
import { selectCurrentUser } from "redux/user-account/user-account.selectors"

import { auth, createUserProfileDocument } from "firebase/firebase.utils"

import "app/App.scss"

const App = () => {
  const currentUser = useSelector(selectCurrentUser)
  const dispatchCurrentUser = useDispatch()

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot((snapshot) => {
          dispatchCurrentUser(
            setCurrentUser({ id: snapshot.id, ...snapshot.data() })
          )
        })
      } else {
        dispatchCurrentUser(setCurrentUser(userAuth))
      }
    })

    return () => unsubscribeFromAuth()
  }, [dispatchCurrentUser])

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/" component={ShopPage} />
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
