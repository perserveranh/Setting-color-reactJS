import React, { Component } from 'react';

export default class Result extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}
	setStyle = () =>{
		return {
			color: this.props.color,
			border: this.props.color ,
			fontSize: this.props.fontSize
		}
	}
  render() {
    return (
		<div className="View">
			<p>color: {this.props.color}  - Fontsize:  {this.props.fontSize}px</p>
				<div id="content" style={this.setStyle()}>
					Noi dung setting
				</div>
			</div>

    );
  }
}

