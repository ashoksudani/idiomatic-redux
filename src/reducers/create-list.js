import { combineReducers } from 'redux';
import * as ACTIONS from '../constants/actions';

const createList = filter => {
  const ids = (state = [], action) => {
    if (action.filter !== filter) {
      return state;
    }
    switch (action.type) {
      case ACTIONS.ACTN_FETCH_TODOS_SUCCESS:
        return action.response.map(todo => todo.id);
      default:
        return state;
    }
  };

  const isFetching = (state = false, action) => {
    if (action.filter !== filter) {
      return state;
    }
    switch (action.type) {
      case ACTIONS.ACTN_FETCH_TODOS_REQUEST:
        return true;
      case ACTIONS.ACTN_FETCH_TODOS_SUCCESS:
      case ACTIONS.ACTN_FETCH_TODOS_FAILURE:
        return false;
      default:
        return state;
    }
  };

  const errorMessage = (state = null, action) => {
    if (action.filter !== filter) {
      return state;
    }
    switch (action.type) {
      case ACTIONS.ACTN_FETCH_TODOS_REQUEST:
      case ACTIONS.ACTN_FETCH_TODOS_SUCCESS:
        return null;
      case ACTIONS.ACTN_FETCH_TODOS_FAILURE:
        return action.message;
      default:
        return state;
    }
  };

  return combineReducers({
    ids,
    isFetching,
    errorMessage
  });
};

export default createList;
export const getIds = state => state.ids;
export const getIsFetching = state => state.isFetching;
export const getErrorMessage = state => state.errorMessage;
