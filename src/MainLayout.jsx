import React, { Component, Fragment } from 'react'
import DataJson from './data/data.json'
import Header from './components/Headers/Header.jsx'
import Body from './components/Body/Body'
import Footer from './components/Footer/index'

export default class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: DataJson
    }
  }

  updatePortfolio = (p, key) => {
    this.state.data.body.portfolio.name = p
  }

  render() {
    return (
      <Fragment>
        <Header data={this.state.data} />
        {this.props.children}
        <Footer data={this.state.data} />
      </Fragment>
    )
  }
}
