import { getSuggestedQuery } from "@testing-library/react";
import axios from "axios";
import $ from 'jquery';
import { useEffect, useState } from "react";
function App() {
  const [list, setList] = useState([])
  const [test,setTest] = useState([]);

  const getDB = async() => {
    try{
      // 1. B DB에서 데이터 가져오기
      const Bdata = await axios.get('/users/t1'); // B 서버에 요청
      console.log("Bdata", Bdata.data.result);

      // 2. A DB에서 데이터 가져오기
      
      // const Adata1 = await axios.post('/t6', {
      //   "user":{"alias":1},
      //   "multiplication":{
      //     "factorA":1,"factorB":1
      //   },"resultAttempt": 1})
      //   .then( response2 => {
      //     console.log(response2.data);
      //   })
      //   .catch( error => {alert('작업중 오류가 발생하였습니다.');return false;} );
        
        const Adata = await axios.post('/t5', {"questionId" : 24}); // A 서버에 요청
        let AdataArr = Adata.data;
      console.log("Adata", AdataArr);
      console.log("Adata[0]", AdataArr[0]);


      for(let i = 0; i < AdataArr.length; i++){
        AdataArr[i] = JSON.parse(AdataArr[i]);
      }
      // let jsonArr = Adata && JSON.parse(Adata.data[0]);
      console.log(AdataArr);
      
      // 3. 테이블에 보여주기
      // setList(Bdata.data);

      setList(AdataArr);
    } catch(e){
      console.log(e);
    }
  }
  // const postDB = async() => {
  //   try{
  //     const data = await axios.post('/users/t2');
      
  //   } catch(e){
  //     console.log(e);
  //   }
  // }

  // const f3 = async() => {
  //   try{
  //     const data = await axios.post('/send_msg',{"msg":"히히"});
  //     // setList(data.data);
  //     console.log(data);
  //   } catch(e){
  //     console.log(e);
  //   }
  // }

  const getRabbit = async() => {
    try{
      const data = await axios.get('/get_msg');
      const str = data.data.result
      const jsonData = data && JSON.parse(str);
      // setList(data.data);
      // setList(str);
      console.log(jsonData);
      const res = await jsonData && axios.post('/users/t2',jsonData);
    } catch(e){
      console.log(e);
    }
  }

  useEffect(()=>{
    getRabbit();
    getDB();
  },[])

  return (
    <>
    
      <h2>통계</h2>
        <table border='1'>
          <tbody>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>questionId</td>
            <td>a</td>
            <td>b</td>
            <td>inputValue</td>
            <td>result</td>
          </tr>
            {/* {list.map((list)=>(<tr key={list.id}><td>{list.id}</td><td>{list.result === '1' ? '정답':'오답'}</td></tr>))} */}
            {list.map((list, index)=>(
              <tr key={index}>
                {/* <td>{list.id}</td>
                <td>{list.result === '1' ? '정답':'오답'}</td> */}

                <td>{list.id}</td>
                <td>{list.name}</td>
                <td>{list.questionId}</td>
                <td>{list.a}</td>
                <td>{list.b}</td>
                <td>{list.inputValue}</td>
                <td>{list.result === "1" ? 'O' : 'X'}</td>

              </tr>))}
          </tbody>
        </table>
    </>
  );
}

export default App;