import React, { Component } from 'react'

export default class Partner extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="col-md-3 col-sm-6">
        <a href="#">
          <img className="img-fluid d-block mx-auto" src={this.props.data.img} alt />
        </a>
      </div>
    )
  }
}
