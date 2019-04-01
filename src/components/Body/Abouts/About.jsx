import React, { Component } from 'react'

export default class About extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li className={this.props.data.klass}>
        <div className="timeline-image">
          <img className="rounded-circle img-fluid" src={this.props.data.img} alt={this.props.data.img} />
        </div>
        <div className="timeline-panel">
          <div className="timeline-heading">
            <h4>{this.props.data.year}</h4>
            <h4 className="subheading">{this.props.data.title}</h4>
          </div>
          <div className="timeline-body">
            <p className="text-muted">{this.props.data.desc}</p>
          </div>
        </div>
      </li>
    )
  }
}
