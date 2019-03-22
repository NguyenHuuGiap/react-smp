import React, { Component } from 'react'

export default class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">{this.props.data.header.menu.logo}</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            {this.props.data.header.menu.menu}
              <i className="fas fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ml-auto">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#services">{this.props.data.header.menu.services}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#portfolio">{this.props.data.header.menu.portfolio}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#about">{this.props.data.header.menu.about}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#team">{this.props.data.header.menu.team}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#contact">{this.props.data.header.menu.contact}</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
