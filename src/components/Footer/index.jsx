import React, { Component } from 'react'

export default class Footer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <span className="copyright">{this.props.data.footers.copyright}</span>
            </div>
            <div className="col-md-4">
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
            <div className="col-md-4">
              <ul className="list-inline quicklinks">
                <li className="list-inline-item">
                  <a href="#">{this.props.data.footers.policy}</a>
                </li>
                <li className="list-inline-item">
                  <a href="#">{this.props.data.footers.term_of_use}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
