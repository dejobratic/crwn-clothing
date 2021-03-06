import React, { useState } from "react"
import { useDispatch } from "react-redux"

import FormInput from "app/components/form-input/FormInput"
import CustomButton from "app/components/custom-button/CustomButton"

import {
  signInWithEmailAndPasswordStart,
  signInWithGoogleStart,
} from "redux/user-account/user-account.actions"

import "app/components/sign-in-form/sign-in-form.scss"

const SignInForm = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()
    dispatch(signInWithEmailAndPasswordStart({ email, password }))
  }

  const handleEmailChange = (event) => {
    const email = event.target.value
    setEmail(email)
  }

  const handlePasswordChange = (event) => {
    const password = event.target.value
    setPassword(password)
  }

  const handleSignInWithGoogle = () => {
    dispatch(signInWithGoogleStart())
  }

  return (
    <div className="sign-in-form">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          label="Email"
          required
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          label="Password"
          required
        />

        <div className="button-group">
          <CustomButton type="submit" value="Submit form">
            Sign in
          </CustomButton>

          <CustomButton
            type="button"
            value="Submit form"
            googleSignIn
            onClick={handleSignInWithGoogle}
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignInForm
