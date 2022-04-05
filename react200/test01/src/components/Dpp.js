import React, { Component } from 'react';

class Dpp extends Component {
  render() {
    return (
      <div>
        <h3>Dpp</h3>
        <h3>{this.props.num}</h3>
        <button onClick={this.props.onInc}>D증가</button>
        <button onClick={this.props.onDec}>D감소</button>  
      </div>
    );
  }
}

export default Dpp;