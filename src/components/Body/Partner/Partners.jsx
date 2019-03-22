import React, { Component } from 'react'
import Partner from './Partner';

export default class Partners extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="py-5">
        <div className="container">
          <div className="row">
            {
              this.props.data.details.map(
                (data, index) => <Partner key={index} data={data}/>
              )
            }
          </div>
        </div>
      </section>
    )
  }
}
