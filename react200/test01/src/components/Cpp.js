import React, { Component } from 'react';
import FppContainer from '../containers/FppContainer';
class Cpp extends Component {
    render() {
      return (
        <div>
          <h1>Cpp</h1>
          <h1>{this.props.num}</h1>
          <button onClick={this.props.onInc}>C증가</button>
          <button onClick={this.props.onDec}>C감소</button>
          <FppContainer />
        </div>
      );
    }
  }
export default Cpp;