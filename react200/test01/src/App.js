import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
  f1 = () => {
    new Promise ((resolve)=>{
      console.log(1);
      resolve();
    })
    .then(()=>{
      console.log(2);
    })
  }
  f2 = () => {
    new Promise ((resolve)=>{
      console.log(1);
      resolve(1000);
    })
    .then((result)=>{
      console.log(2,result);
    })
  }
  f3 = () => {
    new Promise ((resolve,)=>{
      console.log(1);
      resolve(1000);
    })
    .then((result)=>{
      console.log(2,result);
      return 2000;
    })
    .then((result)=>{
      console.log(3,result);
    })
    .then(()=>{
      console.log(4);
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.f1}>버튼1</button>
        <button onClick={this.f2}>버튼2</button>
        <button onClick={this.f3}>버튼3</button>
      </div>
    );
  }
}

export default App;