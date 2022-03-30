import React,{Component,useEffect,useState} from 'react';
// 함수 호출에 인수전달이 없다는 전제하에서는 약식 표기법을 사용할 수 있다.
class App extends Component {
  count = 999;
  constructor(props){
    super(props);
    this.state={num:10,};
  }
  // 정석 코드: 오리지널 코드
  f1 = ()=> {
    console.log('');
    this.setState({num:this.state.num+1});
  }
  // setState를 사용하지 않으면 render()호출이 안된다.
  f2 = ()=> {
    console.log('');
    this.state.num +=1;
    this.count++;
    // this.state.num += 1; // render함수를 호출하지 않기 때문에 적용x
  }
  // forceUpdate함수 이용하여 강제로 render호출
  f3 = ()=> {
    console.log('');
    // 사실 이 목적은 아니고 
    this.state.num += 1; // render함수를 호출하지 않기 때문에 적용x
    // 이 목적을 위하여 forceUpdate()함수가 사용되어 질 수 있다.
    this.count++;
    this.forceUpdate();
  }
  f4 = ()=>{
    this.state.num +=1;
    this.render();
  }
  // shouldComponentUpdate 거치고 들어 
  f5=()=>{
    this.setState({num:this.state.num +10});
  }
  shouldComponentUpdate(){
    console.log('shouldComponentUpdate');
    // return이 false이면 render() 호출하지 않음
    // counting에 변화가 일어나지 않음
    return false;
  }
  render() {
    console.log(this.state.num);
    return (
      <div>
        <h1>App</h1>
        <button onClick={this.f1}>버튼1</button>
        <button onClick={this.f2}>버튼2</button>
        <button onClick={this.f3}>버튼3</button>
        <button onClick={this.f4}>버튼4</button>
        <button onClick={this.f5}>버튼5</button>
        <h3>{this.state.num}</h3>
        <h3>{this.count}</h3>
      </div>
    );
  }
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