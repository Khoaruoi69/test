import React, { useState, useCallback } from "react";
import Content from "./Content";


function App() {
  const [count2, setCount2]= useState(10)


  const handleCount2 = useCallback(()=>{
    setCount2(pre=>pre+1);
  },[])

  return (
    <div style={{ padding: 32}}>
     <Content onIncrease2={handleCount2}/>
     <h1>{count2 }</h1>
     
    </div>
  )
}

export default App;
