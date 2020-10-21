import React from 'react';
import logo from './logo.svg';
import './App.css';

const fontSize = 50;
const variable = 12;
const flag = false;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          Hi everyone!
        </div>
        <p style={{
          color: 'red',
          fontSize: fontSize
        }}>Style</p>
        <p>{variable}</p>
        <p>{43}</p>
        <p>{12-5}</p>
        <p>{flag && 'Hi'}</p>
        <p>{flag ? 'Hello' : 'Not hello'}</p>
        <p>
          {'undefined'}
        </p>
        <p>{null}</p>
        <p>
          {' false'}
        </p>
        <p>
          {true}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
