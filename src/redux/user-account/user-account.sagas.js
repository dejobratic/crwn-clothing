import { takeLatest, put, all, call } from "redux-saga/effects"

import {
  userAccountAction,
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  signOutSuccess,
  signOutFailure,
} from "redux/user-account/user-account.actions"

import { userAccountService } from "app/services/UserAccountService"

import { getCurrentUser } from "firebase/firebase.utils"

export function* signInWithGoogleAsync() {
  try {
    const user = yield userAccountService.signInWithGoogleAccount()
    yield put(signInSuccess(user))
  } catch (error) {
    yield put(signInFailure(error.message))
  }
}

export function* signInWithEmailAndPassword({ payload: { email, password } }) {
  try {
    const user = yield userAccountService.signInWithEmailAndPassword(
      email,
      password
    )
    yield put(signInSuccess(user))
  } catch (error) {
    yield put(signInFailure(error.message))
  }
}

export function* signUp({ payload: userAuth }) {
  try {
    const user = yield userAccountService.signUp(userAuth)
    yield put(signUpSuccess(user))
  } catch (error) {
    yield put(signUpFailure(error.message))
  }
}

export function* signOut() {
  try {
    yield userAccountService.signOut()
    yield put(signOutSuccess())
  } catch (error) {
    yield put(signOutFailure(error.message))
  }
}

export function* checkUserSession() {
  try {
    const user = yield getCurrentUser()
    if (user) yield put(signInSuccess(user))
  } catch (error) {
    yield put(signInFailure(error.message))
  }
}

export function* onSignInWithGoogleStart() {
  yield takeLatest(
    userAccountAction.GOOGLE_SIGN_IN_START,
    signInWithGoogleAsync
  )
}

export function* onSignInWithEmailAndPasswordStart() {
  yield takeLatest(
    userAccountAction.EMAIL_AND_PASSWORD_SIGN_IN_START,
    signInWithEmailAndPassword
  )
}

export function* onSignUpStart() {
  yield takeLatest(userAccountAction.SIGN_UP_START, signUp)
}

export function* onSignOutStart() {
  yield takeLatest(userAccountAction.SIGN_OUT_START, signOut)
}

export function* onCheckUserSession() {
  yield takeLatest(userAccountAction.CHECK_USER_SESSION, checkUserSession)
}

export function* userAccountSagas() {
  yield all([
    call(onSignInWithGoogleStart),
    call(onSignInWithEmailAndPasswordStart),
    call(onSignUpStart),
    call(onSignOutStart),
    call(onCheckUserSession),
  ])
}
