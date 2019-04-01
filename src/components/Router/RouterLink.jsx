import React, { Component, Fragment } from 'react'
import Home from '../Body/Home/Home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class RouterLink extends Component {
  render() {
    return (
      <Fragment>
        <Route path="/home" component={Home}/>
      </Fragment>
    )
  }
}
