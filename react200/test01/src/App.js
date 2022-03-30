import React,{Component,useEffect,useState,PureComponent} from 'react';
import { shallowEqualObjects } from 'shallow-equal';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {x:0};
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log(this.state,nextState);
    console.log(!shallowEqualObjects(this.state, nextState));
    return !shallowEqualObjects(this.state, nextState);
  }
  f1=()=>{
    this.setState({x:this.state.x});
  }
  f2=()=>{
    this.setState({x:this.state.x+10});
  }
  render() {
    console.log('render');
    return (
      <div>
        <button onClick={()=>{this.f1()}}>버튼1</button>
        <button onClick={()=>{this.f2()}}>버튼2</button>
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