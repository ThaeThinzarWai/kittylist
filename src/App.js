import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MasterLayout from './components/MasterLayout';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MasterLayout />
      </React.Fragment>
    );
  }
}

export default App;
