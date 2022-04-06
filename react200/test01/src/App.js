import { action, makeAutoObservable, makeObservable, observable } from 'mobx';
import { observer } from 'mobx-react';
import React, { Component } from 'react';

class TigerStore {
  count = 0;
  constructor(){
    makeAutoObservable(this);
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
        {/* <button onClick={()=>{tigerStore.increase()}}>A증가</button>
        <button onClick={()=>{tigerStore.decrease()}}>A감소</button>
        <h1>{tigerStore.count}</h1> */}
        <Bpp />
      </div>
    );
  }
}

const Bpp = observer(() => {
  return (
    <div>
      <h1>Bpp</h1>
      <button onClick={()=>{tigerStore.increase()}}>B증가</button>
      <button onClick={()=>{tigerStore.decrease()}}>B감소</button>
      <h1>{tigerStore.count}</h1>
    </div>
  );
}) ;


//App observer 풀어버림
export default App;