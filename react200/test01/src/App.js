import { configure } from '@testing-library/react';
import { action, autorun, computed, makeObservable, observable } from 'mobx';
import { observer } from 'mobx-react';
import React, { Component } from 'react';

configure({enforceActions:'never',})
class Tiger {
  count = 0;
  constructor(){
    makeObservable(this,{
      count: observable,
      comA:computed,
      comB:computed,
      increase:action,
    });
    // 2. autorun에서 사용
    autorun(()=>{console.log('Auto Run1: ', this.comA);});
    autorun(()=>{console.log('Auto Run2: ', this.comB);});
  }
  get comA(){
    console.log('comA:', this.count);
    return this.count-1;
  }
  get comB(){
    console.log('comB:', this.count);
    return this.count+1;
  }
  // 정의1: 옵저버 변수가 갱신이 되면, 옵저버 변수를 사용하는 컴퓨트가 호출이됨
  // 단, computed가 어디선가 사용되고 있을 때 호출된다. >> 예외사항이 아니고 당연한 사항
  // 어디에서 사용했나? 
  // 1. render에서 사용
  // 2. autorun에서 사용
  // 정의2: computed 변수가 !갱신!이 일어나면 computed 변수를 사용하는 autorun이 호출된다.

  increase(){
    console.log('increase');
    this.count++;
  }
}
const t = new Tiger();
console.log('------------------------');
class App extends Component {
  f1 = ()=>{
    t.increase();
  }
  render() {
    return (
      <div>
        <button onClick={this.f1}>버튼</button>  
        <h1>{t.count}</h1>
        {/* 1. 렌더에서 사용 */}
        {/* <h1>{t.comA}</h1> */}
        <h1>{t.comA}</h1>
        <h1>{t.comB}</h1>
      </div>
    );
  }
}

export default observer(App);