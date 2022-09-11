import { useEffect, useInsertionEffect, useState, useRef, memo, useMemo, useReducer } from "react";

/**
 * useSate()
 * 1. initState
 * 2. Action: up (state + 1)/ down (state -1 )
 * 
 * 
 * useReducer()
 * 1. initState
 * 2. Action: up (state + 1)/ down (state -1 )
 * 3. Reducer: 
 * 4. dispatch
 */

// InitSate
const initState =0

// Action 

const UP_ACTION =`up`
const DOWN_ACTION =`down`
// reducer
const reducer = (state,action) =>{
  switch(action){
    case UP_ACTION: return  state +1
    case DOWN_ACTION: return  state -1 
    default: 
      throw new Error(`Invalid action ${action}`);
  }
}


function Content() {
  const [count,dispatch] = useReducer(reducer,initState)
  // dùng useState
  const [counts, setCouts] = useState(0)

 
  return (
    <div style={{padding:'10px 32px'}}>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(UP_ACTION)} >Up</button>
      <button onClick={()=>dispatch(DOWN_ACTION)} >Down</button>
       <br/>
       {/* dùng useState */}
      <h1> {counts}</h1>
      <button onClick={()=>setCouts(counts+1)} >Up</button>
      <button onClick={()=>setCouts(counts-1)} >Down</button>
    </div>
  );
}
export default memo(Content)
