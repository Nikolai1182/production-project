import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import "./styles/index.scss"
import { BrowserRouter } from "react-router-dom"
import ThemeProvider from "./theme/ThemeProvider"

const rootElement = document.getElementById("root")!

createRoot(rootElement).render(
  <ThemeProvider>
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
  </ThemeProvider>
)