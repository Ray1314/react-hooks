import React from 'react'
import './App.css';

function Child(props) {
    return (
    <div className="App">
        <h2> 这就是子元素 </h2>  
        <button onClick={()=>props.dispatch({type: 'addTwo'})}> 子元素变useReducer值  </button> 
    </div>
    );
}

export default Child;
