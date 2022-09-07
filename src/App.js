import React, {useState} from 'react';



function App() {
  const[name, setName]=useState('')
  const[email,setEmail]=useState('')


  const handleSubmit =()=>{
    //call api
    console.log({name,email});
  }


  return (
    <div style={{padding: '10px'}}>
    <input 
    value={name} // nhận giá trị nhập vô khi nhấn button submit
    onChange={e=> setName(e.target.value)}
    />
    <input 
    value={email}
    onChange={e=>setEmail(e.target.value)} 
    />
    <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
