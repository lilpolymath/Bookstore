import { useReducer } from 'react';
import * as actionTypes from '../actions/actions';
import * as requestTypes from '../actions/requestTypes';
import axios from 'axios';
// custom hook to handle the data fetching request lifecycle for put, post and delete requests
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.loading:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.success:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: null,
      };
    case actionTypes.error:
      return {
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
const useMutation = (path, type) => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });
  const requestHandler = () => {
    dispatch({
      type: actionTypes.loading,
    });
    if (type === requestTypes.POST) {
      axios.post(path).then(resp => {
        dispatch({
          type: actionTypes.success,
          data: resp.data,
        }).catch(error => {
          dispatch({
            type: actionTypes.error,
            error: error.message,
          });
        });
      });
    }
    if (type === requestTypes.PUT) {
      axios.post(path).then(resp => {
        dispatch({
          type: actionTypes.success,
          data: resp.data,
        }).catch(error => {
          dispatch({
            type: actionTypes.error,
            error: error.message,
          });
        });
      });
    }
    if (type === requestTypes.DELETE) {
      axios.post(path).then(resp => {
        dispatch({
          type: actionTypes.success,
          data: resp.data,
        }).catch(error => {
          dispatch({
            type: actionTypes.error,
            error: error.message,
          });
        });
      });
    }
  };
  return {
    data: state.data,
    loading: state.loading,
    error: state.error,
    handleRequest: requestHandler,
  };
};
export default useMutation;