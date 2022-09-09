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

const lesson = [
  { id: 1, name: "Khóa học F8" },
  { id: 2, name: "Khóa học onlneissss" },
  { id: 3, name: "Learn Enghlish in USA" },
];
function Content() {
  const [lessonId, setLessonId] = useState();
 
  const handleComment = ({ detail }) => {
    console.log(detail);
  };

  useEffect(() => {
    // dùng để listener function bên componet khác
    window.addEventListener(`lesson-${lessonId}`, handleComment);
    // dùng để xóa.... khỏi bị rò rỉ bộ nhớ
  return()=>{
    window.removeEventListener(`lesson-${lessonId}`, handleComment);
  }
  },[lessonId]);

  

  return (
    <div>
      <ul>
        {lesson.map((lesson) => (
          <li
            key={lesson.id}
            style={{ color: lessonId == lesson.id ? "red" : "#333" }}
            onClick={() => setLessonId(lesson.id)}
          >
            {lesson.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Content;
