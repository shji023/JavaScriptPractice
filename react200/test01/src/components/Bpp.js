import React, { Component } from 'react';
import EppContainer from '../containers/EppContainer';
import FppContainer from '../containers/FppContainer';
class Bpp extends Component {
    render() {
      return (
        <div>
          <h1>Bpp</h1>
          <h1>{this.props.num}</h1>
          <button onClick={this.props.onInc}>증가</button>
          <button onClick={this.props.onDec}>감소</button>
          <EppContainer />
          <FppContainer/>
        </div>
      );
    }
  }
export default Bpp;