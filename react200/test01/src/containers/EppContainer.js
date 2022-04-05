import { connect, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import Epp from "../components/Epp";
import { dec, inc } from "../modules/bpp";

const EppContainer = ()=>{
  const num = useSelector(state=>state.bppReducer.num);
  const dispatch = useDispatch();
  return(
    <Epp num={num}
      onInc = {()=>dispatch(inc())}
      onDec = {()=>dispatch(dec())}
    ></Epp>
  )
}

export default EppContainer;
