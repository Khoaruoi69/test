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
// 3. Clearn up luôn được gọi trước khi callback được gọi ( trừ lần đầu)

function Content() {
  const [avart, setAvatar] = useState();

  useEffect(() =>{
    // clearr upp 
    return ()=>{
       avart && URL.revokeObjectURL(avart.preview)
    }
  },[avart])
  const handlePreviewAvatar = (e) => {
     const file = e.target.files[0]

    file.preview = URL.createObjectURL(file);

    setAvatar(file);
    console.log(file);
    
  };

  return (
    <div>
      <input
        type="file"
        //mutiple : cho phép chọn nhiều ảnh
        onChange={handlePreviewAvatar}
      />
      {avart && <img src={avart.preview} alt="" width="10%" />}
    </div>
  );
}
export default Content;
