import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

function Detail({toDos}) {
  const id = useParams().id;
  const toDo = toDos.find((toDo)=>toDo.id===parseInt(id))
  return (
    <div>
      {toDo?.text}
      Created at: {toDo?.id}
    </div>
  );
}
function mapStateToProps(state){
  // react-router-dom v6이상이라 안됨
  // const {
  //   match:{
  //     params:{id}
  //   }
  // } = ownProps;
  
  // console.log(id);
  return {toDos:state};
}

export default connect(mapStateToProps)(Detail);
// export default Detail;