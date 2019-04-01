import React, { Component } from 'react'
import Services from '../Services/Services'
import Portfolio from '../Portfolios/Portfolios';
import Abouts from '../Abouts/Abouts';
import Teams from '../Team/Teams';
import Partners from '../Partner/Partners';
import Contacts from '../Contacts/Contacts';
import DataJson from '../../../data/data'

export default class ServiceDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: DataJson
    }
  }

  savePortfolio = (p, key) => {
    this.props.data.body.portfolio.name = p
    this.setState(
      {
        data: this.props.data.body.portfolio
      }
    )
  }

  render() {
    return (
      <Services data={this.state.data}/>
    )
  }
}
