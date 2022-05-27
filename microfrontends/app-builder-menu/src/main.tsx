import React from 'react'
import ReactDOM from 'react-dom/client'

import { Menu } from "./components/Menu"

class AppBuilderMenu extends HTMLElement {
  shadow: ShadowRoot

  constructor() {
    super()
  
    this.shadow = this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    this.render()
  }

  render() {
    const element = document.createElement("div")

    const root = ReactDOM.createRoot(element)

    root.render(
      <React.StrictMode>
        <Menu />
      </React.StrictMode>
    )

    this.shadow.appendChild(element)
  }
}

customElements.define("app-builder-menu", AppBuilderMenu)
