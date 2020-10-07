import React from "react"

import SignInForm from "app/components/sign-in-form/SignInForm"
import SignUpForm from "app/components/sign-up-form/SignUpForm"

import "app/pages/user-account/user-account-page.scss"

const UserAccountPage = () => {
  return (
    <div className="user-account-page">
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default UserAccountPage
