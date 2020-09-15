import React, { useState } from "react"

import FormInput from "app/components/form-input/FormInput"
import CustomButton from "app/components/custom-button/CustomButton"

import { auth, createUserProfileDocument } from "firebase/firebase.utils"

import "app/components/sign-up-form/sign-up-form.scss"

const SignUpForm = () => {
  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmedPassword, setConfirmedPassword] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (password !== confirmedPassword) {
      alert("Passwords do not match.")
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )
      await createUserProfileDocument(user, { displayName })
    } catch (error) {
      console.error(error)
    }

    setDisplayName("")
    setEmail("")
    setPassword("")
    setConfirmedPassword("")
  }

  const handleDisplayNameChange = (event) => {
    const displayName = event.target.value
    setDisplayName(displayName)
  }

  const handleEmailChange = (event) => {
    const email = event.target.value
    setEmail(email)
  }

  const handlePasswordChange = (event) => {
    const password = event.target.value
    setPassword(password)
  }

  const handleConfirmedPasswordChange = (event) => {
    const confirmedPassword = event.target.value
    setConfirmedPassword(confirmedPassword)
  }

  return (
    <div className="sign-up-form">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          value={displayName}
          onChange={handleDisplayNameChange}
          label="Display name"
          required
        />

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

        <FormInput
          name="confirmedPassword"
          type="password"
          value={confirmedPassword}
          onChange={handleConfirmedPasswordChange}
          label="Confirm password"
          required
        />

        <CustomButton type="submit" value="Submit form">
          Sign in
        </CustomButton>
      </form>
    </div>
  )
}

export default SignUpForm
