import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import Result from './components/Result';


class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      color:'red',
      fontSize:25
    };

  }
  onsetColor = (param) =>{
    this.setState({
      color:param
    })
  }
  onchansize = (value) => {

      this.setState({
         fontSize: (this.state.fontSize + value >=8 && this.state.fontSize + value <=36 ) ? this.state.fontSize + value : this.state.fontSize
      });

  }
  onResetDefault = (value) => {
        if(value){
      this.setState({
        color: 'red',
        fontSize: 15
      })
    }
  }
  render() {
    return (
    <div className="App">
      
      <Card color={this.state.color} onReceiveColor={this.onsetColor} onchansize={this.onchansize} fontSize={this.state.fontSize} onResetDefault={this.onResetDefault}/>
      <Result color={this.state.color} fontSize={this.state.fontSize} />
      </div>
    );
  }
}

export default App;
