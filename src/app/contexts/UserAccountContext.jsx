import React, { useEffect, useState, createContext } from "react"

import { auth, createUserProfileDocument } from "firebase/firebase.utils"

const UserAccountContext = createContext()

const UserAccountContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot((snapshot) => {
          setUser({ id: snapshot.id, ...snapshot.data() })
        })
      } else {
        setUser(userAuth)
      }
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
