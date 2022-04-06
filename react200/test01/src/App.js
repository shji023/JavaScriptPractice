import { action, makeObservable, observable } from 'mobx';
import { observer } from 'mobx-react';
import React, { Component } from 'react';

class TigerStore {
  count = 0;
  constructor(){
    makeObservable(this,{
      count: observable,
      increase: action,
      decrease: action
    });
  }
  increase(){this.count+=1;}
  decrease(){this.count-=1;}
}

const tigerStore = new TigerStore();

class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <button onClick={()=>{tigerStore.increase()}}>증가</button>
        <button onClick={()=>{tigerStore.decrease()}}>감소</button>
        <h1>{tigerStore.count}</h1>
        <Bpp />
      </div>
    );
  }
}

class Bpp extends Component {
  render() {
    return (
      <div>
        <h1>Bpp</h1>
        <button onClick={()=>{tigerStore.increase()}}>증가</button>
        <button onClick={()=>{tigerStore.decrease()}}>감소</button>
        <h1>{tigerStore.count}</h1>
      </div>
    );
  }
}
export default observer(App);