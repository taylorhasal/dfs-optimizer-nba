import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          DAILY FANTASY SPORTS LINEUP OPTIMIZER NBA
        </header>
        <div className="Container">
          <div className="Info">SELECT YOUR "LOCKED" PLAYERS FROM THE LIST OF AVAILABLE PLAYERS. CLICK THE "OPTIMIZE" BUTTON TO CREATE YOUR CUSTOM DFS LINEUP!</div>
          <div className="Available-Players"></div>
          <div className="Current-Roster"></div>
        </div>
      </div>
    );
  }
}

export default App;
