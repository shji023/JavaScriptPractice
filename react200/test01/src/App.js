import React,{Component} from 'react';
import PropsTypes from 'prop-types';
class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <Bpp tiger={100} lion={100}/>
      </div>
      
    );
  }
}

class Bpp extends Component{
  render(){
    let obj = {a:1, b:2};
    let {a, b} = obj;
    console.log(a,b);
    console.log(this.props);

    let {tiger,lion,...others} = this.props;
    return (
      <div>
        <h1>{this.props.tiger}</h1>
        <h1>{this.props.lion}</h1>
        <h1>{tiger}</h1>
        <h1>{lion}</h1>
      </div>
    )
  }
}
// tiger는 string 타입이어야 한다는 것을 강제적으로 설정
// 안지키면 경고뜸
Bpp.propTypes = {
  tiger:PropsTypes.string,
  lion:PropsTypes.string,
};
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