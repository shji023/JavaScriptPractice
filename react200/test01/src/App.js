import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
  f1 = async()=>{
    const res = await fetch('/users');
    const body = await res.text();
    console.log(typeof body,body);
  }
  f2 = ()=>{
    axios.get('/users',{})
    .then((res)=>{
      console.log(res.data);
    })
  }
  f3 = ()=>{
    axios.get('/users/2',{})
    .then((res)=>{
      console.log(res.data);
      console.log(res.data.message);
    })
  }
  f4 = ()=>{
    axios.post('/users/2',{name:'앵무새'})
    .then((res)=>{
      console.log(res.data.name);
    })
  }
  render() {
    return (
      <div>
        <h1>App</h1>
        <button onClick={this.f1}>버튼1</button>
        <button onClick={this.f2}>버튼2</button>
        <button onClick={this.f3}>버튼3</button>
        <button onClick={this.f4}>버튼4</button>
      </div>
    );
  }
}

export default App;