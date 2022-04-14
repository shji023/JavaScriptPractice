import axios from 'axios';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SoftwareList from './components/SoftwareToolsManage/SoftwareList';
class App extends Component {
  f1 = ()=>{
      axios.post('/api/Swtool?type=list',{})
      .then((res)=>{
          console.log(res.data);
      })
  }

  render() {
      return (
        <Routes>
            <Route path="/" element={<SoftwareList/>}></Route>
        </Routes>
      );
  }
}

export default App;