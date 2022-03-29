import React,{Component} from 'react';
import './App.css';

class App extends Component {
  f1(){
    let ar = [1,2,3,4];
    let br = ar.map( x => x * 2);
    console.log(br);
  }
  f2(){
    let ar = [
      {name:'tiger', age:10},
      {name:'lion', age:20},
    ];
    let br = ar.map((v,i)=>{
      let obj = {};
      // obj['tiger'];
      obj[v.name] = i * v.age + v.age;
      return obj;
    });
    console.log(br);
  }
  render() {
    return (
      <div>
        <button onClick={()=>{this.f1()}}>버튼</button>
        <button onClick={()=>{this.f2()}}>버튼</button>
      </div>
    );
  }
}

export default App;