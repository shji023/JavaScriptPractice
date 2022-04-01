import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    // 1.
    this.test = React.createRef();
    this.test2 = React.createRef();
    this.state={};
  }
  f1 = ()=>{
    this.test2.current.textContent = 'tiger';
    document.getElementById('btn2').textContent = 'tiger';
  }
  f2 = ()=>{
    this.test.current.textContent = 'apple';
    document.getElementById('btn1').textContent = 'apple';
  }
  
  render() {
    return (
      <div>
        <button id='btn1' ref={this.test} onClick={this.f1}>버튼1</button>
        <button id='btn2' ref={this.test2} onClick={this.f2}>버튼2</button>
      </div>
    );
  }
}
  
export default App;