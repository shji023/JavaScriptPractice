import axios from 'axios';
import React, { Component } from 'react';
import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart,Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { 군구: '광진구', 유동인구수: 32760, 비유동인구수: 34000 },
  { 군구: '동대문구', 유동인구수: 30480, 비유동인구수: 56000 },
  { 군구: '마포구', 유동인구수: 27250, 비유동인구수: 23000 },
  { 군구: '구로구', 유동인구수: 49870, 비유동인구수: 67000 },
  { 군구: '강남구', 유동인구수: 51420, 비유동인구수: 55000 },
];

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      append_FPList:undefined
    }
  }
  f1 = ()=>{
    axios.get( 'http://3.35.120.155:5000/users', {} )
    .then((res)=>{
      this.setState({
        append_FPList:res.data.entry
      });
    })
  }
  render() {
    return (
      <div>
        <h1>ㅎㅇ</h1>
        <button onClick={this.f1}>버튼</button>
        <AreaChart
          width={1000}
          height={300}
          data={this.state.append_FPList}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="4 3" />
          <XAxis dataKey="군구" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="basis" dataKey="유동인구수" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Area type="monotone" dataKey="비유동인구수" stroke="#82ca9d" />
        </AreaChart>
      </div>
    );
  }
}

export default App;