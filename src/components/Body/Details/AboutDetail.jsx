import React, { Component } from 'react'
import Services from '../Services/Services'
import Portfolio from '../Portfolios/Portfolios';
import Abouts from '../Abouts/Abouts';
import Teams from '../Team/Teams';
import Partners from '../Partner/Partners';
import Contacts from '../Contacts/Contacts';
import DataJson from '../../../data/data'

export default class AboutDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: DataJson
    }
  }

  render() {
    return (
      <div>
        <Abouts data={this.state.data.body.abouts}/>
      </div>
    )
  }
}
