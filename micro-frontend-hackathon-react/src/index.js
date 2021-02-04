import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class MyElement extends HTMLElement {

  constructor() {
    super();
    this._data = [];
    this._reference = null;
  }

  get data() {
    return this._data;
  }

  set data(value) {
    this._data = value;
    this.render();
  }

  get reference() {
    return this._reference;
  }

  set reference(value) {

  }

  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  render() {
    if (this.shadowRoot) {
      const props = {
        data: this._data,
      };
      this._reference = ReactDOM.render(<App {...props} />, this.shadowRoot);
    }
  }

  disConnectedCallback() {
    ReactDOM.unmountComponentAtNode(this);
  }
}

window.customElements.define('user-profile', MyElement);
