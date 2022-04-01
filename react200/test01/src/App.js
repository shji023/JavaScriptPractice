import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state={x:0, y:0};
  }
  f1 = (e)=>{
    console.log(e.pageX, e.pageY);
    this.setState({x:e.pageX, y:e.pageY});
  }
  
  render() {
    return (
      
      <div>
        <div style={{background:'red'}} onMouseMove={(e)=>{this.f1(e)}}>호랑이</div>
        <h6>{this.state.x}{this.state.y}</h6>
        {/* <input type='text' onChange={this.f1}></input>
        <select onChange={this.f2}>
          <option value='호랑이1'>호랑이5</option>
          <option value='호랑이2'>호랑이6</option>
          <option value='호랑이3'>호랑이7</option>
          <option value='호랑이4'>호랑이8</option>
        </select> */}
      </div>
    );
  }
}
  
export default App;