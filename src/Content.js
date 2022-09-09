import { useEffect, useInsertionEffect, useState } from "react";

// Events : add/ remove events listener

// observer pattern: Subscribe/ Unsubscribe
// Closure
// timers: setInterval, setTimeout, clearInterval, clearTimeout
//useSate
//Mounted/ Unmounted

// ===

// call API

/**
 1. Update DOM
 2. Call API
 3. Listen DOM events 
 - Scroll
 - Resize
 4. Cleanup
 - Remove listener/ Unsubscribe
  - Clear timer
 */

//1. useEffect(callback)
// -- Gọi callback mỗi khi componet re-render
// -- Gọi callback sau khi componet mounted

//2. useEffect(callback,[])
//--- chỉ gọi callback  1 lần sau khia componet mounted
//3. useEffect(callback,[deps])
//- callback sẽ đc gọi lại mỗi khi deps thay đổi

// 1. Callback luôn được gọi sau khi componet mounted
// 2. clearn function luôn đc gọi trước khi unmounted component



function Content() {
  
    const [countdown, setCountdown] = useState(120);

    useEffect(() =>{
        const timerId = setInterval(()=>{
            setCountdown(prev=>prev -1)
            console.log('Countdown...')
          }, 1000)
          // clearn up dọn dẹp tranhs rò rỉ bộ nhớ
          return () => clearInterval(timerId)
    },[])
  return (


    <div>
        <h1>{countdown}</h1>
    </div>
  );
}
export default Content;
