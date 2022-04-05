import React, { Component } from 'react';

class Fpp extends Component {
  render() {
    return (
      <div>
        <h1>Fpp</h1>
        <h3>{this.props.num1}</h3>
        <h3>{this.props.num2}</h3>
      </div>
    );
  }
}

export default Fpp;