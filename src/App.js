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
          <div className="Info">
            <div className="Info-Text">USE THE FORM BELOW TO UPLOAD THE CSV DOWNLOADED FROM DRAFTKINGS.COM. THEN CLICK "OPTIMIZE" TO SEE YOUR CUSTOM LINEUP!</div>
            <button id="Optimize-Btn">OPTIMIZE</button>
          </div>
          <div className="Available-Players"></div>
          <div className="Current-Roster"></div>
        </div>
      </div>
    );
  }
}

export default App;
