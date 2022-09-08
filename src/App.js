import React, { useState } from "react";



function App() {
// chuyển local storage ra mảng để map 
const storageJobs = JSON.parse(localStorage.getItem('jobs')); // viết vầy thì bị lặp lại nên viết lại ....

console.log(storageJobs);

// tạo job 
  const [job, setJob]=useState('')
// list job  
 // const [jobs,setJobs]=useState(storageJobs?? []) // dùng toán tử nulllist để nếu storageJobs null thì mapp vẫn đọc đc
// ... viết lại ở đây 

const [jobs,setJobs]= useState(()=>{
  const storageJobs= JSON.parse(localStorage.getItem('jobs'));
  console.log(storageJobs);
  return storageJobs;
})
console.log(job);

const handleSubmit=()=>{
 // setJobs(prev=>[...prev,job])

 // giờ muốn lưu vào local storage

 setJobs(prev=>{

  const newJobs= [...prev,job];
  // save local storage
  const jsonJobs= JSON.stringify(newJobs); // chyển qua json để lưu vào local storage
  localStorage.setItem('jobs',jsonJobs );

  return newJobs;


 })
  setJob('') // trả về null 
}
  return (
    <div style={{ padding: 32}}>
      <input
       value={job} 
       onChange={e=> setJob(e.target.value)}
      />
      <button onClick={handleSubmit}> Add</button>

      <ul>
        {jobs.map((job,index)=>(
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;
