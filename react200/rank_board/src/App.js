import { getSuggestedQuery } from "@testing-library/react";
import axios from "axios";
import $ from 'jquery';
import { useEffect, useState } from "react";
function App() {
  const [list, setList] = useState([])
  const [test,setTest] = useState([]);

  const getDB = async() => {
    try{
      const data = await axios.get('/users/t1');
      setList(data.data);
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
        <table>
          <tbody>
          <tr>
            <td>답안 ID</td>
            <td>곱셈</td>
            <td>입력한 값</td>
            <td>정답?</td>
          </tr>
            {list.map((list)=>(<tr key={list.id}><td>{list.id}</td><td>{list.a}X{list.b}</td><td>{list.inputValue}</td><td>{list.result === '1' ? '정답':'오답'}</td></tr>))}
          </tbody>
        </table>
    </>
  );
}

export default App;
