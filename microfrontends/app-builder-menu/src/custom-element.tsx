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
  #attached = false;

  #updateConfig(value: any) {
    this.#config = JSON.parse(value);
  }

  static get observedAttributes() {
    return ['config'];
  }

  attributeChangedCallback(name: string, oldValue: any, newValue: any) {
    if (name === 'config' && oldValue !== newValue) {
      this.#updateConfig(newValue);
      this.render();
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const element = document.createElement('div');
    const styleParent = document.createElement('div');

    const root = ReactDOM.createRoot(element);

    root.render(
      <React.StrictMode>
        <StyleSheetManager target={styleParent}>
          <Menu config={this.#config as MfeConfig} />
        </StyleSheetManager>
      </React.StrictMode>
    );
    if (!this.#attached) {
      this.shadow.appendChild(styleParent);
      this.shadow.appendChild(element);
      this.#attached = true;
      console.log('appended');
    }
  }
}
