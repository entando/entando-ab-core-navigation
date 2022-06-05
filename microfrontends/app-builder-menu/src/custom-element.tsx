import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyleSheetManager } from 'styled-components';

import { Menu } from './components/Menu';
import { MfeConfig } from './components/MenuUI';

export class AppBuilderMenu extends HTMLElement {
  shadow: ShadowRoot;

  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: 'open' });
  }

  // @TODO remove this when checking integration with app-builder, this object should become empty
  #config = {
    userPermissions: [
      'superuser',
      'editContents',
      'managePages',
      'editUsers',
      'viewUsers',
      'editUserProfile',
      'manageCategories',
      'validateContents',
      'manageResources',
      'enterECR'
    ],
    lang: 'en',
    api: {
      url: 'http://localhost:8080/menu-be-api'
    }
  };

  #updateConfig(value: any) {
    this.#config = JSON.parse(value);
  }

  static get observedAttributes() {
    return ['config'];
  }

  attributeChangedCallback(name: string, oldValue: any, newValue: any) {
    if (name === 'config') {
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

    this.shadow.appendChild(styleParent);
    this.shadow.appendChild(element);
  }
}
