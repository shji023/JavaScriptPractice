import React,{Component} from 'react';
import './App.css';

class App extends Component {
  num = 10;
  f1(){console.log(this.num)};
  f2 = function(){console.log(this.num);};
  f3 = ()=>{console.log(this.num);}
  f4(){ // 여기서는 this를 알고있다
    // function은 왜 this를 모를까
    // 바인딩 방법1: 바인딩을 시킨다.
    let temp = this; // temp는 함수 안에서 유효하기에 function에서 쓰면됨
    (function(){ // 여기서는 this를 모른다
      // 멤버 num을 제어할 수 있는가? - No. 함수안에서 만들어진 함수는 외부 멤버를 모른다
      // console.log(this.num); error
      console.log(temp.num);
    })();
    // 바인딩 방법2: 
    (function(){ 
      console.log(this.num);
    }.bind(this))();
    // 바인딩 방법3:
    
  }
  render() {
    this.f1();
    this.f2();
    this.f3();
    this.f4();
    return (
      <div>
        
      </div>
    );
  }
}

export default App;