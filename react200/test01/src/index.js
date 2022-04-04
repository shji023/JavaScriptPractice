import { createStore } from "redux";
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");
// function that can modify your data
const countModifier = (count = 0,action)=>{
  //console.log(count, action);
  if(action.type==="ADD"){
    return count +1;
  } else if (action.type === "MINUS"){
    return count -1;
  } else{
    return 0;
  }

};

const countStore = createStore(countModifier);

// subscribe 는 우리에게 store안에 있는 변화들을 알 수 있게 해줌
const onChange = ()=>{
  number.innerText = countStore.getState();
}
// store변화가 있을 때마다 감지해서 불려질 것
countStore.subscribe(onChange);

// 어떻게 countModifier에게 action을 보낼 수 있지?
// dispatch를 활용
// countStore.dispatch({type:"ADD"});
// countStore.dispatch({type:"ADD"});
// countStore.dispatch({type:"ADD"});
// countStore.dispatch({type:"ADD"});
// countStore.dispatch({type:"ADD"});
// countStore.dispatch({type:"MINUS"});
// console.log(countStore.getState()); // 4
const handleAdd = ()=> {
  countStore.dispatch({type:"ADD"});
}
const handleMinus = () => {
  countStore.dispatch({type:"MINUS"});
}
// anonymous function
add.addEventListener("click",handleAdd)
minus.addEventListener("click",handleMinus)

