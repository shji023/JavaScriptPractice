import React from 'react';
import './App.css';
// Bpp.js파일에서 export default로 되어있는 컴포넌트를 가지고 오시오
// 가져온 컴포넌트 이름을 여기서는 Bpp라는 이름으로 사용할 것이다.
import Bpp,{Cpp} from './Bpp';
// 함수형 컴포넌트 rsf
function App() {
  return (
    <div>
      <h1>호랑이</h1>
      <Bpp></Bpp>
      <Cpp></Cpp>
    </div>
  );
}

export default App;