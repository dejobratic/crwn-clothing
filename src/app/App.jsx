import React, { useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import { useDispatch } from "react-redux"

import Header from "app/components/header/Header"
import HomePage from "app/pages/home/HomePage"
import ShopPage from "app/pages/shop/ShopPage"
import UserAccountPage from "app/pages/user-account/UserAccountPage"

import { setCurrentUser } from "redux/user-account/user-account-actions"

import { auth, createUserProfileDocument } from "firebase/firebase.utils"

import "app/App.scss"

const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot((snapshot) => {
          dispatch(setCurrentUser({ id: snapshot.id, ...snapshot.data() }))
        })
      } else {
        dispatch(setCurrentUser(userAuth))
      }
    })

    return () => unsubscribeFromAuth()
  }, [])

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/" component={ShopPage} />
        <Route path="/signin" component={UserAccountPage} />
      </Switch>
    </>
  )
}

export default App
