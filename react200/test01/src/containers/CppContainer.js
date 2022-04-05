import { connect, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import Cpp from "../components/Cpp";
import { cat, dec, dog, inc } from "../modules/cpp";

const CppContainer = ()=>{
  const num = useSelector(state=>state.cppReducer.num);
  const dispatch = useDispatch();
  return(
    <Cpp num={num}
      onInc = {()=>dispatch(dog())}
      onDec = {()=>dispatch(cat())}
    ></Cpp>
  )
}
export default CppContainer;
