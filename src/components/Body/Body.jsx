import React, { Component } from 'react'
import Header from './Header'
import Services from './Services/Services'
import Portfolio from './Portfolios/Portfolios';
import Abouts from './Abouts/Abouts';
import Teams from './Team/Teams';
import Partners from './Partner/Partners';
import Contacts from './Contacts/Contacts';

export default class Body extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header data={this.props.data}/>
        <Services data={this.props.data}/>
        <Portfolio data={this.props.data.body.portfolio}/>
        <Abouts data={this.props.data.body.abouts}/>
        <Teams data={this.props.data.body.teams}/>
        <Partners data={this.props.data.body.partners}/>
        <Contacts data={this.props.data.body.contacts}/>
      </div>
    )
  }
}
