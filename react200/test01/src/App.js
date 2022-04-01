import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    // 1.
    this.test = React.createRef();
  }
  f1 = ()=>{
    this.test.current.focus();
    // document.getElementById('btn2').textContent = 'tiger';
  }
  f2 = ()=>{
    document.getElementById('inputId').focus();
  }
  
  render() {
    return (
      <div>
        <input id='inputId' type='text' ref={this.test}></input>
        <button onClick={this.f1}>버튼1</button>
        <button onClick={this.f2}>버튼2</button>
      </div>
    );
  }
}
  
export default App;