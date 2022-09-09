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

function Content({count}) {

  console.log("re-render");

  return (
    <div>
    <h1>heloo o o oosd {count}</h1>
      
    </div>
  );
}
export default memo(Content);
