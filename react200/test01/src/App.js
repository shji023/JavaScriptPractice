import React, { Component } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createAction,handleActions } from 'redux-actions';

class App extends Component {
  render() {
    return (
      <div>
        <ConnectBpp/>
        <ConnectCpp/>
      </div>
    );
  }
}

class Bpp extends Component {
  render() {
    return (
      <div>
        <h1>Bpp</h1>
        <h1>{this.props.num}</h1>
        <button onClick={this.props.onInc}>증가</button>
        <button onClick={this.props.onDec}>감소</button>
      </div>
    );
  }
}

class Cpp extends Component {
  render() {
    return (
      <div>
        <h1>Cpp</h1>
        <h1>{this.props.num}</h1>
      </div>
    );
  }
}

// reducers
const INC = 'INC';
const DEC = 'DEC';

const inc = createAction(INC);
const dec = createAction(DEC);

const initState = {
  num:100
}

export const reducers = handleActions(
  {
    [INC]:(state,action)=>({num:state.num + 1}),
    [DEC]:(state,action)=>({num:state.num - 1})
  },
  initState
);

// hooks
const ConnectBpp = ()=>{
  const num = useSelector(state=>(state.num));
  const dispatch = useDispatch();
  return(
    <Bpp num ={num}
    onInc ={()=>dispatch(inc())}
    onDec ={()=>dispatch(dec())} />
  )
}

const ConnectCpp = ()=>{
  const num = useSelector(state=>state.num);
  return (
    <Cpp num = {num}/>
  )
}
export default App;