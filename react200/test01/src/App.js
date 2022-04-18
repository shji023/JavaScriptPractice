import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
f1 = ()=>{
  axios.post('/start/2',()=>{})
  .then((res)=>{
    console.log(res.data);
  })
}
f2 =()=>{
  axios.post('/stop/1',()=>{})
  .then((res)=>{
    console.log(res.data);
  })
}
  render() {
    return (
      <div>
        <button onClick={this.f1}>시작</button>
        <button onClick={this.f2}>스탑</button>
      </div>
    );
  }
}

export default App;