import React, { Component } from 'react';
import logo from './logo.svg';
import Drawer from './components/Drawer.js';
import Header from './components/Header.js';
import Routes from './components/Routes.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes></Routes>
        <Drawer></Drawer>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
