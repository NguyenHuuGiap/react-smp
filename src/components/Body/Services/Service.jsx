import React, { Component } from 'react'

export default class MiniService extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="col-md-4">
        <span className="fa-stack fa-4x">
          <i className="fas fa-circle fa-stack-2x text-primary" />
          <i className={this.props.service.icon} />
        </span>
        <h4 className="service-heading">{this.props.service.name}</h4>
        <p className="text-muted">{this.props.service.desc}</p>
      </div>
    )
  }
}
