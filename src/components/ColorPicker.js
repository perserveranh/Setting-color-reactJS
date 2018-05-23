import React, { Component } from 'react';


export default class ColorPicker extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      colors :['red','green','blue','yellow']
    };
  }
  showColor(color){
    console.log(this.props.color);
    return {
      background:color

    };
  }
  setActiveColor  = (color) => {
    this.props.setColor(color);
  }
  render() {
    var elmColor=this.state.colors.map((color,index) => {
      return <span 
          key={index} 
          style={ this.showColor(color)}
          className={this.props.color === color ? 'active' : ''}
          onClick={() => this.setActiveColor(color)}
          ></span> 
    });
    return (
      <div className="col">
        <div className="card">
          <div className="card-header " id="card-color">
            Color Picker
          </div>
          <div className="card-body">
              { elmColor }
              <hr />
            
            </div>
          </div>
        </div>
    );
  }
}

