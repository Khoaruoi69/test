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
const initState = {
  job: "",
  jobs: [],
};
// 2. Action
const SET_ACTION = "set_job";
const ADD_ACTION = "add_job";
const DELETE_ACTION = "delete_job";

const setjob = (payload) => {
  return {
    type: SET_ACTION,
    payload,
  };
};
const addjob = (payload) => {
  return {
    type: ADD_ACTION,
    payload,
  };
};
const deletejob = (payload) => {
  return {
    type: DELETE_ACTION,
    payload,
  };
};
// 3. reducer
const reducer = (state, action) => {
  console.log("Action", action);
  console.log("Prev state", state);

  let  newState 
  switch (action.type) {
    case SET_ACTION:
      newState ={
        ...state,
        job: action.payload
      }
      break;
      case ADD_ACTION:
        newState ={
          ...state, // bảo lưu state cái cũ
          jobs: [...state.jobs, action.payload]
                // bảo lưu cũ , thêm cái mới 
        }
        break;

        case DELETE_ACTION:

          const newjobs = [...state.jobs]
          newjobs.splice(action.payload, 1)

          newState ={
            ...state, // bảo lưu state cái cũ
            jobs: newjobs
          }
          break;
    default:
      throw new Error("Invalid action type: " + action.type);
  }

  console.log("New state", newState);
  return newState;
};

function Content() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;

  const inputRef = useRef()
  const handleSubmit = () => {
    dispatch(addjob(job));
    dispatch(setjob(''));
    inputRef.current.focus();
  };

  return (
    <div style={{ padding: "10px 32px" }}>
      <input
        ref = {inputRef}
        value={job}
        placeholder="Enter todo ...."
        onChange={(e) => dispatch(setjob(e.target.value))}
      />
      <button onClick={handleSubmit}> Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job} 
          <span onClick={()=>dispatch(deletejob(index))}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default memo(Content);
