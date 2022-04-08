import React, { Component } from 'react';
import { connect } from 'react-redux';
const ADD = 'ADD';
const add = ()=>{
  return {type:'ADD'};
}
class App extends Component {
  increase = ()=>{
    this.props.dispatch(add());
  }
  render() {
    // console.log(this.props.indexProp);
    //console.log(this.props.store.getState().num);
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

let mapStateToProps = (state,props) =>{
  return {
    num:state.num,
  }
}
export default App = connect(
  mapStateToProps, 
  null
)(App);
