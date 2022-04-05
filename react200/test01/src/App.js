import React, { Component } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createAction,handleActions } from 'redux-actions';

class App extends Component {
  render() {
    return (
      <div>
        <ConnectBpp/>
      </div>
    );
  }
}

class Bpp extends Component {
  render() {
    return (
      <div>
        <h1>BPp</h1>
        <h1>{this.props.num}</h1>
        <button onClick={this.props.onInc}>증가</button>
        <button onClick={this.props.onDec}>감소</button>
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
    [INC]:(state,action)=>{
      console.log('Reducers: onInc');
      return({num:state.num + 1})
    },
    [DEC]:(state,action)=>({num:state.num - 1})
  },
  initState
);

// hooks
const ConnectBpp = ()=>{
  const num = useSelector(state=>{
    console.log('StateToProps');
    return state.num
  });
  const dispatch = useDispatch();
  return(
    <Bpp num ={num}
    onInc ={
      ()=>{
        console.log('Dispatch: onInc');
        dispatch(inc());
      }
    }
    onDec ={()=>dispatch(dec())} />
  )
}
export default App;