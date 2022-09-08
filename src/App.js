import React, { useState } from "react";

const course = [
  { id: 1, name: "khoha " },
  { id: 2, name: "CSSS" },
  { id: 3, name: "HTML " },
];

function App() {
  // tạo một list khi check
  const [check, setCheck] = useState([]);

  const handleCheck = (id) => {
    setCheck((prev) => {
      const ischeck = check.includes(id);
      if (ischeck) {
        //unchecked
        return check.filter((item) => item !== id); // filter dùng để loại bỏ cái id
      } else {
        return [...prev, id];
      }
    });
  };

  const handleSubmit = () => {
    //call api
    console.log({ id: check });
  };

  return (
    <div style={{ padding: "10px" }}>
      {course.map((c) => (
        <div key={c.id}>
          <input
            type="checkbox"
            checked={check.includes(c.id)} // đưa id vào mảng
            onChange={() => handleCheck(c.id)}
          />
          {c.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
