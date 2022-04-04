import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <h3>App</h3>
        <button onClick={this.props.onInc}>버튼+</button>
        <button onClick={this.props.onDec}>버튼-</button>
        {/* // this.props.monkey */}
        <h3>{this.props.num}</h3>
      </div>
    );
  }
}

const INC = 'INC';
const DEC = 'DEC';
const inc = ()=>({type: INC,});
const dec = ()=>({type: DEC,});
// 여기에서 전역변수를 정의
// state = {num:10} 단 한번만 사용된다.
export function reducers(state = {num: 10},action){
  console.log('reducers',action.type, state.num);
  switch(action.type){
    case INC:
      return {num:state.num+1,};
    case DEC:
      return {num:state.num-1,};
    default: 
    return state;
  }
}
let f1 = ()=>{return 100;}
let f2 = ()=>100;
let f3 = ()=>{return {};}
let f4 = ()=>({});

const dispatchToProps = (dispatch)=>({
  onInc: ()=>{dispatch(inc());},
  onDec: ()=>{dispatch(dec());}
});


const stateToProps = (state)=>{
  console.log('stateToProps');
  // num: app에서 사용될 key값
  // num을 monkey라고 해도 상관없음
  return {num: state.num};
}


export default App = connect(
  stateToProps,
  dispatchToProps
)(App);

// let connect = function(f1, f2){
//   return function(){
//     return class {};
//   }
// }

// f1(
//   stateToProps, 
//   dispatchToProps
// )(App);