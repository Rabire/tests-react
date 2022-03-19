import React from 'react';
import ReactDOM from 'react-dom';
import { CssReset, Theme } from 'styles/globals';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <CssReset />
    <Theme />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
