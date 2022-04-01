import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
  f1 = (a, b) => {
    new Promise ((resolve,reject)=>{
      a>b?resolve(10):reject(20)
    })
  .then((num)=>{
    console.log(num);
  })  
  .catch((num)=>{
    console.log(num);
  });
  }
  render() {
    return (
      <div>
        <button onClick={()=>{this.f1(4, 3)}}>버튼1</button>
        <button onClick={()=>{this.f1(3, 4)}}>버튼1</button>
      </div>
    );
  }
}
  
export default App;