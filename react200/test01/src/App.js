import axios from 'axios';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SoftwareList from './components/SoftwareToolsManage/SoftwareList';
import SoftwareView from './components/SoftwareToolsManage/SoftwareView';
class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<SoftwareList/>}></Route>
        <Route path="/softwareview" element={<SoftwareView/>}></Route>
      </Routes>
    );
  }
}

export default App;