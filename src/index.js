import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './styles/App.css';

const rootElement = document.getElementById('main');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
