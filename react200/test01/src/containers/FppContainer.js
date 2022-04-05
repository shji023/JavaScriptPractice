import { connect, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import Fpp from "../components/Fpp";
import { dec, inc } from "../modules/bpp";
import { cat, dog } from "../modules/cpp";

const FppContainer = ()=>{
  const num1 = useSelector(state=>state.bppReducer.num);
  const num2 = useSelector(state=>state.cppReducer.num);
  const dispatch = useDispatch();
  return(
    <Fpp 
      num1={num1}
      num2={num2}
      onInc = {()=>dispatch(inc())}
      onDec = {()=>dispatch(dec())}
      onDog = {()=>dispatch(dog())}
      onCat = {()=>dispatch(cat())}
    ></Fpp>
  )
}

export default FppContainer;
