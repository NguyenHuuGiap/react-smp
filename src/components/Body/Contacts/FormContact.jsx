import React, { Component } from 'react'

export default class FormContact extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <form id="contactForm" name="sentMessage" noValidate="novalidate">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message={this.props.data.placeholder_name} />
                <p className="help-block text-danger" />
              </div>
              <div className="form-group">
                <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message={this.props.data.placeholder_email} />
                <p className="help-block text-danger" />
              </div>
              <div className="form-group">
                <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message={this.props.data.placeholder_phone} />
                <p className="help-block text-danger" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message={this.props.data.placeholder_message} defaultValue={""} />
                <p className="help-block text-danger" />
              </div>
            </div>
            <div className="clearfix" />
            <div className="col-lg-12 text-center">
              <div id="success" />
              <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">{this.props.data.button}</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
