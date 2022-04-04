import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createActions } from 'redux-actions';
import { handleActions } from 'redux-actions';

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
        <buttom onClick={this.props.onInc} 합계/>
        <buttom onClick={this.props.onDec} 검소/>
        {this.props.num}
      </div>
    );
  }
}

const stateToProps = (state)=> ({num: state.num});
const INC = 'INC';
const DEC = 'DEC';

const initState = {
  num:100
}

export const reducers = handleActions(
  {
    [INC]:(state,action)=>({num:state.num + 1}),
    [DEC]:(state,action)=>({num:state.num - 1}),
  },initState);
  
const inc = createActions(INC);
const dec = createActions(DEC);

const dispatchToProps = dispatch => bindActionCreators({
  onInc: inc,
  onDec: dec,
}, dispatch)

const ConnectBpp = connect(
  stateToProps,dispatchToProps,
)
export default App;