import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state={name:'몽키',salary:300}
  }
  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value},()=>{
      console.log(this.state);
    });
  }
  handleSumbit=(e)=>{
    const user = {
      name:this.state.name, 
      salary:this.state.salary,
    }
    axios.post('/save',{user})
    .then((res)=>{
      console.log(res.data);
    });
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSumbit}>
          <input type='text' name='name'
          defaultValue={this.state.name}
          onChange={this.handleChange} />
          <input type='text' name='salary'
          defaultValue={this.state.salary}
          onChange={this.handleChange} />
          <button type='submit'>추가</button>
        </form>
        
      </div>
    );
  }
}

export default App;