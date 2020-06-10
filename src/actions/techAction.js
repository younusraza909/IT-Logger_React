import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  TECHS_ERROR,
  SET_LAODING,
} from "./types";

//get techs from server
export const getTechs = () => async (dispatch) => {
  try {
    const res = await fetch("./techs");
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText,
    });
  }
};

//set loading true
export const setLoading = () => {
  return {
    type: SET_LAODING,
  };
};
