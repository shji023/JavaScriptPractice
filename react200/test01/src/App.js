import axios from "axios";
import { useEffect, useState } from "react";


function App() {
  
  let [name, setName] = useState("");
  let [answer, setAnswer] = useState("");

  let [factorA, setFactorA] = useState();
  let [factorB, setFactorB] = useState();
  let [result, setResult] = useState();
  const [list, setList] = useState([])

  const f1 = () => {
    axios.post('/t1', {
    })
    .then( response => {
      console.log(response.data);
      console.log(response.data.factorA * response.data.factorB);
      setFactorA(response.data.factorA);
      setFactorB(response.data.factorB);
      
    })

    .catch( error => {alert('작업중 오류가 발생하였습니다.');return false;} );
    
    
  }

  const f2 = () => {
    axios.post('/t2', {
      "user":{"alias":name},
      "multiplication":{
        "factorA":factorA,"factorB":factorB
      },"resultAttempt": answer})
    .then( response2 => {
      console.log(response2.data);
      setResult(response2.data);
      const tt = (response2.data === true)? 'YES':'No';
      const test = {
        id: name,
        multiple:factorA+'X'+factorB,
        inputValue:answer,
        isCorrect:tt
      }
      setList([...list, test]);
    })
    .catch( error => {alert('작업중 오류가 발생하였습니다.');return false;} );
  }

  if(list.length>=6){
    const listData = list.slice(-5);
    setList(listData);
  }


  
  return (
    <div id="wrap">
        <h1>문제 풀기🎈</h1>
        <button onClick={f1}>문제 요청</button>
        <br />
        <h1>
          <span id="span1">{factorA}</span> 곱하기 <span id="span2">{factorB}</span> 는 ?
        </h1>


        <form id="form1" name="form1" method="post">
          <label>애칭 :</label> <input type="text" name="alias"placeholder="ahhyun" onChange={(e) => setName(e.target.value)}/>
          <br /> <br /> <label>정답 :</label> <input type="text" name="attempt"
            placeholder="3" onChange={(e) => setAnswer(e.target.value)}/>
          <br/>
          <input id="btn" type="button" value="전송"  onClick={f2}/>
        </form>

        <h2 id="span3" >{result === true ? '정답' : '오답'}</h2>
        <h2>통계</h2>
        <table>
          <tbody>
          <tr>
            <td>답안 ID</td>
            <td>곱셈</td>
            <td>입력한 값</td>
            <td>정답?</td>
          </tr>
            {list.map((list)=>(<tr key={list.id}><td>{list.id}</td><td>{list.multiple}</td><td>{list.inputValue}</td><td>{list.isCorrect}</td></tr>))}
          </tbody>
        </table>
    </div>
  );
}

export default App;