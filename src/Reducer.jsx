import React, { useReducer } from 'react'
//import { useState } from 'react'

const initiaState=0;
const reducer=(state,action)=>{
     //have two parameter stateand action
    //reducer function need to return something
    console.log(state,action);
    if(action.type=="INCREMENT")state=state+1;
    if(action.type=="DECREMENT")state=state-1;
    return state;
}

function Reducer() {
    //const [count,setCount]=useState(0);
    const [state,dispatch]=useReducer(reducer,initiaState);
    function increase(){
        //dispatch work is to trigger action method
      return dispatch({type:"INCREMENT"});
    }
    function decrease(){
      return dispatch({type:"DECREMENT"});
    }
  return (
    <>
    <div><h2>Reducer</h2></div>
    <button onClick={()=>decrease()}>-</button>
    <h3>{state}</h3>
    <button onClick={()=>increase()}>+</button>
     </>
  )
}

export default Reducer