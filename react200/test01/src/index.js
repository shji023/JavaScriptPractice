import { createStore } from "redux";
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");
// function that can modify your data
const countModifier = (count = 0,action)=>{
  console.log(count, action);
  if(action.type==="ADD"){
    return count +1;
  } else if (action.type === "MINUS"){
    return count -1;
  } else{
    return 0;
  }

};

const countStore = createStore(countModifier);
console.log(countStore.getState());

// 어떻게 countModifier에게 action을 보낼 수 있지?
// dispatch를 활용
countStore.dispatch({type:"ADD"});
countStore.dispatch({type:"ADD"});
countStore.dispatch({type:"ADD"});
countStore.dispatch({type:"ADD"});
countStore.dispatch({type:"ADD"});
countStore.dispatch({type:"MINUS"});
console.log(countStore.getState()); // 4