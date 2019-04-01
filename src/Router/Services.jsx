import React, { Component } from 'react'
import Service from '../components/Body/Services/Service'
import DataJson from './data/data.json'

export default class Services extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">{this.props.data.body.nameservice}</h2>
              <h3 className="section-subheading text-muted">{this.props.data.body.descservice}</h3>
            </div>
          </div>
          <div className="row text-center">
            {
              DataJson.body.services.map((data, index) =>
                <Service key={index} service={data}/>
              )
            }
          </div>
        </div>
      </section>
    )
  }
}
