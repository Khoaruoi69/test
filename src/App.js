import React, { useState } from "react";
import Content from "./Content";


function App() {
  const [count, setCount] = useState(10)
  const [count2, setCount2]= useState(10)
  const handleCount=()=>{
    setCount(pre=>pre+1);
  }
  const handleCount2=()=>{
    setCount2(pre=>pre+1);
  }
  return (
    <div style={{ padding: 32}}>
     <Content count ={count}/>
     <h1>{count }</h1>
     <h1>{count2 }</h1>
     <button onClick={handleCount}>Click me!</button>
     <button onClick={handleCount2}>Click me 2!</button>
    </div>
  )
}

export default App;
