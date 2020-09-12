import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"

import App from "app/App"

import { UserAccountContextProvider } from "app/contexts/UserAccountContext"

import "index.css"

ReactDOM.render(
  <UserAccountContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserAccountContextProvider>,
  document.getElementById("root")
)
