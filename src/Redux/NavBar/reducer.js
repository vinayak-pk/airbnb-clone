import {
  GET_REQUEST,
  GET_SUCCESS,
  GET_FAILURE,
  ADD_INPUT,
  REMOVE_INPUT,
} from "./actionTypes";

const initState = {
  location: "",
  customerDate: "",
  guests: 0,
  data: [],
  error: false,
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_REQUEST:
      return {
        ...state,
      };

    case GET_SUCCESS:
      return {
        ...state,
        ...payload,
      };
    case GET_FAILURE:
      return {
        ...state,
        error: true,
      };
    case ADD_INPUT:
      return {
        ...state,
        ...payload,
      };
    case REMOVE_INPUT:
      return {
        ...state,
      };

    default:
      return state;
  }
};
