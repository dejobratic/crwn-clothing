import React from "react"
import StripeCheckout from "react-stripe-checkout"

import { restService } from "app/services/RestService"

const StripeCheckoutButton = ({ price }) => {
  const priceInCents = price * 100
  const publishableKey =
    "pk_test_51HU5C4LXKE3gXQIeK8FXaBxbOdPvPziFE9VcRHPXXMrRaGUMMYr5EOXQA5JXPyluYErqC1P0EuZKbLuDAOdspGlx00Poqnmazd"

  const handleToken = async (token) => {
    try {
      await restService.post("payments", {
        amount: priceInCents,
        token,
      })
      alert("Payment successful.")
    } catch (error) {
      console.log("Payment error: ", error)
      alert(
        "There was an issue with your payment. Please double check your payment details."
      )
    }
  }

  return (
    <StripeCheckout
      label="Pay Now"
      panelLabel="Pay Now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceInCents}
      token={handleToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
