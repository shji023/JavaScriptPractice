import React, { Component } from 'react';
const ADD = 'ADD';
const add = ()=>{
  return {type:'ADD'};
}
class App extends Component {
  increase = ()=>{
    this.props.store.dispatch(add());
  }
  render() {
    console.log(this.props.store.getState().num);
    return (
      <div>
        <h1>App</h1>
        <button onClick={this.increase}>버튼</button>
      </div>
    );
  }
}

const initState = {
  num:100,
}

export const reducers = (state = initState, action) => {
  switch(action.type){
    case ADD:
      return {
        num: state.num + 1,
      };
    default:
      return state;
  }
}
export default App;