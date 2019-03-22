import React, { Component } from 'react'
import Team from './Team'

export default class Teams extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="bg-light" id="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">{this.props.data.title}</h2>
              <h3 className="section-subheading text-muted">{this.props.data.desc}</h3>
            </div>
          </div>
          <div className="row">
            {
              this.props.data.details.map(
                (data, index) => <Team key={index} data={data}/>
              )
            }
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted">{this.props.data.content}</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
