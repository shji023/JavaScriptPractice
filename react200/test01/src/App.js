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
  
// const stateToProps = (state)=> ({num: state.num});
// const dispatchToProps = dispatch => bindActionCreators({
//   onInc: inc,
//   onDec: dec,
// }, dispatch)

// bindActionCreators
// const ConnectBpp = connect(
//   state => ({num: state.num}),
//   dispatch => bindActionCreators({
//     onInc: inc,
//     onDec: dec,
//   }, dispatch)
// )(Bpp);

// 위에 코드랑 똑같음
// const ConnectBpp = connect(
//   state => ({num: state.num}),
//   {
//     onInc: inc,
//     onDec: dec,
//   }
// )(Bpp);

// hooks
const ConnectBpp = ()=>{
  const num = useSelector(state=>state.num);
  const dispatch = useDispatch();
  return(
    <Bpp num ={num}
    onInc ={()=>dispatch(inc())}
    onDec ={()=>dispatch(dec())} />
  )
}
export default App;