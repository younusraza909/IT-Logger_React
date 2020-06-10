import { GET_LOGS, SET_LAODING, LOGS_ERROR } from "./types";

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

//set loading true
export const setLoading = () => {
  return {
    type: SET_LAODING,
  };
};
