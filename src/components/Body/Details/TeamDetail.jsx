import React, { Component } from 'react'
import Services from '../Services/Services'
import Portfolio from '../Portfolios/Portfolios';
import Abouts from '../Abouts/Abouts';
import Teams from '../Team/Teams';
import Team from '../Team/Team';
import Partners from '../Partner/Partners';
import Contacts from '../Contacts/Contacts';
import DataJson from '../../../data/data'

export default class TeamDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: DataJson
    }
  }

  render() {
    return (
      <div>
        {
          this.state.data.body.teams.details.map((val, index) => {
              if(val.id == this.props.match.params.id) {
                return (<Team key={index} data={val}/>)
              }
            }
          )
        }
      </div>
    )
  }
}
