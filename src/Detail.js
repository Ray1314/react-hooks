/* eslint-disable react/prop-types */
import React, {useState,useEffect, useContext, useReducer} from "react";
import { useSelector} from "react-redux";
import "./App.css";
import { Context } from "./App";
import Child from "./Child";
const initialState = {
  n: 0
};

const reducer = (state, action) => {
  switch(action.type){
    case "addOne":
      return { n: state.n + 1 };
    case "addTwo":
      return { n: state.n + 2 };
    case "addX":
      return { n: state.n + action.x };
    default: {
      throw new Error("unknown type");
    }
  }
};

function Detail(props) {
  const [reducerState, dispatch] = useReducer(reducer, initialState);
  const {n, setN} = useContext(Context);
  console.log(n);
  let [state, setStste] = useState({num: 0}); // hooks数据管理
  useEffect(() => {
    console.log("这里是变化以后的弹窗！");
  } , [state.num]);
  const counter = useSelector(state => state.counter);
  return (
    <div className="App" >
      <div> 这个是stort的值 {counter}</div>
      <hr/>
      <div>这个是context的值 { n }</div>
      <button onClick={() => { setN(1);}}>  修改context值 </button>
      <hr />
      <div> {state.num} </div>
      <button onClick={() => { state.num = 5 ; setStste({...state}); }}> 改变state值 </button>
      <hr />
      <div> {reducerState.n} </div>
      <button onClick={()=>dispatch({type: "addOne"})}> 改变useReducer值 </button>
      <hr />
      <Child dispatch={dispatch} />
      <hr />
      <button onClick={() => { props.history.push("/"); }}> 回去 </button>
    </div>
  );
}

export default Detail;
