import React,{Component} from 'react';
import './App.css';

// 함수형 컴포넌트 rsf
function App() {
  return (
    <div>
      <Bpp/>
      <h1>호랑이</h1>
      
    </div>
  );
}

class Bpp extends Component {
  render() {
    return (
      <div>
        <h1>독수리</h1>
      </div>
    );
  }
}

export default App;