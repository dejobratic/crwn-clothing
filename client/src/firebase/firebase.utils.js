import firebase from "firebase/app"

import "firebase/auth"
import "firebase/firestore"

const config = {
  apiKey: "AIzaSyAvuYqcE3Yj4hqiWoXfMMcvJiBDrBW4m5c",
  authDomain: "crwn-db-a7c0f.firebaseapp.com",
  databaseURL: "https://crwn-db-a7c0f.firebaseio.com",
  projectId: "crwn-db-a7c0f",
  storageBucket: "crwn-db-a7c0f.appspot.com",
  messagingSenderId: "13363033072",
  appId: "1:13363033072:web:d63077ca191b234dbce335",
  measurementId: "G-HYPBKJJ2P9",
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const userSnapshot = await userRef.get()

  if (!userSnapshot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData })
    } catch (error) {
      console.error("error creating user", error.message)
    }
  }

  return userRef
}

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey)
  console.log({ collectionRef })

  const batch = firestore.batch()

  objectsToAdd.forEach((element) => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, element)
  })

  return await batch.commit()
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe()
      resolve(userAuth)
    }, reject)
  })
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
googleAuthProvider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider)

export default firebase
