import { combineReducers } from "redux";
import bppReducer from './bpp';
import cppReducer from './cpp';
const rootReducer = combineReducers({
  bppReducer,
  cppReducer,
})

export default rootReducer;