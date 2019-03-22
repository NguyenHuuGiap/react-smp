import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        {/* Header */}
        <header className="masthead">
          <div className="container">
            <div className="intro-text">
              <div className="intro-lead-in">{this.props.data.body.header.wellcome}</div>
              <div className="intro-heading text-uppercase">{this.props.data.body.header.title}</div>
              <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">{this.props.data.body.header.seemore}</a>
            </div>
          </div>
        </header>
      </div>
    )
  }
}
