import React, { Component } from 'react';

export default class Reset extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}
	onResetDefault = () =>{
		this.props.onResetDefault(true);
	}
  render() {
    return (
          <div className="reset">
            <button type="button" className="btn btn-primary" id="btn-reset" onClick={this.onResetDefault}>Reset</button>
          </div>
    );
  }
}

