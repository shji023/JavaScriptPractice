import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      a:10,
      b:20
    }
  }
  f1 = ()=>{
    // setState는 비동기 함수 - a, b 즉시 갱신 안됨
    this.setState({a:30});
    this.setState({b:40});
    console.log(this.state.a, this.state.b);
  }
  // 즉시갱신 이루어짐
  f2 = ()=>{
    this.setState({a:30,b:40},()=>{
      console.log(this.state.a, this.state.b);
    });
  }
  // 즉시갱신 이루어짐
  f3 = ()=>{
    new Promise((resolve)=>{
      resolve();
    })
    .then(()=>{
      this.setState({a:30});
      console.log(this.state.a);
      this.setState({b:this.state.a+40});
      console.log(this.state.b);
    });
  }
  f4 = ()=>{
    axios.post('/api/Swtool?type=list',{})
    .then((resolve)=>{
      resolve();
    })
    .then(()=>{
      this.setState({a:30});
      console.log(this.state.a);
      this.setState({b:this.state.a+40});
      console.log(this.state.b);
    })
  }
  render() { 
    return (
      <div>
        <button onClick={this.f1}>클릭1</button>
        <button onClick={this.f2}>클릭2</button>
        <button onClick={this.f3}>클릭3</button>
        <h1>{this.state.a}<br></br>{this.state.b}</h1>
      </div>
    );
  }
}

export default App;