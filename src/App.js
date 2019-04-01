import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RouterLink from './Router/RouterLink';
import Home from './Home'
import First from './First';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RouterLink/>
      </div>
    );
  }
}

export default App;
