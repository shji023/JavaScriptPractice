import React,{Component} from 'react';
import './App.css';

class App extends Component {
  num = 10;
  f1(){
    f2();
    function f2(){
      console.log(1);
    }
    this.f2();
    this.f3();
    this.f4();
    this.f5();
  }

  f2() {
    console.log(2);
  }
  f3(){
    let temp = this;
    setTimeout(function(){
      console.log(temp.num+1);
    },1000);
  }
  f4(){
    setTimeout(function(){
      console.log(this.num+2);
    }.bind(this),2000);
  }
  f5(){
    setTimeout(()=>{
      console.log(this.num+3);
    },3000);
  }
  render() {
    return (
      <div>
        <button onClick={()=>{this.f1()}}>버튼</button>
      </div>
    );
  }
}

export default App;