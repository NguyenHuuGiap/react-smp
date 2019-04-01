import React, { Component } from 'react'

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 0
    }
  }

  saveData = () => {    
    this.props.saveThreads(this.giatri.value, this.props.index)
    
    this.setState(
      {
        status: 0
      }
    )
  }

  showInput = () => {    
    this.setState({status: 1})
  }

  renderInput = () => {
    if(this.state.status === 1) {
      return (
        <div>
          <input ref={(giatri) => this.giatri = giatri} id="PORTFOLIO" type="text" className="form-control" name="PORTFOLIO" placeholder="Portfolio Name"
            defaultValue={this.props.data.title}/>
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
      <div className="col-md-4 col-sm-6 portfolio-item">
        <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
          <div className="portfolio-hover">
            <div className="portfolio-hover-content">
              <i className="fas fa-plus fa-3x" />
            </div>
          </div>
          <img className="img-fluid" src={this.props.data.img} alt={this.props.data.img} />
        </a>
        <div className="portfolio-caption">
          <h4>{this.props.data.title}</h4>
          <p className="text-muted">{this.props.data.desc}</p>
        </div>
        {this.renderInput()}
      </div>
    )
  }
}
