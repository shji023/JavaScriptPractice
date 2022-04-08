import { autorun, computed, configure, makeObservable, observable } from 'mobx';
import React, { Component } from 'react';

configure({enforceActions:'never',})
class OrderLine {
  price = 0
  amount = 1

  constructor() {
    makeObservable(this, {
      price: observable,
      amount: observable,
      total: computed
    })
    autorun(() => {
      console.log("autorun:1 " + this.total)
    })
  }

  get total() {
    console.log("Computing...")
    return this.price * this.amount
  }
}

const order = new OrderLine(0);
console.log('------------------------------');
class App extends Component {
  f1 = ()=>{
    console.log(order.total);
  }
  f2 = ()=>{
    order.price+=1;
  }
  f3 = ()=>{
    order.amount+=10;
  }
  f4 = ()=>{
    order.amount = 0;
    order.price = 0;
  }
  render() {
    return (
      <div>
        <button onClick={this.f1}>total버튼</button><br />
        <button onClick={this.f2}>price버튼</button><br />
        <button onClick={this.f3}>amount버튼</button><br />
        <button onClick={this.f4}>reset버튼</button><br />
        <h1>{order.price}</h1>
        <h1>{order.total}</h1>
        <h1>{order.amount}</h1>
      </div>
    );
  }
}

export default App;