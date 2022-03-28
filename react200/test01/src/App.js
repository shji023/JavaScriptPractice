import React,{Component} from 'react';
import './App.css';

class App extends Component {
  // 생성자 함수를 이용하는 방법
  f1(){
    let F1 = (function(){
      // 생성자 함수
      function F1(num){
        this.num = num;
        F1.prototype.showNum = function(){
          console.log(this.num);
        }
      }
      return F1;
    })();
    let obj = new F1(100);
    console.log(obj.num);

    obj.showNum();
  }
  // 클래스를 이용한 방법
  f2(){
   class F1{
     constructor(num){
       this.num = num;
     }
     showNum(){
       console.log(this.num);
     }
   }
   let obj = new F1(100);
   console.log(obj.num);
   obj.showNum();
  }
  render(){
    return(
      <div>
        <h1>App</h1>
        <button onClick={()=>{
          this.f1();
        }}>버튼1</button>
        <button onClick={()=>{
          this.f2();
        }}>버튼2</button>
      </div>
    )
  }

}

export default App;