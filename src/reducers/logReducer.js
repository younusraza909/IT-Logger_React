import {
  GET_LOGS,
  SET_LAODING,
  LOGS_ERROR,
  ADD_LOGS,
  DELETE_LOGS,
} from "../actions/types";

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LAODING:
      return {
        ...state,
        loading: true,
      };
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };
    case ADD_LOGS:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false,
      };
    case LOGS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_LOGS:
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== action.payload),
      };

    default:
      return state;
  }
};
