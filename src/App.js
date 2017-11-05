import React, { Component } from 'react';
import logo from './logo.svg';
import Drawer from './components/Drawer.js';
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Main from './components/Main.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Drawer/>
      </div>
    );
  }
}

export default App;
