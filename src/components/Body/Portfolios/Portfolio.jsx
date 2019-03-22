import React, { Component } from 'react'

export default class Portfolio extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="col-md-4 col-sm-6 portfolio-item">
        <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
          <div className="portfolio-hover">
            <div className="portfolio-hover-content">
              <i className="fas fa-plus fa-3x" />
            </div>
          </div>
          <img className="img-fluid" src={this.props.data.img} alt />
        </a>
        <div className="portfolio-caption">
          <h4>{this.props.data.title}</h4>
          <p className="text-muted">{this.props.data.desc}</p>
        </div>
      </div>
    )
  }
}
