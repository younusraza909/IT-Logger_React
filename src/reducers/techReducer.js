import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LAODING,
  TECHS_ERROR,
} from "../actions/types";

const InitialState = {
  techs: null,
  loading: false,
  error: null,
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case SET_LAODING:
      return {
        ...state,
        loading: true,
      };
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
      };
    default:
      return state;
  }
};
