import React, { Component } from 'react'
import About from './About';

export default class Abouts extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">{this.props.data.name}</h2>
              <h3 className="section-subheading text-muted">{this.props.data.desc}</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">
                {
                  this.props.data.details.map((data, index) =>
                    <About data={data} key={index}/>
                  )
                }
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <h4>{this.props.data.h4}
                      <br />{this.props.data.br1}
                      <br />{this.props.data.br2}</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
