import React from 'react';
import ReactDOM from 'react-dom';

import Display from './components/Display/Display';
import './styles/App.css';

const rootElement = document.getElementById('main');

ReactDOM.render(
  <React.StrictMode>
    <Display />
  </React.StrictMode>,
  rootElement
);
