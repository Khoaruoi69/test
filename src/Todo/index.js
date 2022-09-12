import { prettyDOM } from "@testing-library/react";
import {
  useEffect,
  useInsertionEffect,
  useState,
  useRef,
  memo,
  useMemo,
  useReducer,
} from "react";

import  reducer,{initState} from "./reducer"
import  {setjob,addjob,deletejob}from "./action"
import logger from "./logger";
/**
 * useSate()
 * 1. initState
 * 2. Action: up (state + 1)/ down (state -1 )
 *
 *
 * useReducer()
 * 1. initState
 * 2. Action: up (state + 1)/ down (state -1 )
 * 3. Reducer:
 * 4. dispatch
 */
// 1. InitState

// 2. Action



// 3. reducer

function Content() {
  const [state, dispatch] = useReducer(logger(reducer), initState);
  const { job, jobs } = state;

  const inputRef = useRef();
  const handleSubmit = () => {
    dispatch(addjob(job));
    dispatch(setjob(""));
    inputRef.current.focus();
  };

  return (
    <div style={{ padding: "10px 32px" }}>
      <input
        ref={inputRef}
        value={job}
        placeholder="Enter todo ...."
        onChange={(e) => dispatch(setjob(e.target.value))}
      />
      <button onClick={handleSubmit}> Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span onClick={() => dispatch(deletejob(index))}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default memo(Content);
