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

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
