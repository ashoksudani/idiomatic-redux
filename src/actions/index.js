import * as actnTypes from 'constants/actions';
import { normalize } from 'normalizr';

import * as api from 'api';
import { getIsFetching } from 'reducers';
import * as schema from './schema';

const requestTodos = filter => {
  return {
    type: actnTypes.ACTN_FETCH_TODOS_REQUEST,
    filter
  };
};

const fetchTodosSuccess = (filter, response) => {
  return {
    type: actnTypes.ACTN_FETCH_TODOS_SUCCESS,
    filter,
    response
  };
};

const fetchTodosFailure = (filter, error) => {
  return {
    type: actnTypes.ACTN_FETCH_TODOS_FAILURE,
    filter,
    message: error.messsage || 'Something went wrong'
  };
};
export const fetchTodos = filter => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch(requestTodos(filter));

  return api.fetchTodos(filter).then(
    response => {
      dispatch(fetchTodosSuccess(filter, normalize(response, schema.todos)));
    },
    error => dispatch(fetchTodosFailure(filter, error))
  );
};

export const addTodo = text => dispatch => {
  return api.addTodo(text).then(response => {
    dispatch({
      type: actnTypes.ACTN_ADD_TODO_SUCCESS,
      response: normalize(response, schema.todo)
    });
  });
};

export const togggleTodo = id => {
  return {
    type: actnTypes.ACTN_TOGGLE_TODO,
    id
  };
};

// export const setVisibilityFilter = filter => {
//   return {
//     type: actnTypes.ACTN_SET_VISIBILITY_FILTER,
//     filter
//   };
// };
