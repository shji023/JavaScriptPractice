import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
  // get
  f1 = async () => {
    //fetch('http://date.jsontest.com');
    // axios.get('http://date.jsontest.com')
    // .then((response)=>{
    //   console.log(response);
    //   console.log(response.data);
    //   console.log(response.data.date);
    // })
    const data = await axios.get('http://date.jsontest.com')
    console.log(data);
    
  }
  // post
  f2 = async () => {
    const data = await axios.post('http://date.jsontest.com',{a:10, b:20})
    // axios.post('http://date.jsontest.com',{a:10, b:20})
    // .then((response)=>{
    //  console.log(1, response.data.date);
    // })
    console.log(data);
  }
  render() {
    return (
      <div>
        <h2>호랑이</h2>
        <button onClick={this.f1}>버튼1</button>
        <button onClick={this.f2}>버튼2</button>
      </div>
    );
  }
}

export default App;