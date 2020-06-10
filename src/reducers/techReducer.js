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
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false,
      };
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
      };
    case TECHS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
