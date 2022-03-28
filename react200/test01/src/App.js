import React,{Component} from 'react';
import './App.css';

class App extends Component {
  // 배열 + 배열 = [...] 또는 concat
  // 배열 + 객체 = {...} 또는 assign
  f1(){
    let ar1 = ['Tiger','Lion'];
    let ar2 = ['Dog','Cat'];
    let ar3 = [ar1[0],ar1[1],ar2[0],ar2[1]];
    console.log(ar3);

    let ar4 = [].concat(ar1,ar2);
    console.log(ar4);

    let ar5 = [...ar1, ...ar2];
    console.log(ar5);

    let [a, b, ...c] = ar5;
    console.log(10, a, b); // a=Tiger, b=Cat
    console.log(20, c); // c = [Dog, Cat]
    console.log(30, c[0], c[1]); // c = [Dog, Cat]
  }
  f2(){
    let obj1 = {a:10, b:20};
    let obj2 = {c:20, d:40};
    // 첫번째 인수는 생략가능하고 디폴트는 {}객체
    // {}대신에 []을 넣으면 값이 배열로 얻는다
    let obj3 = Object.assign({},obj1, obj2);
    console.log(obj3);
    let obj4 = {...obj1, ...obj2};
    console.log(obj4);
    console.log(typeof JSON.stringify(obj4));

    let {a, b, ...others} = {...obj1, ...obj2};
    console.log(a, b);
    console.log(others);
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