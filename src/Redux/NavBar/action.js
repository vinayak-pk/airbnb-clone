import {
  GET_REQUEST,
  GET_SUCCESS,
  GET_FAILURE,
  ADD_INPUT,
  REMOVE_INPUT,
} from "./actionTypes";

export const get_request = () => {
  return {
    type: GET_REQUEST,
  };
};

export const get_success = (payload) => {
  return {
    type: GET_SUCCESS,
    payload,
  };
};

export const get_failure = () => {
  return {
    type: GET_FAILURE,
  };
};

export const add_input = (payload) => {
  return {
    type: ADD_INPUT,
    payload,
  };
};

export const remove_input = () => {
  return {
    type: REMOVE_INPUT,
  };
};
