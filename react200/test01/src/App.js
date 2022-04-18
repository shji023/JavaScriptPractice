import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import axios from 'axios';
import React, { Component } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      a:undefined,
      b:undefined
    }
  }
  f1 = ()=>{
    let res = [
      {id:1, name:'지렁이',salary:100, bonus:10},
      {id:2, name:'지렁이2',salary:200, bonus:5},
    ];
    this.setState({a:res},()=>{
      console.log(this.state);
      console.log(this.state.a);
      console.log(this.state.a[0].id); // 1
    });
  }
  // 즉시갱신 이루어짐
  f2 = ()=>{
    let result = [];
    for (let i = 0; i < 2; i++) {
      result.push(
        <tr key={i}>
          <td>{i*3+1}</td>
          <td>{i*3+2}</td>
          <td>{i*3+3}</td>
        </tr>
      );
      this.setState({b:result},()=>{
        for (let i = 0; i < result.length; i++) {
          console.log(reactElementToJSXString(this.state.b[i]));
        }
      });
    }
  }
  // 즉시갱신 이루어짐
  f3 = ()=>{
    let res = [
      {id:1, name:'지렁이',salary:100, bonus:10},
      {id:2, name:'지렁이2',salary:200, bonus:5},
    ];
    this.setState({a:res},()=>{
      let result = [];
      for (let i = 0; i < 2; i++) {
        result.push(
          <tr key={i}>
            <td>{this.state.a[i].id}</td>
            <td>{this.state.a[i].name}</td>
            <td>{this.state.a[i].salary}</td>
          </tr>
        );
      }
      this.setState({b:result});
    });
  }
  f4 = ()=>{
    let res = [
      {id:1, name:'지렁이',salary:100, bonus:10},
      {id:2, name:'지렁이2',salary:200, bonus:5},
    ];
    this.setState({a:res},()=>{
      this.setState({b:this.tableAppend()});
    })
  }
  tableAppend = ()=>{
    let result = [];
    for (let i = 0; i < 2; i++) {
      result.push(
        <tr key={i}>
          <td>{this.state.a[i].id}</td>
          <td>{this.state.a[i].name}</td>
          <td>{this.state.a[i].salary}</td>
        </tr>
      );
    }
    return result;
  }
  f5 = ()=>{
    axios.post('/api/Swtool?type=list',{})
    .then(res=>{
      console.log(res.data);
      this.setState({a:res.data});
      this.setState({b:this.tableAppend()});
    })
  }

  render() { 
    return (
      <div>
        <button onClick={this.f1}>클릭1</button>
        <button onClick={this.f2}>클릭2</button>
        <button onClick={this.f3}>클릭3</button>
        <button onClick={this.f4}>클릭4</button>
        <button onClick={this.f5}>클릭5</button>
        <table border='1'>
          <tbody>
            {this.state.b}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;