import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink" id="mainNav">
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">{this.props.data.header.menu.logo}</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            {this.props.data.header.menu.menu}
              <i className="fas fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ml-auto">
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/services">{this.props.data.header.menu.services}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="#portfolio">{this.props.data.header.menu.portfolio}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/about">{this.props.data.header.menu.about}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/teams">{this.props.data.header.menu.team}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/contact">{this.props.data.header.menu.contact}</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Fragment>
    )
  }
}
