import React, { useState } from "react"

import FormInput from "app/components/form-input/FormInput"
import CustomButton from "app/components/custom-button/CustomButton"

import { userAccountService } from "app/services/UserAccountService"

import "app/components/sign-in-form/sign-in-form.scss"

const SignInForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await userAccountService.signInWithEmailAndPassword(email, password)

      setEmail("")
      setPassword("")
    } catch (error) {
      console.error(error)
    }
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
    userAccountService.signInWithGoogleAccount()
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
            onClick={handleSignInWithGoogle}
            oAuthButton
            value="Submit form"
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignInForm
