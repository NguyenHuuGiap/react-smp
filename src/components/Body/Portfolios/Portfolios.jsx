import React, { Component } from 'react'
import Portfolio from './Portfolio';

export default class Portfolios extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="bg-light" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">{this.props.data.name}</h2>
              <h3 className="section-subheading text-muted">{this.props.data.desc}</h3>
            </div>
          </div>
          <div className="row">
            {
              this.props.data.details.map(
                (data, index) => <Portfolio data={data} key={index}/>
              )
            }
          </div>
        </div>
      </section>
    )
  }
}
