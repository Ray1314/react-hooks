import React, {useContext} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { Context } from "./App";

function Home(props) {
    const {n, setN} = useContext(Context)
    const dispatch = useDispatch() //stort hooks最新数据管理
    const counter = useSelector(state => state.counter);
    return (
        <div className="App">
        <div>这个是stort的值 {counter}</div>
        <button onClick={() => { dispatch({ type: 'INCREMENT' }) }}>  修改stort值 </button>
        <hr />
        <div>这个是context的值 { n }</div>
        <button onClick={() => { setN(10)}}>  修改context值 </button>
        <hr />
        <button onClick={() => { props.history.push('/detail') }}> 跳转 </button>
        </div>
    );
}

export default Home;
