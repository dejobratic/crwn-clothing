import {
  auth,
  signInWithGoogle,
  createUserProfileDocument,
} from "firebase/firebase.utils"

class UserAccountService {
  async signUp(userAuth) {
    const { email, password, displayName } = userAuth
    const { user } = await auth.createUserWithEmailAndPassword(email, password)
    await createUserProfileDocument(user, { displayName })
  }

  async signInWithEmailAndPassword(email, password) {
    await auth.signInWithEmailAndPassword(email, password)
  }

  async signInWithGoogleAccount() {
    signInWithGoogle()
  }
}

export const userAccountService = new UserAccountService()