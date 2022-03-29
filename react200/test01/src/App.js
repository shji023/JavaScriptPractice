import React,{Component} from 'react';

// props 부모->자식
// props 값 갱신x
// scope 생략 안하는것이 좋음
class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <Bpp tiger={'test1'}/>
      </div>
    );
  }
}

class Bpp extends Component{
  render(){
    return (
      <div>
        <h1>Bpp</h1>
        <h1>{this.props.tiger}</h1>
        <Cpp lion={this.props.tiger+'2'} cat={'test3'}/>
      </div>
    )
  }
}

class Cpp extends Component{
  render(){
    return (
      <div>
        <h1>Cpp</h1>
        <h1>{this.props.lion}</h1>
        <h1>{this.props.cat}</h1>
      </div>
    )
  }
}

export default App;