import React,{Component,useEffect,useState,PureComponent} from 'react';
// 6. 전역변수 선언하고 함수에서 사용가능
let value;
function sampleUseState(num){
  if(value===undefined){
    value = num;
  }
  return [value, (v)=>{value = v;}];
}
let count = 1000;
function App(props) {
  count++;

  // 5. 모호한 코드로 보일 수 있다.
  // 지역변수처럼 보이는데 이렇게 전역변수처럼 행동하는가?
  // const면 값을 변경할 수 없는데?
  const [value, setValue] = useState(10);

  // 7. 비구조화 할당 문법을 테스트
  let num2 = 10;
  let ar = [num2, ()=>{console.log(9999);}];
  let [a, b] = ar;
  console.log('ar:', a, b);

  // 1. 비동기 함수 이다.
  // 2. render 이후 호출(componentDidMount하고 동일한 기능)
  // setValue(11); >> 계속 rerendering되기에 무한루프 빠져버림
  useEffect(()=>{
    console.log(3);
  });
  console.log(2);
  return (
    <div>
      setvalue가 rerendering을 시킴
      <button onClick={()=>{setValue(value+1)}}>버튼</button>
    </div>
  );
}
export default App;


// function App() {
//   const[state, setState] = useState('');

//   const handleClick = ()=>{
//     setState('하하');
//   }
//   return (
//     <div>
//       <h1>{state}</h1>
//       <button onClick={()=>{handleClick()}}>버튼1</button>
//       {/* <Bpp lion={'lion'} tiger={100}/> */}
//     </div>
//   );
// }

// function Bpp ({lion,tiger}){
//   return (
//     <div>
//       <h1>Bpp</h1>
//       <h1>{lion}</h1>
//       <h1>{tiger}</h1>
//     </div>
//   )
// }

// export default App;