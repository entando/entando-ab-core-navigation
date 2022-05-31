import React from "react";
import ReactDOM from "react-dom/client";
import { StyleSheetManager } from "styled-components";

import { Menu } from "./components/Menu";

export class AppBuilderMenu extends HTMLElement {
  shadow: ShadowRoot;

  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const element = document.createElement("div");
    const styleParent = document.createElement("div");

    const root = ReactDOM.createRoot(element);

    root.render(
      <React.StrictMode>
        <StyleSheetManager target={styleParent}>
          <Menu />
        </StyleSheetManager>
      </React.StrictMode>
    );

    this.shadow.appendChild(styleParent);
    this.shadow.appendChild(element);
  }
}
