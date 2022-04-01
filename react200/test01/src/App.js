import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state={x:0, y:0};
  }
  f1 = (e)=>{
    let value = document.getElementById('inputId').value;
    console.log(value);
    console.log(2, e.target[0].value);
    console.log(3, e.target.input.value);
    e.preventDefault();
  }
  
  render() {
    return (
      <div>
        <form onSubmit={(e)=>{this.f1(e)}}>
          <input type='text' name='input' id='inputId' placeholder='텍스트' />
          <br />
          <input type='submit' value='전송'/>
        </form>
      </div>
    );
  }
}
  
export default App;