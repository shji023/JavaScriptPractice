import { createStore } from "redux";
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");
// reducer: 데이터를 modify하는 곳(함수)
// 예를 들어 increase나 decrease함
const reducer = ()=>{};
// store: 데이터를 저장하는곳
const store = createStore(reducer);


add.addEventListener("click",handleAdd);
minus.addEventListener("click",handleMinus);