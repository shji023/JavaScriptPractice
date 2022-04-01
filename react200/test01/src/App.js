import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state={x:0, y:0};
  }
  f1 = (name, e)=>{
    console.log(e);
    console.log(name, e.charCode);
  }
  
  render() {
    return (
      
      <div>
        <input
          onKeyDown={(e)=>{this.f1('onKeyDown',e)}}
          onKeyPress={(e)=>{this.f1('onKeyPress',e)}}
        ></input>
      </div>
    );
  }
}
  
export default App;