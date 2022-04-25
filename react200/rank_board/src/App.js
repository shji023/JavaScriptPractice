import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [list, setList] = useState([])
  const [test,setTest] = useState([]);

  const f2 = async() => {
    try{
      const data = await axios.get('/users/t1');
      setList(data.data);
      console.log(data.data);
    } catch(e){
      console.log(e);
    }
  }

  const f3 = async() => {
    try{
      const data = await axios.post('/send_msg',{"msg":"히히"});
      // setList(data.data);
      console.log(data);
    } catch(e){
      console.log(e);
    }
  }

  const f4 = async() => {
    try{
      const data = await axios.get('/get_msg');
      // setList(data.data);
      console.log(data);
    } catch(e){
      console.log(e);
    }
  }

  return (
    <>
    <button onClick={f2}>서버데이터 가져오기</button>
    <button onClick={f3}>post</button>
    <button onClick={f4}>get</button>
      <h2>통계</h2>
        <table>
          <tbody>
          <tr>
            <td>답안 ID</td>
            <td>곱셈</td>
            <td>입력한 값</td>
            <td>정답?</td>
          </tr>
            {list.map((list)=>(<tr key={list.id}><td>{list.id}</td><td>{list.a}</td><td>{list.inputValue}</td><td>{list.result}</td></tr>))}
          </tbody>
        </table>
    </>
  );
}

export default App;
