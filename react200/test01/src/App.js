import React, { Component, useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Header from './Header admin';
import Footer from './Footer';
import './css/new.css';
import LoginForm from './LoginForm';
import { debounce, throttle } from 'lodash';
import axios from 'axios';
class App extends Component {

  render() {
    return (
      <div>
        {/* <Header />
        <Routes>
          <Route path="/" element={<LoginForm />}/>
        </Routes>
        <Footer />
        <img src={require('./img/layout/logo.jpg')} alt="logo"></img> */}
        <FloatingPopulationList />
      </div>
    );
  }
}

class FloatingPopulationList extends Component {
  // const [list, setList] = useState();
  
  // useEffect(()=>{
  //   (async()=>{
  //     const data = await axios.get('http://3.35.120.155:5000/users');
  //     console.log(data);
  //     setList(data.entry);
  //   })();
  // },[]);
  constructor(props){
    super(props);

    this.state = {
      append_FPList:undefined,
    };

  }
  f1 = () =>{
    axios.get('http://3.35.120.155:5000/users',{})
    .then((res)=>{
      let jsonString = JSON.stringify(res.data);
      jsonString = jsonString.replace(/\(1시간단위\)/g,'');
      jsonString = jsonString.replace(/\(10세단위\)/g,'');
      
      let json = JSON.parse(jsonString);
      console.log(json.entry);
      console.log(json.count);
      console.log(json.entry.length);

      let result = [];
      for (let i = 0; i < json.count; i++) {
        let data = json.entry[i];
        console.log(data);
        console.log(typeof data);
        let idx = i+1;
        result.push(
          <tr key={idx} className="hidden_type">
            <td>{idx}</td>
            <td>{data.일자}</td>
            <td>{data.시간}</td>
            <td>{data.연령대}</td>
            <td>{data.성별}</td>
            <td>{data.시}</td>
            <td>{data.군구}</td>
            <td>{data.유동인구수}</td>
          </tr>
        );
      }
      this.setState({append_FPList:result});
    })
    .catch(()=>{alert('Error');});
  }
  render(){
    return (
      <>
      <button onClick={this.f1}>버튼</button>
        <section className="sub_wrap" >
            <article className="s_cnt mp_pro_li ct1 mp_pro_li_admin">
                <div className="li_top">
                    <h2 className="s_tit1">서울시 유동인구 데이터 - 19년 11월</h2>
                </div>
                <div className="list_cont list_cont_admin">
                    <table className="table_ty1 fp_tlist">
                      <thead>
                        <tr>
                            <th>Row</th>
                            <th>일자</th>
                            <th>시간</th>
                            <th>연령대</th>
                            <th>성별</th>
                            <th>시</th>
                            <th>군구</th>
                            <th>유동인구수</th>
                        </tr>
                      </thead>
                    </table>        
                    <table className="table_ty2 fp_tlist">
                      <tbody>
                        {/* data 추가될 곳 */}
                        {/* {list} */}
                        {this.state.append_FPList}
                      </tbody>
                    </table>
                </div>
            </article>
        </section>
        </>
    );
  }
  }
export default App;
