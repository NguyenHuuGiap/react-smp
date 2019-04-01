import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainLayout from '../MainLayout';
import Home from '../Home';
import ServiceDetail from '../components/Body/Details/ServiceDetail'
import AboutsDetail from '../components/Body/Details/AboutDetail'
import ContactsDetail from '../components/Body/Details/ContactDetail'
import TeamsDetail from '../components/Body/Details/TeamsDetail'
import TeamDetail from '../components/Body/Details/TeamDetail'

export default class RouterLink extends Component {
  render() {
    return (
      <Router>
        <MainLayout>
          <Route exact path="/" component={Home}/>
          <Route exact path="/home" component={Home}/>
          <Route path="/services" component={ServiceDetail}/>
          <Route path="/about" component={AboutsDetail}/>
          <Route path="/contact" component={ContactsDetail}/>
          <Route path="/teams" component={TeamsDetail}/>
          <Route path="/team/:title.:id" component={TeamDetail}/>
        </MainLayout>
      </Router>
    )
  }
}
