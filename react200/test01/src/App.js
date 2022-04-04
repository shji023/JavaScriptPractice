import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleActions } from 'redux-actions';

class App extends Component {
  render() {
    console.log(this.props.num);
    // store를 사용하기 위해서는 index.js수정해야함.
    console.log(this.props.store.getState().num);
    return (
      <div>
        <h3>App</h3>
        <button onClick={this.props.onInc}>버튼+</button>
        <button onClick={this.props.onDec}>버튼-</button>
        <h3>{this.props.num}</h3>
        <h3>{this.props.store.getState().num}</h3>
      </div>
    );
  }
}

const stateToProps = (state)=> ({num: state.num});

// reduce
const INC = 'INC';
const DEC = 'DEC';
const inc = ()=>({type: INC,});
const dec = ()=>({type: DEC,});

// 초기화 : state={num:10}단 한번만 사용된다.
const initState={
  num:100,
}

export const reducers = handleActions(
  {
    [INC]:(state,action)=>({num:state.num + 1}),
    [DEC]:(state,action)=>({num:state.num - 1}),
  },initState);

//dispatch
const dispatchToProps = dispatch => bindActionCreators({
  onInc:inc,
  onDec:dec,
},dispatch);

//connect
export default App = connect(
  stateToProps,
  dispatchToProps
)(App);