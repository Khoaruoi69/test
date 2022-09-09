import { useEffect, useInsertionEffect, useState, useRef } from "react";

function Content() {


  const [count, setCount] = useState(120);

  const timerId = useRef(); // giữ giá trị sau mỗi lần thay đổi

  // thằng prevCount luôn in ra giá trị cũ của thằng timerId vì DOM gọi rồi mới gọi callback 
  const prevTimerId = useRef();
  useEffect(() =>{
    prevTimerId.current = count;
  },[count])

  const handleStart = () => {
    // xét trên DOM 1s chạy 1 lần
    timerId.current = setInterval(() => {
      setCount((preCount) => preCount - 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timerId.current);
  };

  console.log(count, prevTimerId.current);
  

  return (
    <div>
      
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
export default Content;
