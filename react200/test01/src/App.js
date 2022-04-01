import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
  f1 = ()=>{
    console.log(1);
  }
  f2 = ()=>{
    console.log(2);
  }
  f3 = arg=>{
    console.log(3, arg);
  }
  f4 = arg=>{
    console.log(4, arg);
  }
  render() {
    return (
      <div>
        <button onClick={()=>{this.f1()}}>버튼1</button>
        <button onClick={this.f2}>버튼2</button>
        <button onClick={()=>{this.f3(100)}}>버튼3</button>
        <button onClick={(e)=>{this.f4(e)}}>버튼4</button>

        <div onClick={this.f1}></div>
      </div>
    );
  }
}
  
export default App;