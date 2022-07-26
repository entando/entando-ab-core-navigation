import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyleSheetManager } from 'styled-components';

import { Menu } from './components/Menu';
import { MfeConfig } from './types/globals';

export class AppBuilderMenu extends HTMLElement {
  shadow: ShadowRoot;

  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: 'open' });
  }

  #config = {};

  #updateConfig(value: any) {
    this.#config = JSON.parse(value);
  }

  static get observedAttributes() {
    return ['config'];
  }

  attributeChangedCallback(name: string, oldValue: any, newValue: any) {
    if (name === 'config' && oldValue !== newValue) {
      this.#updateConfig(newValue);
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const element = document.createElement('div');
    const styleParent = document.createElement('div');

    const root = ReactDOM.createRoot(element);

    const rootElemId = 'app-builder-menu-main-element-id';
    const stylesElemId = 'app-builder-menu-styles-element-id';

    styleParent.id = stylesElemId;
    element.id = rootElemId;

    const findElem = this.shadow.getElementById(stylesElemId);
    if (findElem) {
      this.shadow.removeChild(findElem);
    }

    const findMainElem = this.shadow.getElementById(rootElemId);
    if (findMainElem) {
      this.shadow.removeChild(findMainElem);
    }

    root.render(
      <React.StrictMode>
        <StyleSheetManager target={styleParent}>
          <Menu config={this.#config as MfeConfig} />
        </StyleSheetManager>
      </React.StrictMode>
    );

    this.shadow.appendChild(styleParent);
    this.shadow.appendChild(element);
  }
}
