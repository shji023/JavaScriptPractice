import { connect, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import Cpp from "../components/Cpp";
import { dec, inc } from "../modules/cpp";

const CppContainer = ()=>{
  const num = useSelector(state=>state.cppReducer.num);
  const dispatch = useDispatch();
  return(
    <Cpp num={num}
      onInc = {()=>dispatch(inc())}
      onDec = {()=>dispatch(dec())}
    ></Cpp>
  )
}
export default CppContainer;
