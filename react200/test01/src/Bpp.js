import React, { Component } from 'react';
import withF1 from './withF1';
class Bpp extends Component {
  render() {
    return (
      <div>
        <h3>Bpp1</h3>
        <h3>Bpp2</h3>
        <h3>Bpp3</h3>
      </div>
    );
  }
}

// 외부에서 기본적으로 끌고갈 클래스는 
// f1()함수를 호출하면 리턴되는 클래스를 사용하세요
export default withF1(Bpp);