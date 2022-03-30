import React,{Component} from 'react';
import PropsTypes from 'prop-types';
class App extends Component {
  render() {
    let a = {t:10, u:20};
    return (
      <div>
        <h1>App</h1>
        <Bpp a = {a} b={{x:10, y:20}}/>
      </div>
    );
  }
}

class Bpp extends Component{
  render(){
    let {a, b} = this.props;
    return (
      <div>
        <h1>{a.t} {a.u}</h1>
        <h1>{b.x} {b.y}</h1>
      </div>
     
    )
  }
}

Bpp.propTypes = {
  a:PropsTypes.shape({
    t:PropsTypes.number,
    u:PropsTypes.number,
  }),
  b:PropsTypes.shape({
    x:PropsTypes.number,
    y:PropsTypes.number,
  })
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