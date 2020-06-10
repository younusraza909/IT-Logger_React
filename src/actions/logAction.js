import {
  GET_LOGS,
  SET_LAODING,
  LOGS_ERROR,
  ADD_LOGS,
  DELETE_LOGS,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOGS,
} from "./types";

// if we eant to dispatch some thing from action in async manner we can use thunk like in these scenario

//Method 1
// export const getLogs = () => {
//   // Redux thunk allow us to return function directly
//   return async (dispatch) => {
//     setLoading();

//     const res = await fetch("/logs");
//     const data = await res.json();

//     dispatch({
//       type: GET_LOGS,
//       payload: data,
//     });
//   };
// };

//Method 2
export const getLogs = () => async (dispatch) => {
  // Redux thunk allow us to return function directly
  try {
    setLoading();

    const res = await fetch("/logs");
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

//Add Logs
export const addLogs = (log) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("/logs", {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    dispatch({
      type: ADD_LOGS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

//Delete Logs
export const deleteLogs = (id) => async (dispatch) => {
  try {
    setLoading();
    await fetch(`/logs/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_LOGS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

//setcurrent Log
export const setCurrent = (currentLog) => {
  return {
    type: SET_CURRENT,
    payload: currentLog,
  };
};

//clear Current Log

export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

//Update Logs
export const updateLogs = (log) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`/logs/${log.id}`, {
      method: "PUT",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    dispatch({
      type: UPDATE_LOGS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

//set loading true
export const setLoading = () => {
  return {
    type: SET_LAODING,
  };
};
