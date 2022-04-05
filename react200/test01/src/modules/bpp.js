import { handleActions } from "redux-actions";
import { createAction } from "redux-actions";

// reducers
const INC = 'INC';
const DEC = 'DEC';

export const inc = createAction(INC);
export const dec = createAction(DEC);

const initState = {
  num:100
}

//export const reducers = handleActions(
export default handleActions(
  {
    [INC]:(state,action)=>({num:state.num + 1}),
    [DEC]:(state,action)=>({num:state.num - 1})
  },
  initState
);

// inc, dec에 export 걸어줌 (App.js에서 사용하기 위해)
// handleActions 수정 (export default검)
// index.js수정 reducers를 여기서 import하는걸로