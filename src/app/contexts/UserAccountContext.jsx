import React, { useEffect, useState, createContext } from "react"

import { auth } from "firebase/firebase.utils"

const UserAccountContext = createContext()

const UserAccountContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setUser(user)
      console.log(user)
    })

    return () => unsubscribeFromAuth()
  }, [])

  return (
    <UserAccountContext.Provider value={{ user }}>
      {children}
    </UserAccountContext.Provider>
  )
}

export { UserAccountContext, UserAccountContextProvider }
