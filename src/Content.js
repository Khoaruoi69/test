import { useEffect, useState } from "react";

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

const tabs = ["posts", "comments", "albums"];

function Content() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);

  const [type, setType] = useState("posts");

  const [showGoToTop, setShowGoToTop] = useState(false);

  //vết trong useEffect để khỏi gọi API lặp lại nhiều a=lần
  useEffect(() => {
    document.title = title;
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
        console.log(window.scrollY);
      if (window.scrollY >= 200) {
        //show
        setShowGoToTop(true);
      } else {
        //hide
        setShowGoToTop(false);
        //   setShowGoToTop(window.scrollY>=200); // tương đương code if else bên trên
      }
    }


    window.addEventListener("scroll", handleScroll);

    // clearn function : tránh rò rĩ bộ nhớ
    return()=>{
        window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  console.log(type);
  return (
    <div>
      <input
        value={title}
        style={
          type === tabs ? { color: "white", backgroundColor: "black" } : {}
        }
        onChange={(e) => setTitle(e.target.value)}
      />
      {tabs.map((tab) => (
        <button key={tab} onClick={() => setType(tab)}>
          {tab}{" "}
        </button>
      ))}
      <ul>
        {posts.map((posts) => (
          <li key={posts.id}> {posts.title || posts.name}</li>
        ))}

        {showGoToTop && (
          <button style={{ position: "fixed", right: 20, bottom: 20 }}>
            Go to top
          </button>
        )}
      </ul>
    </div>
  );
}
export default Content;
