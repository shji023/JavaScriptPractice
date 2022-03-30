import React,{Component} from 'react';

// 1. 값을 전달하지 않는 경우 boolean으로 설정된다.
// 2. 디폴트 값은 true이다.
// 3. 받은 값은 삼항연산을  사용할 수 있다.
// 4. true/false 자체를 출력할때는 toString()을 사용
class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <Bpp a b={false} c={true}/>
      </div>
    );
  }
}

class Bpp extends Component{
  render(){
    let {a, b, c} = this.props;
    return (
      <div>
        <h1>{a.toString()}</h1>
        <h1>{b?'호랑이':'코끼리'}</h1>
        <h1>{c?'호랑이':'코끼리'}</h1>
        <h1>{c}</h1>
      </div>
     
    )
  }
}


export default App;


// function App(props) {
//   return (
//     <div>
//       <h1>App</h1>
//       <Bpp lion={'lion'} tiger={100}/>
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