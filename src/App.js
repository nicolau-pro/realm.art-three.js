import React, { Component } from 'react';
import './styles/App.css';
import Display from './components/Display/Display';

class App extends Component {
  componentDidMount() {
    console.clear();
    console.log('Loaded');
  }

  render() {
    const numbers = [1, 2, 3, 4, 5];

    return (
      <>
        <ul>
          {numbers.map((n, index) => (
            <li key={index}>{n}</li>
          ))}
        </ul>
        <Display />
      </>
    );
  }
}

export default App;
