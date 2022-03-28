import React,{Component} from 'react';
import './App.css';

class App extends Component {
  // 멤버함수
  f1() {console.log(1);}
  f2 = function (){
    console.log(2);
  }
  f3 = () =>{

  }
  render() {
    this.f1();
    this.f2();
    this.f3();

    // 내부 함수
    // 함수 안에서 함수를 작성할 수 있다.
    function f4(){
      console.log(4);
    }
    let f5 = function(){
      console.log(5);
    }
    let f6 = ()=>{
      console.log(6);
    }
    f4();
    f5();
    f6();

    // 즉시실행함수
    (function(){
      console.log(7);
    })();

    // 객체 함수
    let obj = {
      f9:function(){console.log(9)},
      f10:()=>{console.log(10)},
      f11(){console.log(11)},
    }

    obj.f9();
    obj.f10();
    obj.f11();

    // 생성자 함수
    function Person(){
      this.f12 = function(){
        console.log(12);
      }
      this.f13 = ()=>{
        console.log(13);
      }
      Person.prototype.f14 = function(){console.log(14)};
      Person.prototype.f15 = ()=>{console.log(15)};
    }
    let p = new Person();
    p.f12(); p.f13(); p.f14(); p.f15();

    class Fruit {
      f16(){};
      f17 = function(){console.log(17);};
      f18 = ()=>{console.log(18);};
    }
    let f = new Fruit();
    f.f16(); f.f17(); f.f18();
    return (
      <div>
        
      </div>
    );
  }
}

export default App;