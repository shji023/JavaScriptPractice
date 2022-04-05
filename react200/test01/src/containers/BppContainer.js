import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Bpp from "../components/Bpp";
import { dec, inc } from "../modules/bpp";

// stateToProps
const stateToProps = state => ({num:state.num});

const dispatchToProps = dispatch => bindActionCreators({
  onInc:inc,
  onDec:dec,
}, dispatch)

// connect
const ConnectBpp = connect(
  stateToProps,
  dispatchToProps
)(Bpp);

export default ConnectBpp;
