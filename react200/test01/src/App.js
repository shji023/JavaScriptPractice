import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
  f1 = () => {
    console.log(1);
    this.f2(1000, ()=>{
      console.log(3);
    });
  }
  f2 = (p, c) => {
    console.log(2, p);
    c();
  }
  render() {
    return (
      <div>
        <button onClick={this.f1}>버튼1</button>
      </div>
    );
  }
}

export default App;