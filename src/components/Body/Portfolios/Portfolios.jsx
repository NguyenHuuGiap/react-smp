import React, { Component } from 'react'
import Portfolio from './Portfolio';

export default class Portfolios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data.details,
      status: 0
    }
  }

  saveData = () => {
    this.props.savePortfolio(this.giatri.value, 1)
    
    this.setState(
      {
        status: 0
      }
    )
  }

  saveThreads = (p, key) => {    
    this.state.data[key].title = p
  }

  showInput = () => {    
    this.setState({status: 1})
  }

  renderInput = () => {
    if(this.state.status === 1) {
      return (
        <div>
          <input ref={(giatri) => this.giatri = giatri} id="PORTFOLIO" type="text" className="form-control" name="PORTFOLIO" placeholder="Portfolio Name"
            defaultValue={this.props.data.name}/>
          <a href="javascript:void(0)" className="btn btn-primary a-btn-slide-text" onClick={() => this.saveData()} >
            <span className="glyphicon glyphicon-plus" aria-hidden="true" />
            <span><strong>Save</strong></span>            
          </a>
        </div>
      )
    } else {
      return (
        <div>
          <a href="javascript:void(0)" className="btn btn-primary a-btn-slide-text" onClick={() => this.showInput()}>
            <span className="glyphicon glyphicon-edit" aria-hidden="true" />
            <span><strong>Edit</strong></span>            
          </a>
        </div>
      )
    }
  }

  render() {
    return (
      <section className="bg-light" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">
                {this.props.data.name}
                {this.renderInput()}
              </h2>
              <h3 className="section-subheading text-muted">{this.props.data.desc}</h3>
            </div>
          </div>
          <div className="row">
            {
              this.state.data.map(
                (data, index) => <Portfolio saveThreads={this.saveThreads} data={data} key={index} index={index}/>
              )
            }
          </div>
        </div>
      </section>
    )
  }
}
