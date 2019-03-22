import React, { Component } from 'react'

export default class Team extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="col-sm-4">
        <div className="team-member">
          <img className="mx-auto rounded-circle" src={this.props.data.img} alt />
          <h4>{this.props.data.name}</h4>
          <p className="text-muted">{this.props.data.role}</p>
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
