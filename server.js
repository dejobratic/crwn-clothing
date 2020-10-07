const path = require("path")
const cors = require("cors")
const express = require("express")
const bodyParser = require("body-parser")

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

if (process.env.NODE_ENV === "production") {
  const staticFilesPath = path.join(__dirname, "client/build")
  app.use(express.static(staticFilesPath))

  app.get("*", function (_, response) {
    response.sendFile(path.join(staticFilesPath, "index.html"))
  })
}

app.listen(port, (error) => {
  if (error) {
    throw error
  }

  console.log(`Server running on port ${port}.`)
})

app.post("/payments", (request, response) => {
  const body = {
    source: request.body.token.id,
    amount: request.body.amount,
    currency: "usd",
  }

  stripe.charges.create(body, (stripeError, stripeResponse) => {
    if (stripeError) {
      response.status(500).send({ error: stripeError })
    } else {
      response.status(200).send({ success: stripeResponse })
    }
  })
})
