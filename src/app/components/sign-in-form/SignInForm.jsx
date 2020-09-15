import React, { useState } from "react"

import FormInput from "app/components/form-input/FormInput"
import CustomButton from "app/components/custom-button/CustomButton"

import { signInWithGoogle } from "firebase/firebase.utils"

import "app/components/sign-in-form/sign-in-form.scss"

const SignInForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()

    setEmail("")
    setPassword("")
  }

  const handleEmailChange = (event) => {
    const email = event.target.value
    setEmail(email)
  }

  const handlePasswordChange = (event) => {
    const password = event.target.value
    setPassword(password)
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
            onClick={signInWithGoogle}
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
