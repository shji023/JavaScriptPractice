import { connect, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import Dpp from "../components/Dpp";
import { cat, dec, dog, inc } from "../modules/cpp"; // 바꾸면 안됨 cpp와 공유하려고

const DppContainer = ()=>{
  const num = useSelector(state=>state.cppReducer.num);
  const dispatch = useDispatch();
  return(
    <Dpp num={num}
      onInc = {()=>dispatch(dog())}
      onDec = {()=>dispatch(cat())}
    ></Dpp>
  )
}
export default DppContainer;
