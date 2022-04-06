import { action, makeAutoObservable, makeObservable, observable } from 'mobx';
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import totalStore from './store/index';

class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <button onClick={()=>{totalStore.tigerStore.increase()}}>tiger증가</button>
        <button onClick={()=>{totalStore.tigerStore.decrease()}}>tiger감소</button>

        <button onClick={()=>{totalStore.lionStore.increase()}}>lion증가</button>
        <button onClick={()=>{totalStore.lionStore.decrease()}}>lion감소</button>
        <h1>{totalStore.tigerStore.count}</h1>
        <h1>{totalStore.lionStore.number}</h1>
      </div>
    );
  }
}

export default observer(App);