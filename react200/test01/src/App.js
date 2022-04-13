import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName:'홍길동',
      age:3000,
    }
  }
  f1 = (e) => {
    axios.post('/users/2',{
      name:this.state.userName,
      age:this.state.age
    })
    .then((res)=>{
      console.log(res.data.name);
      console.log(res.data.age);
    })
    e.preventDefault();
  }
  f2 = (e)=>{
    console.log(e.target.value);
    this.setState({userName:e.target.value});
  }
  render() {
    return (
      <div>
        <h1>App</h1>
        <form onSubmit={this.f1}>
          <input 
            type="text" 
            value={this.state.userName} 
            onChange={this.f2}>        
          </input>
          <button type='submit'>로그인</button>
        </form>
      </div>
    );
  }
}

export default App;