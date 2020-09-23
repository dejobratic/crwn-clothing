import React from "react"
import StripeCheckout from "react-stripe-checkout"

const StripeCheckoutButton = ({ price }) => {
  const priceInCents = price * 100
  const publishableKey =
    "pk_test_51HU5C4LXKE3gXQIeK8FXaBxbOdPvPziFE9VcRHPXXMrRaGUMMYr5EOXQA5JXPyluYErqC1P0EuZKbLuDAOdspGlx00Poqnmazd"

  const handleToken = (token) => {
    console.log(token)
    alert("Payment successful.")
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
