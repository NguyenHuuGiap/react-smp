import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    return (
      <div>
        <input id="email" type="text" class="form-control" name="email" placeholder="Email"></input>
      </div>
    )
  }
}
