import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
  f1 = (e)=>{
    let inputData = e.target.value;
    console.log(inputData);
  }
  f2 = (e)=>{
    console.log(e.target.value);
  }
  
  render() {
    return (
      <div>
        <input type='text' onChange={this.f1}></input>
        <select onChange={this.f2}>
          <option value='호랑이1'>호랑이5</option>
          <option value='호랑이2'>호랑이6</option>
          <option value='호랑이3'>호랑이7</option>
          <option value='호랑이4'>호랑이8</option>
        </select>
      </div>
    );
  }
}
  
export default App;