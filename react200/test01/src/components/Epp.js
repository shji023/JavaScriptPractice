import React, { Component } from 'react';

class Epp extends Component {
  render() {
    return (
      <div>
        <h1>Epp</h1>
        <h1>{this.props.num}</h1>
      </div>
    );
  }
}

export default Epp;