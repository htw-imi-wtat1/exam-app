import React from 'react';
import './App.css';
import Navigation from './navigation/navbar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <p>WTAT1 - Exam Base App</p>

        <p>
          Edit <code>src/App.js</code> and save to reload.
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
