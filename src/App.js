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
            <div className="Info-Text">Use the form below to upload the .csv file from draftkings.com, then click "OPTIMIZE" to see your custom lineup!</div>
            <button id="Optimize-Btn">UPLOAD</button>
          </div>
          <div className="Available-Players">Create Table of Available Players Here</div>
          <div className="Current-Roster">Create Table of Current Roster Here
          </div>
        </div>
      </div>
    );
  }
}

export default App;
