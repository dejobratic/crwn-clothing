import {
  auth,
  signInWithGoogle,
  createUserProfileDocument,
  getCurrentUser,
} from "firebase/firebase.utils"

class UserAccountService {
  async signUp(userAuth) {
    const { email, password, displayName } = userAuth
    const { user } = await auth.createUserWithEmailAndPassword(email, password)
    return await getSnapshotFromUserAccount({ ...user, displayName })
  }

  async signInWithEmailAndPassword(email, password) {
    const { user } = await auth.signInWithEmailAndPassword(email, password)
    return await getSnapshotFromUserAccount(user)
  }

  async signInWithGoogleAccount() {
    const { user } = await signInWithGoogle()
    return await getSnapshotFromUserAccount(user)
  }

  async checkUserSession() {
    const user = await getCurrentUser()
    return await getSnapshotFromUserAccount(user)
  }

  async signOut() {
    await auth.signOut()
  }
}

const getSnapshotFromUserAccount = async (user) => {
  const userRef = await createUserProfileDocument(user)
  const userSnapshot = await userRef.get()
  return { id: userSnapshot.id, ...userSnapshot.data() }
}

export const userAccountService = new UserAccountService()
