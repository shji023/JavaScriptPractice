// import { handleActions } from "redux-actions";
// import { createAction } from "redux-actions";

// reducers
// const INC = 'CPP/INC';
// const DEC = 'CPP/DEC';

// export const inc = createAction(INC);
// export const dec = createAction(DEC);

// const initState = {
//   num:100
// }

//export const reducers = handleActions(
// export default handleActions(
//   {
//     [INC]:(state,action)=>({num:state.num + 10}),
//     [DEC]:(state,action)=>({num:state.num - 10})
//   },
//   initState
// );

// inc, dec에 export 걸어줌 (App.js에서 사용하기 위해)
// handleActions 수정 (export default검)
// index.js수정 reducers를 여기서 import하는걸로


import { handleActions } from "redux-actions";
import { createAction } from "redux-actions";

// reducers
const DOG = 'CPP/INC';
const CAT = 'CPP/DEC';

export const dog = createAction(DOG);
export const cat = createAction(CAT);

const initState = {
  num:100
}

//export const reducers = handleActions(
export default handleActions(
  {
    [DOG]:(state,action)=>({num:state.num + 10}),
    [CAT]:(state,action)=>({num:state.num - 10})
  },
  initState
);
