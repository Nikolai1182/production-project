import React from "react"
import { createRoot } from "react-dom/client"
import App from "./app/App"
import "./app/styles/index.scss"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "app/providers/ThemeProvider"

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