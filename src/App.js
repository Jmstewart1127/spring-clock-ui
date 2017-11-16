import React, { Component } from 'react';
import Drawer from './components/Drawer.js';
import Main from './components/Main.js';
import 'react-table/react-table.css'
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
