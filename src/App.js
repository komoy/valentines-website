import React from 'react';
import './App.css';
import ValentineMessage from './valentines-message';
import TeddyBear from './teddy-bear';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <TeddyBear />
        <ValentineMessage />
      </header>
    </div>
  );
}

export default App;
