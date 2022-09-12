import {SET_ACTION,ADD_ACTION,DELETE_ACTION} from "./constants"
export const setjob = (payload) => {
    return {
      type: SET_ACTION,
      payload,
    };
  };
  export const addjob = (payload) => {
    return {
      type: ADD_ACTION,
      payload,
    };
  };
  export const deletejob = (payload) => {
    return {
      type: DELETE_ACTION,
      payload,
    };
  };