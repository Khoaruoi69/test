import { render } from "@testing-library/react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import {SET_ACTION,ADD_ACTION,DELETE_ACTION} from "./constants"


// 1. InitState
export const initState = {
    job: "",
    jobs: [],
  };

// reducer
const reducer = (state, action) => {
   
    switch (action.type) {
      case SET_ACTION:
        return {
          ...state,
          job: action.payload,
        };
        
      case ADD_ACTION:
        return {
          ...state, // bảo lưu state cái cũ
          jobs: [...state.jobs, action.payload],
          // bảo lưu cũ , thêm cái mới
        };
        
  
      case DELETE_ACTION:
        const newjobs = [...state.jobs];
        newjobs.splice(action.payload, 1);
  
        return {
          ...state, // bảo lưu state cái cũ
          jobs: newjobs,
        };
      
      default:
        throw new Error("Invalid action type: " + action.type);
    }
  };

  export default reducer;
  