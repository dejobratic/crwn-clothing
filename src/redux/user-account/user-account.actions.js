export const userAccountAction = {
  GOOGLE_SIGN_IN_START: "GOOGLE_SIGN_IN_START",
  EMAIL_AND_PASSWORD_SIGN_IN_START: "EMAIL_AND_PASSWORD_SIGN_IN_START",
  SIGN_IN_SUCCESS: "SIGN_IN_SUCCESS",
  SIGN_IN_FAILURE: "SIGN_IN_FAILURE",
  SIGN_UP_START: "SIGN_UP_START",
  SIGN_UP_SUCCESS: "SIGN_UP_SUCCESS",
  SIGN_UP_FAILURE: "SIGN_UP_FAILURE",
  SIGN_OUT_START: "SIGN_OUT_START",
  SIGN_OUT_SUCCESS: "SIGN_OUT_SUCCESS",
  SIGN_OUT_FAILURE: "SIGN_OUT_FAILURE",
  CHECK_USER_SESSION: "CHECK_USER_SESSION",
}

export const signInWithGoogleStart = () => ({
  type: userAccountAction.GOOGLE_SIGN_IN_START,
})

export const signInWithEmailAndPasswordStart = (emailAndPassword) => ({
  type: userAccountAction.EMAIL_AND_PASSWORD_SIGN_IN_START,
  payload: emailAndPassword,
})

export const signInSuccess = (user) => ({
  type: userAccountAction.SIGN_IN_SUCCESS,
  payload: user,
})

export const signInFailure = (errorMessage) => ({
  type: userAccountAction.SIGN_IN_FAILURE,
  payload: errorMessage,
})

export const signUpStart = (userAuth) => ({
  type: userAccountAction.SIGN_UP_START,
  payload: userAuth,
})

export const signUpSuccess = () => ({
  type: userAccountAction.SIGN_UP_SUCCESS,
})

export const signUpFailure = (errorMessage) => ({
  type: userAccountAction.SIGN_UP_FAILURE,
  payload: errorMessage,
})

export const signOutStart = () => ({
  type: userAccountAction.SIGN_OUT_START,
})

export const signOutSuccess = () => ({
  type: userAccountAction.SIGN_OUT_SUCCESS,
})

export const signOutFailure = (errorMessage) => ({
  type: userAccountAction.SIGN_OUT_FAILURE,
  payload: errorMessage,
})

export const checkUserSession = () => ({
  type: userAccountAction.CHECK_USER_SESSION,
})
