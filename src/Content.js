import { useEffect, useInsertionEffect, useState, useRef, memo } from "react";
// memo chỉ chạy khi có một thằng components thay đổi, nếu ko có thay đổi gì thì nó giữ nguyên ko thay đổi
/**
 * 1. memo() - > higher Order  Components(HOC)
 * 2. useCallback()
 * 
 * // Hooks
 * Hoc
 * Render props
 * @returns 
 */

function Content({count, onIncrease2}) {

  console.log("re-render");

  return (
    <div>
    <h1>heloo o o oosd </h1>
     <button onClick={ onIncrease2}>Click me 2!</button>
    </div>
  );
}
export default memo(Content);
