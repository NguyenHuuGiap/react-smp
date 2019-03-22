import React, { Component } from 'react'
import FormContact from './FormContact'

export default class Contacts extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">{this.props.data.title}</h2>
              <h3 className="section-subheading text-muted">{this.props.data.desc}</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <FormContact data={this.props.data.form} />
            </div>
          </div>
        </div>
      </section>
    )
  }
}
