import React, { Component } from 'react';
import Reset from './Reset';

export default class SizeSetting extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
    this.changeSize=this.changeSize.bind(this);
  }
  changeSize(value) {
    console.log(value);
    this.props.onchansize(value);
  }
  render() {
    return (
          <div className="col">
            <div className="card">
              <div className="card-header " id="card-size">
                Size: {this.props.fontSize} px
              </div>
              <div className="card-body">
                <button type="button" className="btn btn-success" onClick={() => this.changeSize(-2)}>Reduction</button>
                <button type="button" className="btn btn-danger"  onClick={() => this.changeSize(2)} >Increase</button>
              </div>
            </div>
            <Reset onResetDefault={this.props.onResetDefault}/>
          </div>
    );
  }
}

