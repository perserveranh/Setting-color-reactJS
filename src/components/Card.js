import React, { Component } from 'react';
import ColorPicker from './ColorPicker';
import SizeSetting from './SizeSetting';

export default class Card extends Component {
  render() {
    return (
      <div className="row">
        <ColorPicker color={this.props.color} setColor={this.props.onReceiveColor}/>
        <SizeSetting  fontSize={this.props.fontSize} onchansize={this.props.onchansize} onResetDefault={this.props.onResetDefault}/>
          </div>
    );
  }
}

