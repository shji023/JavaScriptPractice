import { connect, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import Bpp from "../components/Bpp";
import { dec, inc } from "../modules/bpp";

const BppContainer = ()=>{
  const num = useSelector(state=>state.bppReducer.num);
  const dispatch = useDispatch();
  return(
    <Bpp num={num}
      onInc = {()=>dispatch(inc())}
      onDec = {()=>dispatch(dec())}
    ></Bpp>
  )
}
// stateToProps
// const stateToProps = state => ({num:state.num});

// const dispatchToProps = dispatch => bindActionCreators({
//   onInc:inc,
//   onDec:dec,
// }, dispatch)

// connect
// const ConnectBpp = connect(
//   stateToProps,
//   dispatchToProps
// )(Bpp);

export default BppContainer;
