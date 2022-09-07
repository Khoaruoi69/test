import React, {useState} from 'react';


const Gifts =[ 
  'CPU 9',
  'Ram 32 Gb',
  'RGB keyboard'
]
function App() {
  const [gift, setGift] =useState()

 const randomGift =()=>{
  const index = Math.floor(Math.random()*Gifts.length);
  setGift(Gifts[index]);
 }

  return (
    <div style={{padding: '10px'}}>
      <h1>{gift||"Bấm nhận thưởng nào"}</h1>
      <button onClick={randomGift}> Nhận thưởng</button>
    </div>
  );
}

export default App;
