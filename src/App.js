import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DataJson from './data/data.json'
import Header from './components/Headers/Header.jsx'
import Body from './components/Body/Body'
import Footer from './components/Footer/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header data={DataJson} />
        <Body data={DataJson} />
        <Footer data={DataJson} />
      </div>
    );
  }
}

export default App;
